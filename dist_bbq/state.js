const {Order} = require('./model/order.js')
const {TableManager} = require('./model/tableManager.js')
const {TableStatus} = require('./model/TableStatus.js')
const {Table} = require('./model/table.js')

class AppState {
    constructor() {
        this.specialDishes = [{category: "My BOX"}, {category: "Bibimbap"}]
        this.menu = []
        this.orderMenuTab = []
        this.orders = new Map()
        this.tables = []
        this.printers = []
        this.maxOrderId = 0

        this.hasBox = true
        this.hasBibimbap = true
        this.checkIP = false;

        this.currentPageID = 1

        this.initTables()

        this.recordProps(this, ['menu'])
    }

    initTables() {
        const iniTable = [];
        const tablesNumber = []
        if (process.env.TABLES_NUMBER) {
            tablesNumber.push.apply(tablesNumber, JSON.parse(process.env.TABLES_NUMBER))
        } else {
            tablesNumber.push([1, 50])
        }
        for (let i = 0; i < tablesNumber.length; i++) {
            iniTable.push.apply(iniTable, this.createTable(tablesNumber[i][0], tablesNumber[i][1]))
        }
        const tablesCenter = new TableManager(iniTable)
        this.tables = tablesCenter

    }

    updateBibimbap(value) {
        this.hasBibimbap = value
    }

    updateBox(value) {
        this.hasBox = value
    }

    createTable(startIdx, endIdx) {
        const tables = [];
        for (let i = startIdx; i <= endIdx; i++) {
            let id = '' + i;
            if (id <= 9) id = '0' + id;
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

    setHasBox(value) {
        this.hasBox = value
    }

    addOrderTable(orderData) {
        this.maxOrderId++
        const orderId = this.maxOrderId.toString().padStart(4, '0')
        const order = new Order({...orderData, id: orderId})
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
        if (table) {
            const dishes = table.order
            return dishes.map(dish => dish.toJSON())
        } else {
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
        for (const key of this._dataKeys) {
            const value = newAppState[key];

            if (key === 'orders') {
                if (value instanceof Map) {
                    this.orders = value;
                } else if (value) {
                    this.orders = new Map(
                        Object.entries(value).map(([id, obj]) => [id, Order.fromJSON(obj)])
                    );
                } else {
                    this.orders = new Map();
                }
            } else if (key === 'tables') {
                if (value instanceof TableManager) {
                    this.tables = value;
                } else if (Array.isArray(value)) {
                    const tableManager = new TableManager();
                    value.forEach(tableData => {
                        tableManager.addTable(tableData);
                    });
                    this.tables = tableManager;
                } else {
                    this.tables = new TableManager([]);
                }
            } else {
                // 普通字段自动更新
                this[key] = value;
            }
        }
    }


    getTableTotalAmout(tableId) {
        const table = this.tables.getTableById(tableId)
        if (table == null) throw new Error('Noot found the table')
        const tableOrdersAmout = parseFloat(table.getTableOrdersTotalAmount()).toFixed(2)
        return {
            total: tableOrdersAmout
        }
    }

    recordProps(target, except = []) {
        const keys = Object.keys(target);
        target._dataKeys = keys.filter(k => !k.startsWith('_') && !except.includes(k));
    }

    incrementOrder(orderData) {
        const items = orderData.items
        const result = []
        for (const item of items) {
            const menuItem = this.menu.find(m => m.id === item.dishid)
            menuItem.dailyOrders = (menuItem.dailyOrders | 0) + item.quantity
            menuItem.monthlyOrders = (menuItem.monthlyOrders | 0) + item.quantity
            menuItem.yearlyOrders = (menuItem.yearlyOrders | 0) + item.quantity
            menuItem.orders = (menuItem.orders | 0) + item.quantity
            result.push({id: menuItem.id, orders: menuItem.orders})
        }
        return result
    }

    toJSON() {
        const result = {}
        for (const key of this._dataKeys) {
            const val = this[key]
            if (val instanceof Map) {
                result[key] = Object.fromEntries(val)
            } else if (typeof val?.toJSON === 'function') {
                result[key] = val.toJSON()
            } else {
                result[key] = val
            }
        }
        return result
    }


    static fromJSON(data) {
        const instance = new AppState()

        for (const key of instance._dataKeys) {
            if (key === 'orders' && data.orders) {
                // 特殊处理 Map
                instance.orders = new Map(
                    Object.entries(data.orders).map(([id, obj]) => [id, Order.fromJSON(obj)])
                )
            } else if (key === 'tables' && data.tables) {
                // 特殊处理 tables，假设是 TableManager 实例
                if (Array.isArray(data.tables)) {
                    const tableManager = new TableManager()
                    data.tables.forEach(tableData => {
                        tableManager.addTable(tableData)
                    })
                    instance.tables = tableManager
                } else {
                    instance.tables = data.tables
                }
            } else {
                // 其他字段直接赋值
                if (data.hasOwnProperty(key)) {
                    instance[key] = data[key]
                }
            }
        }

        return instance
    }

    localIps = []


    getClientIP(socket) {
        const headers = socket.handshake.headers;
        return headers['x-real-ip'] ||
            (headers['x-forwarded-for'] && headers['x-forwarded-for'].split(',')[0].trim()) ||
            socket.handshake.address;
    }

    addLocalIP(socket) {
        const ip = this.getClientIP(socket)
        if (this.localIps.includes(ip)) return;
        console.log("add local ip: " + ip);
        this.localIps.push(ip)
    }

    checkLocalIP(socket) {
        if (this.localIps && this.localIps.length > 0) {
            const ip = this.getClientIP(socket)
            return this.localIps.includes(ip)
        }

        return true
    }
}

const appState = new AppState()

module.exports = {appState, AppState}
