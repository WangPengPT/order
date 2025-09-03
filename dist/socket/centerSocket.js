
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

class CenterSocket {

    static init() {

        if (!process.env.SAVE_ADDR) {
            server_addr = "http://localhost"
        }

        socket = io(server_addr, {
            autoConnect: false, // 禁止自动连接
            reconnection: false // 禁用自动重连
        });

        socket.on('connect_error', (err) => {
            console.log('连接错误:', err.message);
            if (err.message.includes('ECONNREFUSED')) {
                console.error('连接被拒绝，请检查服务器是否运行');
            }

            //本来是 3000
            setTimeout(() => socket.connect(), 10000);
        });

        socket.on('error', (err) => {
            console.log('error:', err);
        });

        socket.on('connect_timeout', (timeout) => {
            console.log('连接超时:', timeout);
        });

        socket.on('reconnect_failed', () => {
            console.log('重连彻底失败');
        });

        socket.on('connect', () => {
            console.log('connect to center server');
        });

        const name = this.getRestaurant()

        socket.on(name, (data) => {
            appState.socket_io.emit("new_shopify_orders", [data])
        });

        socket.connect()
    }

    static getRestaurant() {
        let name = "sc_sushi"

        if (process.env.SAVE_ADDR) {
            name = extractAfterSlash(process.env.SAVE_ADDR)
        }
        return name;
    }

    static get_shopify_orders(client_socket) {

        const send = (rawData) => {
            try {
                const jsonData = JSON.parse(rawData); // 解析JSON字符串
                if (client_socket && client_socket.connected) client_socket.emit("shopify_orders", jsonData)
            } catch (error) {
                console.error('JSON解析失败:', error);
            }
        }

        const restaurant = this.getRestaurant()
        const api = "/api/" + 'order_list' + "?restaurant=" + restaurant + "&count=20";


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

}

module.exports = CenterSocket