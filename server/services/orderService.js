const { appState, state } = require("../state.js");
const { print_order } = require('../utils/printOrder.js');

function addOrder(io, socket, orderData) {

    // 数据验证
    if (!orderData.key) {
      return socket.emit("error", "没有关键数据");
    }

    if (!orderData.table) {
       return socket.emit("error", "没有座号");
    }

    const order = appState.addOrderTable(orderData)

    print_order(order, io);

    // 广播给所有管理端
    io.emit("new_order", order);
    socket.emit("📢 已广播新订单:", order);

    // 返回确认给用户端
    socket.emit("order_confirmed", order.id);

    if (appState.oldOrders.length >= 100) {
        appState.oldOrders.shift();
    }
    appState.addOldOrder(order);

    // 更新 tables 信息
    io.emit("send_tables", appState.tables.toJSON())
}

function sendOldOrder(socket) {

    appState.cleanExpireOrder()

    socket.emit("old_orders", appState.oldOrders);
}

module.exports = {
    addOrder,
    sendOldOrder
};
