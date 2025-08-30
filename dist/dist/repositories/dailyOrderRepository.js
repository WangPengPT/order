const DB = require('../db.js');
const { logger } = require('../utils/logger.js');
const dataTime = require('../utils/dateTime.js')

class DailyOrderRepository {
    constructor(tableName = "daily_order") {
        this.tableName = tableName;
    }

    // 保存销售量
    async save(data, session =  null, id = dataTime.get_portugal_date()) {
        try {
            await DB.set(this.tableName, {id: id, value: data}, session);

            logger.info(`repo: ✅ Daily Order 保存成功`);
        } catch (err) {
            logger.error(`repo:❌ 保存 Daily Order 失败: ${err}`);
            throw err;
        }
    }

    // 读取销售量
    async load(date, session = null) {
        try {
            const result = await DB.find(this.tableName, date, session);
            if (result.length === 0) {
                logger.info(`repo: ⚠ 未能找到 Daily Order 数据 [date=${date.year}/${date.month}/${date.day}]`);
                return null;
            }
            logger.info(`repo: ✅ 成功找到 Daily Order 数据 [date=${date.year}/${date.month}/${date.day}]`);
            return result;
        } catch (err) {
            logger.error(`❌ 读取 Daily Order 失败: ${err}`);
            throw err;
        }
    }
}

module.exports = DailyOrderRepository;
