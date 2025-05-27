
import { io } from 'socket.io-client';

let socket = null;

const client =
{
    menu: [],
    onMenu: ()=> {},
    onOrderConfirmed: (value)=> {},
    onShowError: (error)=> {},
    onTableId: (value)=> {},
};

function getQueryParams() {
    const search = window.location.search.substring(1);
    const pairs = search.split('&');
    const result = {};

    pairs.forEach(pair => {
        const [key, value] = pair.split('=');
        const decodedKey = decodeURIComponent(key);
        const decodedValue = decodeURIComponent(value || '');

        // 处理同名参数
        if (result[decodedKey]) {
            if (Array.isArray(result[decodedKey])) {
                result[decodedKey].push(decodedValue);
            } else {
                result[decodedKey] = [result[decodedKey], decodedValue];
            }
        } else {
            result[decodedKey] = decodedValue;
        }
    });

    console.log(result);
    return result;
}

const ClientAPI = {
    init: (addr,port) => {
        socket = io(addr + ":" + port);

        socket.on('order_confirmed', (value)=> {
            client.onOrderConfirmed(value);
        });

        socket.on("menu_data", (menuData) => {

            client.menu = menuData;
            client.onMenu();

            socket.emit("get_desk_id", ClientAPI.params.table);
        });

        socket.on("error", (error)=> {
            client.onShowError(error);
        })

        socket.on("table_id", (id)=> {
            client.onTableId(id);
        })
    },

    cleanup: ()=> {
        if (socket) socket.close();
    },

    submit_order: (data) => {
        console.log("submit_order",data);
        socket.emit('submit_order', data);
    },

    getMenu: () => { return client.menu; },

    setOnMenu: (action) => { client.onMenu = action },
    setOnOrderConfirmed: (action) => { client.onOrderConfirmed = action },
    setOnShowError: (action) => { client.onShowError = action },

    getTableId: (action) => {
        client.onTableId = action;
    },

    params: getQueryParams(),
};

export default ClientAPI;





