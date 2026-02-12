const CustomDishRepository = require("../repositories/customDishRepository");
const templateData = require('../utils/customDishTemplateData.js')
const {ids} = require('../utils/customDishTemplateData.js')
const DB = require('../db.js');
const { logger } = require("../utils/logger.js");
const CustomDishTemplate = require("../model/customDishTemplate.js");
const { filter } = require("compression");
const {appState} = require("../state");
const {MenuService} = require("./menuService");
const MenuOrderingRepository = require("../repositories/menuOrderingRepository");
const newState = require("../model/customDish");
const result = require("../model/customDishTemplate");

class CustomDishService {
    constructor(customDishRepository = new CustomDishRepository(), menuService = new MenuService(), menuOrdering = new MenuOrderingRepository()) {
        this.customDishRepository = customDishRepository
        this.menuService = menuService;
        this.menuOrderingRepository = new MenuOrderingRepository();
    }

    async initializeCustomDish() {
        try {
            return await DB.withTransaction(async (session) => {
                logger.info("初始化自定义菜数据")
                const templatesCount = await this.customDishRepository.templatesLength(session)
                if (templatesCount === 0) {
                    logger.info("未找到自定义菜数据，开始创建")
                    for (const template of templateData.values) {
                        await this.customDishRepository.saveTemplate(template, session)
                    }
                } else {
                    logger.info("找到现有数据")
                }
            })
        } catch (error) {
            console.error("error: ", error)
        }
    }

    async getCustomDishById(templateId) {
        try {
            logger.info("获取自定义菜")
            const id = Number(templateId)
            const template = await this.customDishRepository.get(id)
            if (!template) throw new Error("Not found the custom dish template")
            const jsonTemplate = template.toJSON()
            logger.info("自定义菜获取成功")
            return {
                success: true,
                data: jsonTemplate
            }
        } catch (error) {
            logger.info("自定义菜获取失败")
            console.log("Unexpected Error", error.message)
            return {
                success: false,
                data: error.message
            }
        }

    }

    async addNew(template) {
        try {
            return await DB.withTransaction(async (session) => {
                if (!template) throw new Error("Empty input")
                const maxId = await this.customDishRepository.templatesLength(session) + 1
                const templateInstance = template instanceof CustomDishTemplate
                    ? template
                    : CustomDishTemplate.fromJSON(template)
                templateInstance.id = maxId
                const id = await this.customDishRepository.saveTemplate(templateInstance, session)
                const newTemplate = await this.customDishRepository.get(id, session)
                if (newTemplate.id !== templateInstance.id) throw new Error("Faild create template")
                return {
                    success: true,
                    data: id
                }
            })

        } catch (error) {
            console.log("Unexpected Error", error.message)
            return {
                success: false,
                data: error.message
            }
        }
    }

    async updateLike(id, isLike) {
        try {
            return await DB.withTransaction(async (session) => {
                const templateId = Number(id)
                const template = await this.customDishRepository.get(templateId, session)
                if (isLike) {
                    template.likeDish()
                } else {
                    template.unlikeDish()
                }
                await this.customDishRepository.update(template, session)
                return {
                    success: true,
                    data: { like: template.like, rate: template.rate }
                }
            })
        } catch (error) {
            console.log("Unexpected Error", error.message)
            return {
                success: false,
                data: error.message
            }
        }
    }

    async getAllTemplates() {
        try {
            const result = await this.customDishRepository.getAllTemplates()
            return {
                success: true,
                data: result
            }
        } catch (error) {
            console.log("Unexpected Error", error.message)
            return {
                success: false,
                data: error.message
            }
        }
    }

    async getSimplyAllTemplate() {
        try {
            const result = await this.customDishRepository.getAllTemplates().map((it) => {
                return {
                    id: it.id,
                    name: it.name,
                    enable: it.enable
                }
            })
            return {
                success: true,
                data: result
            }
        } catch (error) {
            console.log("Unexpected Error", error.message)
            return {
                success: false,
                data: error.message
            }
        }
    }

