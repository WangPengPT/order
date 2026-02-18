const AppStateService = require("../services/appStateService.js");
const { logger } = require('../utils/logger.js')
const {MenuService} = require('../services/menuService.js')

class AppStateSocket {
    constructor(io, appStateService = new AppStateService(), menuService = new MenuService()) {
        this.appStateService = appStateService,
        this.menuService = menuService
            this.io = io
    }

    updateSettings(value, callback){
        logger.info(`更新设置数据${value.key}:${value.value}`)
        const result = this.appStateService.updateSettings(value.key, value.value)
        if(result.success){
            logger.info(`管理端更新设置数据${value.key}成功`)
            this.io.emit("client_send_settings", {key: value.key, value: result.data})
            callback({ code: 200, ...result })
        }else{
            logger.error(`管理端更新${value.key}失败`)
            logger.error(`失败原因: ${result.data}`)
            callback({ code: 400, ...result })
        }
    }

    updateInfo(type,value, callback){
        logger.info(`更新${type}信息${value.key}:${value.value}`)
        const result = this.appStateService.updateInfo(type, value.key, value.value)
        if(result.success){
            logger.info(`管理端更新${type}信息${value.key}成功`)
            this.io.emit("client_send_"+type,{key: value.key, value: result.data})
            callback({ code: 200, ...result })
        }else{
            logger.error(`管理端更新${value.key}失败`)
            logger.error(`失败原因: ${result.data}`)
            callback({ code: 400, ...result })
        }
        callback(result)
    }


    // 管理端获取数据
    async managerGetData(key, value, callback){
        try {
            logger.info("Manager get Key:"+key)
            if(value) {logger.info("Manager get value:"+value)}
            let result
            switch (key){
                case "menu":
                    result = await this.menuService.getMenuAndTab()
                    break
                case "weekPrice":
                    result = this.appStateService.appStateRepository.appState.getWeekPrice()
                    break
                case "childrenWeekPrice":
                    result = this.appStateService.appStateRepository.appState.getChildrenWeekPrice()
                    break
                case "childrenPricePercentage":
                    result = this.appStateService.appStateRepository.appState.getChildrenPricePercentage()
                    break
                case "people_data":
                    result = this.appStateService.appStateRepository.appState.getPeopleCurrentPriceData(value.tableId)
                    break
                case 'delivery':
                    result = {success: true, data: this.appStateService.appStateRepository.appState.getPickupData()}
                    break
                case 'homeDelivery':
                    result = {success: true, data: this.appStateService.appStateRepository.appState.getHomeDeliveryData()}
                    break
                case 'reserver':
                    result = {success: true, data:this.appStateService.appStateRepository.appState.getReserverData()}
                    break
                default:
                    result = {success: false, data: "Not Found Get Key"}
            }
            logger.info("Manager get data => "+result.success)
            callback({ code: result.success ? 200 : 404, ...result })
        } catch (error) {
            logger.warn("管理端获取信息失败，意料之外的错误")
            logger.warn(error.message)
            callback({ code: 500, success: false, data: error.message })
        }

    }

    // 管理端更新数据
    managerUpdateData(key, value, callback){
        try{
            logger.info("Manager update "+key+" data => key:" + value.key + " value: " + value.value )
            switch (key){
                case "settings":
                    this.updateSettings(value, callback)
                    break
                case "shop_info":
                case "qrorder_info":
                case "takeaway_info":
                case "delivery_info":
                case "reserver_info":
                case "print_info":
                    this.updateInfo(key,value, callback)
                    break
                default:
                    callback({success: false, data: "Not Found Update Key"})
            }

        }catch ( e ){
            logger.warn("管理端更新信息失败，意料之外的错误")
            logger.warn(e.message)
        }

    }


    async defaultMenuOrdering() {
        logger.info("重新排序菜品")
        await this.menuService.reorganizeAndSaveMenuTab_menu()
        await this.menuService.reorganizeDineMenuTab_custom()
        await this.menuService.reorganizeTakeMenuTab_custom()
    }

    async registerHandlers(socket) {

        // manager get data socket
        socket.on("manager_get", async (key, value, callback) => {await this.managerGetData(key, value, callback)})

        // manager update data socket
        socket.on("manager_update", (key, value,callback) => {this.managerUpdateData(key, value, callback)})

        socket.on("default_menu_order_sorting", () => { this.defaultMenuOrdering() })

        socket.on("manager_refresh_table", (value, cb) => {
            const tables = this.appStateService.getAllTables();
            if (cb) cb(tables)
        })

        socket.on("get_shop_info", (callback) => {
            const info = this.appStateService.appStateRepository.appState.shopInfo;
            if (callback) callback(info);
            socket.emit("shop_info", info)
        })



        socket.emit("settings_data", this.appStateService.appStateRepository.appState.settings)

        // API: send information to manager/client
        socket.emit("shop_info", this.appStateService.appStateRepository.appState.shopInfo)
        socket.emit("qrorder_info", this.appStateService.appStateRepository.appState.qrOrderInfo)
        socket.emit("takeaway_info", this.appStateService.appStateRepository.appState.takeawayInfo)
        socket.emit("delivery_info", this.appStateService.appStateRepository.appState.deliveryInfo)
        socket.emit("reserver_info", this.appStateService.appStateRepository.appState.reserverInfo)
        socket.emit("print_info", this.appStateService.appStateRepository.appState.printInfo)

        // API: send center server's permissions control
        socket.emit("permissions_control", this.appStateService.appStateRepository.appState.permissionsControl)
    }

}

module.exports = { AppStateSocket }