const dataTime = require('./dateTime.js')
const {menuService} = require('../services/menuService');

const divider = "-----------------------------------"

// 点餐-----------------------------------------------------------------------------------------------------------------

function print_order_model(order,printModelIndex,printer){
    const BOLD_HAD = (printer.data.tags && printer.data.tags.includes("\b")) ? '\b' : '';
    const menu = printer.data.menu;
    const every_one = (printer.data.every_one == "true");
    return order_model[printModelIndex](order,BOLD_HAD,menu,every_one)
}

const order_model = {
    0: (order,BOLD_HAD,menu,every_one)=>{
        const result = []
        print_order_data = ''
        add_to_print_order_data("order id: " + order.id)
        add_to_print_order_data(BOLD_HAD + "table: " + order.table)
        add_to_print_order_data("time: " + format_portugal_datetime(order.timestamp))
        add_to_print_order_data(divider)

        let needLine = false;
        if (order.name && order.name != "") {
            needLine = true;
            add_to_print_order_data("name: " + order.name);
        }

        if (order.note && order.note != "") {
            needLine = true;
            add_to_print_order_data("note: " + order.note);
        }

        if (needLine) {
            add_to_print_order_data(divider)
        }

        const head_length = print_order_data.length;

        for (let i = 0; i < order.items.length; i++) {
            let item = order.items[i];
            let type = menuService.getDishCategory(item);

            if (!menu.includes(type)) continue;

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
                        add_to_print_order_data("\t" + item.notes[j]);
                    }
                }
                const dishid = item.dishid.toString().replaceAll('-','');

                add_to_print_order_data(BOLD_HAD + "=>" + item.quantity + "-@" + dishid + " " + name);
                if (item.dishNote) {
                    add_to_print_order_data("(note: " + item.dishNote + " )");
                }
            }
            else {
                add_to_print_order_data( "=>"+ item.quantity + "-@" + item.name );
                for (let j = 0; j < item.notes.length; j++) {
                    add_to_print_order_data("  " + item.notes[j]);
                }
                if (item.dishNote) {
                    add_to_print_order_data("(note: " + item.dishNote + " )");
                }
            }

            if (every_one) {
                result.push(print_order_data);
                console.log("print data:\n" + print_order_data);

                print_order_data = print_order_data.substring(0, head_length);
            }
        }

        if (!every_one) {
            result.push(print_order_data);
            console.log("print data:\n" + print_order_data);
        }
        return result
    },
    1: (order,BOLD_HAD,menu,every_one)=>{
        const result = []
        print_order_data = ''
        add_to_print_order_data("order id: " + order.id)
        add_to_print_order_data(BOLD_HAD + "table: " + order.table)
        add_to_print_order_data("time: " + format_portugal_datetime(order.timestamp))
        add_to_print_order_data(divider)

        let needLine = false;
        if (order.name && order.name != "") {
            needLine = true;
            add_to_print_order_data("name: " + order.name);
        }

        if (order.note && order.note != "") {
            needLine = true;
            add_to_print_order_data("note: " + order.note);
        }

        if (needLine) {
            add_to_print_order_data(divider)
        }

        const head_length = print_order_data.length;

        for (let i = 0; i < order.items.length; i++) {
            let item = order.items[i];
            let type = menuService.getDishCategory(item);

            if (!menu.includes(type)) continue;

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
                        add_to_print_order_data("\t" + item.notes[j]);
                    }
                }
                const dishid =  item.dishid.toString().replaceAll('-','');

                add_to_print_order_data(BOLD_HAD + '#:' + dishid + " x " + item.quantity + " " + name);
                if (item.dishNote) {
                    add_to_print_order_data("(note: " + item.dishNote + " )");
                }
            }
            else {
                add_to_print_order_data( item.name + " x " +  item.quantity );
                for (let j = 0; j < item.notes.length; j++) {
                    add_to_print_order_data("\t " + item.notes[j]);
                }
                if (item.dishNote) {
                    add_to_print_order_data("(note: " + item.dishNote + " )");
                }
            }

            if (every_one) {
                result.push(print_order_data);
                console.log("print data:\n" + print_order_data);

                print_order_data = print_order_data.substring(0, head_length);
            }
        }

        if (!every_one) {
            result.push(print_order_data);
            console.log("print data:\n" + print_order_data);
        }

        return result
    },
}

