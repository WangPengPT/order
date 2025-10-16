const { appState } = require("../state.js");

function addOrder(orderData) {
    try {
        if (!orderData.table) throw new Error("No table id")
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
    hasUniCode,
};
