const db = require('../filedb.js');
const { appState } = require('../state.js');
const orderService = require('./orderService.js')
const tableService = require('./tableService.js');

function init(io) {
  io.on("connection", (socket) => {
    console.log("客户端连接:", socket.id);

    // 发送桌子信息
    io.emit("send_tables", appState.tables.toJSON())

    io.emit("qr_addr", process.env.QR_ADDR || "http://localhost:5173?table=");

    // 发送菜单数据给用户端和管理端
    socket.emit("menu_data", appState.menu);

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
      const result = tableService.updateTable(io, tableData);
      callback(result);
    });

    // 删除桌子
    socket.on('remove_table', (id, callback) => {
      const result = tableService.removeTable(io, id);
      callback(result);
    });

    // 清除桌子
    socket.on('clean_table', (id, callback) => {
      const result = tableService.cleanTable(io, id);
      callback(result);
    });

    socket.on('get_table_id', (value) => {
      console.log("get_table_id", value);
      socket.emit("table_id", "#" + value);
    });

    
    socket.on('admin', (value, callback) => {
      const user = db.loadData('admin', { password: "123456" });
      socket.is_admin = false;
      if (user.password == value) {
        console.log("is login")
        orderService.sendOldOrder(socket)
        socket.is_admin = true;
      }
      callback(socket.is_admin);
    });
  });
}

module.exports = {
  init,
};
