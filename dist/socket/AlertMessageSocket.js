const {logger} = require("../utils/logger");
const centerSocket = require('./centerSocket.js');
const AlertMessageService = require("../services/alertMessageService");

class AlertMessageSocket {

    static client_type = 'client'
    static manager_type = 'manager'

    constructor(io, alertMessageService = new AlertMessageService()) {
        this.io = io;
        this.alertMessageService = alertMessageService;
    }

    async add(type, data, api){
        try{
            const result = await this.alertMessageService.add(type, data);
            if(!result.success){
                throw new Error(result.message)
            }

            this.io.emit(api, data)
            logger.info(`[AlertMessage] 广播${type}给${api}，代码：${data.code}，消息：${data.message}`)

        }catch(error){
            logger.error(`[AlertMessage] 添加${type}出现错误：${error.message}`)
        }
    }

    async close(type, identity, data){
        try{
            const result = await this.alertMessageService.close(data);
            if(!result.success){
                throw new Error(result.message)
            }
            const api = type + '_closed_' + identity;
            this.io.emit(api, data)
            logger.info(`[AlertMessageSocket] 广播${type}给${api}，代码：${data.code}，消息：${data.message}`)

        }catch(error){
            logger.error(`[AlertMessageSocket] 关闭${type}出现错误：${error.message}`)
        }
    }


    alert(type, alert, callback){
        try{
            logger.info(`[AlertMessageSocket] 收到 ${type} 警报，代码：${alert.code}，消息：${alert.message}`);

            centerSocket.alert(alert)

            if(callback) callback({success:true, data:alert});

        }catch(error){
            logger.error(`[AlertMessageSocket] ${type} 发送警报失败，原因：${error.message}`)
            if(callback) callback({success: false, data: error.message});
        }
    }


    message(type, message, callback){
        try{
            logger.info(`[AlertMessageSocket] 收到 ${type} 信息，代码：${message.code}，消息：${message.message}`);

            centerSocket.message(message)

            if(callback) callback({success:true, data:message});

        }catch(error){
            logger.error(`[AlertMessageSocket] ${type} 发送信息失败，原因：${error.message}`)
            if(callback) callback({success: false, data: error.message});
        }
    }

    feedback(type, message, callback){
        try{
            const numberImages = message.images.length
            logger.info(`[AlertMessageSocket] 收到 ${type}反馈，图片数：${numberImages}，内容：${message.message}，联系邮箱：${message.email}`)

            centerSocket.feedback(message)

            if(callback) callback({success:true, data:message});
        }catch(error){
            logger.error(`[AlertMessageSocket] ${type} 发送反馈失败，原因${error.message}`)
            if(callback) callback({success: false, data: error.message});
        }
    }

    async registerHandlers(socket){
        // Register Alert API
        await this.registerAlertHandlers(socket)

        // Register Message API
        await this.registerMessageHandlers(socket)

        // Register Feedback API
        await this.registerFeedbackHandlers(socket)
    }

    // 注册所有 警报 接口事件
    async registerAlertHandlers(socket) {
        socket.on("client_alert", (alert, callback) => { this.alert(AlertMessageSocket.client_type, alert, callback) })
        socket.on("manager_alert", (alert, callback) => { this.alert(AlertMessageSocket.manager_type, alert, callback) })

        socket.on("manager_close_alert", async (alert) => {await this.close('alert',AlertMessageSocket.manager_type,alert)})

        socket.emit("manager_all_alert", await this.alertMessageService.getAllAlert())
    }

    // 注册所有 消息 接口事件
    async registerMessageHandlers(socket) {
        socket.on("client_message", async (message, callback) => { this.message(AlertMessageSocket.client_type, message, callback) })
        socket.on("manager_message", async (message, callback) => { this.message(AlertMessageSocket.manager_type, message, callback) })

        socket.emit("manager_all_message", await this.alertMessageService.getAllMessage())

    }

    // 注册所有 反馈 接口事件
    async registerFeedbackHandlers(socket) {
        socket.on("client_feedback", async (feedback, callback) => {this.feedback(AlertMessageSocket.client_type, feedback, callback) })
        socket.on("manager_feedback", async (feedback, callback) => {this.feedback(AlertMessageSocket.manager_type, feedback, callback) })
    }

}

module.exports = { AlertMessageSocket }