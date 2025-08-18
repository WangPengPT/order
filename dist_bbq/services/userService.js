const { User, users } = require('../model/users.js');
const db = require('../filedb.js')
const { logger } = require('../utils/logger.js');
const UserRepository = require('../repositories/userRepository.js');

const ADMIN_PHONE = 'admin';
const ADMIN_PASSWORD = process.env.ADMIN_PASS || "0000";

class UserService {
    constructor(usersRepository = new UserRepository(users)) {
        this.usersRepository = usersRepository
    }

    async saveUserData() {
        await this.usersRepository.save()
    }

    async InitOrLoadUserData() {
        try {
            const data = await this.usersRepository.load()
            if (data && data != null) {
                for (const [phone, content] of Object.entries(data)) {
                    this.usersRepository.users.set(phone, User.fromJSON(content));
                }
                logger.info(`加载现有用户数据`);
            } else {
                const admin = await User.create(ADMIN_PHONE, ADMIN_PASSWORD);
                this.usersRepository.users.set(ADMIN_PHONE, admin);
                await this.saveUserData()
                logger.info(`创建新的用户数据`);
            }
            // tablesPassword.init(appState.tables);
        } catch (error) {
            console.warn("Error: ", error);
        }
    }

    async register(phoneNumber, password) {
        try {
            const hasUser = this.usersRepository.users.get(phoneNumber)
            if (hasUser) throw new Error("This user already exists")
            const user = await User.create(phoneNumber, password);
            this.usersRepository.users.set(phoneNumber, user)

            const userVer = this.usersRepository.users.get(phoneNumber)
            if (!userVer) throw new Error("Faild create new User")
            return {
                success: true,
                data: userVer.phoneNumber
            }
        } catch (error) {
            return { success: false, data: error.message }
        }
    }

    async login(phoneNumber, password) {
        try {
            const result = await this.usersRepository.login(phoneNumber, password)
            if (!result || result == null) throw new Error("User not found or password wrong")
            return {
                success: true,
                data: result
            }
        } catch (error) {
            return { success: false, data: error.message }
        }

    }
}

module.exports = {
    UserService
};
