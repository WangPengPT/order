
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
        this.tables = ref([]);
    }

    getAddr()
    {
        return socketAddr;
    }

    init() {

        this.socket = io(socketAddr);

        this.socket.on("menu_data", (value) => this.onMenuData(value));
        this.socket.on("old_orders", (value) => this.onOldOrders(value));
        this.socket.on("new_order", (value) => this.onAddOrder(value));
        this.socket.on("send_tables", (value) => this.onUpdateTables(value))
        console.log("socket init.")
    }
    
    onOldOrders(list) {
        const existingIds = new Set(this.orders.value.map(order => order.id));
        for (let i = 0; i <  list.length; i++) {
            const order = list[i];
            if (!existingIds.has(order.id)) {
            this.orders.value.push(order);
            } else {
                console.log("重复订单已忽略:", order.id);
            }
        }

    }

    onAddOrder(order) { 
        order.isNew = true;
        this.orders.value.push(order);
        this.newCount ++;

        if (this.updateOrderCount) this.updateOrderCount(this.newCount);
    }

    onUpdateTables(tables) {
        console.log("get tables: ", tables)
        this.tables.value = tables;
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
