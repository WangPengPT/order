const dataTime = require('../utils/dateTime.js')
const DB = require('../db.js');
const { logger } = require('../utils/logger.js');

class MonthlyRateRepository{

    constructor(tableName = "monthly_rate") {
        this.tableName = tableName;
    }

    async get(date, session = null) {
        try {
            console.log("input, : ", date)
            const result = await DB.get(this.tableName, date, null,session);
            if (result.length === 0) {
                logger.info(`repo: ⚠ 未能找到 Montlhy Rate 数据 [date=${date.year}/${date.month}`);
                return null;
            }
            logger.info(`repo: ✅ 成功找到 Montlhy Rate 数据 [date=${date.year}/${date.month}`);
            return result;
        } catch (err) {
            logger.error(`❌ 读取 Montlhy Rate 失败: ${err}`);
            throw err;
        }
    }

    async save(data, session = null, id = dataTime.get_portugal_date_without_day()) {
        try {
            await DB.set(this.tableName, { id: id, value: data }, session);

            logger.info(`repo: ✅ Montlhy Rate 保存成功`);
        } catch (err) {
            logger.error(`repo:❌ 保存 Montlhy Rate 失败: ${err}`);
            throw err;
        }
    }

    async getMonthlyRatesByDate(startDate, endDate, session = null) {
        try {
            const list = await DB.getByDateRange(this.tableName, startDate, endDate, session)
            return list
        } catch (error) {
            logger.error(`❌ 读取 Montlhy Rate 失败: ${error}`);
            throw error;
        }
    }

}

module.exports = MonthlyRateRepository;