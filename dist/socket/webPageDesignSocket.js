const { Page } = require("../model/page.js")
const { WebPageDesignService } = require("../services/webPageDesignService")
const { logger } = require('../utils/logger.js')


class WebPageDesignSocket {
    constructor(io, webPageDesignService = new WebPageDesignService()) {
        this.io = io
        this.webPageDesignService = webPageDesignService
    }

    async savePageData(id, pageData, callback) {
        logger.info(`保存页面信息 - 编号: ${id}`)
        const result = await this.webPageDesignService.savePageData(id, pageData)
        if (result.success) {
            logger.info("页面信息保存成功")
            callback({ code: 200, ...result })
        } else {
            logger.info("页面信息保存失败")
            logger.info(`失败原因: ${result.data}`)
            callback({ code: 400, ...result })
        }
    }

    async getPageById(id, callback) {
        logger.info(`管理端获取编辑页面数据 - 编号: ${id}`)
        const result = await this.webPageDesignService.getWebpageById(id)
        if (result.success) {
            logger.info(`编辑页面数据获取成功`)
            callback({ code: 200, ...result })
        } else {
            logger.info(`编辑页面数据获取失败`)
            logger.info(`失败原因: ${result.data}`)
            callback({ code: 404, ...result })
        }
    }

    async getAllPageInfo() {
        return await this.webPageDesignService.getAllPageInformation()
    }

    async deleteDescriptionIamges(id, paths, callback) {
        logger.info(`更新图片: ${paths}`)
        const pageId = Number(id)
        const result = await this.webPageDesignService.deleteDescriptionIamges(pageId, paths)
        if (result.success) {
            logger.info(`图片更新成功`)
            callback({ code: 200, ...result })
        } else {
            logger.info(`图片更新成失败`)
            logger.info(`失败原因: ${result.data}`)
            callback({ code: 400, ...result })
        }
    }

    async addPage(name, description, type, callback) {
        logger.info(`创建新的页面`)
        const result = await this.webPageDesignService.addPage(name, description, type)
        if (result.success) {
            logger.info(`新的页面创建成功`)
            callback({ code: 200, ...result })
        } else {
            logger.info(`新的页面创建失败`)
            logger.info(`失败原因: ${result.data}`)
            callback({ code: 400, ...result })
        }

    }

    async editPage(id, name, description, callback) {
        logger.info("编辑页面")
        const result = await this.webPageDesignService.editPage(id, name, description)
        if (result.success) {
            logger.info(`编辑页面成功`)
            callback({ code: 200, ...result })
        } else {
            logger.info(`编辑页面失败`)
            logger.info(`失败原因: ${result.data}`)
            callback({ code: 400, ...result })
        }
    }

    async deletePage(id, callback) {
        logger.info(`删除页面`)
        const result = await this.webPageDesignService.deletePage(id)
        if (result.success) {
            logger.info(`页面删除成功`)
            callback({ code: 200, ...result })
        } else {
            logger.info(`页面删除失败`)
            logger.info(`失败原因: ${result.data}`)
            callback({ code: 400, ...result })
        }
    }

    async refrehPage(callback) {
        const result = await this.getAllPageInfo();
        if (callback) callback(result)
    }

    async applayPage(id, type, callback) {
        logger.info(`更新客户端主页`)
        const result = await this.webPageDesignService.applayPage(id, type)
        if (result.success) {
            logger.info(`客户端主页更新成功`)
            callback({ code: 200, ...result })
        } else {
            logger.info(`客户端主页更新失败`)
            logger.info(`失败原因: ${result.data}`)
            callback({ code: 400, ...result })
        }
    }
    

    async getCurrentWelcomePage() {
        logger.info(`客户端获取页面`)
        const result = await this.webPageDesignService.getCurrentPage(Page.Type.DINE_IN)
        if (result.success) {
            logger.info(`客户端页面获取成功`)
        } else {
            logger.info(`客户端页面获取失败`)
            logger.info(`失败原因: ${result.data}`)
        }
        return result
    }

    async getCurrentTakeWelcomePage() {
        logger.info(`客户端获取外卖订台页面`)
        const result = await this.webPageDesignService.getCurrentPage(Page.Type.TAKEAWAY)
        if (result.success) {
            logger.info(`客户端页面获取外卖订台成功`)
        } else {
            logger.info(`客户端页面获取外卖订台失败`)
            logger.info(`失败原因: ${result.data}`)
        }
        return result
    }

    async getCurrentTakeWayWelcomePage() {
        logger.info('客户端获取外卖主页页面')
    }

    async registerHandlers(socket) {
        socket.on("manager_get_page", async (id, cb) => { await this.getPageById(id, cb) })
        // socket.on("manager_get_welcome_images", (id, cb) => { this.getPageWelcomeImages(id, cb) })
        socket.emit("manager_get_all_pagesInfo", await this.getAllPageInfo())

        socket.on("manager_refresh_pages", async (callback) => await this.refrehPage(callback))
        socket.on("manager_add_page", async ({ name: name, description: description, type: type }, callback) => await this.addPage(name, description, type,callback))
        socket.on("manager_edit_page", async ({ id: id, name: name, description: description}, callback) => await this.editPage(id, name, description, callback))
        socket.on("manager_delete_descrition_images", async ({ id: id, paths: paths }, callback) => await this.deleteDescriptionIamges(id, paths, callback))
        socket.on("manager_save_page_data", async ({ id: id, pageData: pageData }, callback) => await this.savePageData(id, pageData, callback))
        socket.on("manager_delete_page", async (id, callback) => await this.deletePage(id, callback))

        socket.on("manager_apply_welcomePage", async (id, type, callback) => await this.applayPage(id, type, callback))

        socket.emit("client_current_welcome_page", await this.getCurrentWelcomePage())
        socket.emit("client_current_welcome_takeaway_page", await this.getCurrentTakeWelcomePage())

    }
}

module.exports = { WebPageDesignSocket }