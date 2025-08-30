const DailyOrderRepository = require("../repositories/dailyOrderRepository");
const { appState:localAppSatte } = require("../state");
const dataTime = require('../utils/dateTime.js')

class DataAnalizeService{

    constructor(appState = localAppSatte, dailyOrderRepository = new DailyOrderRepository()) {
        this.appState = appState,
        this.dailyOrderRepository = dailyOrderRepository
    }

    analizeDailyOrders() {
        const saveOrders = []
        const orders = this.appState.orders.values()
        orders.forEach((ord) => {
            ord.items.forEach((its) => {
                const menuDishIndex = this.appState.menu.findIndex((m) => m.id === its.dishid)
                if (menuDishIndex !== -1) {
                    const menudish = this.appState.menu[menuDishIndex]
                    const quantity = Number(its.quantity)
                    //在菜单里更新
                    if (menudish.orders) {
                        menudish.orders = Number(menudish.orders) + quantity
                    } else {
                        menudish.orders = quantity
                    }
                }
                const date = dataTime.format_portugal_datetime(ord.timestamp);
                saveOrders.push({...ord, date: date})
            })
        })
        this.dailyOrderRepository.save({saveOrders})
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
            } )
        })
        return dishes
    }

}

module.exports = {
    DataAnalizeService
};
