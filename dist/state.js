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
        console.log("orderData: ", orderData)
        this.maxOrderId++
        const orderId = this.maxOrderId.toString().padStart(4, '0')
        const order = new Order({ ...orderData, id: orderId })
        console.log("order: ", order)
        const table = this.getTable(order.table)
        if (table == null) {
            throw new Error(`桌号${order.table}未能找到！`)
        }

        if (table.status == '已支付') {
            throw new Error(`桌号${order.table}已支付`)
        }

        // add order
        this.orders.set(orderId, order)
        // add order to Table
        table.addOrderItems(order.items)

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

    updateAppState(newAppState) {
        this.menu = newAppState.menu || []
        this.oldOrders = Array.isArray(newAppState.oldOrders) ? newAppState.oldOrders : []

        // orders 应该是 Map 或需要转换
        if (newAppState.orders instanceof Map) {
            this.orders = newAppState.orders
        } else if (newAppState.orders) {
            this.orders = new Map(Object.entries(newAppState.orders))
        } else {
            this.orders = new Map()
        }

        // tables 应该是 TableManager 实例
        if (newAppState.tables instanceof TableManager) {
            this.tables = newAppState.tables
        } else if (Array.isArray(newAppState.tables)) {
            this.tables = new TableManager(newAppState.tables)
        } else {
            this.tables = new TableManager([])
        }

        this.printers = newAppState.printers || []
        this.maxOrderId = newAppState.maxOrderId || 0
    }


    toJSON() {
        return {
            menu: this.menu,
            oldOrders: this.oldOrders,
            orders: Object.fromEntries(this.orders), // Map → object
            tables: this.tables.toJSON(),            // TableManager → array
            printers: this.printers,
            maxOrderId: this.maxOrderId
        };
    }

    static fromJSON(data) {
        const instance = new AppState()

        instance.menu = data.menu || []
        instance.oldOrders = data.oldOrders || []

        // 恢复 Map
        if (data.orders) {
            instance.orders = new Map(Object.entries(data.orders))
        }

        // 恢复 tables
        if (data.tables && Array.isArray(data.tables)) {
            const tableManager = new TableManager()
            data.tables.forEach(tableData => {
                tableManager.addTable(tableData)
            })
            instance.tables = tableManager
        }

        instance.printers = data.printers || []
        instance.maxOrderId = data.maxOrderId || 0

        return instance
    }
}

const appState = new AppState()

module.exports = { appState, AppState }
