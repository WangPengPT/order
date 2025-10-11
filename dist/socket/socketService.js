const db = require('../filedb.js');
const { appState } = require('../state.js');
const orderService = require('../services/orderService.js')
const tableService = require('../services/tableService.js');
const {MenuService} = require("../services/menuService.js")
const { print_order, print_takeaway_order } = require('../utils/printOrder.js');
const { printers } = require('../utils/printOrder.js');
const { logger, formatOrderLog } = require('../utils/logger.js')
const { TableSocket } = require('./tableSocket.js')
const { OrderSocket } = require('./orderSocket.js')
const { WebPageDesignSocket } = require('./webPageDesignSocket.js');
const { AppStateSocket } = require('./AppStateSocket.js');
const { UserSocket } = require('./userSocket.js');
const { CustomDishSocket } = require('./customDishSocket.js');
const VIPUserManager = require("../services/vipUserManager.js")
const centerSocket = require('./centerSocket.js');
const { DataAnalizeSocket } = require('./dataAnalizeSocket.js');
const DictinarySocket = require('./dictinarySocket.js');

class SocketServices {
  constructor(io ,
    menuService = new MenuService(this.customDish.customDishService.customDishRepository),
    appStateSocket = new AppStateSocket(io),
    orderSocket = new OrderSocket(io),
    tableSocket = new TableSocket(io),
    webPageDesignSocket = new WebPageDesignSocket(io),
    userSocket = new UserSocket(io),
    customDish = new CustomDishSocket(io),
    dataAnalizeSocket = new DataAnalizeSocket(io),
    dictinarySocket = new DictinarySocket(io)
  ) {

    this.io = io
    this.menuService = menuService
    this.appStateSocket = appStateSocket
    this.orderSocket = orderSocket
    this.tableSocket = tableSocket
    this.webPageDesignSocket = webPageDesignSocket
    this.userSocket = userSocket
    this.customDish = customDish
    this.dataAnalizeSocket = dataAnalizeSocket
    this.dictinarySocket = dictinarySocket
  }

  emit(...datas) {
    appState.socket_io.emit(...datas);
  }

  saveOrderMenuTab(data) {
    this.menuService.saveOrderMenuTab(data);
  }

  async saveOrderMenu(data, update_all) {
    await this.menuService.updateMenu(data, update_all);
  }

  sendMsg2TableClient(io, table) {
    const chanel = 'client_table' + table.data.id
    io.emit(chanel, table)
  }

  async close() {
    await this.appStateSocket.appStateService.saveAppState()
    this.menuService.save()
  }

  async initializeDatas() {
    await this.webPageDesignSocket.webPageDesignService.initialize()
    await this.appStateSocket.appStateService.loadAppState()
    await this.userSocket.userService.InitOrLoadUserData()
    await this.customDish.customDishService.initializeCustomDish()
    await this.menuService.loadMenu()
    await this.menuService.initMenuOrdering()
    await this.dictinarySocket.dictinaryService.init()
  }

