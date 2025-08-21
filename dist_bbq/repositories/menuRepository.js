const DB = require('../db');
const { logger } = require('../utils/logger.js');

class MenuRepository {
    constructor(tableName = "Menu", menu) {
        this.tableName = tableName;
        this.menu = menu
    }

    async save(menu, session, id = "default") {
        try {
            if (typeof menu !== "Array") throw new Error("Menu type invalid")
            const data = menu
            await DB.set(this.tableName, {
                id: id,
                value: data,
                session
            });
            logger.info(`repo: ✅ menu 保存成功 [id=${id}]`);
        } catch (err) {
            logger.error(`repo:❌ 保存 menu 失败: ${err}`);
            throw err;
        }
    }

    async get(session = null, id = "default") {
        try {
            const result = await DB.get(this.tableName, id, session);
            if (!result) {
                logger.warn(`repo: ⚠ 未能找到 Menu 数据 [id=${id}]`);
                return null;
            }
            const data = result.value
            this.menu = data
            return menu
        } catch (err) {
            logger.error(`repo:❌ 保存 menu 失败: ${err}`);
            throw err;
        }
    }

    async update(menu, session = null, id = "default") {
        try {
            if (typeof menu !== "Array") throw new Error("Menu type invalid")
            await DB.setValue(this.tableName, id, menu, session)
            logger.info(`repo: ✅ menu 更新成功 [id=${id}]`);
        } catch (error) {
            logger.error(`repo:❌ 保存 menu 失败: ${err}`);
        }
    }
}

module.exports = MenuRepository;