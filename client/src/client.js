
import { io } from 'socket.io-client';

const socket = io('http://localhost');


const client =
{
    menu: {},
    onMenu: ()=> {},
    onOrderConfirmed: (value)=> {},
};

socket.on('order_confirmed', (value)=> {
    client.onOrderConfirmed(value);
});

socket.on("menu_data", (menuData) => {
    client.menu = menuData;
    client.onMenu();
});

function submitOrder(data)
{
    socket.emit('submit_order', data);
}

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

window.client_api = {
    getMenu: () => { return client.menu; },
    setOnMenu: (action) => { client.onMenu = action },
    setOnOrderConfirmed: (action) => { client.onOrderConfirmed = action },
    submit_order: (data) => { submitOrder(data); },
    params: getQueryParams(),
};





