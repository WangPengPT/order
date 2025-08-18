const DB = require('../db');
const { logger } = require('../utils/logger.js');
const { users: modelUsers, User } = require('../model/users');

class UserRepository {
    constructor(users = modelUsers, tableName = "users") {
        this.users = users
        this.tableName = tableName
    }

    async save(id = "default") {
        try {
            const plainUsers = Object.fromEntries(
                [...this.users.entries()].map(([phone, user]) => [phone, user.toJSON()])
            );

            await DB.set(this.tableName, {
                id: id,
                value: plainUsers
            });

            logger.info(`repo: ✅ Users 保存成功 [id=${id}]`);
        } catch (err) {
            console.error("❌ 保存 users 失败:", err);
            throw err;
        }
    }

    async load(id = "default") {
        try {
            const result = await DB.get(this.tableName, id, null);
            if (!result) {
                logger.info(`repo: ⚠ 未能找到 users 数据 [id=${id}]`);
                return null;
            }
            return result.value;
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
    async login(phone, password, id = "default") {
        try {
            // 先加载用户表
            const usersData = await this.load(id);
            if (!usersData) {
                logger.info(`repo: ⚠ 没有用户数据`);
                return null;
            }

            // 查找用户（usersData 是 JSON 对象，需要转成 User 实例）
            const userData = usersData[phone];
            if (!userData) {
                logger.info(`repo: ❌ 用户 ${phone} 不存在`);
                return null;
            }

            const user = User.fromJSON(userData);

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

}

module.exports = UserRepository;