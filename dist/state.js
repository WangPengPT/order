const {Order} = require('./model/order.js')
const {TableManager} = require('./model/tableManager.js')
const {TableStatus} = require('./model/TableStatus.js')
const {Table} = require('./model/table.js')
const WeekPrice = require("./model/WeekPrice");
const {logger} = require("./utils/logger");

class AppState {
    constructor() {
        this.menu = []
        this.orderMenuTab = []
        this.orders = new Map()
        this.tables = []
        this.printers = []
        this.maxOrderId = 0

        this.printModel = {
            order: 0,
            takeaway: 0,
        }

        this.permissionsControl = {
            order: true,
            delivery: true,
            reserver: true,
            vip: true,
            fandays: true,
        }

        this.customDishesControl = {
            1: {enabled: true, name: 'Sushi Aleatória®'},
            2: {enabled: true, name: 'Poke Bowl'},
            3: {enabled: true, name: 'MY BOX'},
            4: {enabled: true, name: 'bibimbap'},
            5: {enabled: true, name: 'XIAOXIONG® RAMEN'},
            6: {enabled: true, name: 'Menu Almoço'},
        }

        this.settings = {
            checkIP: false,
            order: true,
            delivery: false,
            reserver: false,
            isFestiveDay: false,
            useFandays: false,
            useChildrenDiscount: false,
            dividerTime: 17,
        }

        this.shopInfo = {
            restaurantName:"Default Restaurant Name",
            phoneNumber: "",
            location: {
                street: "",
                city: "",
                region: "",
                country: "",
                postcode: "",
            },
            latitudeAndLongitude:{
                latitude: undefined,
                longitude: undefined,
            },
            logoPath: "",
        }

        this.pickupData = {
            timeInterval: 15, // 每隔15分钟取一次餐
            beginEndInterval: {}, // 默认从12点到15点，19点到23点
            excludeDates: {
                week:[],
                month:[],
                dates:[],
            },
        }
        this.reserverData = {
            timeInterval: 15, // 每隔15分钟取一次餐
            beginEndInterval: {}, // 默认从12点到15点，19点到23点
            excludeDates: {
                week:[],
                month:[],
                dates:[],
            },
            excludeDiscountDates: [],
        }
        this.currentPageID = 1
        this.currentTakeWayPageID = 1

        this.shopType = {
            dineIn: process.env.DINE_IN? (process.env.DINE_IN=="true") : true,
            takeAway: process.env.TAKE_AWAY? (process.env.TAKE_AWAY=="true") : true,
        }

        this.childrenPricePercentage = 50
        this.weekPrice = new WeekPrice(this.settings.dividerTime)
        this.childrenWeekPrice = new WeekPrice(this.settings.dividerTime)

        this.initTables()
        this.pickupData.beginEndInterval = this.initBeginEndInterval()
        this.reserverData.beginEndInterval = this.initBeginEndInterval()

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
    getPermissionsControl(){
        return this.permissionsControl
    }

    getPriceData(){
        const result = {
            weekPrice: this.weekPrice.getAllPrices(),
            childrenWeekPrice: this.childrenWeekPrice.getAllPrices(),
            childrenPricePercentage: this.childrenPricePercentage,
        }
        return result
    }

    getPeopleCurrentPriceData(tableId){
        let success = false
        const data = []
        const peopleType = this.tables.getTableById(tableId).peopleType
        for(const key in peopleType){
            const price = key.toLowerCase().includes("adult") ? this.getAdultCurrentPrice() : this.getChildrenCurrentPrice()
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

    getAdultCurrentPrice(){
        return this.weekPrice.getCurrentPrice()
    }

    getChildrenCurrentPrice(){
        const childrenPrice = this.settings.useChildrenDiscount?
            (this.getAdultCurrentPrice() * this.childrenPricePercentage / 100 ) : this.childrenWeekPrice.getCurrentPrice()
        // console.log("getChildrenCurrentPrice:",childrenPrice)
        return childrenPrice
    }

    getPickupData(){
        const result = {}
        for(const key in this.pickupData){
            result[key] = this.pickupData[key]
        }
        return result
    }

    getReserverData(){
        const result = {}
        for(const key in this.reserverData){
            result[key] = this.reserverData[key]
        }
        return result
    }

    getWeekPrice(){
        let success = false
        if(this.weekPrice){
            success = true
        }
        return {success: success, data: this.weekPrice}
    }

    getChildrenWeekPrice(){
        let success = false
        if(this.childrenWeekPrice){
            success = true
        }
        return {success: success, data: this.childrenWeekPrice}
    }

    getChildrenPricePercentage(){
        let success = false
        if(this.childrenPricePercentage){
            success = true
        }
        return {success: success, data: this.childrenPricePercentage}
    }

    getPrintModel(){
        let success = false
        if(this.printModel){
            success = true
        }
        return {success:success, data:this.printModel}
    }

    // 所有 Update 函数
    updatePermissionsControl(value){
        this.permissionsControl = value
        console.log("update PermissionsControl:", this.permissionsControl)
    }

    updateCustomDishesControl(value){
        this.customDishesControl = value
        console.log("update CustomDishesControl:", this.customDishesControl)
    }

    updateSettings(key, value) {
        this.settings[key] = value
        console.log("update settings: ", key,this.settings[key])
    }

    updateShopInfo(key, value){
        this.shopInfo[key] = value
        console.log("update shop_info:", key, this.shopInfo[key])
    }

    updatePickupDate(key, value){
        this.pickupData[key] = value
        console.log("update pickupDate: ", key,this.pickupData[key])
    }

    updateReserverDate(key, value){
        this.reserverData[key] = value
        console.log("update reserverData: ", key,this.reserverData[key])
    }

    updateChildrenPricePercentage(percentage){
        this.childrenPricePercentage = percentage
        return this.childrenPricePercentage
    }

    updateWeekPrice(key,value){
        if(key == 'childrenWeekPrice'){
            return this.childrenWeekPrice.setAllPrices(value)
        }else{
            return this.weekPrice.setAllPrices(value)
        }
    }

    updatePrintModel(key, value){
        this.printModel[key] = value
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
                for (const k of Object.keys(value)) {
                    this.permissionsControl[k] = value[k];
                }
                return this.permissionsControl;
            },
            customDishesControl: (value) => {
                if (!value) return this.customDishesControl;
                for (const k of Object.keys(value)) {
                    this.customDishesControl[k] = value[k];
                }
                return this.customDishesControl;
            },
            settings: (value) => {
                if (!value) return this.settings;
                for (const k of Object.keys(value)) {
                    this.settings[k] = value[k];
                }
                return this.settings;
            },
            shopInfo: (value) => {
                if (!value) return this.shopInfo;
                for (const k of Object.keys(value)) {
                    this.shopInfo[k] = value[k];
                }
                return this.shopInfo;
            },
            pickupData: (value) => {
                if (!value) return this.pickupData;
                for (const k of Object.keys(value)) {
                    this.pickupData[k] = value[k];
                }
                return this.pickupData;
            },
            weekPrice: (value) => {
                if (!value) return this.weekPrice;
                for (const k of Object.keys(value)) {
                    this.weekPrice[k] = value[k];
                }
                return this.weekPrice;
            },
            childrenWeekPrice: (value) => {
                if (!value) return this.childrenWeekPrice;
                for (const k of Object.keys(value)) {
                    this.childrenWeekPrice[k] = value[k];
                }
                return this.childrenWeekPrice;
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

    getTableTotalAmout(tableId) {
        const table = this.tables.getTableById(tableId)
        if (table == null) throw new Error('Not found the table')
        const tableOrdersAmount = parseFloat(table.getTableOrdersTotalAmount())

        const adultPrice = this.getAdultCurrentPrice()
        const childrenPrice = this.getChildrenCurrentPrice()
        const tablePeoplesAmount = parseFloat(table.getTablePeopleTotalAmount(adultPrice, childrenPrice))

        const adultQty = table.peopleType.adults
        const childrenQty = table.peopleType.children

        return {
            total: (tableOrdersAmount + tablePeoplesAmount).toFixed(2),
            adultPrice: {quantity: adultQty,price: adultPrice},
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
        trans(instance)
        resetExcludeDates(instance)

        return instance

        function trans(instance){
            if(instance.pickupData) {
                if(instance.pickupData.beginEndInterval && instance.pickupData.timeInterval){
                    instance.pickupData = {timeInterval: instance.pickupData.timeInterval, beginEndInterval: instance.pickupData.beginEndInterval}
                    logger.info("新pickupData keys: "+Object.keys(instance.pickupData))
                }
            }
        }

        function resetExcludeDates(instance){

            instance.pickupData.excludeDates = {
                week:[],
                month:[],
                dates:[],
            }

            instance.reserverData.excludeDates = {
                week:[],
                month:[],
                dates:[],
            }

        }
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
}

const appState = new AppState()

module.exports = {appState, AppState}
