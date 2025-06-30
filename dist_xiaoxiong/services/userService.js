const { users, User } = require('../model/users.js');
const db = require('../filedb.js')
const { logger } = require('../utils/logger.js')

const USERS_FILENAME = "users"
const ADMIN_PHONE = 'admin';
const ADMIN_PASSWORD = process.env.ADMIN_PASS || "1015";

function saveUserData() {

    const plainUsers = Object.fromEntries(
    [...users.entries()].map(([phone, user]) => [phone, user.toJSON()])
  );
    db.saveData(USERS_FILENAME, plainUsers)
}

async function initUserData() {
  const hasFile = db.fileExists(USERS_FILENAME + ".json")
  if (hasFile) {
    const raw = db.loadData(USERS_FILENAME, undefined);

    // 加载到 Map
    for (const [phone, data] of Object.entries(raw)) {
      users.set(phone, User.fromJSON(data));
    }
    logger.info('加载现有用户数据');
  } else {
    // 文件不存在：初始化默认管理员
    const admin = await User.create(ADMIN_PHONE, ADMIN_PASSWORD);
    users.set(ADMIN_PHONE, admin);
    saveUserData();                      // 保存初始数据
    logger.info('创建新的用户数据');
  }
}

async function register(phoneNumber, password) {
    try {
        const hasUser = users.get(phoneNumber)
        if (hasUser) throw new Error("This user already exists")
        const user = await User.create(phoneNumber, password);
        users.set(phoneNumber, user)

        const userVer = users.get(phoneNumber)
        if (!userVer) throw new Error("Faild create new User")
        return {
            success: true,
            data: userVer.phoneNumber
        }
    } catch (error) {
        return { success: false, data: error.message }
    }
}

async function login(phoneNumber, password) {
    try {
        let result = false
        const user = users.get(phoneNumber)
        if (!user) throw new Error("Not found the user")
        const passver = await user.verifyPassword(password)
        if (passver) {
            result = true
        }
        return {
            success: true,
            data: result
        }
    } catch (error) {
        return { success: false, data: error.message }
    }
    
}

module.exports = {
	login,
	register,
	initUserData,
    saveUserData
};
