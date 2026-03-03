
const { io } = require("socket.io-client");

const DB = require('../db.js');

const http = require('http');
const https = require('https');
const {appState} = require("../state");
const {logger} = require("../utils/logger");
const { UserService } = require("../services/userService");
const {ManualUpdate} = require("../utils/manualUpdate");



let server_addr = 'https://v.xiaoxiong.pt';
let socket

function extractAfterSlash(str) {
    const parts = str.split('/');
    return parts.length > 1 ? parts.pop() : str;
}

let restaurantInfo = {}
let menuData
let update_data = false;
let menuService
let alertMessageSocket


class CenterSocket {

    // 向中心服务器api发送消息函数
    static sendMsg(api, value, callback) {
        socket.emit('message', api, value, callback)
    }

    static get_menu_data() {
        return menuData
    }

    static __setMenuDataForTest(data) {
        menuData = data;
    }

    static async update_menu_data() {
        update_data = true;
    }

    static init(menuServiceInstance, alertMessageSocketInstance) {
        menuService = menuServiceInstance
        alertMessageSocket = alertMessageSocketInstance

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

        socket.on('connect', async () => {
            console.log('connect to center server');

            socket.emit('message', 'g_get_config',
                {id:name, port: process.env.PORT || 8080, url: process.env.ADDR,},
                (cb)=>{
                    if(cb.success){
                        logger.info('Center Server get config successfully: '+cb.data);
                        if(cb.permissionsControl){
                            this.updatePermissionsControl(cb.permissionsControl)
                        }
                    }else{
                        logger.error('Center Server get config failed: '+cb.data);
                    }
                }
            )

            await this.update_menu_data();
        });

        socket.on(name, (data) => {
            appState.socket_io.emit("new_shopify_orders", [data])
        });

        socket.on("reserve_"+name, (data) => {
            console.log('reserve_'+name,data);
            appState.socket_io.emit("new_reserves", [data])
        });

        socket.on("set_server_"+name, (data) => {
            console.log('set_server_'+name,data);

            if(data.permissionsControl){
                this.updatePermissionsControl(data.permissionsControl)
                appState.socket_io.emit("permissions_control", data.permissionsControl)
            }
            if(data.customDishesControl){
                appState.updatePermissionsControl('customDishesControl',data.customDishesControl)
                appState.socket_io.emit("manager_get_custom_dish_control", data.customDishesControl)
            }

        })

        socket.on("manager_resetPassword", async (value, callback) => {
             logger.info("Center Server request reset password");
             const userService = new UserService();
             const result = await userService.resetPassword(value);
             if (callback) callback({ code: result.success ? 200 : 400, ...result });
        });

        socket.on("center_manual_update_"+name,  async () => {
            logger.info("center_manual_update");

            const manualUpdate = new ManualUpdate(menuService)
            const update_times = await manualUpdate.run()
            logger.info("Finished manual update, times:"+update_times);
        })

        // 转发中心服务器 警报
        socket.on('alert_'+name, async (alert) => {
            const identity = alert.identity;
            logger.info("Center Server sends alert to " + identity + ", alert: "+ JSON.stringify(alert));
            const api = 'alert_to_' + identity;
            await alertMessageSocket.add('alert', {...alert, identity:undefined}, api)
            // appState.socket_io.emit("alert_to_"+identity,{...alert, identity:undefined})
        })

        // 转发中心服务器 消息
        socket.on('message_'+name, async (msg) => {
            const identity = msg.identity;
            logger.info("Center Server sends message to " + identity + ", msg: "+ JSON.stringify(msg));
            const api = 'message_to_' + identity;
            await alertMessageSocket.add('message', {...msg, identity:undefined}, api)
            // appState.socket_io.emit("message_to_"+identity,{...msg, identity:undefined})
        })

        this.connect_socket();

        this.timeMessage()
    }

    static connect_socket() {

        //console.log(socket.connected)

        if (!socket.connected) {
            console.log('call connect to center server');
            socket.connect();
        }

        setTimeout(() => {
            this.connect_socket();
        }, 10000);
    }

    static timeMessage() {
        setTimeout( async () => {
            await this.doTime();
            this.timeMessage()
        }, 1000 * 1)
    }

    static async doTime() {

        // console.log("do time");

        let key = this.getRestaurant()
        key = key.trim();

        if (key.startsWith("org_")) {
            key = key.substring(4)
            if (update_data) {

                const menuAndTabs = await menuService.getTakeawayMenuAndTabs()

                let menu = menuAndTabs.menu
                let menuOrdering =  menuAndTabs.tabs

                if (menu && menuOrdering) {

                    let menuData = {
                        menu,
                        menuOrdering
                    }

                    //console.log("update menu data!", menuData);

                    socket.emit('message', "g_set_menu", {key, menuData})
                    update_data = false
                }

            }
        } else if (key != "") {
            socket.emit('message', "g_get_menu", key, async (menu) => {
                if (menu) {
                    //console.log("get menu data!");
                    menuData = menu

                    if (menuData.menu) {
                        for (let i = 0; i < menuData.menu.length; i++) {
                            await this.loadDishRatingDB(menuData.menu[i]);
                        }
                    }
                }
            })
        }
    }

    static getRestaurant() {
        let name = "local"

        // name = "org_sushi"

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

    static updateReserveData(value, callback){
        const api = 'g_update_reserve_data'
        this.sendMsg(api, value, callback)
    }

    static alert(alert){
        const api = 'g_alert'
        const value = {
            restaurant: this.getRestaurant(),
            alert: alert
        }

        this.sendMsg(api, value)
    }

    static message(msg){
        const api = 'g_message'
        const value = {
            restaurant: this.getRestaurant(),
            message: msg,
        }

        this.sendMsg(api, value)
    }

    static async saveDishRating(id, like, rate) {
        try {
            const item = menuData.menu.find(m => m.id === id);

            if (!item) throw new Error("invalid item id: ", id);

            if (![-1, 0, 1].includes(like)) throw new Error("invalid like value: ", like);

            if (![-1, 0, 1].includes(rate)) throw new Error("invalid rate value: ", rate);

            if (!item.rates) {
                item.likes = 0;
                item.rates = 0;
            }
            item.likes += like;
            item.rates += rate;

            await this.saveDishRatingDB(item)

            return {
                success: true,
                data: {
                    id: id,
                    likes: item.likes,
                    rates: item.rates
                }
            }
        } catch (error) {
            return {
                success: false,
                data: error.message
            }
        }
    }

    static async saveDishRatingDB(item) {

        const data = {
            id: item.id,
            rates: item.rates,
            likes: item.likes
        }
        await DB.set("TakeawayDishRating", data)
    }

    static async loadDishRatingDB(item) {
        const data = await DB.get("TakeawayDishRating", item.id)
        if (data) {
            item.rates = data.rates
            item.likes = data.likes
        }
    }

    static updatePermissionsControl(permissionsControl) {
        let print = ''
        for(const key of Object.keys(permissionsControl)){
            if(appState.permissionsControl[key] !== permissionsControl[key]){
                appState.updatePermissionsControl(key,permissionsControl[key])
            }
            print += (key + ':' + permissionsControl[key] + '; ');
        }
        logger.info('Current Permissions: ' + print);
    }

}

module.exports = CenterSocket
