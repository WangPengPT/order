const db = require('../filedb.js');
const { appState } = require('../state.js');
const orderService = require('./orderService.js')
const tableService = require('./tableService.js');
const appStateService = require("../services/appStateService.js")
const menuService = require("./menuService.js")
const { print_order } = require('../utils/printOrder.js');
const { printers } = require('../utils/printOrder.js');
const { logger, formatOrderLog } = require('../utils/logger.js')

function emit(...datas)
{
  appState.socket_io.emit(...datas);
}

function saveOrderMenuTab(data)
{
  menuService.saveOrderMenuTab(data);
}

function init(io) {
  appState.socket_io = io;

  io.on("connection", (socket) => {
    logger.info(`客户端连接: ${socket.id}`)

    // 发送桌子信息所有管理端
    tableService.sendTablesInfo(io)

    io.emit("qr_addr", process.env.QR_ADDR || `http://localhost:${appState.clientPort}?table=`);

    // 餐桌密码验证
    //tableService.tableLogin(socket)

    socket.on("manager_get_order_signal", (id, cb) => {
      //logger.info(`管理端亲求订单信息`)
      const res = orderService.getOrders(id)
      cb(res)
    })

    // 客户端获取总消费 // add signal
    socket.on("client_tableTotalAmount", (tableId, cb) => {
      //logger.info(`管理端亲求桌号 ${tableId} 总消费`)
      const result = appStateService.getTableTotalAmout(tableId)
      cb(result)
    })

    // 管理端更新今日红日
    socket.on("manager_set_festivalDay", (value, cb) => {
      logger.info(`管理端设置红日: ${value}`)
      const result = appStateService.setFestivalDay(value)
      if (result.success) {

        socket.emit('manager_get_currentPrice', appStateService.getCurrentPrice())

        logger.info(`管理端设置红日成功: ${value}`)
      } else {
        logger.info(`管理端设置红日失败: ${value}`)
        logger.info(`失败原因: ${result.data}`)
      }
      cb(result)
    })

    socket.on('manager_get_isFestival', (value, cb) => {
      cb(appStateService.getFestivalDay())
    })

    // 发送管理端获取今日红日
    socket.emit("manager_festival", appStateService.getFestivalDay())

    socket.on("manager_delete_order", ({order: ordername, tableId: tableId}, cb) => {
      logger.info(`管理端请求删除盲盒, 桌号-${tableId}`)
      const result = orderService.deleteSushiBoxInTable(ordername, tableId)
      if (result.success) {
        logger.info(`管理端请求删除盲盒成功, 桌号-${tableId}`)
      } else {
        logger.info(`管理端请求删除盲盒失败, 桌号-${tableId}`)
        logger.info(`失败原因: ${result.data}`)
      }
      // 更新客户端桌子信息
      io.emit('client_table', () => {
        //logger.info(`发送给客户端桌子信息, 桌号-${tableId}`)
        return tableService.getTableById(tableId)
      })

      cb(result)
    })

    socket.on("manager_delete_orders", (value, cb) => {
      logger.info(`管理端请求删除订单, 桌号-${value.tableId}`)
      const result = orderService.deleteOrderAndTableDishes(value.tableId, value.orders)
      if (result.success) {
        logger.info(`管理端请求删除订单成功, 桌号-${value.tableId} 菜品-${value.orders}`)
      } else {
        logger.info(`管理端请求删除订单失败, 桌号-${value.tableId}`)
        logger.info(`失败原因: ${result.data}`)
      }
      // 更新客户端桌子信息
      io.emit('client_table', () => {
        //logger.info(`发送给客户端桌子信息, 桌号-${value.tableId}`)
        return tableService.getTableById(value.tableId)
      })

      cb(result)
    })

    // 发送价格信息
    socket.emit("get_people_price", () => {
      //logger.info(`发送给管理端价格信息`)
      appStateService.getPrice()
    })

    socket.emit('manager_get_currentPrice', appStateService.getCurrentPrice())

    // 管理端亲求获取价格
    socket.on('manager_get_price', (_, cb) => {
      const price = appStateService.getPrice()
      cb(price)
    })

    socket.on('manager_get_currentPrice', ({}, cb) => {
      const currentPrice = appStateService.getCurrentPrice()
      cb(currentPrice)
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
    socket.emit("menu_data", appState.menu,appState.orderMenuTab);

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
          io.emit('client_table', table)
        }
        
      } else {
        logger.info(`订单提交失败`)
        logger.info(`失败原因: ${order.data}`)
        socket.emit('error', order.data)
      }

    }); 

    // 添加桌子
    socket.on('add_table', (tableData, callback) => {
      logger.info(`管理端添加桌子 桌号 - ${tableData.id}`)
      const result = tableService.addNewTable(io, tableData);
      if (result.success) {
        logger.info(`管理端添加桌子成功`)
      } else {
        logger.info(`管理端添加桌子失败`)
        logger.info(`失败原因: ${result.message}`)
      }
      callback(result);
    });

    // 修改桌子
    socket.on('update_table_exceptOrder', (tableData, callback) => {
      logger.info(`管理端修改桌子状态 桌号 - ${tableData.id}; 成人 - ${tableData.peopleType.adults}; 儿童 - ${tableData.peopleType.childres}; 桌子状态 - ${tableData.status}`)
      const result = tableService.updateTableWithoutOrder(tableData)

      if (result.success) {
        logger.info(`管理端修改桌子成功`)
      } else {
        logger.info(`管理端修改桌子失败`)
        logger.info(`失败原因: ${result.data}`)
      }
      callback(result);

      // 给客户端发送桌子信息
      const table = tableService.getTableById(tableData.id)
        if (table.success) {
          io.emit('client_table', table)
        }
    });

    // 删除桌子
    socket.on('remove_table', (id, callback) => {
      logger.info(`管理端删除桌子 桌号 - ${id}`)
      const result = tableService.removeTable(io, id);
      if (result.success) {
        logger.info(`管理端删除桌子成功`)
      } else {
        logger.info(`管理端删除桌子失败`)
        logger.info(`失败原因: ${result.data}`)
      }
      callback(result);
    });

    // 清除桌子
    socket.on('clean_table', (id, callback) => {
      logger.info(`管理清除改桌子 桌号 - ${id}`)
      const result = tableService.cleanTable(id);
      if (result.success) {
        logger.info(`管理清除改桌子成功`)
      } else {
        logger.info(`管理清除改桌子失败`)
        logger.info(`失败原因: ${result.data}`)
      }
      callback(result);
    });

    // 刷新客户端桌子
    socket.on('client_get_table', (id, callback) => {
      const res = tableService.getTableById(id)
      callback(res)
    })

    socket.on('change_table', ({oldId: oldId, newId: newId}, callback) => {
      logger.info(`更换桌子`)
      const result = appStateService.changeTable(oldId, newId)
      if (result.success) {
        logger.info(`更换成功`)
        callback(result)
      } else {
        logger.info(`更换失败`)
        logger.info(`失败原因: ${result.data}`)
      }
    })

    // 返回table id ，发送桌子信息，目前价格
    socket.on('get_table_id', (value) => {
      const result = tableService.getTableById(value)
      socket.emit('client_table', result)
      socket.emit("table_id", value);
      const price = appStateService.getCurrentPrice()
      socket.emit('client_currentPrice', price)
    });
    
    socket.on('admin', (value, callback) => {
      const user = db.loadDataForce('admin', { password: "1015" });
      socket.is_admin = false;
      if (user.password == value) {
        orderService.sendOrder(socket)
        socket.is_admin = true;
      }
      callback(socket.is_admin);
    });

    socket.on('disconnect', ()=> {
      if (printers[socket.id]) printers[socket.id] = undefined;
    })

    // printer
    socket.on('add_printer', (value) => {
      logger.info(`添加打印机`)
      const id = socket.id;
      value = JSON.parse(value);
      value.id = id;
      printers[id]= {socket: socket, data: value}

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
          if (printer)
          {
            printer.data.curPrinter = value.printer;
            printer.data.menu = value.menu;
            printer.data.every_one = value.every_one;
            printer.socket.emit('select_printer',value.printer, value.menu.toString(), value.every_one);
          }
        }
      }
    });

    socket.on('print_test', (key)=> {
      const printer = printers[key];
      if (printer)
      {
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
  });


}

module.exports = {
  init,
  emit,
};
