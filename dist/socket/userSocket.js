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
        } else {
            logger.info("用户登录失败")
            if (!result.data) {
                logger.info(`失败原因: 密码错误`)
            } else {
                logger.info(`失败原因: ${result.data}`)
            }
        }
        callback(result)
    }

    async createUser(value, callback) {
        logger.info("创建新的用户")
        const result = await this.userService.register(value.phoneNumber, value.password)
        if (result.success) {
            logger.info(`用户创建成功 ${result.data}`)
        } else {
            logger.info("用户创建失败")
            logger.info(`失败原因: ${result.data}`)
        }
        callback(result)
    }

    registerHandlers(socket) {
        socket.on('manager_login', async (value, callback) => { await this.login(value, callback) })

        socket.on("manager_createNewUser", async (value, callback) => { await this.createUser(value, callback) })
    }
}

module.exports = { UserSocket }