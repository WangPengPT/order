const {logger} = require("../utils/logger");
const centerSocket = require('./centerSocket.js');
const {appState} = require("../state");


class DeliverySocket {

    constructor(io) {
        this.io = io;
    }

    newDeliveryOrder(orders){
        try{
            logger.info(`[Delivery Socket] 收到新外卖订单，开始广播给所有管理端，外卖订单信息: ${JSON.stringify(orders)}`);
            if(!Array.isArray(orders)){
                orders = [orders]
            }

            this.io.emit("new_shopify_orders", orders)

            logger.info(`[Delivery Socket] 新外卖订单广播完成`)
        }catch (error){
            logger.error(`[Delivery Socket] 新外卖订单广播失败: ${error.message}`)
        }
    }

    get_order_list(socket, value){
        console.log("value",value)
        const year = value?.year
        const month = value?.month
        let count = value?.count
        if(year && month){
            count = undefined
        }
        centerSocket.get_center_datas(socket, "shopify_orders", "order_list", count, year, month)
    }

    async registerHandlers(socket){
        socket.on("get_shopify_orders", (value) => { this.get_order_list(socket, value) })

    }

}

module.exports = DeliverySocket;
