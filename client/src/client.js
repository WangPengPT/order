
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


window.client_api = {
    getMenu: () => { return client.menu; },
    setOnMenu: (action) => { client.onMenu = action },
    setOnOrderConfirmed: (action) => { client.onOrderConfirmed = action },
    submit_order: (data) => { submitOrder(data); },
};