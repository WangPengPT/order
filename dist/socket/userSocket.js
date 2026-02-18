const { UserService } = require("../services/userService");
const { logger } = require('../utils/logger.js');

class UserSocket {
    constructor(io, userService = new UserService()) {
        this.io = io
        this.userService = userService
    }

    async login(value, callback) {
        logger.info("用户登录")
        const result = await this.userService.login(value.phoneNumber, value.password)
        if (result.success && result.data) {
            logger.info("用户登录成功")
            callback({ code: 200, ...result })
        } else {
            logger.info("用户登录失败")
            let code = 400;
            if (!result.data) {
                logger.info(`失败原因: 密码错误`)
                code = 401;
            } else {
                logger.info(`失败原因: ${result.data}`)
            }
            callback({ code, ...result })
        }
    }

    async changePassword(phoneNumber, newPass, callback) {
        logger.info("用户修改密码：", phoneNumber, newPass)
        const result = await this.userService.changePassword(phoneNumber, newPass)
        if (result.success) {
            logger.info("密码更新成功")
            callback({ code: 200, ...result })
        } else {
            logger.info("密码更新失败")
            callback({ code: 400, ...result })
        }
    }

    async resetPassword(phoneNumber, callback) {
        logger.info("重置密码")
        const result = await this.userService.resetPassword(phoneNumber)
        if (result.success) {
            logger.info("密码更新成功")
            callback({ code: 200, ...result })
        } else {
            logger.info("密码更新失败")
            callback({ code: 400, ...result })
        }
    }

    async createUser(value, callback) {
        logger.info("创建新的用户")
        const result = await this.userService.register(value.phoneNumber, value.password)
        if (result.success) {
            logger.info(`用户创建成功 ${result.data}`)
            callback({ code: 200, ...result })
        } else {
            logger.info("用户创建失败")
            logger.info(`失败原因: ${result.data}`)
            callback({ code: 400, ...result })
        }
    }

    registerHandlers(socket) {
        socket.on('manager_login', async (value, callback) => { await this.login(value, callback) })

        socket.on("manager_createNewUser", async (value, callback) => { await this.createUser(value, callback) })

        socket.on("manager_changePassword", async (value, callback) => { await this.changePassword(value.phoneNumber, value.newPass, callback) })

        socket.on("manager_resetPassword", async (value, callback) => { await this.resetPassword(value, callback) })
    }
}

module.exports = { UserSocket }