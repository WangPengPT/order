const AppStateService = require("../services/appStateService.js");
const { logger } = require('../utils/logger.js')

class AppStateSocket {
    constructor(io, appStateService = new AppStateService()) {
        this.appStateService = appStateService,
            this.io = io
    }

    // emitHasBoxStatus() {
    //     this.appStateService.appStateRepository.appState.socket_io.emit("manager_fandays", this.appStateService.getHasBox())
    //     this.appStateService.appStateRepository.appState.socket_io.emit("client_fandays", this.appStateService.getHasBox())
    // }

    updateHasBibimbap(socket, value, callback) {
        logger.info(`管理端更新石锅拌饭状态-${value}`)
        const result = this.appStateService.updateHasBibimbap(value)
        if (result.success) {
            logger.info(`管理端更新石锅拌饭成功`)
            this.io.emit("clent_send_hasBibimbap", this.appStateService.appStateRepository.appState.hasBibimbap)
        } else {
            logger.info(`管理端更新石锅拌饭失败`)
            logger.info(`失败原因: ${result.data}`)
        }
        callback(result)
    }

    updateHasBox(socket, value, callback) {
        logger.info(`管理端更新九宫格状态-${value}`)
        const result = this.appStateService.updateHasBox(value)
        if (result.success) {
            logger.info(`管理端更新九宫格成功`)
            this.io.emit("clent_send_hasBox", this.appStateService.appStateRepository.appState.hasBox)
        } else {
            logger.info(`管理端更新九宫格失败`)
            logger.info(`失败原因: ${result.data}`)
        }
        callback(result)
    }

    updateCheckIp(value, callback) {
        this.appStateService.appStateRepository.appState.checkIP = value;
        const result = {
            success: true,
            data: value
        }
        logger.info(`manager_update_checkIP return: ${result}`)
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

        socket.emit("manager_send_hasBibimbap", this.appStateService.appStateRepository.appState.hasBibimbap)
        socket.emit("manager_send_checkIP", this.appStateService.appStateRepository.appState.checkIP)

        socket.on("manager_update_hasBibimbap", (value, callback) => { this.updateHasBibimbap(socket, value, callback) })
        socket.on("manager_update_hasBox", (value, callback) => { this.updateHasBox(socket, value, callback) })

        socket.on("manager_update_checkIP", (value, callback) => { this.updateCheckIp(value, callback) })

        socket.on("update_people_price", (value, cb) => { this.updatePrice(value, cb) })

        socket.on("manager_refresh_table", (value, cb) => { cb(this.appStateService.getAllTables()) })

        // 发送菜单数据给用户端和管理端
        socket.emit("menu_data", this.appStateService.appStateRepository.appState.menu, this.appStateService.appStateRepository.appState.orderMenuTab);

    }

}

module.exports = { AppStateSocket }