  initSocket() {
    this.appStateSocket.appStateService.appStateRepository.appState.socket_io = this.io

    process.env.QR_ADDR = process.env.QR_ADDR || `http://localhost:5173?table=`;
    process.env.ADDR =  process.env.ADDR || `http://localhost:5173`;

    
    this.io.on("connection", async (socket) => {

      // printer 别在这前面写异步
      socket.on('add_printer', (value) => {
        const id = socket.id;
        value = JSON.parse(value);
        value.id = id;
        printers[id] = { socket: socket, data: value }

        appState.addLocalIP(socket)
      });

      VIPUserManager.initSocket(socket)

      const ip = socket.handshake.address;

      logger.info(`客户端连接: ${socket.id}`);
      logger.info(`来源 IP: ${ip}`)

      this.tableSocket.registerHandlers(socket)

      this.orderSocket.registerHandlers(socket)

      await this.webPageDesignSocket.registerHandlers(socket)

      await this.appStateSocket.registerHandlers(socket)

      this.userSocket.registerHandlers(socket)

      await this.customDish.registerHandlers(socket)

      this.dataAnalizeSocket.registerHandlers(socket)

      await this.dictinarySocket.registerHandlers(socket)

      socket.on("manager_get_menu", async (_, callback) => {
        const data = {}
        data.menu = await this.menuService.getMenu()
        //data.menuTab = await this.menuService.getMenuOrdering()
        data.dineTab = (await this.menuService.getDineInMenuAndTabs()).tabs
        data.takeTab = (await this.menuService.getTakeawayMenuAndTabs()).tabs
        callback({
          success: true,
          data: data
        })
      })
      
      socket.on("get_takeaway_menu_data",  async () => {


          let menu
         let menuOrdering

          let data = centerSocket.get_menu_data()

          if (data) {
              console.log("get is_takeaway menu data ok!");
              menu = data.menu;
              menuOrdering = data.menuOrdering
          }
          else {
             menu = await this.menuService.getMenu()
             menuOrdering = await this.menuService.getMenuOrdering()
          }
          console.log("send takeaway menu...");
          socket.emit("takeaway_menu_data", menu, menuOrdering );
      });

      // 餐桌密码验证
      //tableService.tableLogin(socket)

      // 客户端获取总消费 // add signal
      socket.on("client_tableTotalAmount", (tableId, cb) => {
        //logger.info(`管理端亲求桌号 ${tableId} 总消费`)
        const result = this.appStateSocket.appStateService.getTableTotalAmout(tableId)
        cb(result)
      })

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

      // 处理订单提交
      socket.on("submit_order", (orderData, callback) => {
        if (appState.settings.checkIP && (!appState.checkLocalIP(socket))) {
          logger.info(`订单提交失败`)
          logger.info(`失败原因: invalid ip`)
          socket.emit('error', "please connected wifi.")
          return;
        }

        logger.info(`订单提交`)

        const order = orderService.addOrder(orderData)
        if (order.success) {

          logger.info(`订单提交成功 订单号 - ${order.data.id}`)
          logger.info(formatOrderLog(orderData))

          print_order(order.data,appState.printModel.order);

          this.io.emit("new_order", order.data);
          logger.info("📢 已广播新订单:", order.data);

          // 返回确认给用户端
          socket.emit("order_confirmed", order.data.id);

          // // 更新管理端的桌子信息
          // this.io.emit("send_tables", appState.tables.toJSON())

          // 给客户端发送桌子信息
          const table = tableService.getTableById(order.data.table)
          if (table.success) {
            this.sendMsg2TableClient(this.io, table)
          }

        } else {
          logger.info(`订单提交失败`)
          logger.info(`失败原因: ${order.data}`)
          socket.emit('error', order.data)
        }
        callback(order)
      });

      // 管理端打印外卖订单
      socket.on("manager_takeaway_order", (orderData) => {
        console.log("takeaway order",orderData)
        print_takeaway_order(orderData, appState.printModel.takeaway);
      })

      // 返回table id ，发送桌子信息，目前价格
      socket.on('get_table_id', (value) => {
        const result = tableService.getTableById(value)
        // socket.emit('client_table', result)
        this.sendMsg2TableClient(this.io, result)
        socket.emit("table_id", value);

        const price = this.appStateSocket.appStateService.getCurrentPrice()
        socket.emit('client_currentPrice', price)
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
              printer.data.print_takeaway = value.print_takeaway;
              printer.data.every_one = value.every_one;
              printer.data.fontSize = value.fontSize;
              printer.socket.emit('select_printer', value.printer, value.menu.toString(), value.every_one, value.fontSize, value.print_takeaway);
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

      socket.on('manager_updateMenuIndex', async (newMenuSorted, type, callback) => {
        logger.info("更新菜品与分类顺序")
        if (!newMenuSorted) return;
        if (newMenuSorted.length == 0) return;

        const result = await this.menuService.updateDineOrTakeMenuSorted(newMenuSorted, type)
        if (result.success) {
          callback(result)
          logger.info("更新菜品与分类顺序成功")
        } else {
          logger.info("更新菜品与分类顺序失败")
        }
      });

      socket.on("disconnect", (reason) => {
        logger.info(`连接取消: ${reason}`)
      });

      //Old update_menu_item
      socket.on("update_menu_item", async (item, id) => {
        logger.info("修改菜品")
        try {

        console.log("item:", item)
          // Update MongoDB
          await this.menuService.updatedMenuById(item, id)

           // Refresh appState.menu from DB
          appState.menu = await this.menuService.getMenu()

          appState.orderMenuTab = (await this.menuService.getMenuOrdering()).map(it => it.name )

          // Update dishTags if present
          if (item.tags) {
            appState.dishTags[id] = item.tags;
          }
          // Broadcast updated item and full menu
          //this.io.emit("menu_item_changed", item);
          //this.io.emit("menu_data", await this.menuService.getMenu(), await this.menuService.getMenuOrdering());
          await this.send_menu(this.io)

          logger.info(`Dish updated and broadcasted: ${item.name || item.handle}`);

          await centerSocket.update_menu_data()
        } catch (err) {
          logger.error("Failed to update dish in MongoDB:", err);
          socket.emit("menu_error", "Failed to update dish");
        }
      });


      socket.on("rate_dish", async (id, like, rate) => {
        const result = await this.menuService.saveDishRating(id, like, rate);
        if (result) {
          this.io.emit("rating_changed", result.data.id, result.data.likes, result.data.rates);
          logger.info(`客服端评分成功, id-${id}`)
        } else {
          logger.info(`客服端评分失败, id-${id}`)
          logger.info(`失败原因: ${result.data}`)
        }
      });

      socket.on("rate_dish_takeaway", async (id, like, rate) => {

        let result = undefined
        if ( centerSocket.get_menu_data() != null )
        {
          result = await centerSocket.saveDishRating(id, like, rate);
        }
        else {
          result = await this.menuService.saveDishRating(id, like, rate);
        }

        if (result) {
          this.io.emit("rating_changed", result.data.id, result.data.likes, result.data.rates);
          logger.info(`客服端评分成功, id-${id}`)
        } else {
          logger.info(`客服端评分失败, id-${id}`)
          logger.info(`失败原因: ${result.data}`)
        }
      });

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

      socket.on('manager_delete_item', async (id, callback) => {
        logger.info(`管理端删除-ID: ${id}`)
        const result = await this.menuService.deleteItem(id)
        if (result.success) {
          //io.emit("menu_data", await this.menuService.getMenuOrdering(), await this.menuService.getMenu())
          logger.info(`管理端删除${result.data}成功`)
        } else {
          logger.info(`管理端删除失败，原因：${result.data}`)
        }
        callback(result)
      })

      socket.on("get_shopify_orders", ()=> {
        centerSocket.get_center_datas(socket,"shopify_orders","order_list")
      })

      socket.on("get_reserves", ()=> {
        centerSocket.get_center_datas(socket,"reserves","reserve_list")
      })

      socket.on("update_reserve_data", (value,callback) => {
        centerSocket.updateReserveData(value,(cb)=>{
          if(cb.success){
            logger.info(`更新订台数据成功, value:${value}`)
            callback(cb)
          }else{
            logger.info(`更新订台数据失败, Error: ${cb.data}`)
            callback(cb)
          }
        })
      })

      await this.send_init_info(socket)

    })
  }

  async send_init_info(socket) {

    let ENABLE_ROAST_DUCK = false

    if (process.env.ENABLE_ROAST_DUCK == undefined) {
      ENABLE_ROAST_DUCK = true;
    }

    if (process.env.ENABLE_ROAST_DUCK == "true") {
      ENABLE_ROAST_DUCK = true;
    }

    socket.emit("env", {
      QR_ADDR: process.env.QR_ADDR,
      ADDR: process.env.ADDR,
      ENABLE_ROAST_DUCK: ENABLE_ROAST_DUCK,
      TEST_ENVIRONMENT: process.env.TEST_ENVIRONMENT,
      pageDir: db.pageDir,
      shopType: appState.shopType,
      restaurant: centerSocket.getRestaurant(),
      location: appState.pickupData.latitudeAndLongitude,
    });

    await this.send_menu(socket)
  }

  async send_menu(s) {
    const menu = await this.menuService.getMenu()
    const menuOrdering = await this.menuService.getMenuOrdering()
    s.emit("menu_data", menu, menuOrdering);

    const m1 = await this.menuService.getDineInMenuAndTabs()
    const m2 = await this.menuService.getTakeawayMenuAndTabs()
    s.emit("manager_menu_data", menu, m1.tabs, m2.tabs)

    let data = centerSocket.get_menu_data()
    if (data) {
      s.emit("takeaway_menu_data", data.menu, data.menuOrdering);
    }
    else {
      const menuAndTabs = await this.menuService.getTakeawayMenuAndTabs()
      
      s.emit("takeaway_menu_data", menuAndTabs.menu, menuAndTabs.tabs);
    }

    const menuAndTabs = await this.menuService.getDineInMenuAndTabs()
    s.emit("dinner_menu_data", menuAndTabs.menu, menuAndTabs.tabs);

  }

}

module.exports = {
  SocketServices
};
