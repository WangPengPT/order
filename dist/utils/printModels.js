const dataTime = require('./dateTime.js')
const {menuService} = require('../services/menuService');
const {logger} = require("./logger");

const divider = "-----------------------------------"

// 点餐-----------------------------------------------------------------------------------------------------------------

function print_order_model(order, printModelIndex, printBoldModel, printId, printer){
    const BOLD_HAD = (printer.data.tags && printer.data.tags.includes("\b") && printBoldModel) ? '\b' : '';
    const menu = printer.data.menu || [];
    const every_one = (printer.data.every_one == "true");
    return creat_order_print_data(menu, order, BOLD_HAD, printModelIndex, printId, every_one)
}

function creat_order_print_data (menu, order, BOLD_HAD, printModelIndex, printId, every_one) {
    const result = []
    print_order_data = ''

    // 创建打印头部
    add_to_print_order_data("order id: " + order.id)
    add_to_print_order_data(BOLD_HAD + "table:  " + order.table)
    add_to_print_order_data("time: " + format_portugal_datetime(order.timestamp))
    add_to_print_order_data(divider)

    // 按需求打印名字和备注
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

    // 保存头部长度
    const head_length = print_order_data.length;

    // 创建菜品打印数据
    for (let i = 0; i < order.items.length; i++) {
        let item = order.items[i];
        let type = menuService.getDishCategory(item);

        if (!menu.includes(type)) continue;

        // 打印菜品名字 如果有子选项名 加上子选项名
        let name = item.name
        if(item.subname && item.subname !== "" && item.subname !== "Default Title" && item.subname !== "undefined" ){
            name = name + " - " + item.subname
        }

        // 根据需求打印ID
        const id = printId? item.dishid:undefined

        // 确保数量正常
        const quantity = item?.quantity ? (item.quantity>0 ? item.quantity : 1) : 1

        // 根据打印模板添加菜品数据
        const dish_print_data = creat_order_dish_print_data_with_printModel(printModelIndex, BOLD_HAD, id, name, quantity)
        add_to_print_order_data( dish_print_data )

        // 如果是自定义菜 加上自定义菜的选项
        const customDish_print_data = creat_order_customDish_print_data(item.notes)
        add_to_print_order_data( customDish_print_data )

        // 如果有菜品备注时，打印菜品备注
        if (item.dishNote) {
            add_to_print_order_data("(note: " + item.dishNote + " )");
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

}

function creat_order_dish_print_data_with_printModel (printModelIndex,BOLD_HAD,id,name,quantity){
    let printData = ''
    switch (printModelIndex) {
        case 0:
            printData += BOLD_HAD + "=>" + quantity + "-@" + (id? ("(" + id + ") "):" ") + name
            break
        case 1:
            printData += BOLD_HAD + "#:" + id + " " + name + " * " + quantity
            break
        default:
            logger.error("Dont Exist Order Print Model Index: "+printModelIndex)
    }
    return printData
}

function creat_order_customDish_print_data(notes){
    let printData = ''
    // for()
    for(const note of notes){
        let printNote = ''
        if(note.type && note.type.name){ printNote += note.type.name + ':' }
        if(note.options && note.options.length > 0){
            for(const option of note.options){
                printNote += ' ' + option.id + '-' + option.name + ';'
            }
        }
        printData += '\t' + printNote + '\n'
    }
    return printData
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
    return creat_takeaway_print_data(order, BOLD_HAD, printModelIndex)
}

function creat_takeaway_print_data(order,BOLD_HAD, printModelIndex){
    print_takeaway_data = ''
    let price_total = 0

    // 创建外卖打印头部
    add_to_print_takeaway_data(BOLD_HAD+"Takeaway: " + order.name);
    add_to_print_takeaway_data("Customer Name:" + order.customer.name);

    add_to_print_takeaway_data(divider)

    add_to_print_takeaway_data(BOLD_HAD+"Pick up data: " + order.pickupDate)
    add_to_print_takeaway_data(BOLD_HAD+"Pick up time: " + order.pickupTime)

    add_to_print_takeaway_data(divider)

    // 创建外卖菜品打印数据
    for(let i=0; i<order.line_items.length; i++) {
        const item = order.line_items[i]

        const total = (item.price*item.quantity).toFixed(2)

        price_total += Number(total)

        // 菜品数据
        const sku = item.sku? item.sku.toString().replaceAll('-','') : -1
        const name = item.name
        const quantity = item.quantity
        const price = Number(item.price).toFixed(2)

        // 根据打印模板添加外卖菜品数据
        const takeaway_dish_print_data = creat_takeaway_dish_print_data_with_printModel(printModelIndex, BOLD_HAD, sku, name, quantity, price, total)
        add_to_print_takeaway_data(takeaway_dish_print_data)

        // 如果是自定义菜 加上自定义菜的选项
        if(item.properties?.length > 0){
            for(let i=0; i<item.properties?.length; i++){
                add_to_print_takeaway_data(BOLD_HAD + "\t " + item.properties[i]);
            }
        }
    }

    add_to_print_takeaway_data(divider)
    add_to_print_takeaway_data(BOLD_HAD+"Total: "+price_total.toFixed(2)+" Euro");

    console.log("print takeaway data:\n",print_takeaway_data)
    return print_takeaway_data

}

function creat_takeaway_dish_print_data_with_printModel(printModelIndex, BOLD_HAD, id, name, quantity, price, total){
    let print_data = ''
    switch (printModelIndex) {
        case 0:
            print_data += BOLD_HAD+ "=>" + quantity + "-@("+id+") "+name
            print_data += '\n'
            print_data += BOLD_HAD+" "+ price + " * " + quantity + " = "+ total
            break
        case 1:
            print_data +=  BOLD_HAD + "#:" + id + " " + name + " * " + quantity
            print_data +=  '\n'
            print_data +=  BOLD_HAD + " " + price + " * " + quantity + " = " + total
            break
        default:
            logger.error("Dont Exist Takeaway Print Model Index: "+printModelIndex)
    }
    return print_data
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