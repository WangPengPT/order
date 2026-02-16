const {Order} = require('./model/order.js')
const {TableManager} = require('./model/tableManager.js')
const {TableStatus} = require('./model/TableStatus.js')
const {Table} = require('./model/table.js')
const {ShopInfo,PriceInfo} = require('./model/shopInfo.js')
const {TakeawayInfo, DeliveryInfo, ReserverInfo, QROrderInfo} = require('./model/Info.js')
const {PrintInfo} = require('./model/printInfo.js')
const {Settings} = require('./model/settings.js')
const {PermissionsControl} = require('./model/permissionsControl.js')
const {logger} = require("./utils/logger");

class AppState {
    constructor() {
        this.menu = []
        this.orderMenuTab = []
        this.orders = new Map()
        this.tables = []
        this.printers = []
        this.maxOrderId = 0

        this.permissionsControl = new PermissionsControl()

        this.settings = new Settings()

        this.shopInfo = new ShopInfo()
        this.qrOrderInfo = new QROrderInfo()
        this.takeawayInfo = new TakeawayInfo()
        this.deliveryInfo = new DeliveryInfo()
        this.reserverInfo = new ReserverInfo()
        this.printInfo = new PrintInfo()

        this.initTables()

        this.recordProps(this, ['menu', 'orderMenuTab'])

    }


    // 所有 init 函数
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

    initBeginEndInterval(){
        const days = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday","special"]
        const iniInterval = {}
        for(const day of days){
            iniInterval[day] = [{begin:{hour:12,minute:0},end:{hour:15,minute:0}},{begin:{hour:19,minute:0},end:{hour:23,minute:0}}]
        }
        return iniInterval
    }

    // 所有 Get 函数
    getCurrentPrice(type=undefined,time=Date.now()){
        if(type){
            const price = this.shopInfo.getCurrentPrice(type,time,this.settings.isFestiveDay,this.settings.useChildrenDiscount)
            if(price){
                return { success:true, data:price }
            }
            return {success: false, data: 'Not Found Price'}
        }else{
            const data = {
                adult: this.shopInfo.getCurrentPrice(PriceInfo.type_adult,time,this.settings.isFestiveDay),
                child: this.shopInfo.getCurrentPrice(PriceInfo.type_child,time,this.settings.isFestiveDay,this.settings.useChildrenDiscount)
            }
            if(data.adult && data.child){
                return { success:true, data:data }
            }
            return { success: false, data: data }
        }
    }

    getPeopleCurrentPriceData(tableId){
        let success = false
        const data = []
        const peopleType = this.tables.getTableById(tableId).peopleType
        for(const key in peopleType){
            const price = key.toLowerCase().includes("adult") ? this.getCurrentPrice(PriceInfo.type_adult) : this.getCurrentPrice(PriceInfo.type_child)
            data.push({
                peopleType: key,
                price: price,
                quantity: peopleType[key],
                totalPrice: (peopleType[key] * price).toFixed(2),
            })
        }
        if(Object.keys(data).length >= 0) success = true
        return { success:success, data:data }
    }

    // 所有 Update 函数
    updatePermissionsControl(key,value){
        console.log("update PermissionsControl: ", key)
        const result = this.permissionsControl.update(key, value)
        console.log("update ", (result.success ? "success, value: ": "failed, error:"), result.data )
    }

    updateSettings(key, value) {
        console.log("update settings: ", key)
        const result = this.settings.update(key, value)
        console.log("update ", (result.success ? "success, value: ": "failed, error:"), result.data )
    }

    updateShopInfo(key, value){
        console.log("update shop_info:", key)
        const result = this.shopInfo.update(key, value)
        console.log("update ", (result.success ? "success, value: ": "failed, error:"), result.data )
        return result
    }

    updateQrOrderInfo(key, value){
        console.log("update qrorder_info:", key)
        const result = this.qrOrderInfo.update(key, value)
        console.log("update ", (result.success ? "success, value: ": "failed, error:"), result.data )
        return result
    }

    updateTakeawayInfo(key, value){
        console.log("update takeaway_info:", key)
        const result = this.takeawayInfo.update(key, value)
        console.log("update ", (result.success ? "success, value: ": "failed, error:"), result.data )
        return result
    }

    updateDeliveryInfo(key, value){
        console.log("update delivery_info:", key)
        const result = this.deliveryInfo.update(key, value)
        console.log("update ", (result.success ? "success, value: ": "failed, error:"), result.data )
        return result
    }

    updateReserverInfo(key, value){
        console.log("update reserver_info:", key)
        const result = this.reserverInfo.update(key, value)
        console.log("update ", (result.success ? "success, value: ": "failed, error:"), result.data )
        return result
    }

    updatePrintInfo(key, value){
        console.log("update print_info:", key)
        const result = this.printInfo.update(key, value)
        console.log("update ", (result.success ? "success, value: ": "failed, error:"), result.data )
        return result
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
        if (typeof tableId === 'string') {
            const id = tableId.replace('#', '')
            return this.tables.getTableById(id)
        } else {
            return this.tables.getTableById(tableId)
        }
    }

