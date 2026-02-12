const { AppState, appState } = require('../state.js');
const { getCurentPeoplePrice } = require('../utils/timePrice.js')
const db = require('../filedb.js');
const DB = require('../db.js');
const { logger } = require('../utils/logger.js');
const AppStateRepository = require('../repositories/appStateRepository.js');
const OrderQuantityRepository = require('../repositories/dailyOrderRepository.js');
const CustomDishRepository = require('../repositories/customDishRepository.js');
const MonthlyRateRepository = require('../repositories/monthlyRateRepository.js');
const MenuRepository = require('../repositories/menuRepository.js');

/**
 * 应用状态服务模块
 * 负责全局设置、店铺信息、取餐/配送/订台规则、桌位状态以及订单统计数据的加载与持久化
 */
class AppStateService {
    constructor(appStateRepository = new AppStateRepository(appState),
        orderQuantityRepository = new OrderQuantityRepository(),
        customDishRepository = new CustomDishRepository(),
        monthlyRateRepository = new MonthlyRateRepository(),
        menuRepository = new MenuRepository()) {
        this.appStateRepository = appStateRepository;
        this.orderQuantityRepository = orderQuantityRepository
        this.customDishRepository = customDishRepository
        this.monthlyRateRepository = monthlyRateRepository
        this.menuRepository = menuRepository
    }

    /**
     * 加载应用状态数据
     * 从持久化存储中读取配置，如果不存在则初始化默认配置
     */
    async loadAppState() {
        try {
            const data = await this.appStateRepository.load()
            if (data && data != null) {
                const loaded = AppState.fromJSON(data);
                this.appStateRepository.appState.updateAppState(loaded);
                logger.info(`加载现有数据`);
            } else {
                logger.info(`创建新数据`);

                const customDishTemplates = await this.customDishRepository.getAllTemplates()
                const customDishes = customDishTemplates.map((it) => {
                    return {
                        id: it.id,
                        name: it.name,
                        enable: it.enable
                    }
                })
                this.appStateRepository.appState.settings.customDishes = customDishes
            }
        } catch (error) {
            console.warn("加载应用状态失败: ", error);
        }
    }

    /**
     * 更新系统设置
     * @param {string} key 设置键名
     * @param {any} value 设置值
     */
    updateSettings(key, value) {
        try {
            appState.updateSettings(key, value)
            if (appState.settings[key] === value) {
                // 更新后立即异步保存，不阻塞当前返回
                this.saveAppState().catch(err => console.error("保存设置失败:", err));
                return { success: true, data: value }
            }
            else throw new Error(key + "更新失败")
        } catch (error) {
            return { success: false, data: error.message }
        }
    }

    /**
     * 更新店铺基本信息
     */
    updateShopInfo(key, value) {
        try {
            appState.updateShopInfo(key, value)
            if (this.equals(appState.shopInfo[key], value)) {
                this.saveAppState().catch(err => console.error("保存店铺信息失败:", err));
                return { success: true, data: value }
            }
            else throw new Error(key + "更新失败")
        } catch (error) {
            return { success: false, data: error.message }
        }
    }

    /**
     * 更新取餐相关设置
     */
    updatePickupDate(key, value) {
        try {
            appState.updatePickupDate(key, value)
            if (this.equals(appState.pickupData[key], value)) {
                this.saveAppState().catch(err => console.error("保存取餐设置失败:", err));
                return { success: true, data: value }
            }
            else throw new Error(key + "更新失败")
        } catch (error) {
            return { success: false, data: error.message }
        }
    }

    /**
     * 更新外送配送设置
     */
    updateHomeDeliveryDate(key, value) {
        try {
            appState.updateHomeDeliveryDate(key, value)
            if (this.equals(appState.homeDeliveryData[key], value)) {
                this.saveAppState().catch(err => console.error("保存配送设置失败:", err));
                return { success: true, data: value }
            }
            else throw new Error(key + "更新失败")
        } catch (error) {
            return { success: false, data: error.message }
        }
    }

