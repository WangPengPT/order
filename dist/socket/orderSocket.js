/**
 * 订单 Socket 模块
 * 负责管理端与服务器之间的订单相关实时通信，包括删除订单、获取订单列表和更新订单状态
 */
const orderService = require('../services/orderService.js')
const tableService = require('../services/tableService.js');
const { appState } = require('../state.js');
const { logger } = require('../utils/logger.js')

class OrderSocket {
    constructor(io) {
        this.io = io
    }

    /**
     * 删除订单及桌位关联的菜品
     * @param {Object} value 包含 tableId 和要删除的 orders 列表
     * @param {Function} cb 回调函数
     */
    deleteOrderAndTableDishes(value, cb) {
        logger.info(`管理端请求删除订单, 桌号-${value.tableId}`)
        const result = orderService.deleteOrderAndTableDishes(value.tableId, value.orders)
        if (result.success) {
            logger.info(`管理端请求删除订单成功, 桌号-${value.tableId} 菜品-${value.orders}`)
        } else {
            logger.info(`管理端请求删除订单失败, 桌号-${value.tableId}`)
            logger.info(`失败原因: ${result.data}`)
        }
        // 更新所有管理端客户端的桌子信息
        this.io.emit('client_table', () => {
            return tableService.getTableById(value.tableId)
        })

        cb(result)
    }

    /**
     * 获取所有订单数据
     */
    getOrders() {
        return appState.getOrders()
    }

    /**
     * 更新订单状态（如：待处理 -> 制作中 -> 已送达）
     * @param {Object} order 订单对象
     * @param {Function} cb 回调函数
     */
    updateOrderStatus(order, cb) {
        logger.info(`管理端修改订单状态, 订单号-${order.id}-订单状态-${order.status}`)
        const result = orderService.updateOrderStatus(order)
        if(result.success) {
            logger.info(`管理端修改订单状态成功, 订单号-${order.id}-订单状态-${order.status}`)
        }else{
            logger.error(`管理端修改订单状态失败, 订单号-${order.id}-订单状态-${order.status}`)
            logger.error(`失败原因: ${result.data}`)
        }
        cb(result)
    }

    /**
     * 注册 Socket 事件处理器
     * @param {Object} socket 当前连接的 Socket 实例
     */
    registerHandlers(socket) {
        // 管理端获取特定桌位的订单信号
        socket.on("manager_get_order_signal", (id, cb) => { cb(orderService.getOrders(id)) })
        // 管理端删除订单
        socket.on("manager_delete_orders", (value, cb) => { this.deleteOrderAndTableDishes(value, cb) })
        // 管理端更新订单状态
        socket.on("updateOrderStatus", (value,cb) => { this.updateOrderStatus(value, cb) })

        // 初始连接时发送所有订单数据给管理端
        socket.emit("manager_order_data", this.getOrders())
    }
}

module.exports = { OrderSocket }