const { appState } = require("../state.js");

function addOrder(orderData) {
    try {
        if (!orderData.table) throw new Error("No table id")

        // 认证系统拦截逻辑
        if (appState.settings.useAuth) {
            const table = appState.tables.getTableById(orderData.table);
            if (table && table.status.value === '用餐中') {
                const userId = orderData.userId; // 客户端需传入 userId
                if (!userId) throw new Error("Unauthorized: User information missing");
                
                const user = table.users.find(u => u.id === userId);
                if (!user || !user.authorized) {
                    throw new Error("WAIT_FOR_AUTH"); // 提示等待授权
                }
            }
        }

        const order = appState.addOrderTable(orderData)
        const orderJson = order.toJSON()
        let tablePassword;
        if (orderData._firstOrderFree && appState.qrOrderInfo && appState.qrOrderInfo.useTableOrderPassword) {
            const t = appState.tables.getTableById(orderData.table);
            tablePassword = t ? t.getPassword() : undefined;
        }

        return {
            success: true,
            data: orderJson,
            tablePassword
        }
    } catch (error) {
        console.warn("Error: ", error.message)
        return {
            success: false,
            data: error.message
        }
    }
}

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

function deleteSushiBoxInTable(ordername, tableId) {
    try {
        if (ordername != 'Sushi Aleatória?®') {
            throw new Error("Invalid ordername")
        }
        const table = appState.getTableById(tableId)
        if (!table) throw new Error("Not found the table");
        const updatedOrder = table.deleteDishByName(ordername);
     if (!updatedOrder) throw new Error('Failed to delete Sushi Box');
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

function deleteOrderAndTableDishes(tableId, orders) {
    try {
        const table = appState.getTableById(tableId)
        if (table == null || table == undefined) throw new Error("Not found the table")
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


function updateOrderStatus(order) {
    try{
        const getOrder = appState.orders.get(order.id)
        if (!getOrder) {
            throw new Error("No order id found")
        }
        getOrder.status = order.status
        if(appState.orders.get(order.id).status != order.status){
            throw new Error("Fail update the order status")
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

function checkTablePassword(orderData){
    try{
        if (!orderData.table) throw new Error("No table id")

        // 开台首单免密、后续下单验密
        if (appState.qrOrderInfo && appState.qrOrderInfo.useTableOrderPassword) {
            const table = appState.tables.getTableById(orderData.table);
            if (table && table.status && table.status.value === '用餐中') {
                if (table.isFirstOrderFree()) {
                    // 首单免密：允许通过，标记已用
                    table.markFirstOrderUsed();
                    // 继续下单，稍后在返回结果中带回密码由上游 socket 发送给客户端
                    orderData._firstOrderFree = true;
                } else {
                    const pwd = orderData.orderPassword;
                    const valid = table.checkPassword(pwd);
                    if (!valid) {
                        throw new Error("INVALID_TABLE_PASSWORD");
                    }
                }
            }
        }

        return true

    } catch (error) {
        console.warn("Error: ", error.message)
        return false
    }
}



function hasUniCode(tableId, uniCode) {

    if (!uniCode)  return false;

    const table = appState.getTableById(tableId)

    // if (table.uniCodes) {
    //     for (const key in table.uniCodes) {
    //         console.log(key, table.uniCodes[key])
    //     }
    // }


    if (!table.uniCodes) table.uniCodes = {}

    if (table.uniCodes[uniCode]) {
        return true;
    }

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
    checkTablePassword,
    hasUniCode,
};
