const menuService = require('../services/menuService');



const printers = [];


function print_order(order) {

    for (const key in printers) {
        const printer = printers[key];

        let hasData = false;
        for (let i=0; i<order.items.length; i++) {
            let type = "Caixa Aleatória";
            let item = order.items[i];
            const dish = menuService.findDish(item.dishid);
            if (dish) {
                type = dish.category;
            }

            if (printer.data.menu.includes(type))
            {
                hasData = true;
                break;
            }
        }

        if (hasData) {
            print_orde_to_io(printer.socket,order);
        }
    }
}


let print_data = "";
function  add_print(value)
{
    print_data += value + '\n';
}

function print_orde_to_io(io,order)
{
    print_data = "";

    add_print( "\torder id: " + order.id);
    add_print(  "\ttable: " + order.table );
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


    for (let i=0; i<order.items.length; i++)
    {
        let type = "Caixa Aleatória";
        let item = order.items[i];
        const dish = menuService.findDish(item.dishid);
        if (dish)
        {
            type = dish.category;
        }
        if (item.dishid)
        {
            let name = item.subname;
            if (name == "Default Title") name = item.name;
            add_print(  item.dishid + "   x " + item.quantity);
        }
        else
        {
            add_print(  item.name + "   x " + item.quantity );
            for (let j = 0; j < item.notes.length; j++) {
                add_print( "  " + item.notes[j] );
            }
        }
    }

    console.log("print data:\n" + print_data);

    //io.emit("print", print_data);
}

function format_datetime(timestamp)
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