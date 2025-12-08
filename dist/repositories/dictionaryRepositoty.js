const DB = require('../db.js');
const { logger } = require('../utils/logger.js');

class DictionaryRepository {
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
            logger.error(`repo:❌ 获取字典文字失败: ${err}`);
            throw err;
        }
    }

    async update(data, id, session = null) {
        try {
            await DB.setValueByCleanId(this.tableName, id, data, session)
        } catch (error) {
            logger.error(`repo:❌ 更新字典文字失败: ${err}`);
            throw err;
        }
    }

    async getAll(session = null) {
        try {
            const result = []
            const dic = await DB.getAll(this.tableName, session)
            if (dic.length === 0) return []
            for (let word of dic) {
                if (!word.value) continue
                result.push(word.value)
            }
            return result
        } catch (error) {
            logger.error(`repo:❌ 获取字典失败: ${error}`);
            throw error;
        }
    }

    async save(data, id = "default", session = null) {
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

    async hasData(session = null) {
        try {
            const result = await DB.find(this.tableName, {}, session);
            return result.length !== 0
        } catch (error) {
            logger.error(`repo:❌ 检测字典数据失败: ${err}`);
            throw err;
        }
    }

    async saveAll(arrayData, session = null) {
        try {
            for (let data of arrayData) {
                await this.save(data, data.refName, session)
            }
        } catch (error) {
            logger.error(`repo:❌ 保存字典失败: ${error}`);
            throw error;
        }
    }

    async deleteAll(session = null) {
        try {
            await DB.cleanTable(this.tableName, session)
        } catch (error) {
            logger.error(`repo:❌ 清除字典失败: ${error}`);
            throw error;
        }
    }

    async delete(id, session = null) {
        try {
            return await DB.del(this.tableName, id, session)
        } catch (error) {
            logger.error(`repo:❌ 删除字典文字失败: ${error}`);
            throw error;
        }
    }

}

module.exports = DictionaryRepository;