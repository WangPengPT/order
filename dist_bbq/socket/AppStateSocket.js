const AppStateService = require("../services/appStateService.js");
const { logger } = require('../utils/logger.js')

class AppStateSocket {
    constructor(io, appStateService = new AppStateService()) {
        this.appStateService = appStateService,
            this.io = io
    }

    updateSettings(key, value, callback){
        logger.info('更新设置数据'+key+":",value)
        const result = this.appStateService.updateSettings(key, value)
        if(result.success){
            logger.info(`管理端更新设置数据${key}成功`)
            this.io.emit("client_send_settings", {key: key, value: result.data})
        }else{
            logger.info(`管理端更${key}失败`)
            logger.info(`失败原因: ${result.data}`)
        }
        callback(result)
    }


    // 管理端更新价格
    updatePrice(value, callback) {
        logger.info(`管理端更改价格, 中午价格-${value.lunchPrice}; 晚上价格-${value.dinnerPrice}`)
        const res = this.appStateService.updatePrice(value.lunchPrice, value.dinnerPrice)
        if (res.success) {
            logger.info(`管理端更改价格成功`)
        } else {
            logger.info(`管理端更改价格失败`)
            logger.info(`失败原因: ${result.data}`)
        }
        callback(res)
    }

    registerHandlers(socket) {

        socket.on("manager_get_menu", (value, bc) => { bc(this.appStateService.getMenuAndTab()) })

        socket.on("manager_update_settings", (key,value,callback) => {this.updateSettings(key, value, callback)})

        socket.on("update_people_price", (value, cb) => { this.updatePrice(value, cb) })

        socket.on("manager_refresh_table", (value, cb) => { cb(this.appStateService.getAllTables()) })

        // 发送菜单数据给用户端和管理端
        socket.emit("menu_data", this.appStateService.appStateRepository.appState.menu, this.appStateService.appStateRepository.appState.orderMenuTab);

        socket.emit("settings_data", this.appStateService.appStateRepository.appState.settings)
    }

}

module.exports = { AppStateSocket }