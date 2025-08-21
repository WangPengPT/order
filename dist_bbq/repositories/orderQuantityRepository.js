const DB = require('../db');
const { logger } = require('../utils/logger.js');

class OrderQuantityRepository {
    constructor(tableName = "OrderQuantity") {
        this.tableName = tableName;
    }

    // 保存销售量
    async save(data, session) {
        try {
            await DB.set(this.tableName, data, session);

            logger.info(`repo: ✅ Order quantity 保存成功 [date=${data.year}/${data.month}/${data.day}]`);
        } catch (err) {
            logger.error(`repo:❌ 保存 Order quantity 失败: ${err}`);
            throw err;
        }
    }

    // 读取销售量
    async load(date, session) {
        try {
            const result = await DB.find(this.tableName, date, session);
            if (result.length === 0) {
                logger.info(`repo: ⚠ 未能找到 Order quantity 数据 [date=${date.year}/${date.month}/${date.day}]`);
                return null;
            }
            logger.info(`repo: ✅ 成功找到 Order quantity 数据 [date=${date.year}/${date.month}/${date.day}]`);
            return result;
        } catch (err) {
            logger.error(`❌ 读取 Order quantity 失败: ${err}`);
            throw err;
        }
    }

    // 暂时没用到过
    // // 删除销售量
    // async delete(date) {
    //     try {
    //         await DB.del(this.tableName, date);
    //         logger.info(`repo: 🗑 Order quantity 已删除 [date=${data.year}, ${data.month}, ${data.day}]`);
    //     } catch (err) {
    //         logger.error(`❌ 删除 Order quantity 失败: ${err}`);
    //         throw err;
    //     }
    // }
}

module.exports = OrderQuantityRepository;
