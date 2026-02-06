const {menuService} = require('../services/menuService');
const { print_order_model, print_takeaway_model } = require('./printModels.js');
const { logger } = require('./logger.js')
const dataTime = require('./dateTime.js')
const net = require('net');

const printers = [];


function isIP(str) {
    return net.isIP(str) !== 0;
}

function print_order(order, printModelIndex) {
    logger.info(`打印订单 订单号 - ${order.id}`)
    for (const key in printers) {
        const printer = printers[key];

        if (!printer) continue;
        if (!printer.data) continue;
        if (!printer.data.menu) continue;

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
            logger.info(`订单详细：${String(datas)}`)


            if (isIP(printer.data.curPrinter))
            {
                datas.forEach((item) => {
                    serializedPaint(printer.socket,item);
                })
            }
            else
            {
                datas.forEach((item) => {
                    printer.socket.emit("print", item);
                })
            }

        } else {
            logger.info(`订单打印失败 订单号 - ${order.id}`)
        }
    }
}

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// 用于记录上一个任务的状态
let queue = Promise.resolve();

async function serializedPaint(socket, item) {
    // 1. 将当前任务挂载到队列末尾
    queue = queue.then(async () => {
        try {
            console.log("print task start...")

            socket.emit("print", item);

            // 2. 执行真正的异步逻辑
            await delay(1000);

            console.log("print task end.")
        } catch (error) {
            console.error(`任务出错:`, error);
        }
    });

    // 返回当前排队的结果（可选）
    return queue;
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