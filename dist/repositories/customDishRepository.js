const DB = require('../db');
const CustomDishTemplate = require('../model/customDishTemplate.js')
const { logger } = require('../utils/logger.js');

class CustomDishRepository {
    constructor(tableName = "custom_dish") {
        this.tableName = tableName
    }

    async getAllEnableTemplates(session = null) {
        const result = await DB.getAll(this.tableName, session)
        if (!result) {
            logger.info(`repo: ⚠ 未能找到 Custom Dish 数据`);
            return null;
        }
        if (!Array.isArray(result)) throw new Error("Loaded page isn't array")
        const templates = []
        result.forEach(template => {
            const customDishTemplate = CustomDishTemplate.fromJSON(template.value)
            if (customDishTemplate.enable) {
                templates.push(customDishTemplate)
            }
        })
        return templates
    }

    async getAllTemplates(session = null) {
        const result = await DB.getAll(this.tableName, session)
        if (!result) {
            logger.info(`repo: ⚠ 未能找到 Custom Dish 数据`);
            return null;
        }
        if (!Array.isArray(result)) throw new Error("Loaded page isn't array")
        const templates = []
        result.forEach(template => {
            const customDishTemplate = CustomDishTemplate.fromJSON(template.value)
            templates.push(customDishTemplate)
        })
        return templates
    }

    async templatesLength(session = null) {
        const result = await DB.getAll(this.tableName, session)
        if (!result) {
            logger.info(`repo: ⚠ 未能找到 Custom Dish 数据`);
            return 0;
        }
        return result.length
    }

    async saveTemplate(template = new CustomDishTemplate(), session = null) {
        try {
            const json = typeof template.toJSON === 'function' ? template.toJSON() : template
            await DB.set(this.tableName, { id: template.id, value: json }, session)
            return template.id
        } catch (error) {
            console.error("❌ 保存 Custom Dish 失败:", error);
            throw error;
        }
    }

    async get(templateId, session = null) {
        let id = templateId
        if (typeof templateId === "string") id = Number(templateId)
        const result = await DB.get(this.tableName, id, null, session)
        if (!result) {
            logger.info(`repo: ⚠ 未能找到 Custom Dish 数据 [id=${id}]`);
            return null;
        }
        return CustomDishTemplate.fromJSON(result.value)
    }

    async update(template = new CustomDishTemplate(), session = null) {
        try {
            const json = template.toJSON()
            await DB.setValue(this.tableName, template.id, json, session)
        } catch (error) {
            console.error("❌ 修改 Custom Dish 失败:", error);
            throw error;
        }
    }

    async delete(templateId, session = null) {
        let id = templateId
        if (typeof templateId === "string") id = Number(templateId)
        await DB.del(this.tableName, id, session)
    }

    async updateOrderQuantity(templateId, quantity, session = null) {
        logger.info("更新自定义菜品的销售")
        const customDish = await this.get(templateId, session)
        if (customDish.ordeQuantity) {
            customDish.ordeQuantity = customDish.ordeQuantity + quantity
        } else {
            customDish.ordeQuantity = quantity
        }
        await this.update(customDish, session)
    }
}


module.exports = CustomDishRepository;
