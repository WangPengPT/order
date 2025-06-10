const db = require('../filedb.js');
const { appState } = require('../state.js');
const orderService = require('./orderService.js')
const tableService = require('./tableService.js');
const appStateService = require("../services/appStateService.js")

const menuService = require("./menuService.js")

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

    // 发送桌子信息
    tableService.sendTablesInfo(io)

    io.emit("qr_addr", process.env.QR_ADDR || "http://localhost:5173?table=");

    // 餐桌密码验证
    //tableService.tableLogin(socket)

    socket.on("manager_get_order_signal", (id, cb) => {
      const res = orderService.getOrders(id)
      cb(res)
    })

    socket.on("manager_delete_orders", (value, cb) => {
      const result = orderService.deleteOrderAndTableDishes(value.tableId, value.orders)
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

    // 客户端请求发送订单
    socket.on("client_order_signal", (id
    ) => {
      tableService.sendTableDish(socket, id)
    })

    // 处理订单提交
    socket.on("submit_order", (orderData) => {
      orderService.addOrder(io, socket, orderData)
    }); 

    // 添加桌子
    socket.on('add_table', (tableData, callback) => {
      const result = tableService.addNewTable(io, tableData);
      callback(result);
    });

    // 修改桌子
    socket.on('update_table', (tableData, callback) => {
      const result = tableService.updateTable(tableData);
      callback(result);
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

    socket.on('get_table_id', (value) => {
      socket.emit("table_id", value);
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
