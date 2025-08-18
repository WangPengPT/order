const menuService = require('../services/menuService');
const { logger } = require('./logger.js')


const printers = [];


function print_order(order) {
    // console.log("order:",order);
    logger.info(`打印订单 订单号 - ${order.id}`)
    for (const key in printers) {
        const printer = printers[key];

        if (!printer) continue;
        if (!printer.data) continue;

        let hasData = false;
        for (let i=0; i<order.items.length; i++) {
            let item = order.items[i];
            let type  = menuService.getDishCategory(item);
            if (printer.data.menu.includes(type))
            {
                hasData = true;
                break;
            }
        }

        if (hasData) {
            //logger.info( "print...", order);
            print_orde_to_io(printer,order,printer.data.every_one == "true");
        }
        else
        {
            //console.log( "didn't print", order, printer.data );
        }
    }
}


let print_data = "";
function  add_print(value)
{
    if (value)
    {
        print_data += value + '\n';
    }
    else
    {
        print_data += '\n';
    }
}

function print_orde_to_io(printer,order,every_one)
{
    io  = printer.socket

    console.log("....",every_one);


    let BLOD_HAD = "";
    if (printer.data.tags && printer.data.tags.includes("\b"))
    {
        BLOD_HAD = "\b";
    }

    print_data = "";

    add_print( "\torder id: " + order.id);
    add_print(  BLOD_HAD + "\ttable: " + order.table );
    add_print(  "\ttime: " + format_datetime(order.timestamp) );
    add_print(  "-----------------------------------" );

    let needLine = false;
    if (order.name && order.name != "")
    {
        needLine = true;
        add_print( "\tname: " + order.name );
    }

    if (order.note && order.note != "")
    {
        needLine = true;
        add_print( "\tnote: " + order.note );
    }

    if (needLine)
    {
        add_print( "-----------------------------------" );
    }

    const head_length = print_data.length;

    for (let i=0; i<order.items.length; i++)
    {
        let item = order.items[i];
        let type =menuService.getDishCategory(item);

        if (!printer.data.menu.includes(type)) continue;

        const dish = menuService.findDish(item.dishid);


        if (dish)
        {
            let name = dish.subname;
            if (name == undefined || name == "Default Title" || name == "undefined") {
                name = item.name;
            } else {
                name = item.name + " - " + name;
            }

            add_print( BLOD_HAD + item.dishid + "   x " + item.quantity);
            add_print(  BLOD_HAD + name );
            if(item.dishNote){
                add_print(  "(note: "+item.dishNote+" )" );
            }
            add_print();
        }
        else
        {
            add_print(  item.name + "   x " + item.quantity );
            for (let j = 0; j < item.notes.length; j++) {
                add_print( "  " + item.notes[j] );
            }
            if(item.dishNote){
                add_print(  "(note: "+item.dishNote+" )" );
            }
            add_print();
        }

        if (every_one) {
            io.emit("print", print_data);
            console.log("print data:\n" + print_data);

            print_data = print_data.substring(0,head_length);
        }
    }



    if (!every_one) {
        io.emit("print", print_data);
        console.log("print data:\n" + print_data);
    }
}

function format_datetime(timestamp)
{
    const options = { timeZone: 'Europe/Lisbon', hour12: false };
    const portugalTime = new Date(timestamp).toLocaleString('pt-PT', options);

    return portugalTime;
}

function format_datetime_base(timestamp)
{
    var today = new Date(timestamp);

    // date
    var DD = String(today.getDate()).padStart(2, '0');
    var MM = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();

    // time
    hh =  String(today.getHours()).padStart(2, '0');
    mm = String(today.getMinutes()).padStart(2, '0');
    ss = String(today.getSeconds()).padStart(2, '0');
    today = yyyy + '-' + MM + '-' + DD + ' ' + hh + ':' + mm + ':' + ss;
    return today;
}

module.exports = {
    print_order,
    printers
};