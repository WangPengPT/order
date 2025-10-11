const DB = require("../db");
const DictionaryRespository = require("../repositories/dictionaryRespositoty");
const { logger } = require("../utils/logger");

class DictinaryService {
    constructor(dictionaryRespository = new DictionaryRespository()) {
        this.dictionaryRespository = dictionaryRespository
    }

    async save(data) {
        try {
            await this.dictionaryRespository.save(data)
            return {
                success: true
            }
        } catch (error) {
            logger.info("字典数据保存失败")
            return {
                success: false,
                data: error.message
            }
        }
    }

    async get() {
        try {
            const data = await this.dictionaryRespository.get()

            return {
                success: true,
                data: data
            }
        } catch (error) {
            logger.info("获取字典数据失败")
            return {
                success: false,
                data: error.message
            }
        }

    }

    async init() {
        return await DB.withTransaction(async (session) => {
            logger.info("初始化字典")
            const data = await this.dictionaryRespository.get(session)
            if (data == null) {
                logger.info("空数据库，开始存入数据")
                const resultData = {
                    "Combinado media": {
                        text_zh: "中份组合",
                        text_en: "Medium Combo",
                        text_pt: "Combinado media"
                    },
                    "Especial": {
                        text_zh: "特别",
                        text_en: "Special",
                        text_pt: "Especial"
                    },
                    "Entradas": {
                        text_zh: "前菜",
                        text_en: "Starters",
                        text_pt: "Entradas"
                    },
                    "Dim Sum": {
                        text_zh: "点心",
                        text_en: "Dim Sum",
                        text_pt: "Dim Sum"
                    },
                    "Grelhadas e Panadas": {
                        text_zh: "烧烤与炸物",
                        text_en: "Grilled & Fried",
                        text_pt: "Grelhadas e Panadas"
                    },
                    "Espetada": {
                        text_zh: "烤串",
                        text_en: "Skewers",
                        text_pt: "Espetada"
                    },
                    "Gunkan": {
                        text_zh: "军舰寿司",
                        text_en: "Gunkan",
                        text_pt: "Gunkan"
                    },
                    "Sushi": {
                        text_zh: "寿司",
                        text_en: "Sushi",
                        text_pt: "Sushi"
                    },
                    "Pratos Clássicos": {
                        text_zh: "经典菜式",
                        text_en: "Classic Dishes",
                        text_pt: "Pratos Clássicos"
                    },
                    "Arroz e Massa": {
                        text_zh: "米饭与面类",
                        text_en: "Rice & Noodles",
                        text_pt: "Arroz e Massa"
                    },
                    "Sobremesa": {
                        text_zh: "甜点",
                        text_en: "Desserts",
                        text_pt: "Sobremesa"
                    },
                    "Bebidas": {
                        text_zh: "饮料",
                        text_en: "Drinks",
                        text_pt: "Bebidas"
                    },
                    "Poke Bowl": {
                        text_zh: "夏威夷拌饭",
                        text_en: "Poke Bowl",
                        text_pt: "Poke Bowl"
                    },
                    "Sushi Aleatória®": {
                        text_zh: "随机盲盒寿司",
                        text_en: "Random Sushi",
                        text_pt: "Sushi Aleatória®"
                    },
                    "Descontos": {
                        text_zh: "折扣",
                        text_en: "Discounts",
                        text_pt: "Descontos"
                    },
                    "Caixa grande": {
                        text_zh: "大盒",
                        text_en: "Large Box",
                        text_pt: "Caixa grande"
                    },
                    "Caixa media": {
                        text_zh: "中盒",
                        text_en: "Medium Box",
                        text_pt: "Caixa media"
                    },
                    "Caixa pequena": {
                        text_zh: "小盒",
                        text_en: "Small Box",
                        text_pt: "Caixa pequena"
                    },
                    "Salada": {
                        text_zh: "酱料",
                        text_en: "Salad",
                        text_pt: "Salada"
                    },
                    "Cozinha": {
                        text_zh: "厨房",
                        text_en: "Kitchen",
                        text_pt: "Cozinha"
                    },
                    "Molho": {
                        text_zh: "酱料",
                        text_en: "Sauce",
                        text_pt: "Molho"
                    }
                };
                await this.dictionaryRespository.save(resultData, session)
            }
        })
    }
}

module.exports = DictinaryService;