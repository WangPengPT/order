const User = require('../model/users.js');

const { logger } = require('../utils/logger.js');
const UserRepository = require('../repositories/userRepository.js');
const DB = require('../db.js');

const ADMIN_PHONE = 'admin';
const ADMIN_PASSWORD = process.env.ADMIN_PASS || "0000";

/**
 * UserService 类
 * 提供用户管理的核心业务逻辑，包括初始化、注册、登录、修改密码和持久化存储
 */
class UserService {
    constructor(usersRepository = new UserRepository()) {
        this.usersRepository = usersRepository
    }

    /**
     * 初始化或加载用户数据
     * 如果数据库为空，则创建一个默认的管理员账户
     */
    async InitOrLoadUserData() {
        try {
            return await DB.withTransaction(async (session) => {
                const hasUser = await this.usersRepository.hasUsers(session)
                if (hasUser) {
                    logger.info(`加载现有用户数据`);
                    return await this.usersRepository.getAllUsers(session)
                } else {
                    // 创建初始管理员账号
                    const admin = await User.create(ADMIN_PHONE, ADMIN_PASSWORD)
                    logger.info(`创建新的用户数据 (默认管理员)`);
                    this.usersRepository.save(admin, session)
                }
            })
        } catch (error) {
            console.warn("初始化用户数据失败: ", error);
        }
    }

    /**
     * 用户注册
     * @param {string} phoneNumber 手机号/用户名
     * @param {string} password 密码
     */
    async register(phoneNumber, password) {
        try {
            return await DB.withTransaction(async (session) => {
                const hasUser = this.usersRepository.getUserById(phoneNumber, session)
                if (hasUser) throw new Error("该用户已存在")
                
                const user = await User.create(phoneNumber, password);
                this.usersRepository.save(user, session)

                const userVer = this.usersRepository.getUserById(phoneNumber, session)
                if (!userVer) throw new Error("创建新用户失败")
                return {
                    success: true,
                    data: userVer.phoneNumber
                }
            })
        } catch (error) {
            return { success: false, data: error.message }
        }
    }

    /**
     * 重置用户密码为默认管理员密码
     */
    async resetPassword(phoneNumber) {
        try {
            return await DB.withTransaction(async (session) => {
                const hasUser = await this.usersRepository.getUserById(phoneNumber, session)
                if (!hasUser) throw new Error("用户不存在")
                
                const changedUser = await hasUser.changePassword(phoneNumber, ADMIN_PASSWORD)
                await this.usersRepository.save(changedUser, session)
                
                const newUser = await this.usersRepository.getUserById(phoneNumber, session)
                if (!newUser) throw new Error("获取更新后的用户失败")
                if (newUser.password !== changedUser.password) throw new Error("密码重置失败")
                
                return { success: true }
            })
        } catch (error) {
            return { success: false, data: error.message }
        }
    }

    /**
     * 修改用户密码
     */
    async changePassword(phoneNumber, newPassword) {
        try {
            return await DB.withTransaction(async (session) => {
                const hasUser = await this.usersRepository.getUserById(phoneNumber, session)
                if (!hasUser) throw new Error("用户不存在")
                
                const changedUser = await hasUser.changePassword(phoneNumber, newPassword)
                await this.usersRepository.save(changedUser, session)
                
                const newUser = await this.usersRepository.getUserById(phoneNumber, session)
                if (!newUser) throw new Error("获取更新后的用户失败")
                if (newUser.password !== changedUser.password) throw new Error("密码修改失败")
                
                return { success: true }
            })
        } catch (error) {
            console.warn("修改密码出错: ", error);
            return { success: false, data: error.message }
        }
    }

    /**
     * 批量保存/更新用户数据
     */
    async saveUsers(users) {
        try {
            return await DB.withTransaction(async (session) => {
                for (let element of users) {
                    const user = User.fromJSON(element)
                    await this.usersRepository.save(user, session)
                }
                return { success: true }
            })
        } catch (error) {
            return { success: false, data: error.message }
        }
    }

    /**
     * 用户登录验证并生成 Token
     * @param {string} phoneNumber 手机号/用户名
     * @param {string} password 密码
     */
    async login(phoneNumber, password) {
        try {
            return await DB.withTransaction(async (session) => {
                console.log("正在尝试登录: ", phoneNumber)
                // 验证账号密码
                const phone = await this.usersRepository.login(phoneNumber, password, session)
                if (!phone || phone == null) throw new Error("用户名或密码错误")
                
                const user = await this.usersRepository.getUserById(phone, session)
                if (!user) throw new Error("系统异常：未找到对应用户信息")
                
                // 生成新的认证 Token 并保存
                user.generateToken()
                await this.usersRepository.save(user, session)
                
                return {
                    success: true,
                    data: user.token
                }
            })
        } catch (error) {
            return { success: false, data: error.message }
        }
    }
}

module.exports = {
    UserService
};
