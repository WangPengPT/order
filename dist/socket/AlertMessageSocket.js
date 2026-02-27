const {logger} = require("../utils/logger");
const centerSocket = require('./centerSocket.js');

class AlertMessageSocket {

    static client_type = 'client'
    static manager_type = 'manager'

    constructor(io) {
        this.io = io;
    }

    alert(type, alert, callback){
        try{
            logger.info(`收到 ${type} 警报，代码：${alert.code}，消息：${alert.message}`);

            centerSocket.alert(alert)

            if(callback) callback({success:true, data:alert});

        }catch(error){
            logger.error(`${type} 发送警报失败，原因：${error.message}`)
            if(callback) callback({success: false, data: error.message});
        }
    }

    message(type, message, callback){
        try{
            logger.info(`收到 ${type} 信息，代码：${message.code}，消息：${message.message}`);

            centerSocket.message(message)

            if(callback) callback({success:true, data:message});

        }catch(error){
            logger.error(`${type} 发送信息失败，原因：${error.message}`)
            if(callback) callback({success: false, data: error.message});
        }
    }

    async registerHandlers(socket){
        // Register Alert API
        await this.registerAlertHandlers(socket)

        // Register Message API
        await this.registerMessageHandlers(socket)
    }

    // 注册所有 警报 接口事件
    async registerAlertHandlers(socket) {
        socket.on("client_alert", async (alert, callback) => { this.alert(AlertMessageSocket.client_type, alert, callback) })
        socket.on("manager_alert", async (alert, callback) => { this.alert(AlertMessageSocket.manager_type, alert, callback) })
    }

    // 注册所有 消息 接口事件
    async registerMessageHandlers(socket) {
        socket.on("client_message", async (message, callback) => { this.message(AlertMessageSocket.client_type, message, callback) })
        socket.on("manager_message", async (message, callback) => { this.message(AlertMessageSocket.manager_type, message, callback) })
    }

}

module.exports = { AlertMessageSocket }