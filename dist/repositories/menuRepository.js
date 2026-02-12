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
            logger.error(`repo:❌ 保存菜品失败: ${err}`);
            throw err;
        }
    }

    async saveMenu(menu, session = null) {
        try {
            for (let dish of menu) {
                await this.save(dish, session)
            }
        } catch (error) {
            logger.error(`repo:❌ 保存菜单失败: ${error}`);
            throw error;
        }
    }

    async get(id, session = null) {
        try {
            const result = await DB.get(this.tableName, id, session);
            if (!result) {
                logger.warn(`repo: ⚠ 未能找到菜品数据 [id=${id}]`);
                return null;
            }
            const data = result.value
            return data
        } catch (err) {
            logger.error(`repo:❌ 获取菜品失败: ${err}`);
            throw err;
        }
    }

    async update(dish, id, session = null) {
        try {
            const oldDish = await this.get(id, session)
            const newDish = {
                ...oldDish,
                ...dish
            }
            await DB.setValue(this.tableName, id, newDish, session)
            logger.info(`repo: ✅ 菜品更新成功 [id=${id}]`);
        } catch (error) {
            logger.error(`repo:❌ 更新菜品失败: ${error}`);
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
            logger.error(`repo:❌ 获取 menu 失败: ${error}`);
            throw error;
        }
    }

    async getMenuByhandle(handle, session = null) {
        try {
            const result = await DB.find(this.tableName, {"value.handle": handle}, session)
            if (result && result.length > 0) {
                return result.map(item => item.value)
            }
            return []
        } catch (error) {
            logger.error(`repo:❌ 通过 handle 获取菜单失败: ${error}`);
            throw error;
        }
    }

    async getMenuByid(id, session = null) {
        try {
            const result = await DB.find(this.tableName, {"value.id": id}, session)
            if (result && result.length > 0) {
                return result.map(item => item.value)
            }
            return []
        } catch (error) {
            logger.error(`repo:❌ 通过 id 获取菜单失败: ${error}`);
            throw error;
        }
    }

    async getDineInMenu(session = null) {
        try {
            const menu = []
            const dishes = await DB.getAllDineInMenu(this.tableName, session)
            if (dishes.length === 0) return []
            for (let dish of dishes) {
                if (!dish.value) continue
                menu.push(dish.value)
            }
            return menu
        } catch (error) {
            logger.error(`repo:❌ 获取堂食菜单失败: ${error}`);
            throw error;
        }
    }

    getDiscountPrice(discount, price) {
        if (!discount || discount == 0) {
            return price
        }

        let ret = price * (100 - discount);
        ret = Math.round(ret) / 100;

        return ret;
    }

    update_price_from_delivery(value) {
        value.price = value.deliveryPrice;
        value.discount = value.deliveryDiscount;
        if (value.discount == 0) value.discount = undefined;
        value.dis_price =  this.getDiscountPrice(value.discount,value.price)
    }

    async getTakeaway(session = null) {
        try {
            const menu = []
            const dishes = await DB.getAllTakeawayMenu(this.tableName, session)
            if (dishes.length == 0) return []
            for (let dish of dishes) {
                if (!dish.value) continue

                const value = dish.value;

                this.update_price_from_delivery(value)

                menu.push(value)
            }
            return menu
        } catch (error) {
            logger.error(`repo:❌ 保存外卖菜单失败: ${error}`);
            throw error;
        }
    }


    async deleteDish(id, session = null) {
        try {
            return await DB.del(this.tableName, id, session)
        } catch (error) {
            logger.error(`repo:❌ 删除 菜品 失败: ${error}`);
            throw error;
        }
    }

    async deleteMenuDishByHandle(handle, session = null) {
        try {
            return await DB.deleteMenuDishByHandle(this.tableName, handle, session)
        } catch (error) {
            logger.error(`repo:❌ 删除菜品失败: ${error}`);
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