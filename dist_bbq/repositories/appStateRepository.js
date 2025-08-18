const DB = require('../db');
const { logger } = require('../utils/logger.js');
const { AppState } = require('../state');

class AppStateRepository {
    constructor(appState = new AppState(), tableName = "app_state") {
        this.tableName = tableName;
        this.appState = appState
    }

    // 保存 AppState
    async save(id = "default") {
        try {
            let data = this.appState;
            if (typeof this.appState.toJSON === "function") {
                data = this.appState.toJSON();
            }

            await DB.set(this.tableName, {
                id: id,
                value: data
            });

            logger.info(`repo: ✅ App state 保存成功 [id=${id}]`);
        } catch (err) {
            logger.error(`repo:❌ 保存 app state 失败: ${err}`);
            throw err;
        }
    }

    // 读取 AppState
    async load(id = "default") {
        try {
            const result = await DB.get(this.tableName, id, null);
            if (!result) {
                logger.info(`repo: ⚠ 未能找到 app state 数据 [id=${id}]`);
                return null;
            }
            return result.value;
        } catch (err) {
           logger.error(`❌ 读取 app state 失败: ${err}`);
            throw err;
        }
    }

    // 删除 AppState
    async delete(id = "default") {
        try {
            await DB.del(this.tableName, id);
            logger.info(`repo: 🗑 App state 已删除 [id=${id}]`);
        } catch (err) {
            logger.error(`❌ 删除 app state 失败: ${err}`);
            throw err;
        }
    }
}

module.exports = AppStateRepository;
