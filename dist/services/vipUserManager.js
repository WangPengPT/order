
const DB = require('../db.js');

const db_name = "vip_user";

class VIPUserManager {

    constructor() {
    }

    init(io) {
        this.io = io
    }


    initSocket(socket) {
        socket.on("vip_login", async (key, password, callback) => {
            const ret = await this.login(socket, key, password)
            callback(ret)
        })

        socket.on("vip_register", async (user, callback) => {
            const ret = await this.registerUser(socket, user)
            callback(ret)
        })
    }

    async login(socket, key, password) {

        let q
        if (this.isEmail(key)) {
            q = this.getEmailQ(key)
        } else if (this.isPhone(key)) {
            q = this.getPhoneQ(key)
        } else {
            q = this.getIdQ(key)
        }


        const user = await DB.findOne(db_name, q)

        if (user && user.password == password) {
            return {
                result: true,
                user: user,
            }
        } else {
            return {
                result: false,
                error: "login error"
            }
        }
    }


    check_sting(str) {
        if (typeof str != 'string') return false
        if (str == '') return false;

        return true;
    }

    async registerUser(socket, user) {

        if (this.isEmail(user.email)) {
            return {
                result: false,
                error: "invalid email."
            }
        }

        if (this.isPhone(user.phone)) {
            return {
                result: false,
                error: "invalid pone"
            }
        }

        if (this.check_sting(user.id)) {
            return {
                result: false,
                error: "invalid id"
            }
        }


        const q = {
            $or: [
                {email: {$eq: user.email}},
                {phone: {$eq: user.phone}},
                {id: {$eq: user.id}}
            ]
        }

        const last = await DB.findOne(db_name, q)

        if (last) {
            return {
                result: false,
                error: "user is exists."
            }
        }

        this.onLogin(socket,user)

        return {
            result: true
        }
    }

    isPhone(phone) {
        if (!this.check_sting(phone)) {
            return false;
        }
        const regex = /^(\+?[1-9]\d{0,2}[-.\s]?)?($\d{1,4}$[-.\s]?)?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
        return regex.test(phone);
    }

    isEmail(email) {
        if (!this.check_sting(email)) {
            return false;
        }
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    getEmailQ(email) {
        const q = {
            phone: {$eq: email},
        }
        return q
    }

    getIdQ(id) {
        const q = {
            id: {$eq: id},
        }
        return q
    }

    getPhoneQ(phone) {
        const q = {
            phone: {$eq: phone},
        }
        return q
    }

    onLogin(socket,user) {
        socket.user = user
    }

}

module.exports = new VIPUserManager();