    /**
     *
     * @param {'ALL' | 'DINEIN' | 'TAKEAWAY'} type
     */
    async getAllEnableTemplates(type = "ALL") {
        try {
            let result;
            switch (type) {
                case 'DINEIN':
                    result = await this.customDishRepository.getDineEnableTemplates()
                    break
                case 'TAKEAWAY':
                    result = await this.customDishRepository.getTakeEnableTemplates()
                    break
                default:
                    result = await this.customDishRepository.getAllEnableTemplates()
                    break
            }

            findRamenAndChangePrice(result)
            //特殊情况
            const hasLunch = !!result.find(it => it.id === ids.xiaoxiong_menu_lunch)
            const currentOrdering = await this.menuOrderingRepository.getDineIn()
            const orderingHasLunch = !!currentOrdering.find(it => it.name === "Menu Almoço")
            if (orderingHasLunch !== hasLunch) {
                await this.menuService.reorganizeDineMenuTab_custom()
                // await this.menuService.reorganizeAndSaveMenuTab_menu()
                // await this.menuService.reorganizeTakeMenuTab_custom()
            }

            return {
                success: true,
                data: result
            }
        } catch (error) {
            console.log("Unexpected Error", error.message)
            return {
                success: false,
                data: error.message
            }
        }

        function findRamenAndChangePrice(array){
            const ramen = array.find( item =>  item.id == ids.xiaoxiong_ramen )

            if(ramen && appState.settings.useFandays && todayIsFandays(ramen.options.fandaysDate)){
                ramen.initialPrice = ramen.options.fandaysPrice
            }

            function todayIsFandays(fandaysDate){
                const date = new Date();
                // 使用里斯本的时区（欧洲/里斯本）格式化日期
                const lisbonDateString = date.toLocaleString("en-US", { timeZone: "Europe/Lisbon" });
                // 再从格式化后的字符串中提取日期部分
                const lisbonDay = new Date(lisbonDateString).getDate();
                return fandaysDate.includes(lisbonDay)
            }
        }
    }

    async updateEnbale(newState) {
        try {
            return await DB.withTransaction(async (session) => {

                const id = Number(newState.id)
                const template = await this.customDishRepository.get(id, session)
                if (template.enable !== newState.enable) {
                    template.enable = newState.enable
                    await this.customDishRepository.update(template, session)
                }

                const newTemplate = await this.customDishRepository.get(template.id, session)
                if (newTemplate.enable !== newState.enable) {
                    throw new Error("Faild update the custom dish enable")
                }
                const json = newTemplate.toJSON()
                return {
                    success: true,
                    data: json
                }
            })
        } catch (error) {
            console.log("Unexpected Error", error.message)
            return {
                success: false,
                data: error.message
            }
        }
    }

    async updateTemplateSellType(id, value) {
        try {
            return await DB.withTransaction(async (session) => {
                if (!CustomDishTemplate.SellType.values().includes(value)) {
                    throw new Error("Invalid sell type input")
                }
                const template = await this.customDishRepository.get(id, session)
                template.sellType = value
                await this.customDishRepository.update(template, session)

                const resultTemplate = await this.customDishRepository.get(id, session)
                if (resultTemplate.sellType  !== value) {
                    throw new Error("Failed update template sellType")
                }
                return {
                    success: true,
                    data: resultTemplate.sellType,
                }
            })
        } catch (error) {
            console.log("Unexpected Error", error.message)
            return {
                success: false,
                data: error.message
            }
        }
    }

    async restoreCustomDishData() {
        try {
            return await DB.withTransaction(async (session) => {
                await this.customDishRepository.cleanData(session)
                const templatesCount = await this.customDishRepository.templatesLength(session)
                if (templatesCount === 0) {
                    logger.info("开始创建")
                    for (const template of templateData.values) {
                        await this.customDishRepository.saveTemplate(template, session)
                    }
                    const allTemplates = await this.customDishRepository.getAllTemplates(session)
                    return {
                        success: true,
                        data: allTemplates
                    }
                } else {
                    logger.info("数据库不是空")
                    const allTemplates = await this.customDishRepository.getAllTemplates(session)
                    return {
                        success: false,
                        data: allTemplates
                    }
                }
            })
        } catch (error) {
            console.log("Unexpected Error", error.message)
            return {
                success: false,
                data: error.message
            }
        }
    }

    async updateTemplateData(value) {
        try {
            return await DB.withTransaction(async (session) => {
                const template = CustomDishTemplate.fromJSON(value)
                await this.customDishRepository.update(template, session)
                const newTemplate = await this.customDishRepository.get(template.id, session)
                return {
                    success: true,
                    data: newTemplate.toJSON()
                }
            })
        } catch (error) {
            console.log("Unexpected Error", error.message)
            return {
                success: false,
                data: error.message
            }
        }
    }
}

module.exports = {
    CustomDishService
}