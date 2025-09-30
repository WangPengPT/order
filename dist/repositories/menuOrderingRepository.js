const { logger } = require('../utils/logger.js');
const DB = require('../db');

class MenuOrderingRepository {
    constructor(tableName = "menu_ordering") {
        this.tableName = tableName;
    }

    async save(ordering, session = null, id = "default") {
        try {
            const data = ordering
            await DB.set(this.tableName, {
                id: id,
                value: data
            }, session);
        } catch (err) {
            logger.error(`repo:❌ 保存 ordering 失败: ${err}`);
            throw err;
        }
    }

    async get(session = null, id = "default") {
        try {
            const result = await DB.get(this.tableName, id, session);
            if (!result) {
                logger.info(`repo: ⚠ 未能找到 ordering 数据 [id=${id}]`);
                return null;
            }
            return result.value;
        } catch (err) {
           logger.error(`❌ 读取 ordering 失败: ${err}`);
            throw err;
        }
    }

}

module.exports = MenuOrderingRepository;