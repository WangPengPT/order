/**
 * 订单服务模块
 * 负责订单的增删改查、状态更新以及订单关联的业务逻辑
 */
const { appState } = require("../state.js");

/**
 * 添加新订单
 * @param {Object} orderData 订单数据
 */
function addOrder(orderData) {
    try {
        if (!orderData.table) throw new Error("缺少桌位ID")
        const order = appState.addOrderTable(orderData)
        const orderJson = order.toJSON()
        return {
            success: true,
            data: orderJson
        }
    } catch (error) {
        console.warn("Error: ", error.message)
        return {
            success: false,
            data: error.message
        }
    }
}

/**
 * 发送所有订单数据给管理端
 * @param {Object} socket Socket 实例
 */
function sendOrder(socket) {
    let res = {}
    try {
        const orders = Array.from(appState.orders.values()).map(order => order.toJSON());
        res = {
            success: true,
            data: orders
        }
    } catch (error) {
        console.warn("Error: ", error)
        res = {
            success: false,
            data: error.message
        }
    } finally {
        socket.emit("manager_order_data", res);
    }
}

/**
 * 根据桌位 ID 获取订单列表
 */
function getOrders(tableId) {
    try {
        const orders = appState.getOrdersByTableID(tableId)
        const jsonOders = Array.from(orders.values().map(order => order.toJSON()))
        return {
            success: true,
            data: jsonOders
        }
    } catch (error) {
        console.warn("Error: ", error)
        return {
            success: false,
            data: error.message
        }
    }
}

/**
 * 从桌位中删除特定的菜品（针对特定名称的逻辑，如寿司盒）
 */
function deleteSushiBoxInTable(ordername, tableId) {
    try {
        if (ordername != 'Sushi Aleatória?®') {
            throw new Error("无效的菜品名称")
        }
        const table = appState.getTableById(tableId)
        if (!table) throw new Error("未找到该桌位");
        const updatedOrder = table.deleteDishByName(ordername);
     if (!updatedOrder) throw new Error('删除寿司盒失败');
        const newTables = appState.tables.toJSON()
        return {
            success: true,
            data: newTables}
    } catch (error) {
        console.warn("Error: ", error)
        return {
            success: false,
            data: error.message
        }
    }
}

/**
 * 管理端删除订单及桌位关联的菜品
 * @param {string} tableId 
 * @param {Array} orders 订单列表
 */
function deleteOrderAndTableDishes(tableId, orders) {
    try {
        const table = appState.getTableById(tableId)
        if (table == null || table == undefined) throw new Error("未找到该桌位")
        table.deteleDishesByIdAndName(orders)
        const newTables = appState.tables.toJSON()
        return {
            success: true,
            data: newTables
        }
    } catch (error) {
        console.warn("Error: ", error)
        return {
            success: false,
            data: error.message
        }
    }
}

/**
 * 更新订单状态（如：制作中、已送达）
 */
function updateOrderStatus(order) {
    try{
        const getOrder = appState.orders.get(order.id)
        if (!getOrder) {
            throw new Error("未找到该订单ID")
        }
        getOrder.status = order.status
        // 验证更新是否生效
        if(appState.orders.get(order.id).status != order.status){
            throw new Error("更新订单状态失败")
        }
        return{
            success: true,
            data: getOrder
        }
    }catch (error){
        console.warn("Error: ", error)
        return {
            success: false,
            data: error.message
        }
    }
}

/**
 * 检查订单的唯一编码（用于防止重复提交）
 */
function hasUniCode(tableId, uniCode) {

    if (!uniCode)  return false;

    const table = appState.getTableById(tableId)

    if (!table.uniCodes) table.uniCodes = {}

    // 如果该编码已存在，说明是重复请求
    if (table.uniCodes[uniCode]) {
        return true;
    }

    // 记录该编码
    table.uniCodes[uniCode] = true;
    return false;
}


module.exports = {
    addOrder,
    sendOrder,
    getOrders,
    deleteOrderAndTableDishes,
    deleteSushiBoxInTable,
    updateOrderStatus,
    hasUniCode,
};
