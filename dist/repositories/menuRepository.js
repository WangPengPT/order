const DB = require('../db.js');
const { logger } = require('../utils/logger.js');

class MenuRepository {
    constructor(tableName = "dishes") {
        this.tableName = tableName;
    }

    async save(dish, session = null) {
        try {
            const id = dish.id
            const data = dish
            await DB.set(this.tableName, {
                id: id,
                value: data
            }, session);
        } catch (err) {
            logger.error(`repo:❌ 保存 dish 失败: ${err}`);
            throw err;
        }
    }

    async saveMenu(menu, session = null) {
        try {
            for (let dish of menu) {
                await this.save(dish, session)
            }
        } catch (error) {
            logger.error(`repo:❌ 保存 menu 失败: ${error}`);
            throw error;
        }
    }

    async get(id, session = null) {
        try {
            const result = await DB.get(this.tableName, id, session);
            if (!result) {
                logger.warn(`repo: ⚠ 未能找到 Menu 数据 [id=${id}]`);
                return null;
            }
            const data = result.value
            return data
        } catch (err) {
            logger.error(`repo:❌ 保存 menu 失败: ${err}`);
            throw err;
        }
    }

    async update(dish, session = null) {
        try {
            const id = dish.id
            const oldDish = await this.get(id, session)
            const newDish = {
                ...oldDish,
                ...dish
            }
            await DB.setValue(this.tableName, id, newDish, session)
            logger.info(`repo: ✅ menu 更新成功 [id=${id}]`);
        } catch (error) {
            logger.error(`repo:❌ 保存 menu 失败: ${error}`);
            throw error;
        }
    }

    async getMenu(session = null) {
        try {
            const menu = []
            const dishes = await DB.getAll(this.tableName, session)
            if (dishes.length == 0) return []
            for (let dish of dishes) {
                if (!dish.value) continue
                    menu.push(dish.value)
            }
            return menu
        } catch (error) {
            logger.error(`repo:❌ 保存 menu 失败: ${error}`);
            throw error;
        }
    }

    async deleteDish(id, session = null) {
        try {
            await DB.del(this.tableName, id, session)
        } catch (error) {
            logger.error(`repo:❌ 删除 菜品 失败: ${error}`);
            throw error;
        }
    }

    async updateMenuReforce(menu, session = null) {
        try {
            logger.info("强制更新菜单")
            await DB.cleanTable(this.tableName, session)
            await this.saveMenu(menu, session)
        } catch (error) {
            logger.error(`repo:❌ 更新 menu 失败: ${error}`);
            throw error;
        }
    }

}

module.exports = MenuRepository;