const { DataAnalizeService } = require("../services/dataAnalizeService")
const { logger } = require("../utils/logger")

class DataAnalizeSocket{
    constructor(io, dataAnalizeService = new DataAnalizeService()) {
        this.io = io
        this.dataAnalizeService = dataAnalizeService
    }

    async getTopDishes(values, callback) {
        logger.info("用户获取菜品销量排行")
        const startDate = values.startDate
        const endDate = values.endDate
        const result = await this.dataAnalizeService.getDishesQuantityByDate(startDate, endDate)
        callback(result)
        if (result.success) {
            logger.info("获取菜品销量排行成功")
        } else {
            logger.info("获取菜品销量排行失败")
        }
    }

        async getTopDishesRante(values, callback) {
        logger.info("用户获取菜品评价排行")
        const startDate = values.startDate
        const endDate = values.endDate
        const result = await this.dataAnalizeService.getMonthRate(startDate, endDate)
        callback(result)
        if (result.success) {
            logger.info("用户获取菜品评价排行成功")
        } else {
            logger.info("用户获取菜品评价排行失败")
        }
    }

    registerHandlers(socket) {
        socket.on('manager_get_top_dishes', async (values, callback) => await this.getTopDishes(values, callback))

        socket.on('manager_get_top_rate_dishes', async (values, callback) => await this.getTopDishesRante(values, callback))
    }

}

module.exports = {
    DataAnalizeSocket
}