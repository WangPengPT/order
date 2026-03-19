const {logger} = require("../utils/logger");
const VarietyShopsService = require("../services/varietyShopsService");


class VarietyShopsSocket {

    constructor( io, varietyShopsService = new VarietyShopsService() ) {
        this.io = io
        this.varietyShopsService = varietyShopsService;
    }

    async update(data, callback){
        try{
            logger.info(`[VarietyShopsSocket] 管理员请求更新多类型商店数据，id=${data.id}，值：${data.value}`);
            const result = await this.varietyShopsService.update(data.id, data.value);
            if (!result.success) {
                logger.error(`[VarietyShopsSocket] 管理员请求更新多类型商店数据失败，原因：${result.data}`)
            }
            this.io.emit('client_send_variety_shops', result.data);
            if(callback) callback({code:result.success? 200:400, success: result.success, data:result.data});
        } catch (error) {
            logger.error(`[VarietyShopsSocket] 管理员请求更新多类型商店数据失败，原因：${error.message}`)
            if(callback) callback({code:500, success:false, data:error.message})
        }
    }

    async delete(id, callback){
        try{
            `[VarietyShopsSocket] 管理员请求删除多类型商店数据，id=${id}`
            const result = await this.varietyShopsService.delete(id);
            if (!result.success) {
                logger.error(`[VarietyShopsSocket] 管理员请求删除多类型商店数据失败，原因：${result.data}`)
            }
            if(callback) callback({code:result.success? 200:400, success: result.success, data:result.data});
        }catch (error) {
            logger.error(`[VarietyShopsSocket] 管理员请求删除多类型商店数据失败，原因：${error.message}`)
            if(callback) callback({code:500, success:false, data:error.message})
        }
    }

    async registerHandlers(socket){

        // on
        socket.on('manager_update_varietyShops', async (data, callback) => { await this.update(data, callback)})
        socket.on('manager_delete_varietyShops', async (id, callback) => { await this.delete(id, callback)});
        socket.on('get_variety_shops', async () =>{ socket.emit('variety_shops', await this.varietyShopsService.getAll()) })

        // emit
        socket.emit('variety_shops', await this.varietyShopsService.getAll())

    }



}

module.exports = VarietyShopsSocket