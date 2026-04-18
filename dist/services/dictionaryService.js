const DB = require("../db");
const DictionaryRepository = require("../repositories/dictionaryRepositoty");
const {logger} = require("../utils/logger");

class DictionaryService {
    constructor(dictionaryRepository = new DictionaryRepository()) {
        this.dictionaryRepository = dictionaryRepository
    }

    async update(data) {
        try{
            for(const dictionary of data) {
                const find = await this.dictionaryRepository.get(dictionary.id);
                if(find) {
                    await this.dictionaryRepository.update(dictionary.id, dictionary);
                }else{
                    await this.dictionaryRepository.save(dictionary.id, dictionary);
                }
            }
            return {success:true, data:data}
        }catch(error){
            logger.error(`[Dictionary Service] 更改字典数据失败，原因：${error.message}`);
            return {success: false, data:error.message};
        }
    }


    async getAll() {
        try {
            logger.info(`[Dictionary Service] 获取字典所有数据`)
            const data = await this.dictionaryRepository.getAll()
            if(!data){
                throw new Error(`未找到数据`)
            }
            return data
        } catch (error) {
            logger.error(`[Dictionary Service] 获取字典所有数据失败，原因：${error.message}`)
            return []
        }
    }

    async reset() {
        try {
            logger.info(`[Dictionary Service] 开始重置字典数据\n[Dictionary Service] 开始清空旧数据...`)
            await this.dictionaryRepository.deleteAll()
            logger.info(`[Dictionary Service] 清空旧数据成功`)
            await this.init()

        } catch (error) {
            logger.info("[Dictionary Service] 获取字典数据失败")
            return {success: false, data: error.message}
        }
    }

    async initialize() {
        return await DB.withTransaction(async (session) => {
            await this.init(session)
        })
    }

    async init(session = null) {
        logger.info(`[Dictionary Service] 初始化字典`)
        const existing = await this.dictionaryRepository.hasData(session);
        if(!existing) {
            logger.info(`[Dictionary Service] 字典数据为空，初始化部分数据：`)
            // 初始化自定义菜品分类多语言
            try{
                logger.info(`[Dictionary Service] 初始化自定义菜品分类名字典数据开始...`)
                const customDishDictionaryData = [
                    {id: "Poke Bowl", zh: "夏威夷拌饭", en: "Poke Bowl", pt: "Poke Bowl"},
                    {id: "Sushi Aleatória®", zh: "随机盲盒寿司", en: "Random Sushi", pt: "Sushi Aleatória®"},
                    {id: "XIAOXIONG® RAMEN", zh: "XIAOXIONG® RAMEN", en: "XIAOXIONG® RAMEN", pt: "XIAOXIONG® RAMEN"},
                    {id: "Menu Almoço", zh: "中午套餐", en: "Lunch Menu", pt: "Menu Almoço"},
                    {id: "Xiaoxiong Hotpot", zh: "一人一锅", en: "Individual Hotpot", pt: "Hotpot Individual"}
                ]
                for(const data of customDishDictionaryData) {
                    await this.dictionaryRepository.save(data.id, data,session)
                }
                logger.info(`[Dictionary Service] 初始化自定义菜品分类名字典数据已完成`)
            }catch(error){
                logger.error(`[Dictionary Service] 初始化自定义菜品分类名字典数据失败，原因${error.message}`);
            }

            // 初始化常用菜品分类多语言
            try{
                logger.info(`[Dictionary Service] 初始化常用菜品分类名字典数据开始...`)
                const commonDictionaryData = [
                    {id:"Descontos", zh:"折扣", en:"Discounts", pt:"Descontos"},
                ]
                for(const data of commonDictionaryData) {
                    await this.dictionaryRepository.save(data.id, data, session)
                }
                logger.info(`[Dictionary Service] 初始化常用菜品分类名字典数据已完成`)
            }catch (error){
                logger.error(`[Dictionary Service] 初始化固定常用菜品分类名字典数据失败，原因${error.message}`);
            }
            logger.info(`[Dictionary Service] 字典数据初始化完成`)
        }else{
            logger.info(`[Dictionary Service] 已存在数据，无需初始化字典`)
        }

    }

    async initOld(session = null) {
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

module.exports = DictionaryService;