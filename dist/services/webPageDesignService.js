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
                    // pagesManager.pages.forEach(page => {
                    //     page.loadWelcomeImages()
                    //     page.loadWelcomeLogo()
                    // })
                }
            } else {
                const newPages = new Pages()
                await this.webPageRepository.savePages(newPages.pages.values(), session)
                logger.info("未找到页面信息，初始化数据")
            }
        })
    }

    async editPage(id, name, description) {
        try {
            return await DB.withTransaction(async (session) => {
                const page = await this.webPageRepository.getPageById(id, session)
                page.name = name
                page.description = description
                await this.webPageRepository.updatePage(page, session)

                const newPage = await this.webPageRepository.getPageById(id, session)
                if (newPage.name !== name || newPage.description !== description) {
                    throw new Error("Faild update")
                }
                return {
                    success: true
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

    async savePageData(id, pageData) {
        try {
            return await DB.withTransaction(async (session) => {
                const pageId = Number(id)
                const page = await this.webPageRepository.getPageById(pageId, session)
                if (!page || page === undefined) throw new Error("Not found the page")
                if (page.data) {
                    page.data = pageData
                    await this.webPageRepository.savePage(page, session)

                    const imagesName = this.collectImageNames(pageData).filter(Boolean)

                    const folderImages = db.getPageImages(page.imagesPath)
                    if (folderImages.length !== imagesName.length) {
                        const previous = folderImages
                        const current = imagesName
                        const removed = previous.filter(x => !current.includes(x))
                        console.log("imagesname: ", removed)
                        if (removed.length !== 0) {
                            removed.forEach(it => db.removePageImage(page.imagesPath, it))
                        }

                    }

                    const newPage = await this.webPageRepository.getPageById(pageId, session)

                    return {
                        success: true,
                        data: newPage.data
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

    collectImageNames(obj) {
        const result = []

        function traverse(value) {
            if (!value) return

            if (typeof value === "object") {
                for (const key in value) {
                    if (key === "src" || key === "logoPath") {
                        result.push(value[key])
                    } else {
                        traverse(value[key])
                    }
                }
            } else if (Array.isArray(value)) {
                value.forEach(traverse)
            }
        }

        traverse(obj)
        return result
    }

    async savePages() {
        try {
            await this.webPageRepository.savePages()
        } catch (error) {
            console.log("error web service: ", error.message)
        }
    }

    async addPage(name, description, type) {
        try {

            return await DB.withTransaction(async (session) => {
                const pages = await this.webPageRepository.getPages(session);

                if (!Page.getTypes().includes(type)) {
                    throw new Error("Invalid Page Type");
                }

                // 转成数组后再 filter
                const count = pages.pages.size;
                const nextId = async (ID) => {
                    const page = await this.webPageRepository.getPageById(ID, session)
                    if (page) { 
                        return nextId(ID + 1) 
                    } else {
                        return ID
                    }
                }
                const newId = await nextId(count+1)

                if (typeof newId !== "number" || Number.isNaN(newId)) {
                    throw new Error("Invalid new id");
                }

                const newPage = new Page({ name, description, id: newId, type });
                await this.webPageRepository.savePage(newPage, session);

                const page = await this.webPageRepository.getPageById(newPage.id, session);
                if (!page) throw new Error("Failed to create new page");

                return {
                    success: true,
                    data: page.toJSON()
                };
            });
        } catch (error) {
            console.log("Unexpected Error", error.message);
            return {
                success: false,
                data: error.message
            };
        }
    }


    async deletePage(id) {
        try {
            return await DB.withTransaction(async (session) => {
                const page = await this.webPageRepository.getPageById(id, session)
                if (!page) throw new Error("Not found the page")
                const imagesPath = page.imagesPath
                db.removePageImage(imagesPath, '')
                await this.webPageRepository.deletePage(id, session)
                const find = await this.webPageRepository.getPageById(id, session)
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
                    description: page.description,
                    type: page.type || "Dine-in"
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

    async deleteDescriptionIamges(id, paths) {

        try {
            return await DB.withTransaction(async (session) => {
                if (paths.length === 0) throw new Error("The paths id empty")
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

    async applayPage(id, type) {
        try {
            const pageID = Number(id)
            if (!Page.getTypes().includes(type)) throw new Error("Invalid type page")
            const page = await this.webPageRepository.getPageById(id)
            if (!page) throw new Error("Not found the page")
            if (type === Page.Type.DINE_IN) {
                appState.currentPageID = pageID
            } else {
                appState.currentTakeWayPageID = pageID
            }
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

    async getCurrentPage(type) {
        try {
            if (!Page.getTypes().includes(type)) throw new Error("Invalid Page type")
            const current =
            type === Page.Type.DINE_IN
                ? appState.currentPageID
                : appState.currentTakeWayPageID;
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

    async importPage(data) {
        try {
            return await DB.withTransaction(async (session) => {
                const pages = await this.webPageRepository.getPages(session)
                const last = Array.from(pages.pages.values()).pop()
                const incrementID = async (lastId) => {
                    const hasPage = await this.webPageRepository.getPageById(lastId, session)
                    if (!hasPage) {
                        return lastId
                    } else {
                        return incrementID(lastId + 1)
                    }
                }

                const id = await incrementID(last.id)
                const newPage = Page.fromJSON(data)
                newPage.id = id
                await this.webPageRepository.savePage(newPage, session)

                const verify = await this.webPageRepository.getPageById(id, session)

                if (!verify) throw new Error("Fail import page")

                return {
                    success: true
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

}

const webPageDesignService = new WebPageDesignService()

module.exports = { webPageDesignService, WebPageDesignService }