const User = require('../model/users.js');

const { logger } = require('../utils/logger.js');
const UserRepository = require('../repositories/userRepository.js');
const DB = require('../db.js');

const ADMIN_PHONE = 'admin';
const ADMIN_PASSWORD = process.env.ADMIN_PASS || "0000";

class UserService {
    constructor(usersRepository = new UserRepository()) {
        this.usersRepository = usersRepository
    }

    async InitOrLoadUserData() {
        try {
            return await DB.withTransaction(async (session) => {
                const hasUser = await this.usersRepository.hasUsers(session)
                if (hasUser) {
                    logger.info(`加载现有用户数据`);
                    return await this.usersRepository.getAllUsers(session)
                } else {
                    const admin = await User.create(ADMIN_PHONE, ADMIN_PASSWORD)
                    logger.info(`创建新的用户数据`);
                    this.usersRepository.save(admin, session)
                }
            })
        } catch (error) {
            console.warn("Error: ", error);
        }
    }

    async register(phoneNumber, password) {
        try {
            return await DB.withTransaction(async (session) => {
                const hasUser = this.usersRepository.getUserById(phoneNumber, session)
                if (hasUser) throw new Error("This user already exists")
                const user = await User.create(phoneNumber, password);
                this.usersRepository.save(user, session)

                const userVer = this.usersRepository.getUserById(phoneNumber, session)
                if (!userVer) throw new Error("Faild create new User")
                return {
                    success: true,
                    data: userVer.phoneNumber
                }
            })
        } catch (error) {
            return { success: false, data: error.message }
        }
    }

    async saveUsers(users) {
        try {
            return await DB.withTransaction(async (session) => {
                for (let element of users) {
                    const user = User.fromJSON(element)
                    await this.usersRepository.save(user, session)
                }
                return {
                    success: true
                }
            })
        } catch (error) {
            return { success: false, data: error.message }
        }
    }

    async login(phoneNumber, password) {
        try {
            return await DB.withTransaction(async (session) => {
                console.log("login: ", phoneNumber, password)
                const phone = await this.usersRepository.login(phoneNumber, password, session)
                if (!phone || phone == null) throw new Error("User not found or password wrong")
                const user = await this.usersRepository.getUserById(phone, session)
                if (!user) throw new Error("Unexpected error, not foud the user")
                user.generateToken()
                await this.usersRepository.save(user, session)
                const result = user.token
                return {
                    success: true,
                    data: result
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