    /**
     * 更新订台预订设置
     */
    updateReserverDate(key, value) {
        try {
            appState.updateReserverDate(key, value)
            if (this.equals(appState.reserverData[key], value)) {
                this.saveAppState().catch(err => console.error("保存订台设置失败:", err));
                return { success: true, data: value }
            }
            else throw new Error(key + "更新失败")
        } catch (error) {
            return { success: false, data: error.message }
        }
    }

    /**
     * 辅助方法：比较两个值是否相等（支持对象深度比较）
     */
    equals(value1, value2) {
        if (typeof value1 == 'object' && value1 !== null && value2 !== null) {
            for (const key in value1) {
                if (!this.equals(value1[key], value2[key])) return false
            }
            return true
        } else {
            return value1 == value2
        }
    }

    /**
     * 更新打印模板配置
     */
    updatePrintModel(key, value) {
        try {
            appState.updatePrintModel(key, value)
            if (appState.printModel[key] == value) {
                this.saveAppState().catch(err => console.error("保存打印模板失败:", err));
                return { success: true, data: value }
            }
            else throw new Error(key + "更新失败")
        } catch (error) {
            return { success: false, data: error.message }
        }
    }

    /**
     * 获取所有桌位信息
     */
    getAllTables() {
        try {
            const tables = this.appStateRepository.appState.tables;
            return {
                success: true,
                data: tables.toJSON()
            };
        } catch (error) {
            console.warn("获取桌位信息失败: ", error);
            return {
                success: false,
                data: error.message
            };
        }
    }

    /**
     * 保存应用状态及菜单数据到磁盘
     */
    async saveAppState() {
        try {
            await this.appStateRepository.save()
            db.saveData("menu", this.appStateRepository.appState.menu);
        } catch (error) {
            console.warn("保存应用状态失败: ", error);
        }
    }

    /**
     * 保存每日销售统计数据
     */
    async saveDailyOrders() {
        const getNumberDays = (year, month) => {
            if (month < 1 || month > 12) return 0;
            const isLeapYear = year && ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0));
            const daysInMonth = [31, (isLeapYear ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
            return daysInMonth[month - 1];
        };

        try {
            const dailyOrders = [];
            this.appStateRepository.appState.menu.forEach(item => {
                if (item.category !== "") {
                    dailyOrders.push({
                        id: item.id,
                        category: item.category,
                        handle: item.handle,
                        name: item.name === "" ? item.subname : item.name,
                        dailyOrders: item.dailyOrders | 0
                    });
                }
            });

            const now = new Date();
            let year = now.getFullYear();
            let month = now.getMonth() + 1;
            let day = now.getDate() - 1;
            if (now.getDate() === 1) {
                month = now.getMonth() === 0 ? 12 : now.getMonth();
                year = month === 12 ? now.getFullYear() - 1 : now.getFullYear();
                day = getNumberDays(year, month);
            }

            const data = { year, month, day, data: dailyOrders };
            await this.orderQuantityRepository.save(data);
        } catch (error) {
            console.warn("保存每日订单统计失败: ", error);
        }
    }

    /**
     * 清空每日销售统计计数
     */
    clearDailyOrders() {
        try {
            this.appStateRepository.appState.menu.forEach(item => { item.dailyOrders = 0; });
        } catch (error) {
            console.warn("清空每日订单统计失败: ", error);
        }
    }

    /**
     * 保存每月销售统计数据
     */
    async saveMonthlyOrders() {
        try {
            const monthlyOrders = [];
            this.appStateRepository.appState.menu.forEach(item => {
                if (item.category !== "") {
                    monthlyOrders.push({
                        id: item.id,
                        category: item.category,
                        handle: item.handle,
                        name: item.name === "" ? item.subname : item.name,
                        monthlyOrders: item.monthlyOrders | 0
                    });
                }
            });
            const now = new Date();
            const month = now.getMonth() === 0 ? 12 : now.getMonth();
            const year = month === 12 ? now.getFullYear() - 1 : now.getFullYear();

            const data = { year, month, day: 0, data: monthlyOrders };
            await this.orderQuantityRepository.save(data);
        } catch (error) {
            console.warn("Error: ", error);
        }
    }

    clearMonthlyOrders() {
        try {
            this.appStateRepository.appState.menu.forEach(item => { item.monthlyOrders = 0; });
        } catch (error) {
            console.warn("保存每月订单统计失败: ", error);
        }
    }

