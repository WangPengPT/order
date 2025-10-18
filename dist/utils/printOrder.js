const {menuService} = require('../services/menuService');
const { print_order_model, print_takeaway_model } = require('./printModels.js');
const { logger } = require('./logger.js')
const dataTime = require('./dateTime.js')

const printers = [];

function print_order(order, printModelIndex) {
    logger.info(`打印订单 订单号 - ${order.id}`)
    for (const key in printers) {
        const printer = printers[key];

        if (!printer) continue;
        if (!printer.data) continue;

        let hasData = false;
        for (let i = 0; i < order.items.length; i++) {
            let item = order.items[i];
            let type = menuService.getDishCategory(item);
            if (printer.data.menu.includes(type)) {
                hasData = true;
                break;  
            }
        }

        if (hasData) {
            logger.info(`订单打印成功 订单号 - ${order.id}`);
            const datas = print_order_model(order, printModelIndex, printer)
            console.log("order datas length:",datas.length)
            datas.forEach((item) => {
                printer.socket.emit("print", item);
            })
        }
        else {
            logger.info(`订单打印失败 订单号 - ${order.id}`)
        }
    }
}

function print_takeaway_order(order,printModelIndex){
    try {
        logger.info(`打印外卖订单 订单号 - ${order.name}`)
        for (const key in printers) {
            const printer = printers[key];

            if (!printer) continue;
            if (!printer.data) continue;
            if (printer.data.print_takeaway != 'true') continue;

            // logger.info("打印机 : "+printer.data)
            // logger.info("打印机 takeaway : "+printer.data.print_takeaway)
            // logger.info("打印机 takeaway type: "+ (typeof printer.data.print_takeaway))

            let hasData = (order.line_items.length > 0);
            // console.log("hasData: "+hasData)

            if (hasData) {
                logger.info(`外卖订单打印成功 订单号 - ${order.id}`);
                logger.info( "print takeaway...", order);
                const data = print_takeaway_model(order, printModelIndex,printer)
                printer.socket.emit("print", data)
            }
            else {
                console.log( "didn't print takeaway", order, printer.data );
            }

        }
    } catch (error) {
        logger.warn(`打印外卖订单错误 订单号 - - ${order.name}`)
        logger.warn(error.message)
    }

}


module.exports = {
    print_order,
    print_takeaway_order,
    printers
};