const db = require('../filedb.js');
const { appState } = require('../state.js');
const orderService = require('../services/orderService.js')
const tableService = require('../services/tableService.js');
const menuService = require("../services/menuService.js")
const { print_order } = require('../utils/printOrder.js');
const { printers } = require('../utils/printOrder.js');
const { logger, formatOrderLog } = require('../utils/logger.js')
const { TableSocket } = require('./tableSocket.js')
const { OrderSocket } = require('./orderSocket.js')
const { WebPageDesignSocket } = require('./webPageDesignSocket.js');
const { AppStateSocket } = require('./AppStateSocket.js');
const { UserSocket } = require('./userSocket.js');

class SocketServices {
  constructor(io ,
    appStateSocket = new AppStateSocket(io),
    orderSocket = new OrderSocket(io),
    tableSocket = new TableSocket(io),
    webPageDesignSocket = new WebPageDesignSocket(io),
    userSocket = new UserSocket(io)
  ) {

    this.io = io
    this.appStateSocket = appStateSocket
    this.orderSocket = orderSocket
    this.tableSocket = tableSocket
    this.webPageDesignSocket = webPageDesignSocket
    this.userSocket = userSocket
  }

  emit(...datas) {
    appState.socket_io.emit(...datas);
  }

  saveOrderMenuTab(data) {
    menuService.saveOrderMenuTab(data);
  }

  sendMsg2TableClient(io, table) {
    const chanel = 'client_table' + table.data.id
    io.emit(chanel, table)
  }

  sendSpecialDishDate(io, specialDishDate) {
    io.emit("specialDish_data", specialDishDate);
  }

  async close() {
    await this.appStateSocket.appStateService.saveAppState()
    await this.userSocket.userService.saveUserData()
  }

  async initializeDatas() {
    await this.appStateSocket.appStateService.loadAppState()
    await this.userSocket.userService.InitOrLoadUserData()
  }

  // emitHasBoxStatus() {
  //   this.appStateSocket.emitHasBoxStatus()
  // }

