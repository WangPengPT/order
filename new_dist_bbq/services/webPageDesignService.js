const { pagesManager } = require("../model/pages")
const db = require('../filedb.js');
const { logger } = require("../utils/logger.js");
const path = require("path");
const { Page } = require("../model/page.js");
const { appState } = require("../state.js");

class WebPageDesignService {

    getWebpageDataById(id) {
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

    getWebpageById(id) {
        try {
            const page = pagesManager.get(Number(id))
            if (!page || page === undefined) new Error("Not found the page")
            return {
                success: true,
                data: page
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
        if (db.hasPageFiles()) {
            logger.info("找到页面信息，载入现有数据")
            this.loadPages()
        } else {
            logger.info("未找到页面信息，初始化数据")
        }
    }

    savePageData(id, pageData) {
        try {
            const pageId = Number(id)
            const page = pagesManager.get(pageId)
            if (!page || page === undefined) throw new Error("Not found the page")
            if (page.data) {
                page.data = pageData
                return {
                    success: true,
                    data: page.data
                }
            } else {
                throw new Error("Not found the page data")
            }
        } catch (error) {
            console.log("Unexpected Error", error.message)
            return {
                success: false,
                data: error.message
            }
        }
    }

    loadPages() {
        pagesManager.loadFromDisk()
    }

    savePage(page) {
        const name = `${page.name}_${page.id}.json`;
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

    addPage(name, description) {
        try {
            const newPage = new Page({ name: name, description: description })
            const newPageID = pagesManager.add(newPage)
            if (!newPageID) throw new Error("Can not add page")
            const page = pagesManager.get(newPageID)
            if (!page) throw new Error("Faild create new page")
            const json = page.toJSON()
            return {
                success: true,
                data: json
            }
        } catch (error) {
            console.log("Unexpected Error", error.message)
            return {
                success: false,
                data: error.message
            }
        }
    }

    deletePage(id) {
        try {
            const page = pagesManager.get(id)
            if (!page) throw new Error("Not found the page")
            const imagesPath = page.imagesPath
            db.removePageImage(imagesPath)
            const name = `${page.name}_${page.id}.json`;
            db.removePageData(name)
            const res = pagesManager.deletePage(id)
            if (!res) throw new Error("Faild delete page")
            return {
                success: true,
                data: undefined
            }
        } catch (error) {
            console.log("Unexpected Error", error.message)
            return {
                success: false,
                data: error.message
            }
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

    uploadedWelcomeLogo(id, imagePath) {
        try {
            const pageId = Number(id)
            const page = pagesManager.get(pageId)
            if (!page || page === undefined) new Error("Not found the page")
            //检测是否有现有logo
            //删除之前的
            const oldLogoPath = page.data.logoPath
            if (oldLogoPath) {
                //删除之前的
                db.deleteOldLogo(oldLogoPath)
            }
            pagesManager.uploadedWelcomeLogo(pageId, imagePath)
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

    deleteDescriptionIamges(id, paths) {

        try {
            if (paths.length === 0) throw new Error("The paths id empty")
            //  console.log("the page: ", id)
            const page = pagesManager.get(id)
            if (!page || page === undefined) throw new Error("Not found the page")
            const imageDescription = page.data.images_description
            imageDescription.images = imageDescription.images.filter(image => !paths.includes(image.imagePath))
            const names = paths.map(p => path.basename(p));
            db.deleteWelcomeImages(names)
            return {
                success: true,
                data: imageDescription
            }
        } catch (error) {
            console.log("Unexpected Error", error.message)
            return {
                success: false,
                data: error.message
            }
        }

    }

    applayPage(id) {
        try {
            const pageID = Number(id)
            const page = pagesManager.get(pageID)
            if (!page) throw new Error("Not found the page")
            appState.currentPageID = pageID
            if (appState.currentPageID !== pageID) throw new Error("Faild update current page")
            return {
                success: true,
                data: undefined
            }
        } catch (error) {
            console.log("Unexpected Error", error.message)
            return {
                success: false,
                data: error.message
            }
        }
    }

    getCurrentPage() {
        try {
            const current = appState.currentPageID
            if (!current) throw new Error("Undefined currentPageId")
            const pageID = Number(current)
            const page = pagesManager.get(pageID)
            if (!page) throw new Error("Not found the page")
            return {
                success: true,
                data: page.toJSON()
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