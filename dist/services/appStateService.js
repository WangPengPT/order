const { AppState, appState } = require('../state.js');
const { getCurentPeoplePrice } = require('../utils/timePrice.js')
const db = require('../filedb.js');
const DB = require('../db.js');
const { logger } = require('../utils/logger.js');
const AppStateRepository = require('../repositories/appStateRepository.js');
const OrderQuantityRepository = require('../repositories/dailyOrderRepository.js');
const CustomDishRepository = require('../repositories/customDishRepository.js');

class AppStateService {
    constructor(appStateRepository = new AppStateRepository(appState), orderQuantityRepository = new OrderQuantityRepository(), customDishRepository = new CustomDishRepository()) {
        this.appStateRepository = appStateRepository;
        this.orderQuantityRepository = orderQuantityRepository
        this.customDishRepository = customDishRepository
    }

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

            // tablesPassword.init(appState.tables);
        } catch (error) {
            console.warn("错误: ", error);
        }
    }

    updateSettings(key, value) {
        try {
            appState.updateSettings(key, value)
            if (appState.settings[key] === value) return { success: true, data: value }
            else throw new Error(key + "更新失败")
        } catch (error) {
            return { success: false, data: error.message }
        }
    }

    getAllTables() {
        try {
            const tables = this.appStateRepository.appState.tables;
            return {
                success: true,
                data: tables.toJSON()
            };
        } catch (error) {
            console.warn("Error: ", error);
            return {
                success: false,
                data: error.message
            };
        }
    }

    async saveAppState() {
        try {
            await this.appStateRepository.save()
            db.saveData("menu", this.appStateRepository.appState.menu);
        } catch (error) {
            console.warn("Error: ", error);
        }
    }

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
            console.warn("Error: ", error);
        }
    }

    clearDailyOrders() {
        try {
            this.appStateRepository.appState.menu.forEach(item => { item.dailyOrders = 0; });
        } catch (error) {
            console.warn("Error: ", error);
        }
    }

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
            console.warn("Error: ", error);
        }
    }

    getCurrentPrice() {
        try {
            const appState = this.appStateRepository.appState
            const price = appState.weekPrice.getCurrentPrice()
            const res = {
                success: true,
                data: price
            }
            return res
        } catch (error) {
            console.warn("Error: ", error)
            return { success: false, data: error.message }
        }
    }

    async saveYearlyOrders() {
        try {
            const yearlyOrders = [];
            this.appStateRepository.appState.menu.forEach(item => {
                if (item.category !== "") {
                    yearlyOrders.push({
                        id: item.id,
                        category: item.category,
                        handle: item.handle,
                        name: item.name === "" ? item.subname : item.name,
                        yearlyOrders: item.yearlyOrders | 0
                    });
                }
            });
            const now = new Date();
            const data = { year: now.getFullYear() - 1, month: 0, day: 0, data: yearlyOrders };
            await this.orderQuantityRepository.save(data);
        } catch (error) {
            console.warn("Error: ", error);
        }
    }

    clearYearlyOrders() {
        try {
            this.appStateRepository.appState.menu.forEach(item => { item.yearlyOrders = 0; });
        } catch (error) {
            console.warn("Error: ", error);
        }
    }

    updateWeekPrice(key, price) {
        try {
            console.log("updateWeekPrice", key, price);
            const newPrices = this.appStateRepository.appState[key].setAllPrices(price);
            return { success: true, data: newPrices };
        } catch (error) {
            console.warn("Error: ", error);
            return { success: false, data: error.message };
        }
    }

    updataChildrenPricePercentage(percentage) {
        try {
            const newPercentage = this.appStateRepository.appState.updateChildrenPricePercentage(percentage)
            return { success: true, data: newPercentage };
        } catch (error) {
            console.error("Error: ", error);
            return { success: false, data: error.message };
        }

    }

    getTableTotalAmout(tableId) {
        try {
            if (!tableId) throw new Error("Non Input Value");
            const prices = this.appStateRepository.appState.getTableTotalAmout(tableId);
            return { success: true, data: prices };
        } catch (error) {
            console.warn("Error: ", error);
            return { success: false, data: error.message };
        }
    }

    saveMonthRates() {
        try {
            const monthRates = [];
            this.appStateRepository.appState.specialDishes.forEach(item => {
                monthRates.push({
                    id: item.id,
                    category: item.category,
                    handle: item.category,
                    name: item.category,
                    monthRates: item.monthRates ? item.monthRates : { likes: 0, rates: 0 },
                });
            })
            this.appStateRepository.appState.menu.forEach(item => {
                if (item.category !== "") {
                    monthRates.push({
                        id: item.id,
                        category: item.category,
                        handle: item.handle,
                        name: item.name === "" ? item.subname : item.name,
                        monthRate: item.monthRates ? item.monthRates : { likes: 0, rates: 0 }
                    });
                }
            });
            const now = new Date();
            const month = now.getMonth() === 0 ? 12 : now.getMonth();
            const year = month === 12 ? now.getFullYear() - 1 : now.getFullYear();
            db.saveMonthRates(`monthrates_${year}_${month}`, monthRates);
        } catch (error) {
            console.warn("Error: ", error);
        }
    }

    clearnMonthRates() {
        try {
            this.appStateRepository.appState.menu.forEach(item => {
                if (item.monthRate) {
                    item.monthRate.likes = 0;
                    item.monthRate.rates = 0;
                }
            });
        } catch (error) {
            console.warn("Error: ", error);
        }
    }

    getMonthRatesWithDate(year, month) {
        try {
            const result = db.loadMonthRates(`monthrates_${year}_${month}`, "file not found");
            if (result === "file not found") {
                return { success: false, data: result };
            } else {
                return { success: true, data: result };
            }
        } catch (error) {
            console.warn("Error: ", error);
            return { success: false, data: error.message };
        }
    }

    async getOrderQuantityWithDate(date) {
        try {
            const result = await this.orderQuantityRepository.load(date);
            if (!result) {
                return { success: false, data: result };
            } else {
                return { success: true, data: result };
            }
        } catch (error) {
            console.warn("Error: ", error);
            return { success: false, data: error.message };
        }
    }
}

module.exports = AppStateService;
