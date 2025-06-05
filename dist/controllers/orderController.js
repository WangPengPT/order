const orderService = require("../services/orderService.js");

function handleOrder(io, socket) {
    socket.on("new_order", (orderData) => {
        orderService.addOrder(io, socket, orderData);
    });

    socket.on("get_old_orders", () => {
        orderService.sendOldOrder(socket);
    });
}

module.exports = { handleOrder };
