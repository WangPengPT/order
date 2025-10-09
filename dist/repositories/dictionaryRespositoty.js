const DB = require('../db.js');
const { logger } = require('../utils/logger.js');

class DictionaryRespository{
    constructor(tableName = "dictionary") {
        this.tableName = tableName;
    }

    async get(session = null, id = "default") {
        try {
            const result = await DB.get(this.tableName, id, session);
            if (!result) {
                logger.warn(`repo: ⚠ 未能找到字典数据 [id=${id}]`);
                return null;
            }
            const data = result.value
            return data
        } catch (err) {
            logger.error(`repo:❌ 获取字典失败: ${err}`);
            throw err;
        }
    }

    async save(data, session = null, id = "default") {
        try {
            await DB.set(this.tableName, {
                id: id,
                value: data
            }, session);
        } catch (err) {
            logger.error(`repo:❌ 保存字典失败: ${err}`);
            throw err;
        }
    }

}

module.exports = DictionaryRespository;