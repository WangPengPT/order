const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken")
const { SALT_ROUDS, LOCAL_JWT_SECRET } = require('../utils/consts')

class User {
    constructor({ phoneNumber, password, token }) {
        this.phoneNumber = phoneNumber
        this.password = password
        this.token = token
    }

    // ⚠️ 修一下：fromJSON 需要传对象
    static fromJSON(data = {}) {
        return new User({
            phoneNumber: data.phoneNumber,
            password: data.password,
            token: data.token
        });
    }

    static async create(phoneNumber, plainPassword) {
        const hash = await bcrypt.hash(plainPassword, SALT_ROUDS); // 10 是 salt rounds
        return new User({ phoneNumber, password: hash });
    }

    generateToken() {
        const token = jwt.sign(
        { userId: this.phoneNumber },          // payload 载荷
        LOCAL_JWT_SECRET,                        // 密钥（建议放到 .env 文件）
        { expiresIn: '24h' }                    // 过期时间
        )
        this.token = token
    }

    // 验证密码（登录时使用）
    async verifyPassword(plainPassword) {
        return await bcrypt.compare(plainPassword, this.password);
    }

    toJSON() {
        return {
            phoneNumber: this.phoneNumber,
            password: this.password,
            token: this.token
        };
    }
}

module.exports = User