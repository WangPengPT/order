const AppStateService = require("../services/appStateService.js");
const { logger } = require('../utils/logger.js')

class AppStateSocket {
    constructor(io, appStateService = new AppStateService()) {
        this.appStateService = appStateService,
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


    管理端更新价格
    updateWeekPrice(value, callback) {
        logger.info(`管理端更改价格`)
        const res = this.appStateService.updateWeekPrice(value)
        if (res.success) {
            logger.info(`管理端更改价格成功`)
        } else {
            logger.info(`管理端更改价格失败`)
            logger.info(`失败原因: ${res.data}`)
        }
        callback(res)
    }

    // 管理端获取数据
    managerGetData(key, value){
        let result
        switch (key){
            case "menu":
                result = this.appStateService.getMenuAndTab()
                break
            case "weekPrice":
                result = this.appStateService.appStateRepository.appState.getWeekPrice()
                break
            case "children_week_price":
                result = this.appStateService.appStateRepository.appState.getChildrenWeekPrice()
                break
            case "children_price_percentage":
                result = this.appStateService.appStateRepository.appState.getChildrenPricePercentage()
                break
            default:
                result = {success: false, data: "Not Found Get Key"}
        }
        return result
    }

    // 管理端更新数据
    managerUpdateData(key, value, callback){
        switch (key){
            case "settings":
                this.updateSettings(value, callback)
                break
            case "week_price":
                this.updateWeekPrice(value, callback)
                break

            default:
                callback({success: false, data: "Not Found Update Key"})
        }
    }

    registerHandlers(socket) {

        socket.on("manager_get", (key, value, callback)=>{callback(this.managerGetData(key, value))})

        // socket.on("manager_get_menu", (value, bc) => { bc(this.appStateService.getMenuAndTab()) })

        socket.on("manager_update", (key, value,callback) => {this.managerUpdateData(key, value, callback)})
        // socket.on("manager_update_settings", (key,value,callback) => {this.updateSettings(key, value, callback)})

        // socket.on("update_week_price", (value, callback) => { this.updateWeekPrice(value, callback) })

        socket.on("manager_refresh_table", (value, cb) => { cb(this.appStateService.getAllTables()) })

        // 发送菜单数据给用户端和管理端
        socket.emit("menu_data", this.appStateService.appStateRepository.appState.menu, this.appStateService.appStateRepository.appState.orderMenuTab);

        socket.emit("settings_data", this.appStateService.appStateRepository.appState.settings)
        socket.emit("price_data", this.appStateService.appStateRepository.appState.getPriceData())
    }

}

module.exports = { AppStateSocket }