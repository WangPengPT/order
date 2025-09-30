const { CustomDishService } = require("../services/customDishService");
const { MenuService } = require("../services/menuService.js");
const { logger } = require('../utils/logger.js')

class CustomDishSocket{
    constructor(io, customDishService = new CustomDishService(), menuService = new MenuService()) {
        this.io = io
        this.customDishService = customDishService
        this.menuService = menuService
    }

    async updateLike(id, callback, isLike) {
        logger.info(`更新自定义菜单评价 id-${id}`)
        const result = await this.customDishService.updateLike(id, isLike)
        if (result.success) {
            logger.info(`更新自定义菜单评价成功 id-${id}`)
            callback(result)
        } else {
            logger.info(`更新自定义菜单评价失败 id-${id}`)
        }
    }

    async getSimplyCustomDish() {
        logger.info("获取简易自定义菜单")
        const result = await this.customDishService.getSimplyAllTemplate()
        if (result.success) {
            logger.info(`更新自定义菜单评价成功 id-${id}`)
        } else {
            logger.info(`更新自定义菜单评价失败 id-${id}`)
        }
        return result
    }

    async updateEnable(newState, callback) {
        logger.info(`更改自定义菜开关 - id: ${newState.id}; enable: ${newState.enable}`)
        const result = await this.customDishService.updateEnbale(newState)
        if (result.success) {
            logger.info("更改自定义菜开关成功")
            await this.menuService.reorganizeMenuTab_custom()
            callback(result)
        } else {
            logger.info("更改自定义菜开关失败")
        }
    } 

    async registerHandlers(socket) {
        socket.emit("custom_dish_data", await this.customDishService.getAllEnableTemplates())

        socket.emit("manager_get_all_customDishes", await this.customDishService.getAllTemplates())

        socket.on('manager_update_custom_dish_enable', async (value, cb) => { await this.updateEnable(value, cb)})

        socket.on('custom_dish_like', async (value,cb) => { await this.updateLike(value, cb, true) })

        socket.on('custom_dish_unlike', async (value,cb) => { await this.updateLike(value, cb, false) })

    }

}

module.exports = {
    CustomDishSocket
}