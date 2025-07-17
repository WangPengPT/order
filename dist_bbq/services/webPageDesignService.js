const { pagesManager } = require("../model/pages")
const db = require('../filedb.js');
const { logger } = require("../utils/logger.js");

class WebPageDesignService {

    getWebpageById(id) {
        try {
            const page = pagesManager.get(Number(id))
            if (!page || page === undefined) new Error("Not found the page")
            if (page?.data) return { success: true, data: page.data }
            const name = page?.name
            const filename = name + ".json"
            const hasPageFile = db.hasPageFile(filename)
            if (!hasPageFile) throw new Error(`Not fount the file: ${filename}`)
            const pageContent = db.loadPage(filename)
            if (!pageContent) throw new Error("Faild load page content")
            page.data = pageContent
            return {
                success: true,
                data: page.data
            }
        } catch (error) {
            console.log("Unexpected Error", error.message)
            return {
                success: false,
                data: error.message
            }
        }

    }

    loadPagesSafe() {
        if(db.hasPageFiles()) {
            logger.info("找到页面信息，载入现有数据")
            this.loadPages()
        } else {
            logger.info("未找到页面信息，初始化数据")
        }
    }

    loadPages() {
        pagesManager.loadFromDisk()
    }

    savePage(page) {
        const name = page.name + ".json"
        const json = page.toJSON()
        db.savePage(json, name)
    }

    savePages() {
        try {
            pagesManager.pages.forEach((page) => {
                this.savePage(page)
            })
        } catch (error) {
            console.log("error web service: ", error.message)
        }
    }

    uploadedWelcomeImages(id, imagesPath) {
        try {
            const pageId = Number(id)
            const page = pagesManager.get(pageId)
            if (!page || page === undefined) new Error("Not found the page")
            pagesManager.updateWelcomeImages(pageId, imagesPath)
            return {
                success: true,
                data: page.data
            }
        } catch (error) {
            console.log("Unexpected Error", error.message)
            return {
                success: false,
                data: error.message
            }
        }
    }

    getAllPageInformation() {
        try {
            const pages = []
            pagesManager.pages.forEach((page) => {
                pages.push({
                    id: page.id,
                    name: page.name,
                    description: page.description
                })
            })
            return {
                success: true,
                data: pages
            }
        } catch (error) {
            console.log("Unexpected Error", error.message)
            return {
                success: false,
                data: error.message
            }
        }
    }

    getPageWelcomeImages(id) {
        try {
            const pageId = Number(id)
            const page = pagesManager.get(pageId)
            if (!page || page === undefined) new Error("Not found the page")
            const imagesDescription = pagesManager.get(pageId).images_description
            return {
                success: true,
                data: imagesDescription
            }
        } catch (error) {
            console.log("Unexpected Error", error.message)
            return {
                success: false,
                data: error.message
            }
        }
    }
}

const webPageDesignService = new WebPageDesignService()

module.exports = { webPageDesignService }