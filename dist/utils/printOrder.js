function print_order(order, io)
{
    let data = "";

    data += "     order id: " + order.id;
    data += "\n     table: " + order.table;
    data += "\n     time: " + format_datetime(order.timestamp);
    data += "\n-----------------------------------";

    for (let i=0; i<order.items.length; i++)
    {
        let item = order.items[i];
        if (item.dishid)
        {
            data += "\n" + item.dishid + "   x " + item.quantity;
        }
        else
        {
            data += "\n" + item.name + "   x " + item.quantity;
            for (let j = 0; j < item.notes; j++) {
                data += "\n  " + item.notes[j];
            }
        }
    }

    console.log("print data:" + data);

    io.emit("print", data);
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
  print_order
};