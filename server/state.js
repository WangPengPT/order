// 数据存储

const { Order } = require('./model/order.js')
const { TableManager } = require('./model/tableManager.js')

class AppState {
    constructor() {
        this.menu = []
        this.oldOrders = []
        this.orders = new Map()
        this.tables = []
        this.printers = []
        this.maxOrderId = 0

        this.initTables()
    }

    initTables() {
        const tablesCenter = new TableManager([
            { id: '101', people: 0, maxPeople: 4, status: '空闲' },
            { id: '102', people: 4, maxPeople: 6, status: '用餐中' },
            { id: '103', people: 3, maxPeople: 4, status: '已预订' },
            { id: '201', people: 0, maxPeople: 4, status: '空闲' },
            { id: '202', people: 0, maxPeople: 6, status: '空闲' },
            { id: '203', people: 0, maxPeople: 4, status: '空闲' },
            { id: '301', people: 2, maxPeople: 4, status: '已预订' },
            { id: '302', people: 4, maxPeople: 6, status: '已预订' },
            { id: '303', people: 0, maxPeople: 4, status: '空闲' },
        ])
        this.tables = tablesCenter
    }

    getTable(tableId) {
        const id = tableId.replace('#', '')
        return this.tables.getTableById(id)
    }


    addOrderTable(orderData) {
        this.maxOrderId++
        const orderId = this.maxOrderId.toString().padStart(4, '0')
        const order = new Order({ ...orderData, id: orderId })
        this.orders.set(orderId, order)
        const table = this.getTable(order.table)
        if (table == null) {
            throw new Error(`桌号${order.table}未能找到！`)
        }
        //add order to Table
        table.addOrderItems(order.dishes)

        return order
    }

    addOldOrder(order) {
        this.oldOrders.push(order)
    }

    completeOrder(orderId) {
        const order = this.orders.get(orderId)
        if (order) {
            this.orders.delete(orderId)
            order.status = 'completed'
            this.oldOrders.push(order)
        }
    }

    cancelOrder(orderId) {
        const order = this.orders.get(orderId)
        if (order) {
            this.orders.delete(orderId)
            order.status = 'cancelled'
            this.oldOrders.push(order)
        }
    }

    getOrder(orderId) {
        return this.orders.get(orderId)
    }

    cleanExpireOrder() {
    const ORDER_EXPIRE_MINUTES = 30;
    const now = Date.now();

    this.oldOrders = this.oldOrders.filter(item => {
        const elapsed = (now - item.timestamp) / 1000 / 60; // 转换为分钟
        if (elapsed < ORDER_EXPIRE_MINUTES) {
            return true;
        }
    });
    }
}

const appState = new AppState()

module.exports = { appState, AppState }
