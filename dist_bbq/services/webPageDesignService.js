const { pagesManager, Pages } = require("../model/pages")
const DB = require('../db');
const db = require('../filedb.js');
const { logger } = require("../utils/logger.js");
const path = require("path");
const { Page } = require("../model/page.js");
const { appState } = require("../state.js");
const WebPageRepository = require("../repositories/webpageRepository.js");

class WebPageDesignService {

    constructor(webPageRepository = new WebPageRepository()) {
        this.webPageRepository = webPageRepository
    }

    async getWebpageById(id) {
        try {
            return await DB.withTransaction(async (session) => {
                const ID = Number(id)
                const page = await this.webPageRepository.getPageById(ID, session)
                if (!page) throw new Error("Not found the page")
                const jsonPage = page.toJSON()
                return {
                    success: true,
                    data: jsonPage
                }
            })
        } catch (error) {
            console.log("Unexpected Error", error.message)
            return {
                success: false,
                data: error.message
            }
        }

    }

    async initialize() {
        await DB.withTransaction(async (session) => {
            const hasData = await this.webPageRepository.hasDatas(session)
            if (hasData) {
                logger.info("找到页面信息，载入现有数据")

                const pagesManager = await this.webPageRepository.getPages(session)
                if (pagesManager !== null) {
                    pagesManager.pages.forEach(page => {
                        page.loadWelcomeImages()
                        page.loadWelcomeLogo()
                    })
                }
            } else {
                const newPages = new Pages()
                await this.webPageRepository.savePages(newPages.pages.values(), session)
                logger.info("未找到页面信息，初始化数据")
            }
        })
    }

    async savePageData(id, pageData) {
        try {
            return await DB.withTransaction(async (session) => {
                const pageId = Number(id)
                const page = await this.webPageRepository.getPageById(pageId, session)
                if (!page || page === undefined) throw new Error("Not found the page")
                if (page.data) {
                    page.data = pageData
                    this.webPageRepository.savePage(page, page.id, session)
                    return {
                        success: true,
                        data: page.data
                    }
                } else {
                    throw new Error("Not found the page data")
                }
            })

        } catch (error) {
            console.log("Unexpected Error", error.message)
            return {
                success: false,
                data: error.message
            }
        }
    }

    async savePages() {
        try {
            await this.webPageRepository.savePages()
        } catch (error) {
            console.log("error web service: ", error.message)
        }
    }

    async addPage(name, description) {
        try {
            return await DB.withTransaction(async (session) => {
                const newId = this.webPageRepository.getPages(session).length + 1
                const newPage = new Page({ name: name, description: description, id: newId })

                await this.webPageRepository.create(newPage, session)

                const page = await this.webPageRepository.getPageById(newPage.id, session)
                if (!page) throw new Error("Faild create new page")
                const json = page.toJSON()
                return {
                    success: true,
                    data: json
                }
            })

        } catch (error) {
            console.log("Unexpected Error", error.message)
            return {
                success: false,
                data: error.message
            }
        }
    }

    async deletePage(id) {
        try {
            return await DB.withTransaction(async (session) => {
                const page = await this.webPageRepository.getPageById(id, session)
                if (!page) throw new Error("Not found the page")
                const imagesPath = page.imagesPath
                db.removePageImage(imagesPath)
                await this.webPageRepository.deletePage(id, session)
                const find = this.webPageRepository.getPageById(id, session)
                if (find) new Error("Delete page faild")
                return {
                    success: true,
                    data: undefined
                }
            })

        } catch (error) {
            console.log("Unexpected Error", error.message)
            return {
                success: false,
                data: error.message
            }
        }
    }

    async uploadedWelcomeImages(id, imagesPath) {
        try {
            return await DB.withTransaction(async (session) => {
                const pageId = Number(id)
                const page = await this.webPageRepository.getPageById(pageId, session)
                if (!page) new Error("Not found the page")
                page.updateWelcomeImges(imagesPath)
                this.webPageRepository.updatePage(page, session)
                return {
                    success: true,
                    data: page.data
                }
            })

        } catch (error) {
            console.log("Unexpected Error", error.message)
            return {
                success: false,
                data: error.message
            }
        }
    }

    async uploadedWelcomeLogo(id, imagePath) {
        try {
            return await DB.withTransaction(async (session) => {
                const pageId = Number(id)
                const page = await this.webPageRepository.getPageById(pageId, session)
                if (!page) new Error("Not found the page")
                //检测是否有现有logo
                //删除之前的
                const oldLogoPath = page.data.logoPath
                if (oldLogoPath) {
                    //删除之前的
                    db.deleteOldLogo(oldLogoPath)
                }
                page.updateWelcomeLogo(imagePath)
                this.webPageRepository.updatePage(page, session)
                return {
                    success: true,
                    data: page.data
                }
            })
        } catch (error) {
            console.log("Unexpected Error", error.message)
            return {
                success: false,
                data: error.message
            }
        }
    }

    async getAllPageInformation() {
        try {
            const res = []
            const pagesManager = await this.webPageRepository.getPages()
            pagesManager.pages.forEach((page) => {
                res.push({
                    id: page.id,
                    name: page.name,
                    description: page.description
                })
            })
            return {
                success: true,
                data: res
            }
        } catch (error) {
            console.log("Unexpected Error", error.message)
            return {
                success: false,
                data: error.message
            }
        }
    }

    // async getPageWelcomeImages(id) {
    //     try {
    //         const pageId = Number(id)
    //         const page = await this.webPageRepository.getPageById(pageId)
    //         if (!page || page === undefined) new Error("Not found the page")
    //         const imagesDescription = page.data.images_description
    //         return {
    //             success: true,
    //             data: imagesDescription
    //         }
    //     } catch (error) {
    //         console.log("Unexpected Error", error.message)
    //         return {
    //             success: false,
    //             data: error.message
    //         }
    //     }
    // }

    async deleteDescriptionIamges(id, paths) {

        try {
            return await DB.withTransaction(async (session) => {
                if (paths.length === 0) throw new Error("The paths id empty")
                //  console.log("the page: ", id)
                const page = await this.webPageRepository.getPageById(id, session)
                if (!page || page === undefined) throw new Error("Not found the page")
                const imageDescription = page.data.images_description
                imageDescription.images = imageDescription.images.filter(image => !paths.includes(image.imagePath))
                const names = paths.map(p => path.basename(p));
                db.deleteWelcomeImages(page.imagesPath, names)
                await this.webPageRepository.updatePage(page, session)
                return {
                    success: true,
                    data: imageDescription
                }
            })

        } catch (error) {
            console.log("Unexpected Error", error.message)
            return {
                success: false,
                data: error.message
            }
        }

    }

    async applayPage(id) {
        try {
            const pageID = Number(id)
            const page = await this.webPageRepository.getPageById(id)
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

    async getCurrentPage() {
        try {
            const current = appState.currentPageID
            if (!current) throw new Error("Undefined currentPageId")
            const pageID = Number(current)
            const page = await this.webPageRepository.getPageById(pageID)
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

module.exports = { webPageDesignService, WebPageDesignService }