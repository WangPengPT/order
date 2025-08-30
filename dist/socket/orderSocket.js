const orderService = require('../services/orderService.js')
const tableService = require('../services/tableService.js');
const { appState } = require('../state.js');
const { logger } = require('../utils/logger.js')

class OrderSocket {
    constructor(io) {
        this.io = io
    }

    deleteOrderAndTableDishes(value, cb) {
        logger.info(`管理端请求删除订单, 桌号-${value.tableId}`)
        const result = orderService.deleteOrderAndTableDishes(value.tableId, value.orders)
        if (result.success) {
            logger.info(`管理端请求删除订单成功, 桌号-${value.tableId} 菜品-${value.orders}`)
        } else {
            logger.info(`管理端请求删除订单失败, 桌号-${value.tableId}`)
            logger.info(`失败原因: ${result.data}`)
        }
        // 更新客户端桌子信息
        this.io.emit('client_table', () => {
            //logger.info(`发送给客户端桌子信息, 桌号-${value.tableId}`)
            return tableService.getTableById(value.tableId)
        })

        cb(result)
    }

    getOrders() {
        return appState.getOrders()
    }

    updateOrderStatus(order, cb) {
        logger.info(`管理端修改订单状态, 订单号-${order.id}-订单状态-${order.status}`)
        const result = orderService.updateOrderStatus(order)
        if(result.success) {
            logger.info(`管理端修改订单状态成功, 订单号-${order.id}-订单状态-${order.status}`)
        }else{
            logger.info(`管理端修改订单状态成功, 订单号-${order.id}-订单状态-${order.status}`)
            logger.info(`失败原因: ${result.data}`)
        }
        cb(result)
    }

    registerHandlers(socket) {

        socket.on("manager_get_order_signal", (id, cb) => { cb(orderService.getOrders(id)) })
        socket.on("manager_delete_orders", (value, cb) => { this.deleteOrderAndTableDishes(value, cb) })
        socket.on("updateOrderStatus", (value,cb) => { this.updateOrderStatus(value, cb) })

        socket.emit("manager_order_data", this.getOrders())
    }
}

module.exports = { OrderSocket }