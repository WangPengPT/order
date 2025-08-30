const DB = require('../db');
const { logger } = require('../utils/logger.js');
const User = require('../model/users');

class UserRepository {
    constructor(tableName = "users") {
        this.tableName = tableName
    }

    async save(user = new User(), session = null) {
        try {
            if (!user?.phoneNumber){
                logger.info("空User，无法保存")
                return null
            }
            const id = user.phoneNumber
            const plainUsers = user.toJSON()
            
            await DB.set(this.tableName, {
                id: id,
                value: plainUsers
            }, session);

            logger.info(`repo: ✅ Users 保存成功 id=${id}`);
        } catch (err) {
            console.error("❌ 保存 user 失败:", err);
            throw err;
        }
    }

    async hasUsers(session = null) {
        try {
            const users = await this.getAllUsers(session)
            return users.length !== 0
        } catch (error) {
            console.error("❌ 获取用户失败:", error)
            throw error
        }
    }

    async getUserById(id, session = null) {
        try {
            const result = await DB.get(this.tableName, id, null, session);
            if (!result) {
                logger.info(`repo: ⚠ 未能找到 users 数据 [id=${id}]`);
                return null;
            }
            const user = User.fromJSON(result.value)
            return user;
        } catch (err) {
            console.error("❌ 读取 users 失败:", err);
            throw err;
        }
    }

    /**
     * 用户登录
     * @param {string} phone - 用户手机号
     * @param {string} password - 用户明文密码
     * @param {string} id - 存储 users 的记录 id
     * @returns {string|null} 返回用户手机号或 null
     */
    async login(phone, password, session = null) {
        try {
            const id = phone
            // 先加载用户表
            const user = await this.getUserById(id, session);
            if (!user) {
                logger.info(`repo: ⚠ 没有用户数据`);
                return null;
            }

            // 使用 bcrypt 验证密码
            const isValid = await user.verifyPassword(password);
            if (!isValid) {
                logger.info("repo: ❌ 密码错误");
                return null;
            }

            logger.info(`repo: ✅ 用户 ${phone} 登录成功`);
            return phone;

        } catch (err) {
            logger.error(`❌ 登录失败: ${err}`);
            throw err;
        }
    }

    async getAllUsers(session = null) {
        try {
            const collection = await DB.getAll(this.tableName, session)
            const users = []
            collection.forEach(element => {
                const user = User.fromJSON(element.value)
                users.push(user)
            });
            return users
        } catch (error) {
            logger.error(`❌ 获取用户失败: ${err}`);
            throw err;
        }
    }

}

module.exports = UserRepository;