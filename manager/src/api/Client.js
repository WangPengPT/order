
import { ref } from 'vue'
import { io } from 'socket.io-client';

let socketAddr = "http://localhost";
if (window.global_server_addr) socketAddr = window.global_server_addr;
console.log(window.global_server_addr);

class Client{
    constructor() {
        this.orders = ref([]);
        this.menuData = [];
        this.newCount = 0;
    }

    getAddr()
    {
        return socketAddr;
    }

    init() {

        console.log(this.orders);

        this.socket = io(socketAddr);

        this.socket.on("menu_data", (value) => this.onMenuData(value));
        this.socket.on("old_orders", (value) => this.onOldOrders(value));
        this.socket.on("new_order", (value) => this.onAddOrder(value));

        console.log("socket init.")
    }

    onOldOrders(list) {

        console.log(list);
        for (let i = 0; i <  list.length; i++) {
            var order = list[i];
            this.orders.value.push(order);
        }

        console.log(this.orders);
    }

    onAddOrder(order) {
        order.isNew = true;

        this.orders.value.push(order);
        this.newCount ++;

        if (this.updateOrderCount) this.updateOrderCount(this.newCount);
    }

    onMenuData(list) {
        this.menuData = list;
    }

    login(password,callback) {
        this.socket.emit("admin", password, callback);
    }
}


const client = new Client();
export default client;
