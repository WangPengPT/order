const DB = require("../db.js");
const CustomDishRepository = require("../repositories/customDishRepository.js");
const DailyOrderRepository = require("../repositories/dailyOrderRepository");
const MonthlyRateRepository = require("../repositories/monthlyRateRepository.js");
const MenuRepository = require("../repositories/menuRepository.js");
const { appState: localAppSatte } = require("../state");
const dataTime = require('../utils/dateTime.js');
const { logger } = require("../utils/logger.js");

class DataAnalizeService {

    constructor(appState = localAppSatte,
        dailyOrderRepository = new DailyOrderRepository(),
        menuRepository = new MenuRepository(),
        customDishRepository = new CustomDishRepository(),
        monthlyRateRepository = new MonthlyRateRepository()) {
        this.appState = appState,
            this.dailyOrderRepository = dailyOrderRepository,
            this.menuRepository = menuRepository,
            this.customDishRepository = customDishRepository,
            this.monthlyRateRepository = monthlyRateRepository
    }

    async saveDailyOrders() {

        try {
            logger.info("分析记录本日销售数据")
            return await DB.withTransaction(async (session) => {
                const saveOrders = []
                const orders = await this.appState.orders.values()
                const today = new Date().toISOString().split("T")[0] // 2025-09-09 形式 YYYY-MM-DD
                for (const ord of orders) {
                    const date = dataTime.format_portugal_datetime(ord.timestamp);
                    const orderDate = new Date(ord.timestamp).toISOString().split("T")[0]

                    if (orderDate !== today) {
                        continue // 不是今天的，直接跳过
                    }
                    for (const its of ord.items) {
                        const dishFromMenu = await this.menuRepository.get(its.dishid, session)

                        if (dishFromMenu && dishFromMenu != null) {
                            // 在菜单里更新
                            if (dishFromMenu.ordersCount) {
                                dishFromMenu.ordersCount = Number(dishFromMenu.ordersCount) + its.quantity
                            } else {
                                dishFromMenu.ordersCount = its.quantity
                            }
                            await this.menuRepository.update(dishFromMenu, session)
                        } else {
                            const customDishes = await this.customDishRepository.getAllTemplates(session)
                            const customDish = customDishes.find(it => it.name === its.name)
                            if (customDish) {
                                await this.customDishRepository.updateOrderQuantity(customDish.id, its.quantity, session)
                            }
                        }
                    }

                    saveOrders.push({ ...ord, date })
                }

                await this.dailyOrderRepository.save(saveOrders, session)
                return {
                    success: true,
                }
            })
        } catch (error) {
            logger.info("当天数据保存失败")
            console.log("Unexpected Error", error.message)
            return {
                success: false,
                data: error.message
            }
        }

    }

    /**
     * 
     * @param {String} startDate 格式: "YYYY-MM-DD"
     * @param {String} endDate 格式: "YYYY-MM-DD"
     */
    async getDishesQuantityByDate(startDate, endDate) {
        try {
            logger.info("获取菜品销量数据")
            const result = await this.dailyOrderRepository.getTopDishesByDate(startDate, endDate)
            return {
                success: true,
                data: result
            }
        } catch (error) {
            logger.info("获取菜品销量数据失败")
            console.log("Unexpected Error", error.message)
            return {
                success: false,
                data: error.message
            }
        }
    }


    getCurrentOrderDishes() {
        const dishes = []
        const orders = this.appState.orders.values()
        orders.forEach((ord) => {
            const dshs = ord.items
            dshs.forEach((d) => {
                dishes.push({
                    ...d
                })
            })
        })
        return dishes
    }

    async saveMonthlyRate() {
        return await DB.withTransaction(async (session) => {
            const today = new Date();
            let year = today.getFullYear();
            let month = today.getMonth();

            if (month === 0) {
                month = 11;
                year -= 1;
            } else {
                month -= 1;
            }

            const lastMonth = String(month + 1).padStart(2, '0');
            const lastMonthStr = `${year}-${lastMonth}`; // 上一个月字符串
            const menu = await this.menuRepository.getMenu(session);
            const lastMonthRate = await this.monthlyRateRepository.getMonthlyRatesByDate(lastMonthStr, lastMonthStr, session);
            const lastMonthRateDishes = lastMonthRate.value
            if (lastMonthRateDishes && lastMonthRateDishes.length > 0) {
                // 用 lastMonthRate 的数据减去 menu
                const lastRateMap = new Map(lastMonthRateDishes.map(d => [d.id, d]));

                const result = menu.map(dish => {
                    const last = lastRateMap.get(dish.id);
                    const rates = (dish.rates ?? 0) - (last?.rates ?? 0);
                    const likes = (dish.likes ?? 0) - (last?.likes ?? 0);
                    return { ...dish, rates, likes };
                }).filter(d => (d.rate ?? 0) !== 0 || (d.like ?? 0) !== 0);

                await this.monthlyRateRepository.save(result, session)
            } else {
                // lastMonthRate 为空，返回 menu 中有 rate 或 like 的
                const result = menu.filter(d => (d.rates ?? 0) !== 0 || (d.likes ?? 0) !== 0);
                await this.monthlyRateRepository.save(result, session)
            }
        });
    }

    simplyFormateDishName(dish) {
        const name = dish.name
        const subname = dish.subname

        if (name == "") return subname
        else return name
    }

    /**
     * 
     * @param {String} start date without month
     * @param {String} end date without month
     * @returns 
     */
    async getMonthRate(start, end) {
        try {
            const menu = await this.menuRepository.getMenu()
            const datas = await this.monthlyRateRepository.getMonthlyRatesByDate(start, end)
            const result = []
            for (const item of datas) {
                const dishes = item.value
                if (dishes !== undefined) {
                    dishes.forEach(dish => {
                        const name = this.simplyFormateDishName(dish)
                        const likes = dish.likes || 0
                        const rates = dish.rates || 0
                        let range = likes - rates
                        if (range == 0) range = likes
                        const currentMenuDish = menu.find(it => it.id == dish.id)

                        const form = {
                            id: dish.id,
                            name: name,
                            range: range,
                            rates: currentMenuDish?.rates || 0,
                            likes: currentMenuDish?.likes || 0
                        }

                        result.push(form)
                    })
                }

            }
            return {
                success: true,
                data: result
            }
        } catch (error) {
            console.log("error: ", error)
            return {
                success: false,
                data: error.message
            }
        }
    }



}

module.exports = {
    DataAnalizeService
};
