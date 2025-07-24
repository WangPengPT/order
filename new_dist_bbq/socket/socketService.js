const db = require('../filedb.js');
const { appState } = require('../state.js');
const orderService = require('../services/orderService.js')
const tableService = require('../services/tableService.js');
const appStateService = require("../services/appStateService.js")
const menuService = require("../services/menuService.js")
const { print_order } = require('../utils/printOrder.js');
const { printers } = require('../utils/printOrder.js');
const { logger, formatOrderLog } = require('../utils/logger.js')
const userService = require("../services/userService.js");
const { TableSocket } = require('./tableSocket.js')
const { OrderSocket } = require('./orderSocket.js')
const { WebPageDesignSocket } = require('./webPageDesignSocket.js')

function emit(...datas) {
  appState.socket_io.emit(...datas);
}

function saveOrderMenuTab(data) {
  menuService.saveOrderMenuTab(data);
}

function emitFandaysStatus() {
  appState.socket_io.emit("manager_fandays", appStateService.getFanDays())
  appState.socket_io.emit("client_fandays", appStateService.getFanDays())
}

function sendMsg2TableClient(io,table){
  const chanel = 'client_table' + table.data.id
  io.emit(chanel, table)
}

function init(io) {
  appState.socket_io = io;

  io.on("connection", (socket) => {
    logger.info(`客户端连接: ${socket.id}`)

    process.env.QR_ADDR = process.env.QR_ADDR || `http://localhost:5173?table=`;

    io.emit("env", {
      QR_ADDR: process.env.QR_ADDR,
      ENABLE_ROAST_DUCK: process.env.ENABLE_ROAST_DUCK,
    });

    const tableSocket = new TableSocket(io)
    tableSocket.registerHandlers(socket)

    const orderSocket = new OrderSocket(io)
    orderSocket.registerHandlers(socket)

    const webPageDesignSocket = new WebPageDesignSocket(io)
    webPageDesignSocket.registerHandlers(socket)
    // 餐桌密码验证
    //tableService.tableLogin(socket)

    // 客户端获取总消费 // add signal
    socket.on("client_tableTotalAmount", (tableId, cb) => {
      //logger.info(`管理端亲求桌号 ${tableId} 总消费`)
      const result = appStateService.getTableTotalAmout(tableId)
      cb(result)
    })

    socket.emit("clent_send_hasDuck", appState.hasDuck)

    // 管理端更新今日红日
    socket.on("manager_set_fanDays", (value, cb) => {
      logger.info(`管理端设置粉丝日: ${value}`)
      const result = appStateService.setFanDays(value)
      if (result.success) {
        logger.info(`管理端设置粉丝日成功: ${value}`)
        socket.emit("client_fandays", appStateService.getFanDays())
      } else {
        logger.info(`管理端设置粉丝日失败: ${value}`)
        logger.info(`失败原因: ${result.data}`)
      }
      cb(result)
    })
    // 发送管理端获取今日红日
    emitFandaysStatus()

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
      sendMsg2TableClient(io,tableService.getTableById(tableId))

      cb(result)
    })

    socket.on("manager_get_menu", (value, bc) => {
      const menus = appStateService.getMenuAndTab()
      bc(menus)
    })

    socket.emit("manager_send_hasDuck", appState.hasDuck)

    socket.on("manager_update_hasDuck", (value, callback) => {
      logger.info(`管理端更新鸭子状态-${value}`)
      const result = appStateService.updadeHasDuck(value)
      if (result.success) {
        logger.info(`管理端更新鸭子成功`)
        socket.emit("clent_send_hasDuck", appState.hasDuck)
      } else {
        logger.info(`管理端更新鸭子失败`)
        logger.info(`失败原因: ${result.data}`)
      }
      callback(result)
    })

    // 管理端更改密码
    tableService.updateTablePassword(socket)

    // 管理端刷新密码
    tableService.refreshTablePassword(socket)

    // 管理端更新价格
    socket.on("update_people_price", (value, cb) => {
      logger.info(`管理端更改价格, 中午价格-${value.lunchPrice}; 晚上价格-${value.dinnerPrice}`)
      const res = appStateService.updatePrice(value.lunchPrice, value.dinnerPrice)
      if (res.success) {
        logger.info(`管理端更改价格成功`)
      } else {
        logger.info(`管理端更改价格失败`)
        logger.info(`失败原因: ${result.data}`)
      }
      cb(res)
    })

    // 管理端更新桌子
    socket.on("manager_refresh_table", (value, cb) => {
      //logger.info(`管理端获取桌子信息`)
      const tables = appStateService.getAllTables()
      cb(tables)
    })

    // 发送菜单数据给用户端和管理端
    socket.emit("menu_data", appState.menu, appState.orderMenuTab);

    // 处理订单提交
    socket.on("submit_order", (orderData) => {
      logger.info(`订单提交`)
      const order = orderService.addOrder(orderData)
      if (order.success) {
        logger.info(`订单提交成功 订单号 - ${order.data.id}`)
        logger.info(formatOrderLog(orderData))

        print_order(order.data);

        //logger.info(`发送给客户端服务端订单桌子信息`)

        io.emit("new_order", order.data);
        socket.emit("📢 已广播新订单:", order.data);

        // 返回确认给用户端
        socket.emit("order_confirmed", order.data.id);

        // 更新管理端的桌子信息
        io.emit("send_tables", appState.tables.toJSON())

        // 给客户端发送桌子信息
        const table = tableService.getTableById(order.data.table)
        if (table.success) {
          // io.emit('client_table', table)
          sendMsg2TableClient(io, table)
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
      sendMsg2TableClient(io,result)
      socket.emit("table_id", value);
    });

    socket.on('manager_login', async (value, callback) => {
      logger.info("用户登录")
      const result = await userService.login(value.phoneNumber, value.password)
      if (result.success && result.data) {
        logger.info("用户登录成功")
      } else {
        logger.info("用户登录失败")
        if (!result.data) {
          logger.info(`失败原因: 密码错误`)
        } else {
          logger.info(`失败原因: ${result.data}`)
        }
      }
      callback(result)
    })

    socket.on("manager_createNewUser", async (value, callback) => {
      logger.info("创建新的用户")
      const result = await userService.register(value.phoneNumber, value.password)
      if (result.success) {
        logger.info(`用户创建成功 ${result.data}`)
      } else {
        logger.info("用户创建失败")
        logger.info(`失败原因: ${result.data}`)
      }
      callback(result)
    })

    socket.on('admin', (value, callback) => {
      const user = db.loadDataForce('admin', { password: "1015" });
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

    // printer
    socket.on('add_printer', (value) => {
      const id = socket.id;
      value = JSON.parse(value);
      value.id = id;
      printers[id] = { socket: socket, data: value }
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

      saveOrderMenuTab(data);
    });

    socket.on("disconnect", (reason) => {
      logger.info(`连接取消: ${reason}`)
    });

    socket.on("update_menu_item", (item) => {
      let found = false;

      let id = item.id;
      if (item.org_id) id = item.org_id;

      for (let i = 0; i < appState.menu.length; i++) {
        if (appState.menu[i].id == id)
        {
          appState.menu[i] = {...appState.menu[i], ...item};
          logger.debug(appState.menu[i]);
          io.emit("menu_item_changed", item);
          found = true;
          break;
        }
      }

      if (!found)
      {
        appState.menu.push(item);
        io.emit("menu_item_changed", item);
      }

      if (item.tags)
      {
        appState.dishTags[id] = item.tags;
      }
    });


    socket.on("client_cmd", (id,cmd) => {
      tableService.clientCmd(id,cmd);
      io.emit("client_cmd", id, cmd);
    });

    socket.on("click_msg", (id,cmd) => {
      tableService.clickMsg(id,cmd);
    });



  });


}

module.exports = {
  init,
  emit,
  emitFandaysStatus,
};
