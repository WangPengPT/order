const { Pages } = require("../model/pages");
const DB = require('../db');
const { Page } = require("../model/page");

class WebPageRepository {
    constructor(tableName = "web_page") {
        this.tableName = tableName;
    }

    async getPageById(pageId, session = null) {
        const raw = await DB.get(this.tableName, pageId, null,session)
        if (!raw) return null
        const page = Page.fromJSON(raw.value)
        return page
    }

    async savePage(page, id = "default", session = null) {
        try {
            const json = page.toJSON()
            await DB.set(this.tableName, {
                id: id,
                value: json
            }, session);
        } catch (error) {
            console.error("❌ 保存 Page 失败:", error);
            throw error;
        }
    }

    async savePages(pages, session = null) {
        pages.forEach((page) => {
            this.savePage(page, page.id, session)
        })
    }

    async updatePage(page, session = null) {
        const json = page.toJSON()
        DB.setValue(this.tableName, page.id, json,session)
    }

    async deletePage(pageId, session = null) {
        DB.del(this.tableName, pageId, session)
    }

    /**
     * 
     * @param {String | Number} id 
     * @param {*} session 
     * @returns {Pages}
     */
    async getPages(session = null) {
        try {
            const result = await DB.getAll(this.tableName, session)
            if (!result) {
                logger.info(`repo: ⚠ 未能找到 Pages 数据`);
                return null;
            }
            if (!Array.isArray(result)) throw new Error("Loaded page isn't array")
            const pages = new Pages()
            result.forEach(data => {
                const page = Page.fromJSON(data.value)
                pages.add(page)
            })
            return pages
        } catch (error) {
            console.error("❌ 读取 Pages 失败:", error);
            throw error;
        }
    }

    async hasDatas(session = null) {
        const datas = await DB.getAll(this.tableName, session)
        if (!datas) return false;
        if (!Array.isArray(datas)) throw new Error("Type error")
        return datas.length !== 0
    }

    async create(page, session = null) {
        const json = page.toJSON()
        await DB.set(this.tableName, json, session)
    }

}

module.exports = WebPageRepository;