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
            cb({ code: 200, ...result })
        } else {
            logger.info(`管理端请求删除订单失败, 桌号-${value.tableId}`)
            logger.info(`失败原因: ${result.data}`)
            cb({ code: 400, ...result })
        }
        // 更新客户端桌子信息
        this.io.emit('client_table', () => {
            //logger.info(`发送给客户端桌子信息, 桌号-${value.tableId}`)
            return tableService.getTableById(value.tableId)
        })
    }

    getOrders() {
        return appState.getOrders()
    }

    updateOrderStatus(order, cb) {
        logger.info(`管理端修改订单状态, 订单号-${order.id}-订单状态-${order.status}`)
        const result = orderService.updateOrderStatus(order)
        if(result.success) {
            logger.info(`管理端修改订单状态成功, 订单号-${order.id}-订单状态-${order.status}`)
            cb({ code: 200, ...result })
        }else{
            logger.info(`管理端修改订单状态失败, 订单号-${order.id}-订单状态-${order.status}`)
            logger.info(`失败原因: ${result.data}`)
            cb({ code: 400, ...result })
        }
    }

    registerHandlers(socket) {

        socket.on("manager_get_order_signal", (id, cb) => { 
            const result = orderService.getOrders(id);
            cb({ code: result.success ? 200 : 404, ...result }) 
        })
        socket.on("manager_delete_orders", (value, cb) => { this.deleteOrderAndTableDishes(value, cb) })
        socket.on("updateOrderStatus", (value,cb) => { this.updateOrderStatus(value, cb) })

        socket.emit("manager_order_data", this.getOrders())
    }
}

module.exports = { OrderSocket }