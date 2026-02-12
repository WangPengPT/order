const { UserService } = require("../services/userService");
const { logger } = require('../utils/logger.js');

/**
 * UserSocket 类
 * 处理与用户管理相关的 Socket 事件，包括登录、注册、修改密码和重置密码
 */
class UserSocket {
    constructor(io, userService = new UserService()) {
        this.io = io
        this.userService = userService
    }

    /**
     * 处理用户登录请求
     * @param {Object} value 包含 phoneNumber 和 password 的登录信息
     * @param {Function} callback 回调函数，返回登录结果
     */
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

    /**
     * 处理修改密码请求
     * @param {string} phoneNumber 用户手机号
     * @param {string} newPass 新密码
     * @param {Function} callback 回调函数
     */
    async changePassword(phoneNumber, newPass, callback) {
        logger.info("用户修改密码：", phoneNumber, newPass)
        const result = await this.userService.changePassword(phoneNumber, newPass)
        if (result.success) {
            logger.info("密码更新成功")
        } else {
            logger.info("密码更新失败")
        }
        callback(result)
    }

    /**
     * 处理重置密码请求
     * @param {string} phoneNumber 用户手机号
     * @param {Function} callback 回调函数
     */
    async resetPassword(phoneNumber, callback) {
        logger.info("重置密码")
        const result = await this.userService.resetPassword(phoneNumber)
        if (result.success) {
            logger.info("密码更新成功")
        } else {
            logger.info("密码更新失败")
        }
        callback(result)
    }

    /**
     * 处理创建新用户（注册）请求
     * @param {Object} value 包含 phoneNumber 和 password 的用户信息
     * @param {Function} callback 回调函数
     */
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

    /**
     * 注册 Socket 事件监听器
     * @param {Object} socket 当前连接的 Socket 实例
     */
    registerHandlers(socket) {
        // 管理端/用户登录
        socket.on('manager_login', async (value, callback) => { await this.login(value, callback) })

        // 创建新用户
        socket.on("manager_createNewUser", async (value, callback) => { await this.createUser(value, callback) })

        // 修改用户密码
        socket.on("manager_changePassword", async (value, callback) => { await this.changePassword(value.phoneNumber, value.newPass, callback) })

        // 重置用户密码
        socket.on("manager_resetPassword", async (value, callback) => { await this.resetPassword(value, callback) })
    }
}

module.exports = { UserSocket }