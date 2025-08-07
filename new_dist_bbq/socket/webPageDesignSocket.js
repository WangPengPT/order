const { webPageDesignService } = require("../services/webPageDesignService")
const { logger } = require('../utils/logger.js')


class WebPageDesignSocket {
    constructor(io) {
        this.io = io
    }

    savePageData(id, pageData, callback) {
        logger.info(`保存页面信息 - 编号: ${id}`)
        const result = webPageDesignService.savePageData(id, pageData)
        if (result.success) {
            logger.info("页面信息保存成功")
        } else {
            logger.info("页面信息保存失败")
            logger.info(`失败原因: ${result.data}`)
        }
        callback(result)
    }

    getPageById(id, callback) {
        logger.info(`管理端获取编辑页面数据 - 编号: ${id}`)
        const result = webPageDesignService.getWebpageDataById(id)
        if (result.success) {
            logger.info(`编辑页面数据获取成功`)
        } else {
            logger.info(`编辑页面数据获取失败`)
            logger.info(`失败原因: ${result.data}`)
        }
        callback(result)
    }

    getAllPageInfo() {
        return webPageDesignService.getAllPageInformation()
    }

    getPageWelcomeImages(id, cb) {
        const images = webPageDesignService.getPageWelcomeImages(id)
        cb(images)
    }

    deleteDescriptionIamges(id, paths, callback) {
        logger.info(`更新图片: ${paths}`)
        const pageId = Number(id)
        const result = webPageDesignService.deleteDescriptionIamges(pageId, paths)
        if (result.success) {
            logger.info(`图片更新成功`)
        } else {
            logger.info(`图片更新成失败`)
            logger.info(`失败原因: ${result.data}`)
        }
        callback(result)
    }

    addPage(name, description, callback) {
        logger.info(`创建新的页面`)
        const result = webPageDesignService.addPage(name, description)
        if (result.success) {
            logger.info(`新的页面创建成功`)
        } else {
            logger.info(`新的页面创建失败`)
            logger.info(`失败原因: ${result.data}`)
        }
        callback(result)

    }

    deletePage(id, callback) {
        logger.info(`删除页面`)
        const result = webPageDesignService.deletePage(id)
        if (result.success) {
            logger.info(`页面删除成功`)
        } else {
            logger.info(`页面删除失败`)
            logger.info(`失败原因: ${result.data}`)
        }
        callback(result)
    }

    refrehPage(callback) {
        const result = webPageDesignService.getAllPageInformation()
        callback(result)
    }

    applayPage(id, callback) {
        logger.info(`更新客户端主页`)
        const result = webPageDesignService.applayPage(id)
        if (result.success) {
            logger.info(`客户端主页更新成功`)
        } else {
            logger.info(`客户端主页更新失败`)
            logger.info(`失败原因: ${result.data}`)
        }
        callback(result)
    }

    getCurrentWelcomePage() {
        logger.info(`客户端获取页面`)
        const result = webPageDesignService.getCurrentPage()
        if (result.success) {
            logger.info(`客户端页面获取成功`)
        } else {
            logger.info(`客户端页面获取失败`)
            logger.info(`失败原因: ${result.data}`)
        }
        return result
    }

    registerHandlers(socket) {
        socket.on("manager_get_page", (id, cb) => { this.getPageById(id, cb) })
        socket.on("manager_get_welcome_images", (id, cb) => { this.getPageWelcomeImages(id, cb) })
        socket.emit("manager_get_all_pagesInfo", this.getAllPageInfo())

        socket.on("manager_refresh_pages", (callback) => this.refrehPage(callback))
        socket.on("manager_add_page", ({ name: name, description: description }, callback) => this.addPage(name, description,callback))
        socket.on("manager_delete_descrition_images", ({ id: id, paths: paths }, callback) => this.deleteDescriptionIamges(id, paths, callback))
        socket.on("manager_save_page_data", ({ id: id, pageData: pageData }, callback) => this.savePageData(id, pageData, callback))
        socket.on("manager_delete_page", (id, callback) => this.deletePage(id, callback))

        socket.on("manager_apply_welcomePage", (id, callback) => this.applayPage(id, callback))

        socket.emit("client_current_welcome_page", this.getCurrentWelcomePage())
    }
}

module.exports = { WebPageDesignSocket }