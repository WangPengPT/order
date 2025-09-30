
const { io } = require("socket.io-client");

const http = require('http');
const https = require('https');
const {appState} = require("../state");



let server_addr = 'https://v.xiaoxiong.pt';
let socket

function extractAfterSlash(str) {
    const parts = str.split('/');
    return parts.length > 1 ? parts.pop() : str;
}

let restaurantInfo = {}
let menuData
let update_data = false;

class CenterSocket {

    static get_menu_data() {
        return menuData
    }

    static set_menu_data(data) {
        update_data = true;
        menuData = data;
    }

    static init() {

        if (!process.env.SAVE_ADDR) {
            server_addr = "http://localhost"
        }

        socket = io(server_addr, {
            autoConnect: false, // 禁止自动连接
            reconnection: false // 禁用自动重连
        });

        socket.on('connect_error', (err) => {
            console.log('connect_error:', err.message);
            if (err.message.includes('ECONNREFUSED')) {
                console.error('The connection was refused, please check if the server is running');
            }
        });

        socket.on('error', (err) => {
            console.log('error:', err);
        });

        socket.on('connect_timeout', (timeout) => {
            console.log('connect_timeout:', timeout);
        });

        socket.on('reconnect_failed', () => {
            console.log('reconnect_failed');
        });

        const name = this.getRestaurant()

        socket.on('connect', () => {
            console.log('connect to center server');

            this.set_menu_data(appState.menu);
        });



        socket.on(name, (data) => {
            appState.socket_io.emit("new_shopify_orders", [data])
        });

        socket.on("reserve_"+name, (data) => {
            console.log('reserve_'+name,data);
            appState.socket_io.emit("new_reserves", [data])
        });


        this.connect_socket();

        this.timeMessage()
    }

    static connect_socket() {

        console.log(socket.connected)

        if (!socket.connected) {
            console.log('call connect to center server');
            socket.connect();
        }

        setTimeout(() => {
            this.connect_socket();
        }, 10000);
    }

    static timeMessage() {
        setTimeout( () => {
            this.doTime();
            this.timeMessage()
        }, 1000 * 1)
    }

    static doTime() {

        console.log("do time");

        let key = this.getRestaurant()
        key = key.trim();

        if ( key.startsWith("org_") ) {
            key  = key.substring(4)
            if (update_data) {
                socket.emit('message', "g_set_menu", {key, menuData})
                update_data = false
            }
        }
        else if ( key != "" ) {
            socket.emit('message', "g_get_menu", key, (menu)=> {
                if (menu) {
                    console.log("get menu data!");
                    menuData = menu
                }
            })
        }
    }

    static getRestaurant() {
        let name = "sc_sushi"

        //name = "org_sushi"

        if (process.env.SAVE_ADDR) {
            name = extractAfterSlash(process.env.SAVE_ADDR)
        }
        return name;
    }

    static get_center_datas(client_socket,emit_key,api_key) {

        const send = (rawData) => {
            try {
                const jsonData = JSON.parse(rawData); // 解析JSON字符串
                if (client_socket && client_socket.connected) client_socket.emit(emit_key, jsonData)
            } catch (error) {
                console.error('JSON解析失败:', error);
            }
        }

        const restaurant = this.getRestaurant()
        const api = "/api/" + api_key + "?restaurant=" + restaurant + "&count=20";


        let mod = http;
        if (server_addr.startsWith("https")) {
            mod = https;
        }

        const addr = server_addr + api
        const request = mod.get(addr, (response) => {
            let rawData = '';
            response.on('data', (chunk) => {
                rawData += chunk;
            }); // 逐块拼接
            response.on('end', () => {
                //console.log(rawData);
                send(rawData)
            });   // 最终处理
        });


        request.on('error', (err) => {
            console.log('请求失败:', err.message);
            if (err.code === 'ECONNREFUSED') {
                console.log('服务器未启动或地址错误');
            }
        });
    }

    static updateReserveData(key, value, callback){
        socket.emit('update_reserve_data', {key:key, value:value}, callback)
    }

}

module.exports = CenterSocket