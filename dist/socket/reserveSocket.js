const {logger} = require("../utils/logger");
const centerSocket = require('./centerSocket.js');

class  ReserveSocket {

    constructor (io) {
        this.io = io;
    }

    newReserveOrder(reserves){
        try{
            logger.info(`[Reserve Socket] 收到新订台订单，开始广播给所有管理端，订台订单信息: ${JSON.stringify(reserves)}`);

            if(!Array.isArray(reserves)){
                reserves = [reserves]
            }

            this.io.emit("new_reserves", reserves)

            logger.info(`[Reserve Socket] 新订台订单广播完成`);
        }catch(error){
            logger.error(`[Reserve Socket] 新订台订单广播失败: ${error.message}`)
        }
    }

    cancelReserve(value, callback){
        try{
            logger.info(`[Reserve Socket] 向中心服务器申请获取订台数据`)
            centerSocket.updateReserveData(value, (cb) => {
                if (cb.success) {
                    logger.info(`[Reserve Socket] 申请取消订台成功, id:${cb.data.name}`)
                } else {
                    logger.error(`[Reserve Socket] 申请取消订台失败: ${cb.data}`)
                }
                if (callback) callback({ code: cb.success ? 200 : 400, ...cb })
            })
        }catch (error){
            logger.error(`[Reserve Socket] 申请取消订单失败: ${error.message}`)
            if(callback) callback({ success: false, code: 400, data: error.message })
        }

    }

    async registerHandlers(socket){
        socket.on("get_reserves", () => { centerSocket.get_center_datas(socket, "reserves", "reserve_list") })

        socket.on("manager_cancelReserve", (value, callback) => { this.cancelReserve(value, callback) })
    }




}

module.exports = ReserveSocket
