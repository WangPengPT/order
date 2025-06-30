// 数据存储

const { Order } = require('./model/order.js')
const { TableManager } = require('./model/tableManager.js')
const { getCurentPeoplePrice } = require('./utils/timePrice.js')
const { add } = require('./utils/manualMath.js')
const { TableStatus } = require('./model/TableStatus.js')
const { Table } = require('./model/table.js')

class AppState {
    constructor() {
        this.menu = []
        this.orderMenuTab = []
        this.orders = new Map()
        this.tables = []
        this.printers = []
        this.maxOrderId = 0
        this.lunchPrice = 15.90
        this.dinnerPrice = 19.90
        this.holidayPrice = 19.90
        this.clientPort = 5173
        this.isFestiveDay= false

        this.initTables()
    }

    initTables() {
        const iniTable = [];
        let tablesNumber = [[1,50]]
        if(process.env.TABLE_NUMBER) {
            tablesNumber = JSON.parse(process.env.TABLE_NUMBER)
        }

        for (let i = 0; i < tablesNumber.length; i++) {
            iniTable.push.apply(iniTable, this.createTable(tablesNumber[i][0],tablesNumber[i][1]))
        }
        const tablesCenter = new TableManager(iniTable)
        this.tables = tablesCenter

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
        this.maxOrderId = 0
        this.orders.clear();
        this.tables.clearAll();
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

    setFestivalDay(value) {
        this.isFestiveDay = value
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
        this.holidayPrice = newAppState.holidayPrice
        this.isFestiveDay = newAppState.isFestiveDay
    }

    updatePrice(lunchPrice, dinnerPrice) {
        this.lunchPrice = lunchPrice
        this.dinnerPrice = dinnerPrice
        return this
    }

    getTableTotalAmout(tableId) {
        const table = this.tables.getTableById(tableId)
        if (table == null) throw new Error('Noot found the table')
        const tableOrdersAmout =  parseFloat(table.getTableOrdersTotalAmount())
        const price = getCurentPeoplePrice(this.lunchPrice, this.dinnerPrice, this.isFestiveDay)
        
        const peopleCust = parseFloat((table.peopleType.adults * price.adult) + (table.peopleType.childres * price.children).toFixed(2))
        const total = add(tableOrdersAmout, peopleCust).toFixed(2)
        return {
            total: total,
            tableAmout:tableOrdersAmout,
            peopleCust: peopleCust
        }
    }

    getCurrentPrice() {
        return getCurentPeoplePrice(this.lunchPrice, this.dinnerPrice, this.isFestiveDay)
    }


    toJSON() {
        return {
            menu: this.menu,
            orders: Object.fromEntries(this.orders), // Map → object
            tables: this.tables.toJSON(),            // TableManager → array
            printers: this.printers,
            maxOrderId: this.maxOrderId,
            childPrice: this.childPrice,
            adultPrice: this.adultPrice,
            holidayPrice: this.holidayPrice,
            isFestiveDay: this.isFestiveDay,
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
        instance.isFestiveDay = data.isFestiveDay || false
        return instance
    }
}

const appState = new AppState()

module.exports = { appState, AppState }
