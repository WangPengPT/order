const AlertMessageRepository = require("../repositories/alertMessageRepository");
const { logger } = require('../utils/logger.js');

class AlertMessageService{
    constructor(alertMessageRepository = new AlertMessageRepository()) {

        this.alertMessageRepository = alertMessageRepository;

    }

    async getAllAlert() {
        try{
            const result = await this.alertMessageRepository.getByType('alert')
            if(!result){
                throw new Error('No alerts');
            }
            return result

        }catch(error){
            logger.error(`[AlertMessageService] Get All Alert Failed: ${error.message}`);
            return []
        }
    }

    // 添加 消息、警报 到数据库
    async add(type, data){
        try{
            let result
            switch (type){
                case 'alert':
                    result = this.addAlert(data)
                    break
                case 'message':
                    result = this.addMessage(data)
                    break
                default:
                    throw new Error('Type not found')
            }
            return result
        }catch (error){
            logger.error("[AlertMessageService] Add Error: " + error.message);
            return {success: false, data:error.message}
        }
    }

    async addAlert(alert){
        try{
            const id = alert.code + '-' + alert.message
            const find = await this.alertMessageRepository.get(id)
            if(!find){
                await this.alertMessageRepository.save('alert', id, alert)
            }else{
                await this.alertMessageRepository.increase(id)
            }

            return {success: true, data: alert}

        }catch (error){
            logger.error("[AlertMessageService] addAlert Error: " + error.message);
            return {success: false, data:error.message}
        }
    }

    async addMessage(msg){
        try{
            const id = msg.code + '-' + msg.message
            const find = await this.alertMessageRepository.get(id)
            if(!find){
                await this.alertMessageRepository.save('message', id, msg)
            }else{
                await this.alertMessageRepository.increase(id)
            }
            return {success: true, data: msg}

        }catch (error){
            logger.error("[AlertMessageService] addMessage Error: " + error.message);
            return {success: false, data:error.message}
        }
    }

    // 删除数据库里的 消息、警报
    async close(data){
        try{
            const id = data.code + '-' + data.message
            const find = await this.alertMessageRepository.get(id)
            if(!find){
                throw new Error("Not found, id: " + id)
            }
            await this.alertMessageRepository.delete(id)
            return {success: true, data: data}
        }catch (error){
            logger.error("[AlertMessageService] Close Error: " + error.message);
            return {success: false, data:error.message}
        }
    }

}

module.exports = AlertMessageService;