    addOrderTable(orderData) {
        this.maxOrderId++   
        const orderId = this.maxOrderId.toString().padStart(4, '0')
        const order = new Order({...orderData, id: orderId})
        const tableId = String(order.table)
        const table = this.getTableById(tableId)
        if (table == null) {
            throw new Error(`桌号${tableId}未能找到！`)
        }

        if (table.status !== TableStatus.SEATED) {
            throw new Error(`Mesa ${tableId} não tem permissão`)
        }

        // 查看限量菜
        const totalPeople = table.peopleType.adults + table.peopleType.children
        for (let i = 0; i < orderData.items.length; i++) {
            if (orderData.items[i].limit) {
                const id = orderData.items[i].dishid
                const item = table.order.find(i => i.dishid == id)
                let totalOrders = orderData.items[i].quantity
                if (item) {
                    totalOrders += item.quantity
                }
                // console.log(totalOrders)
                // console.log(totalPeople * orderData.items[i].limit)
                if (totalOrders > totalPeople * orderData.items[i].limit) {
                    throw new Error(`Mesa ${tableId} ultrapassou o número de pedidos para ${item.dishid}`)
                }
            }
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
        const handlers = {
            orders: (value) => {
                if (value instanceof Map) {
                    return value;
                }
                if (value) {
                    return new Map(
                        Object.entries(value).map(([id, obj]) => [id, Order.fromJSON(obj)])
                    );
                }
                return new Map();
            },
            tables: (value) => {
                if (value instanceof TableManager) {
                    return value;
                }
                if (Array.isArray(value)) {
                    const tableManager = new TableManager();
                    value.forEach(tableData => tableManager.addTable(tableData));
                    return tableManager;
                }
                return new TableManager([]);
            },
            permissionsControl: (value) => {
                if (!value) return this.permissionsControl;
                this.permissionsControl = PermissionsControl.fromJSON(value)
                return this.permissionsControl;
            },
            settings: (value) => {
                if (!value) return this.settings;
                this.settings = Settings.fromJSON(value);
                return this.settings;
            },
            shopInfo: (value) => {
                if (!value) return this.shopInfo;
                this.shopInfo = ShopInfo.fromJSON(value)
                return this.shopInfo;
            },
            qrOrderInfo: (value) => {
                if (!value) return this.qrOrderInfo;
                this.qrOrderInfo = QROrderInfo.fromJSON(value)
                return this.qrOrderInfo;
            },
            takeawayInfo: (value) => {
                if (!value) return this.takeawayInfo;
                this.takeawayInfo = TakeawayInfo.fromJSON(value)
                return this.takeawayInfo;
            },
            deliveryInfo: (value) => {
                if (!value) return this.deliveryInfo;
                this.deliveryInfo = DeliveryInfo.fromJSON(value)
                return this.deliveryInfo;
            },
            reserverInfo: (value) => {
                if (!value) return this.reserverInfo;
                this.reserverInfo = ReserverInfo.fromJSON(value)
                return this.reserverInfo;
            },
            printInfo: (value) => {
                if (!value) return this.printInfo;
                this.printInfo = PrintInfo.fromJSON(value)
                // template 数据迁移
                if(this.printModel){
                    this.printInfo.update('printModel',this.printModel)
                    this.printModel = undefined
                }
                return this.printInfo;
            }
        };

        for (const key of this._dataKeys) {
            const value = newAppState[key];
            if (handlers[key]) {
                this[key] = handlers[key](value);
            } else {
                this[key] = value;
            }
        }
    }

    getTableTotalAmount(tableId) {
        const table = this.tables.getTableById(tableId)
        if (table == null) throw new Error('Not found the table')
        const tableOrdersAmount = parseFloat(table.getTableOrdersTotalAmount())

        const adultPrice = this.getCurrentPrice(PriceInfo.type_adult)
        const childrenPrice = this.getCurrentPrice(PriceInfo.type_child)
        const tablePeoplesAmount = parseFloat(table.getTablePeopleTotalAmount(adultPrice, childrenPrice))

        const adultQty = table.peopleType.adults
        const childrenQty = table.peopleType.children

        return {
            total: (tableOrdersAmount + tablePeoplesAmount).toFixed(2),
            adultPrice: {quantity: adultQty, price: adultPrice},
            childrenPrice: {quantity: childrenQty,price: childrenPrice}
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
            }else {
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
    blacklistIps = []

    getClientIP(socket) {
        const headers = socket.handshake.headers;
        return headers['x-real-ip'] ||
            (headers['x-forwarded-for'] && headers['x-forwarded-for'].split(',')[0].trim()) ||
            socket.handshake.address;
    }

    addLocalIP(socket) {
        const ip = this.getClientIP(socket)
        if (!this.localIps) this.localIps = []
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

    checkBlacklistIP(socket) {
        if (this.blacklistIps && this.blacklistIps.length > 0) {
            const ip = this.getClientIP(socket)
            return this.blacklistIps.includes(ip)
        }
        return false
    }

    addBlacklistIP(ip) {
        if (!this.blacklistIps) this.blacklistIps = []
        if (this.blacklistIps.includes(ip)) return;
        this.blacklistIps.push(ip)
    }

    removeBlacklistIP(ip) {
        if (!this.blacklistIps) return;
        this.blacklistIps = this.blacklistIps.filter(item => item !== ip);
    }
}

const appState = new AppState()

module.exports = {appState, AppState}
