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
        }else{
            logger.info(`管理端更${value.key}失败`)
            logger.info(`失败原因: ${result.data}`)
        }
        callback(result)
    }

    updatePickupDate(value, callback){
        logger.info(`更新取餐数据${value.key}:${value.value}`)
        const result = this.appStateService.updatePickupDate(value.key, value.value)
        if(result.success){
            logger.info(`管理端更新取餐数据${value.key}成功`)
            this.io.emit("client_send_pickupDate", {key: value.key, value: result.data})
        }else{
            logger.info(`管理端更${value.key}失败`)
            logger.info(`失败原因: ${result.data}`)
        }
        callback(result)
    }

    updateReserverDate(value, callback){
        logger.info(`更新订台数据${value.key}:${value.value}`)
        const result = this.appStateService.updateReserverDate(value.key, value.value)
        if(result.success){
            logger.info(`管理端更新订台数据${value.key}成功`)
            this.io.emit("client_send_reserverDate", {key: value.key, value: result.data})
        }else{
            logger.info(`管理端更${value.key}失败`)
            logger.info(`失败原因: ${result.data}`)
        }
        callback(result)
    }


    updatePriceData(key, value, callback) {
        logger.info(`管理端更改价格`)
        let res
        if(key == 'childrenPricePercentage'){
            res = this.appStateService.updataChildrenPricePercentage(value)
        }else{
            res = this.appStateService.updateWeekPrice(key,value)
        }
        if (res.success) {
            logger.info(`管理端更改价格成功`)
        } else {
            logger.info(`管理端更改价格失败`)
            logger.info(`失败原因: ${res.data}`)
        }
        callback(res)
    }

    updatePrintModel(value, callback){
        logger.info(`管理端更改打印模板`)
        const result = this.appStateService.updatePrintModel(value.key, value.value)
        if(result.success){
            logger.info(`管理端更新订台数据${value.key}成功`)
        }else{
            logger.info(`管理端更${value.key}失败`)
            logger.info(`失败原因: ${result.data}`)
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
                case 'reserver':
                    result = {success: true, data:this.appStateService.appStateRepository.appState.getReserverData()}
                    break
                default:
                    result = {success: false, data: "Not Found Get Key"}
            }
            logger.info("Manager get data => "+result.success)
            callback(result)
        } catch (error) {
            logger.warn("管理端获取信息失败，意料之外的错误")
            logger.warn(error.message)
        }

    }

    // 管理端更新数据
    managerUpdateData(key, value, callback){
        switch (key){
            case "settings":
                this.updateSettings(value, callback)
                break
            case "childrenPricePercentage":
            case "weekPrice":
            case "childrenWeekPrice":
                this.updatePriceData(key, value, callback)
                break
            case "pickup_data":
                this.updatePickupDate(value, callback)
                break
            case "reserver_data":
                this.updateReserverDate(value, callback)
                break
            case "updatePrintModel":
                this.updatePrintModel(value, callback)
                break
            default:
                callback({success: false, data: "Not Found Update Key"})
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

        socket.on("manager_refresh_table", (value, cb) => { cb(this.appStateService.getAllTables()) })

        socket.emit("settings_data", this.appStateService.appStateRepository.appState.settings)
        socket.emit("price_data", this.appStateService.appStateRepository.appState.getPriceData())
        socket.emit("pickup_data", this.appStateService.appStateRepository.appState.getPickupData())
        socket.emit("reserver_data", this.appStateService.appStateRepository.appState.getReserverData())
        socket.emit("printModel_data", this.appStateService.appStateRepository.appState.printModel)
        socket.emit("permissions_control", this.appStateService.appStateRepository.appState.getPermissionsControl())
        socket.emit("manager_get_custom_dish_control", this.appStateService.appStateRepository.appState.customDishesControl)
    }

}

module.exports = { AppStateSocket }