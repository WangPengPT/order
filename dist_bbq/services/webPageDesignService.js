const { pagesManager } = require("../model/pages")
const db = require('../filedb.js');

class WebPageDesignService {

    getWebpageById(id) {
        try {
            const page = pagesManager.get(id)
            if (!page) new Error("Not found the page")
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
}

const webPageDesignService = new WebPageDesignService()

module.exports = { webPageDesignService }