    /**
     * 获取指定桌位的当前计费价格（基于人数/时段）
     */
    getTableTotalAmout(tableId) {
        try {
            const table = this.appStateRepository.appState.getTableById(tableId)
            if (!table) throw new Error("未找到桌位")
            const res = getCurentPeoplePrice(table.peopleType)
            return {
                success: true,
                data: res
            }
        } catch (error) {
            return {
                success: false,
                data: error.message
            }
        }
    }

    /**
     * 获取当前成人价格
     */
    getCurrentPrice() {
        try {
            return this.appStateRepository.appState.getAdultCurrentPrice()
        } catch (error) {
            console.warn("获取当前价格失败: ", error);
            return 0
        }
    }

    /**
     * 更新周价格配置（成人）
     */
    updateWeekPrice(key, value) {
        try {
            this.appStateRepository.appState.updateWeekPrice(key, value)
            return {
                success: true,
                data: value
            }
        } catch (error) {
            return {
                success: false,
                data: error.message
            }
        }
    }

    /**
     * 更新儿童价格比例
     */
    updataChildrenPricePercentage(value) {
        try {
            this.appStateRepository.appState.updateChildrenPricePercentage(value)
            return {
                success: true,
                data: value
            }
        } catch (error) {
            return {
                success: false,
                data: error.message
            }
        }
    }

    /**
     * 获取指定年月的菜单评价
     */
    async getMonthRatesWithDate(year, month) {
        try {
            const date = `${year}-${String(month).padStart(2, '0')}`
            const res = await this.monthlyRateRepository.getMonthlyRatesByDate(date, date)
            return {
                success: true,
                data: res
            }
        } catch (error) {
            return {
                success: false,
                data: error.message
            }
        }
    }

    /**
     * 获取指定日期的订单销量
     */
    async getOrderQuantityWithDate(value) {
        try {
            const date = `${value.year}-${String(value.month).padStart(2, '0')}-${String(value.day).padStart(2, '0')}`
            const res = await this.orderQuantityRepository.load(date)
            return {
                success: true,
                data: res
            }
        } catch (error) {
            return {
                success: false,
                data: error.message
            }
        }
    }

    /**
     * 保存上月菜单评分数据
     */
    async saveMonthRates() {
        try {
            logger.info("开始保存上月菜单评分数据")
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
                const lastMonthStr = `${year}-${lastMonth}`;

                const menu = await this.menuRepository.getMenu(session);
                const lastMonthRate = await this.monthlyRateRepository.getMonthlyRatesByDate(lastMonthStr, lastMonthStr, session);

                let result = []
                if (lastMonthRate && lastMonthRate.length > 0) {
                    const lastRateMap = new Map(lastMonthRate[0].value.map(d => [d.id, d]));
                    result = menu.map(dish => {
                        const last = lastRateMap.get(dish.id);
                        const rates = (dish.rates ?? 0) - (last?.rates ?? 0);
                        const likes = (dish.likes ?? 0) - (last?.likes ?? 0);
                        return { ...dish, rates, likes };
                    }).filter(d => (d.rates ?? 0) !== 0 || (d.likes ?? 0) !== 0);
                } else {
                    result = menu.filter(d => (d.rates ?? 0) !== 0 || (d.likes ?? 0) !== 0);
                }

                if (result.length > 0) {
                    await this.monthlyRateRepository.save(result, session, lastMonthStr)
                }

                return { success: true }
            })
        } catch (error) {
            logger.error(`保存上月菜单评分失败: ${error.message}`)
            return { success: false, data: error.message }
        }
    }

    /**
     * 清空菜单评分数据
     */
    async clearnMonthRates() {
        try {
            logger.info("清空菜单评分数据")
            await DB.withTransaction(async (session) => {
                const menu = await this.menuRepository.getMenu(session);
                for (const dish of menu) {
                    dish.rates = 0;
                    dish.likes = 0;
                    await this.menuRepository.update(dish, session);
                }
            })
            return { success: true }
        } catch (error) {
            logger.error(`清空菜单评分失败: ${error.message}`)
            return { success: false, data: error.message }
        }
    }
}

module.exports = AppStateService;
