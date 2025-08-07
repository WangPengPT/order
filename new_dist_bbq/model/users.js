const bcrypt = require('bcrypt');

class User {
    constructor({ phoneNumber, password }) {
        this.phoneNumber = phoneNumber
        this.password = password
    }

    // ⚠️ 修一下：fromJSON 需要传对象
    static fromJSON(data = {}) {
        return new User({
            phoneNumber: data.phoneNumber,
            password: data.password,
        });
    }

    static async create(phoneNumber, plainPassword) {
        const hash = await bcrypt.hash(plainPassword, 10); // 10 是 salt rounds
        return new User({ phoneNumber, password: hash });
    }

    // 验证密码（登录时使用）
    async verifyPassword(plainPassword) {
        return await bcrypt.compare(plainPassword, this.password);
    }

    toJSON() {
        return {
            phoneNumber: this.phoneNumber,
            password: this.password
        };
    }
}

const users = new Map();

module.exports = { User, users }