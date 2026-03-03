const DB = require('../db');
const { logger } = require('../utils/logger.js');

class AlertMessageRepository {
    constructor(tableName = 'alert_message') {
        this.tableName = tableName;
    }

    // 保存 Alert/Message
    async save(type, id, data, session = null) {
        try {
            await DB.set(this.tableName, {
                id: id,
                type: type,
                value: {...data, number: 1},
            }, session);
            logger.info(`repo: ✅ 消息警告保存成功 [id=${id}]`)
        } catch (err) {
            logger.error(`repo:❌ 保存消息警告失败: ${err}`);
            throw err;
        }
    }

    async get(id, session = null) {
        try {
            const result = await DB.get(this.tableName, id, session);
            if (!result) {
                logger.warn(`repo: ⚠ 未能找到消息警告数据 [id=${id}]`);
                return null;
            }
            return result.value
        } catch (err) {
            logger.error(`repo:❌ 获取消息警告失败: ${err}`);
            throw err;
        }
    }

    async getByType(type, session = null) {
        try{
            const result = []

            const all = await DB.getAll(this.tableName, session)
            for(const data of all){
                if(data.type === type){
                    result.push(data.value)
                }
            }
            return result

        }catch (error){
            logger.error(`repo:❌ 获取${type}失败: ${error}`)
        }
    }

    async increase(id, session = null) {
        try{
            const oldData = await this.get(id, session)
            const newData = {
                ...oldData,
                number: Number(oldData.number)+1,
            }
            await DB.setValue(this.tableName, id, newData, session);
            logger.info(`repo: ✅ 消息警告数量+1成功 [id=${id}, number=${newData.number}]`);
        } catch (error){
            logger.error(`repo:❌ 消息警告数量+1失败: ${error}`);
            throw error;
        }
    }

    async update(id, data, session = null) {
        try {
            const oldData = await this.get(id, session)
            const newData = {
                ...oldData,
                ...data,
            }
            await DB.setValue(this.tableName, id, newData, session)
            logger.info(`repo: ✅ 消息警告更新成功 [id=${id}]`);
        } catch (error) {
            logger.error(`repo:❌ 更新消息警告失败: ${error}`);
            throw error;
        }
    }

    async delete(id, session = null) {
        try{
            await DB.del(this.tableName, id,session)
            logger.info(`repo: ✅ 消息警告删除成功 [id=${id}]`)
        } catch (error){
            logger.error(`repo:❌ 删除消息警告失败: ${error}`);
        }

    }


}

module.exports = AlertMessageRepository;