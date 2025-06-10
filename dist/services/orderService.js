const { appState } = require("../state.js");
const { print_order } = require('../utils/printOrder.js');
const tableService = require('./tableService.js')

function addOrder(io, socket, orderData) {

        if (!orderData.table) {
           return socket.emit("error", "没有座号");
        }

        const order = appState.addOrderTable(orderData)
        const orderJson = order.toJSON()
        console.log("order: ", order)
        print_order(order, io);

        // 广播给所有管理端
        io.emit("new_order", orderJson);
        socket.emit("📢 已广播新订单:", orderJson);

        // 返回确认给用户端
        socket.emit("order_confirmed", order.id);

        // 返回客户已经点的菜
        tableService.sendTableDish(socket, order.table)

        // 更新管理端的桌子信息
        io.emit("send_tables", appState.tables.toJSON())

    
}

function sendOrder(socket) {
    const orders = Array.from(appState.orders.values()).map(order => order.toJSON());
    socket.emit("manager_order_data", orders);
}

function getOrders(tableId) {
    try {
        const orders = appState.getOrdersByTableID(tableId)
        const jsonOders = Array.from(orders.values().map(order => order.toJSON()))
        return {
            success: true,
            data: jsonOders
        }
    } catch (error) {
        return {
            success: false,
            data: error.message
        }
    }
}

function deleteOrderAndTableDishes(tableId, orders) {
    try {
        const table = appState.getTable(tableId)
        if (table == null || table == undefined) throw new Error("Not found the table")
        table.deteleDishesByIds(orders)
        const newTables = appState.tables.toJSON()
        return {
            success: true,
            data: newTables}
    } catch (error) {
        return {
            success: false,
            data: error.message
        }
    }
}

module.exports = {
    addOrder,
    sendOrder,
    getOrders,
    deleteOrderAndTableDishes,
};
