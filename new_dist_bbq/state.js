// 数据存储

const { Order } = require('./model/order.js')
const { TableManager } = require('./model/tableManager.js')
const { getCurentPeoplePrice } = require('./utils/timePrice.js')
const { add } = require('./utils/manualMath.js')
const { TableStatus } = require('./model/TableStatus.js')
const { Table } = require('./model/table.js')
const { pagesManager } = require('./model/pages.js')

class AppState {
    constructor() {
        this.menu = []
        this.orderMenuTab = []
        this.orders = new Map()
        this.tables = []
        this.printers = []
        this.maxOrderId = 0
        this.isFanDays = false
        this.hasDuck = true
        this.currentPageID = 1
        this.initTables()
    }

    initTables() {
        const iniTable = [];
        const tablesNumber = []
        if(process.env.TABLES_NUMBER){
            tablesNumber.push.apply(tablesNumber, JSON.parse(process.env.TABLES_NUMBER))
        }else{
            tablesNumber.push([1,50])
        }
        for (let i = 0; i < tablesNumber.length; i++) {
            iniTable.push.apply(iniTable, this.createTable(tablesNumber[i][0],tablesNumber[i][1]))
        }
        const tablesCenter = new TableManager(iniTable)
        this.tables = tablesCenter

    }

    updateDuck(value) {
        this.hasDuck = value
    }

    createTable(startIdx, endIdx) {
        const tables = [];
        for(let i = startIdx; i <= endIdx; i++) {
            let id = '' + i;
            if( id <= 9 ) id = '0' + id;
            tables.push(Table.fromJSON({id: id, people: 0, status: TableStatus.FREE}))
        }
        return tables
    }

    getTableById(tableId) {
        if (!tableId) return undefined;
        if (typeof variable === 'string') {
            const id = tableId.replace('#', '')
            return this.tables.getTableById(id)
        } else {
            return this.tables.getTableById(tableId)
        }
    }

    setFanDays(value) {
        this.isFanDays = value
    }

    addOrderTable(orderData) {
        this.maxOrderId++
        const orderId = this.maxOrderId.toString().padStart(4, '0')
        const order = new Order({ ...orderData, id: orderId })
        const table = this.getTableById(order.table)
        if (table == null) {
            throw new Error(`桌号${order.table}未能找到！`)
        }

        if (table.status !== TableStatus.SEATED) {
            throw new Error(`Mesa ${order.table} não tem permissão`)
        }

        // add order
        this.orders.set(orderId, order)
        // add order to Table
        table.addOrderItems(order.items, order.id)
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

    getOrders() {
        try {
            const data = Array.from(this.orders.values());
            return {
                success: true,
                data: data
            }
        } catch (error) {
            return {
                success: false,
                data: error.message
            }
        }
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

    clearAll() {
        console.log("clear all");
        this.orders.clear();
        this.tables.clearAll();
    }


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
    }

    getTableTotalAmout(tableId) {
        const table = this.tables.getTableById(tableId)
        if (table == null) throw new Error('Noot found the table')
        const tableOrdersAmout =  parseFloat(table.getTableOrdersTotalAmount()).toFixed(2)
        return {
            total: tableOrdersAmout
        }
    }


    toJSON() {
        return {
            menu: this.menu,
            orders: Object.fromEntries(this.orders), // Map → object
            tables: this.tables.toJSON(),            // TableManager → array
            printers: this.printers,
            maxOrderId: this.maxOrderId,
            isFanDays: this.isFanDays,
            currentPageID: this.currentPageID,
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

        instance.isFanDays = data.isFanDays
        instance.currentPageID = data.currentPageID
        return instance
    }
}

const appState = new AppState()

module.exports = { appState, AppState }
