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
            // print_orde_to_io(printer, order, printer.data.every_one == "true");
            const datas = print_order_model(order, printModelIndex, printer)
            console.log("order datas length:",datas.length)
            datas.forEach((item) => {
                printer.socket.emit("print", item);
            })
        }
        else {
            logger.info(`订单打印失败 订单号 - ${order.id}`)
            //console.log( "didn't print", order, printer.data );
        }
    }
}

function print_takeaway_order(order,printModelIndex){
    logger.info(`打印外卖订单 订单号 - ${order.name}`)
    // print_takeaway_orde_to_io(null, order)
    for (const key in printers) {
        const printer = printers[key];
        logger.info("打印机 : "+printer.data)
        logger.info("打印机 takeaway: "+printer.data.print_takeaway)
        logger.info("打印机 takeaway type: "+ (typeof printer.data.print_takeaway))

        if (!printer) continue;
        if (!printer.data) continue;
        if (printer.data.print_takeaway != 'true') continue;

        let hasData = (order.line_items.length > 0);
        console.log("hasData: "+hasData)

        if (hasData) {
            logger.info( "print takeaway...", order);
            const data = print_takeaway_model(order, printModelIndex,printer)
            printer.socket.emit("print", data)
            // print_takeaway_orde_to_io(printer, order)
        }
        else {
            console.log( "didn't print takeaway", order, printer.data );
        }

    }
}

let print_data = "";
function add_print(value) {
    if (value) {
        print_data += value + '\n';
    }
    else {
        print_data += '\n';
    }
}
/*
function print_orde_to_io(printer, order, every_one) {
    const io = printer.socket

    console.log("-- Every_One?", every_one,"--");


    let BLOD_HAD = "";
    if (printer.data.tags && printer.data.tags.includes("\b")) {
        BLOD_HAD = "\b";
    }

    print_data = "";

    add_print("\torder id: " + order.id);
    add_print(BLOD_HAD + "\ttable: " + order.table);
    add_print("\ttime: " + format_portugal_datetime(order.timestamp));
    add_print("-----------------------------------");

    let needLine = false;
    if (order.name && order.name != "") {
        needLine = true;
        add_print("\tname: " + order.name);
    }

    if (order.note && order.note != "") {
        needLine = true;
        add_print("\tnote: " + order.note);
    }

    if (needLine) {
        add_print("-----------------------------------");
    }

    const head_length = print_data.length;

    for (let i = 0; i < order.items.length; i++) {
        let item = order.items[i];
        let type = menuService.getDishCategory(item);

        if (!printer.data.menu.includes(type)) continue;

        const dish = menuService.findDish(item.dishid);


        if (dish) {
            let name = dish.subname;
            if (name == undefined || name == "Default Title" || name == "undefined") {
                name = item.name;
            } else {
                name = item.name + "-" + name;
            }

            if (item.notes) {
                for (let j = 0; j < item.notes.length; j++) {
                    add_print("  " + item.notes[j]);
                }
            }
            const dishid = item.dishid.toString().replaceAll('-','');

            add_print(BLOD_HAD + "=>" + item.quantity + "-@" + dishid + " " + name);
            if (item.dishNote) {
                add_print("(note: " + item.dishNote + " )");
            }
        }
        else {
            add_print( "=>"+ item.quantity + "-@" + item.name );
            for (let j = 0; j < item.notes.length; j++) {
                add_print("  " + item.notes[j]);
            }
            if (item.dishNote) {
                add_print("(note: " + item.dishNote + " )");
            }
        }

        if (every_one) {
            io.emit("print", print_data);
            console.log("print data:\n" + print_data);

            print_data = print_data.substring(0, head_length);
        }
    }



    if (!every_one) {
        io.emit("print", print_data);
        console.log("print data:\n" + print_data);
    }
}
*/

// TakeAway Print Function
let print_takeaway_data = "";
function add_takeaway_print(value){
    if (value) {
        print_takeaway_data += value + '\n';
    }
    else {
        print_takeaway_data += '\n';
    }
}
function print_takeaway_orde_to_io(printer, order) {
    const takeaway_io = printer.socket
    print_takeaway_data = ""
    let price_total = 0
    add_takeaway_print("\bTakeaway: " + order.name);
    add_takeaway_print("Customer Name:" + order.customer.name);

    add_takeaway_print("-------------------------------")

    add_takeaway_print("\bPick up data: " + order.pickupDate)
    add_takeaway_print("\bPick up time: " + order.pickupTime)

    add_takeaway_print("-------------------------------")

    for(let i=0; i<order.line_items.length; i++) {
        const item = order.line_items[i]
        const total = (item.price*item.quantity).toFixed(2)
        price_total += Number(total)
        add_takeaway_print(item.sku+" "+item.name+" * "+item.quantity);
        add_takeaway_print(" "+item.price+" * "+item.quantity+" = "+total);
    }

    add_takeaway_print("-------------------------------")
    add_takeaway_print("Total: "+price_total+" Euro");

    console.log("print takeaway data:\n",print_takeaway_data)
    takeaway_io.emit("print", print_takeaway_data);
}

function format_portugal_datetime(timestamp) {
    return dataTime.format_portugal_datetime(timestamp)
}

function format_datetime_base(timestamp) {
    var today = new Date(timestamp);

    // date
    var DD = String(today.getDate()).padStart(2, '0');
    var MM = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();

    // time
    hh = String(today.getHours()).padStart(2, '0');
    mm = String(today.getMinutes()).padStart(2, '0');
    ss = String(today.getSeconds()).padStart(2, '0');
    today = yyyy + '-' + MM + '-' + DD + ' ' + hh + ':' + mm + ':' + ss;
    return today;
}

module.exports = {
    print_order,
    print_takeaway_order,
    printers
};