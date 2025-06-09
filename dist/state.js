// 数据存储

const { Order } = require('./model/order.js')
const { TableManager } = require('./model/tableManager.js')

class AppState {
    constructor() {
        this.menu = []
        this.orders = new Map()
        this.tables = []
        this.printers = []
        this.maxOrderId = 0

        this.childPrice = 7.90
        this.adultPrice = 13.90

        this.initTables()
    }

    initTables() {
        const tablesCenter = new TableManager([
            { id: '101', people: 0, status: '空闲' },
            { id: '102', people: 0, status: '空闲' },
            { id: '103', people: 0, status: '已预订' },
            { id: '201', people: 0, status: '空闲' },
            { id: '202', people: 0, status: '空闲' },
            { id: '203', people: 0, status: '空闲' },
            { id: '301', people: 0, status: '已预订' },
            { id: '302', people: 0, status: '已预订' },
            { id: '303', people: 0, status: '空闲' },
        ])
        this.tables = tablesCenter
    }

    getTable(tableId) {
        if (!tableId) return undefined;

        if (typeof variable === 'string') {
            const id = tableId.replace('#', '')
            return this.tables.getTableById(id)
        } else {
            return this.tables.getTableById(tableId)
        }
    }


    addOrderTable(orderData) {
        this.maxOrderId++
        const orderId = this.maxOrderId.toString().padStart(4, '0')
        const order = new Order({ ...orderData, id: orderId })
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

    completeOrder(orderId) {
        const order = this.orders.get(orderId)
        if (order) {
            order.status = 'completed'
        }
    }

    cancelOrder(orderId) {
        const order = this.orders.get(orderId)
        if (order) {
            order.status = 'cancelled'
        }
    }

    getOrder(orderId) {
        return this.orders.get(orderId)
    }

    getDishesJSONByTable(tableId) {
        if (tableId == null) {
            return null
        }
        const id = tableId.replace('#', '')
        const table = this.tables.getTableById(id)
        if (table)
        {
            const dishes = table.order
            return dishes.map(dish => dish.toJSON())
        }
        else
        {
            return "{}";
        }
    }

    cleanOrder() {
        this.orders.clear()
    }

    /*

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
        */

    getOrdersByTableID(tableId) {
    if (!tableId) return []

    // 去掉可能的 # 号，保持和你其他地方一致
    const id = typeof tableId === 'string' ? tableId.replace('#', '') : tableId;

    // 过滤 orders Map，返回属于这个桌号的订单数组
    const result = [];

    for (const order of this.orders.values()) {
        if (order.table === id) {
            result.push(order);
        }
    }

        return result;
    }

    updateAppState(newAppState) {
        this.menu = newAppState.menu || []

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

        this.adultPrice = newAppState.adultPrice
        this.childPrice = newAppState.childPrice
    }

    updatePrice(adultPrice, childPrice) {
        this.adultPrice = adultPrice
        this.childPrice = childPrice
        return this
    }


    toJSON() {
        return {
            menu: this.menu,
            orders: Object.fromEntries(this.orders), // Map → object
            tables: this.tables.toJSON(),            // TableManager → array
            printers: this.printers,
            maxOrderId: this.maxOrderId,
            childPrice: this.childPrice,
            adultPrice: this.adultPrice
        };
    }

    static fromJSON(data) {
        const instance = new AppState()

        instance.menu = data.menu || []

        // 恢复 Map
        if (data.orders) {
            instance.orders = new Map(
                Object.entries(data.orders).map(([id, obj]) => [id, Order.fromJSON(obj)])
            );
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

        instance.adultPrice = data.adultPrice || 1
        instance.childPrice = data.childPrice || 0.5

        return instance
    }
}

const appState = new AppState()

module.exports = { appState, AppState }