let print_order_data = ''
function add_to_print_order_data(line,newLine = true){
    if(line){
        print_order_data += line
    }
    if(newLine){
        print_order_data += '\n'
    }
}

// 外卖-----------------------------------------------------------------------------------------------------------------

function print_takeaway_model(order,printModelIndex,printer){
    const BOLD_HAD = (printer.data.tags && printer.data.tags.includes("\b")) ? '\b' : '';
    return takeaway_model[printModelIndex](order,BOLD_HAD)
}

const takeaway_model = {
    0: (order,BOLD_HAD)=>{
        print_takeaway_data = ''
        let price_total = 0
        add_to_print_takeaway_data(BOLD_HAD+"Takeaway: " + order.name);
        add_to_print_takeaway_data("Customer Name:" + order.customer.name);

        add_to_print_takeaway_data(divider)

        add_to_print_takeaway_data(BOLD_HAD+"Pick up data: " + order.pickupDate)
        add_to_print_takeaway_data(BOLD_HAD+"Pick up time: " + order.pickupTime)

        add_to_print_takeaway_data(divider)

        for(let i=0; i<order.line_items.length; i++) {
            const item = order.line_items[i]
            const total = (item.price*item.quantity).toFixed(2)
            const sku = item.sku.toString().replaceAll('-','')
            price_total += Number(total)
            add_to_print_takeaway_data(BOLD_HAD+ "=>" + item.quantity + "-@" +sku+" "+item.name);
            add_to_print_takeaway_data(BOLD_HAD+" "+item.price+" * "+item.quantity+" = "+total);
        }

        add_to_print_takeaway_data(divider)
        add_to_print_takeaway_data(BOLD_HAD+"Total: "+price_total+" Euro");

        console.log("print takeaway data:\n",print_takeaway_data)
        return print_takeaway_data
    },
    1: (order,BOLD_HAD)=>{
        print_takeaway_data = ''
        let price_total = 0
        add_to_print_takeaway_data(BOLD_HAD+"Takeaway: " + order.name);
        add_to_print_takeaway_data("Customer Name:" + order.customer.name);

        add_to_print_takeaway_data(divider)

        add_to_print_takeaway_data(BOLD_HAD+"Pick up data: " + order.pickupDate)
        add_to_print_takeaway_data(BOLD_HAD+"Pick up time: " + order.pickupTime)

        add_to_print_takeaway_data(divider)

        for(let i=0; i<order.line_items.length; i++) {
            const item = order.line_items[i]
            const total = (item.price*item.quantity).toFixed(2)
            const sku = item.sku.toString().replaceAll('-','')
            price_total += Number(total)
            add_to_print_takeaway_data(BOLD_HAD + "#:" + sku + " " + item.name + " * " + item.quantity);
            add_to_print_takeaway_data(BOLD_HAD + " " + item.price + " * " + item.quantity + " = " + total);
        }

        add_to_print_takeaway_data(divider)
        add_to_print_takeaway_data(BOLD_HAD+"Total: "+price_total+" Euro");

        console.log("print takeaway data:\n",print_takeaway_data)
        return print_takeaway_data
    },
}

let print_takeaway_data = ''
function add_to_print_takeaway_data(line,newLine = true){
    if(line){
        print_takeaway_data += line
    }
    if(newLine){
        print_takeaway_data += '\n'
    }
}

function format_portugal_datetime(timestamp) {
    return dataTime.format_portugal_datetime(timestamp)
}

module.exports = {
    print_order_model,
    print_takeaway_model,
}