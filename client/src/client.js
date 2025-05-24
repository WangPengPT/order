
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


window.client_api = {
    getMenu: () => { return client.menu; },
    setOnMenu: (action) => { client.onMenu = action },
    setOnOrderConfirmed: (action) => { client.onOrderConfirmed = action },
};