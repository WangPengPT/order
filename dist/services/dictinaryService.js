const DB = require("../db");
const DictionaryRepository = require("../repositories/dictionaryRepositoty");
const {logger} = require("../utils/logger");

class DictinaryService {
    constructor(dictionaryRepository = new DictionaryRepository()) {
        this.dictionaryRepository = dictionaryRepository
    }

    async updateDictionaryWord(data) {

        try {
            return await DB.withTransaction(async (session) => {

                if (data.add) {
                    for (const word of data.add) {
                        await this.dictionaryRepository.save(word, word.refName, session)
                    }
                }

                if (data.delete) {
                    for (const key of data.delete) {
                        await this.dictionaryRepository.delete(key, session)
                    }
                }

                if (data.update) {
                    for (const word of data.update) {
                        await this.dictionaryRepository.update(word, word.refName,session)
                    }
                }
                return {
                    success: true,
                    data: undefined
                }
            })
        } catch (error) {
            console.log(error)
            return {
                success: false,
                data: error.message
            }
        }

    }

    async getAll() {
        try {
            const data = await this.dictionaryRepository.getAll()

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

    async resetDictionary() {
        try {
            return await DB.withTransaction(async (session) => {
                await this.dictionaryRepository.deleteAll(session)
                await this.init(session)
                const data = await this.dictionaryRepository.getAll(session)
                return {
                    success: true,
                    data: data
                }
            })

        } catch (error) {
            logger.info("获取字典数据失败")
            return {
                success: false,
                data: error.message
            }
        }
    }

    async initialize() {
        return await DB.withTransaction(async (session) => {
            await this.init(session)
        })
    }

    async init(session = null) {
        logger.info("初始化字典");
        const existing = await this.dictionaryRepository.hasData(session);
        if (!existing || Object.keys(existing).length === 0) {
            logger.info("空数据库，开始存入初始数据");

            const initialData = [
                {refName: "Combinado media", text_zh: "中份组合", text_en: "Medium Combo", text_pt: "Combinado media"},
                {refName: "Especial", text_zh: "特别", text_en: "Special", text_pt: "Especial"},
                {refName: "Entradas", text_zh: "前菜", text_en: "Starters", text_pt: "Entradas"},
                {refName: "Dim Sum", text_zh: "点心", text_en: "Dim Sum", text_pt: "Dim Sum"},

                {
                    refName: "Grelhadas e Panadas",
                    text_zh: "烧烤与炸物",
                    text_en: "Grilled & Fried",
                    text_pt: "Grelhadas e Panadas"
                },
                {refName: "Espetada", text_zh: "烤串", text_en: "Skewers", text_pt: "Espetada"},
                {refName: "Gunkan", text_zh: "军舰寿司", text_en: "Gunkan", text_pt: "Gunkan"},
                {refName: "Sushi", text_zh: "寿司", text_en: "Sushi", text_pt: "Sushi"},
                {
                    refName: "Pratos Clássicos",
                    text_zh: "经典菜式",
                    text_en: "Classic Dishes",
                    text_pt: "Pratos Clássicos"
                },
                {refName: "Arroz e Massa", text_zh: "米饭与面类", text_en: "Rice & Noodles", text_pt: "Arroz e Massa"},
                {refName: "Sobremesa", text_zh: "甜点", text_en: "Desserts", text_pt: "Sobremesa"},
                {refName: "Bebidas", text_zh: "饮料", text_en: "Drinks", text_pt: "Bebidas"},
                {refName: "Poke Bowl", text_zh: "夏威夷拌饭", text_en: "Poke Bowl", text_pt: "Poke Bowl"},
                {
                    refName: "Sushi Aleatória®",
                    text_zh: "随机盲盒寿司",
                    text_en: "Random Sushi",
                    text_pt: "Sushi Aleatória®"
                },
                {refName: "Descontos", text_zh: "折扣", text_en: "Discounts", text_pt: "Descontos"},
                {refName: "Caixa grande", text_zh: "大盒", text_en: "Large Box", text_pt: "Caixa grande"},
                {refName: "Caixa media", text_zh: "中盒", text_en: "Medium Box", text_pt: "Caixa media"},
                {refName: "Caixa pequena", text_zh: "小盒", text_en: "Small Box", text_pt: "Caixa pequena"},
                {refName: "Salada", text_zh: "酱料", text_en: "Salad", text_pt: "Salada"},
                {refName: "Cozinha", text_zh: "厨房", text_en: "Kitchen", text_pt: "Cozinha"},
                {refName: "Molho", text_zh: "酱料", text_en: "Sauce", text_pt: "Molho"},
                {
                    refName: "XIAOXIONG® RAMEN",
                    text_zh: "XIAOXIONG® RAMEN",
                    text_en: "XIAOXIONG® RAMEN",
                    text_pt: "XIAOXIONG® RAMEN"
                },
                {refName: "Menu Almoço", text_zh: "中午套餐", text_en: "Lunch Menu", text_pt: "Menu Almoço"},
                {refName: "Entrada", text_zh: "前菜", text_en: "Starter", text_pt: "Entrada"},
                {refName: "Dim sum", text_zh: "点心", text_en: "Dim Sum", text_pt: "Dim Sum"},
                {refName: "Prato", text_zh: "主菜", text_en: "Main Dish", text_pt: "Prato"},
                {refName: "Arroz Primavera", text_zh: "炒饭", text_en: "Fried Rice", text_pt: "Arroz Primavera"},
                {refName: "Caçarola", text_zh: "砂锅菜", text_en: "Casserole", text_pt: "Caçarola"},
                {refName: "Sizzler", text_zh: "铁板烧", text_en: "Sizzler", text_pt: "Sizzler"},
                {refName: "Sobremesas", text_zh: "甜品", text_en: "Desserts", text_pt: "Sobremesas"},
                {refName: "Chow Mein", text_zh: "炒面", text_en: "Chow Mein", text_pt: "Chow Mein"}
            ];

            await this.dictionaryRepository.saveAll(initialData, session);
            logger.info("初始化完成，已插入初始词条");
        }
    }
}

module.exports = DictinaryService;