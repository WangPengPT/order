const { webPageDesignService } = require("../services/webPageDesignService")
const { logger } = require('../utils/logger.js')


class WebPageDesignSocket{
    constructor(io) {
        this.io = io
    }

    getPageById(id, callback) {
        logger.info(`管理端获取编辑页面数据 - 编号: ${id}`)
        const result = webPageDesignService.getWebpageById(id)
        if (result.success) {
            logger.info(`获取成功`)
        } else {
            logger.info(`获取失败`)
            logger.info(`失败原因: ${result.data}`)
        }
        callback(result)
    }

    getAllPageInfo() {
        return webPageDesignService.getAllPageInformation()
    }

     registerHandlers(socket) {
        socket.on("manager_get_page", (id, cb) => { this.getPageById(id, cb) })
        socket.emit("manager_get_all_pagesInfo", this.getAllPageInfo())
     }
}

module.exports = { WebPageDesignSocket }