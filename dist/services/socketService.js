const db = require('../filedb.js');
const { appState } = require('../state.js');
const orderService = require('./orderService.js')
const tableService = require('./tableService.js');
const appStateService = require("../services/appStateService.js")
const menuService = require("./menuService.js")
const { print_order } = require('../utils/printOrder.js');
const { printers } = require('../utils/printOrder.js');


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
    console.log("客户端连接:", socket.id);

    // 发送桌子信息所有管理端
    tableService.sendTablesInfo(io)

    io.emit("qr_addr", process.env.QR_ADDR || "http://localhost:5173?table=");

    // 餐桌密码验证
    //tableService.tableLogin(socket)

    socket.on("manager_get_order_signal", (id, cb) => {
      const res = orderService.getOrders(id)
      cb(res)
    })

    // 客户端获取总消费 // add signal
    socket.on("client_tableTotalAmount", (tableId, cb) => {
      const result = appStateService.getTableTotalAmout(tableId)
      cb(result)
    })

    // 管理端更新今日红日
    socket.on("manager_set_festivalDay", (value, cb) => {
      const result = appStateService.setFestivalDay(value)
      cb(result)
    })

    // 发送管理端获取今日红日
    socket.emit("manager_festival", appStateService.getFestivalDay())

    socket.on("manager_delete_orders", (value, cb) => {
      const result = orderService.deleteOrderAndTableDishes(value.tableId, value.orders)
      // 更新客户端桌子信息
      io.emit('client_table', tableService.getTableById(value.tableId))

      cb(result)
    })

    // 发送价格信息
    socket.emit("get_people_price", appStateService.getPrice())

    // 管理端更改密码
    tableService.updateTablePassword(socket)

    // 管理端刷新密码
    tableService.refreshTablePassword(socket)

    // 管理端更新价格
    socket.on("update_people_price", (value, cb) => {
        const res = appStateService.updatePrice(value.lunchPrice, value.dinnerPrice)
        cb(res)
    })

    // 发送菜单数据给用户端和管理端
    socket.emit("menu_data", appState.menu,appState.orderMenuTab);

    // 处理订单提交
    socket.on("submit_order", (orderData) => {
      //orderService.addOrder(io, socket, orderData)

      const order = orderService.addOrder(orderData)
      if (order.success) {
        print_order(order, io);
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
        socket.emit('error', order.data)
      }

    }); 

    // 添加桌子
    socket.on('add_table', (tableData, callback) => {
      const result = tableService.addNewTable(io, tableData);
      callback(result);
    });

    // 修改桌子
    socket.on('update_table', (tableData, callback) => {
      const result = tableService.updateTable(tableData)
      callback(result);

      // 给客户端发送桌子信息
      const table = tableService.getTableById(tableData.id)
        if (table.success) {
          io.emit('client_table', table)
        }
    });

    // 删除桌子
    socket.on('remove_table', (id, callback) => {
      const result = tableService.removeTable(io, id);
      callback(result);
    });

    // 清除桌子
    socket.on('clean_table', (id, callback) => {
      const result = tableService.cleanTable(id);
      callback(result);
    });

    // 刷新客户端桌子
    socket.on('client_get_table', (id, callback) => {
      const res = tableService.getTableInfo(id)
      callback(res)
    })

    // 返回table id ，发送桌子信息，目前价格
    socket.on('get_table_id', (value) => {
      const result = tableService.getTableInfo(value)
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
      console.log("remove printer", printers)
    })

    // printer
    socket.on('add_printer', (value) => {
      const id = socket.id;
      value = JSON.parse(value);
      value.id = id;
      printers[id]= {socket: socket, data: value}

      console.log("add_printer", printers)
    });

    socket.on('get_printers', (callback) => {
      const ret = [];
      for (const key in printers) {
        const printer = printers[key];
        if (printer) ret.push(printer.data);
      }
      console.log("getPrinters", ret);
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
            printer.socket.emit('select_printer',value.printer, value.menu.toString());
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
  });
}

module.exports = {
  init,
  emit,
};
