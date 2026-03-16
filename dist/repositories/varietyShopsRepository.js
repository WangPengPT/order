const {logger} = require("../utils/logger");
const DB = require('../db');


class VarietyShopsRepository {

    /*  数据格式
        {
            id: 唯一码
            value:{
                id: 唯一码
                name_pt: 葡语名称
                name_en: 英语名称
                name_cn: 中文名称
            }
        }
    */

    constructor( tableName = 'variety_shops') {
        this.tableName = tableName;
    }

    async save(id, data, session = null){
        try{
            await DB.set(this.tableName, {
                id: id,
                value: data
            }, session)
            logger.info(`[VarietyShopsRepository] ✅ 多类型商店数据保存成功 [id=${id}]`)
        }catch(error){
            logger.error(`[VarietyShopsRepository] ❌ 保存多类型商店数据失败: ${error}`);
            throw error;
        }
    }

    async update(id, data, session = null){
        try{
            const oldData = await this.get(id,session)
            const newData = {
                ...oldData,
                ...data,
            }
            await DB.setValue(this.tableName,id,newData,session)
            logger.info(`[VarietyShopsRepository] ✅ 多类型商店数据更新成功 [id=${id}]`)
        }catch(error){
            logger.info(`[VarietyShopsRepository] ✅ 多类型商店数据更新失败: ${error}`);
            throw error;
        }
    }

    async get(id, session = null) {
        try{
            const result = await DB.get(this.tableName, id, session)
            if(!result){
                logger.warn(`[VarietyShopsRepository] ⚠ 未能找到多类型商店数据 [id=${id}]`)
                return null;
            }
            return result.value

        }catch(error){
            logger.error(`[VarietyShopsRepository] ❌ 获取多类型商店数据失败: ${error}`);
            throw error;
        }
    }

    async getAll(session = null) {
        try{
            const result = await DB.getAll(this.tableName, session)
            if(!result){
                logger.warn(`[VarietyShopsRepository] ⚠ 未能找到多类型商店数据`)
                return null;
            }
            const all = []
            for(const item of result){
                if(!item.value) continue;
                all.push(item.value)
            }
            return all
        }catch (error) {
            logger.error(`[VarietyShopsRepository] ❌ 获取多类型商店数据失败: ${error}`);
            throw []
        }
    }

    async delete(id, session = null) {
        try{
            await DB.del(this.tableName, id, session)
            logger.info(`[AlertMessageRepository] ✅ 多类型商店数据删除成功 [id=${id}]`)
        }catch(error){
            logger.info(`[AlertMessageRepository] ❌ 多类型商店数据删除失败：${error}`);
            throw error
        }
    }

}

module.exports = VarietyShopsRepository