  initSocket() {
    this.appStateSocket.appStateService.appStateRepository.appState.socket_io = this.io

    this.io.on("connection", (socket) => {

      const ip = socket.handshake.address;

      logger.info(`客户端连接: ${socket.id}`);
      logger.info(`来源 IP: ${ip}`)

      process.env.QR_ADDR = process.env.QR_ADDR || `http://localhost:5173?table=`;

      let ENABLE_ROAST_DUCK = false

      if (process.env.ENABLE_ROAST_DUCK == undefined) {
        ENABLE_ROAST_DUCK = true;
      }

      if (process.env.ENABLE_ROAST_DUCK == "true") {
        ENABLE_ROAST_DUCK = true;
      }

      this.io.emit("env", {
        QR_ADDR: process.env.QR_ADDR,
        ENABLE_ROAST_DUCK: ENABLE_ROAST_DUCK,
        TEST_ENVIRONMENT: process.env.TEST_ENVIRONMENT
      });


      this.tableSocket.registerHandlers(socket)

      this.orderSocket.registerHandlers(socket)

      this.webPageDesignSocket.registerHandlers(socket)

      this.appStateSocket.registerHandlers(socket)

      this.userSocket.registerHandlers(socket)

      // 餐桌密码验证
      //tableService.tableLogin(socket)

      // 客户端获取总消费 // add signal
      socket.on("client_tableTotalAmount", (tableId, cb) => {
        //logger.info(`管理端亲求桌号 ${tableId} 总消费`)
        const result = this.appStateSocket.appStateService.getTableTotalAmout(tableId)
        cb(result)
      })

      socket.emit("clent_send_hasBibimbap", appState.hasBibimbap)
      socket.emit("clent_send_hasBox", appState.hasBox)

      socket.on("manager_delete_order", ({ order: ordername, tableId: tableId }, cb) => {
        logger.info(`管理端请求删除盲盒, 桌号-${tableId}`)
        const result = orderService.deleteSushiBoxInTable(ordername, tableId)
        if (result.success) {
          logger.info(`管理端请求删除盲盒成功, 桌号-${tableId}`)
        } else {
          logger.info(`管理端请求删除盲盒失败, 桌号-${tableId}`)
          logger.info(`失败原因: ${result.data}`)
        }
        // 更新客户端桌子信息
        // io.emit('client_table', () => {
        //   //logger.info(`发送给客户端桌子信息, 桌号-${tableId}`)
        //   return tableService.getTableById(tableId)
        // })
        this.sendMsg2TableClient(this.io, tableService.getTableById(tableId))

        cb(result)
      })

    socket.emit("manager_send_hasBibimbap", appState.hasBibimbap)
    socket.emit("manager_send_hasBox", appState.hasBox)
    socket.emit("manager_send_checkIP", appState.checkIP)

    socket.on("manager_update_checkIP", (value, callback) => {
      appState.checkIP = value;
      const result = {
        success: true,
        data: value
      }
      logger.info(`manager_update_checkIP return: ${result}`)
      callback(result)
    })

    // 管理端更改密码
    tableService.updateTablePassword(socket)

      // 管理端刷新密码
      tableService.refreshTablePassword(socket)

      // 发送自定义菜单数据给用户端和管理端
      this.sendSpecialDishDate(this.io, this.appStateSocket.appStateService.appStateRepository.appState.specialDishes)

      // 处理订单提交
      socket.on("submit_order", (orderData) => {

        if (appState.checkIP && (!appState.checkLocalIP(socket))) {
          logger.info(`订单提交失败`)
          logger.info(`失败原因: invalid ip`)
          socket.emit('error', "please connected wifi.")
          return;
        }

        logger.info(`订单提交`)

        const order = orderService.addOrder(orderData)
        if (order.success) {
          const increment = menuService.incrementOrder(orderData)
          if (increment.success) {
            // TODO: log不出来
            logger.info(`销售量添加成功 - ${increment.data}`)
          }

          logger.info(`订单提交成功 订单号 - ${order.data.id}`)
          logger.info(formatOrderLog(orderData))

          // console.log("order.data",order.data)
          print_order(order.data);

          //logger.info(`发送给客户端服务端订单桌子信息`)

          this.io.emit("new_order", order.data);
          logger.info("📢 已广播新订单:", order.data);

          // 返回确认给用户端
          socket.emit("order_confirmed", order.data.id);

          // 更新管理端的桌子信息
          this.io.emit("send_tables", appState.tables.toJSON())

          // 给客户端发送桌子信息
          const table = tableService.getTableById(order.data.table)
          if (table.success) {
            // io.emit('client_table', table)
            this.sendMsg2TableClient(this.io, table)
          }

        } else {
          logger.info(`订单提交失败`)
          logger.info(`失败原因: ${order.data}`)
          socket.emit('error', order.data)
        }

      });

      // 返回table id ，发送桌子信息，目前价格
      socket.on('get_table_id', (value) => {
        const result = tableService.getTableById(value)
        // socket.emit('client_table', result)
        this.sendMsg2TableClient(this.io, result)
        socket.emit("table_id", value);
      });

      socket.on('admin', (value, callback) => {
        const user = db.loadDataForce('admin', { password: "0000" });
        socket.is_admin = false;
        if (user.password == value) {
          orderService.sendOrder(socket)
          socket.is_admin = true;
        }
        callback(socket.is_admin);
      });

      socket.on('disconnect', () => {
        if (printers[socket.id]) printers[socket.id] = undefined;
      })

      socket.on('i_am_mg', () => {
        appState.addLocalIP(socket)
      })

      // printer
      socket.on('add_printer', (value) => {
        const id = socket.id;
        value = JSON.parse(value);
        value.id = id;
        printers[id] = { socket: socket, data: value }

        appState.addLocalIP(socket)
      });

      socket.on('get_printers', (callback) => {
        const ret = [];
        for (const key in printers) {
          const printer = printers[key];
          if (printer) ret.push(printer.data);
        }
        callback(ret)
      });

      socket.on('select_printer', (value) => {
        for (const key in printers) {
          if (key == value.id) {
            const printer = printers[key];
            if (printer) {
              printer.data.curPrinter = value.printer;
              printer.data.menu = value.menu;
              printer.data.every_one = value.every_one;
              printer.data.fontSize = value.fontSize;
              printer.socket.emit('select_printer', value.printer, value.menu.toString(), value.every_one, value.fontSize);
            }
          }
        }
      });

      socket.on('print_test', (key) => {
        const printer = printers[key];
        if (printer) {
          printer.socket.emit('print_test');
        }
      });

      socket.on('updateMenuIndex', data => {

        if (!data) return;
        if (data.length == 0) return;

        this.saveOrderMenuTab(data);
      });

      socket.on("disconnect", (reason) => {
        logger.info(`连接取消: ${reason}`)
      });

      socket.on("update_menu_item", (item) => {
        let found = false;

        let id = item.id;
        if (item.org_id) id = item.org_id;

        for (let i = 0; i < appState.menu.length; i++) {
          if (appState.menu[i].id == id) {
            appState.menu[i] = { ...appState.menu[i], ...item };
            logger.debug(appState.menu[i]);
            this.io.emit("menu_item_changed", item);
            found = true;
            break;
          }
        }

        if (!found) {
          appState.menu.push(item);
          this.io.emit("menu_item_changed", item);
        }

        if (item.tags) {
          appState.dishTags[id] = item.tags;
        }
      });


      socket.on("client_cmd", (id, cmd) => {
        tableService.clientCmd(id, cmd);
        this.io.emit("client_cmd", id, cmd);
      });

      socket.on("click_msg", (id, cmd) => {
        tableService.clickMsg(id, cmd);
      });

      socket.on("rate_dish", (id, like, rate) => {
        const result = menuService.saveDishRating(id, like, rate);
        if (result) {
          this.io.emit("rating_changed", result.data.id, result.data.likes, result.data.rates);
          logger.info(`客服端评分成功, id-${id}`)
        } else {
          logger.info(`客服端评分失败, id-${id}`)
          logger.info(`失败原因: ${result.data}`)
        }
      });

      socket.on("client_updateSpecialDishRate", (value) => {
        logger.info(`客户评价菜品：${value.category} 评价${value.like}`)
        const result = this.appStateSocket.appStateService.updateSpecialDishRates(value)
        if (result.success) {
          this.io.emit("specialDish_data", result.data);
          logger.info("客户评价更改成功")
        } else {
          logger.info("客户评价更改失败：", result.data);
        }
      })

      // 返回 年、月，发送其年月对应的菜单评价数据
      socket.on('manager_get_month_rates', (value, callback) => {
        logger.info(`管理端获取${value.year}年${value.month}月的菜单评价`)
        const result = this.appStateSocket.appStateService.getMonthRatesWithDate(value.year, value.month)
        if (result.success) {
          logger.info("获取菜单评价成功")
        } else {
          logger.info(`获取菜单评价失败，原因：${result.data}`)
        }
        callback(result)
      })

      socket.on('manager_get_order_quantity', async (value, callback) => {
        logger.info(`管理端获取${value.year}年${value.month}月${value.day}日的菜品销售量`)
        const result = await this.appStateSocket.appStateService.getOrderQuantityWithDate(value)
        if (result.success) {
          logger.info("获取菜品销售量成功")
        } else {
          logger.info(`获取菜品销售量失败，原因：${result.data}`)
        }
        callback(result)
      })

    })
  }

}

module.exports = {
  SocketServices
};
