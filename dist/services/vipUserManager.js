
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
            console.log(ret)
            callback(ret)
        })

        socket.on("vip_change_password", async (oldPwd, newPwd, callback) => {
            const ret = await this.change_password(socket, oldPwd, newPwd)
            callback(ret)
        })

    }


    async change_password(socket, oldPwd, newPwd)
    {
        console.log(socket.user)
        if (socket.user &&  socket.user.password == oldPwd) {

            socket.user.password = newPwd
            DB.set(db_name, socket.user)

            return {
                result: true
            }
        }

        return {
            result: false,
            error: "error password"
        }
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

            this.onLogin(socket,user)
            
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

        console.log(user)

        if (!this.check_sting(user.id)) {
            return {
                result: false,
                error: "invalid id"
            }
        }

        if (!this.isEmail(user.email)) {
            return {
                result: false,
                error: "invalid email."
            }
        }

        if (!this.isPhone(user.phone)) {
            return {
                result: false,
                error: "invalid pone"
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

        user.registrationDate = Date.now();
        user.points = 0;

        DB.set(db_name, user)

        this.onLogin(socket,user)

        return {
            result: true,
            user: user,
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