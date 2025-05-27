<template>
    <div class="min-h-screen flex flex-column">

        <!-- 中间内容（滚动区域） -->
        <div
            class="flex-grow-1 overflow-auto"
            :style="{ paddingTop: '5rem', paddingBottom: '3rem' }"
        >
            <DishList ref="dishListRef" :updateCartItemCount="updateCartItemCount"/>
        </div>

        <!-- 顶部固定 -->
        <div class="fixed top-0 left-0 w-full h-3rem bg-white">
            <div>
                <p class="text-color text-xl font-bold"  :style="{ paddingLeft: '2rem', paddingTop: '1rem' }" >Número do assento: {{ tableRef }}</p>
            </div>
            <Tabs :value="typeIndex" scrollable>
                <TabList>
                    <Tab v-for="(item, index) in types" :value="index" @click="clickType(index)">{{ item }}</Tab>
                </TabList>
            </Tabs>
        </div>

        <!-- 底部固定 -->
        <div class="fixed bottom-0 left-0 w-full h-3rem bg-white p-3">


            <div class="h-full flex align-items-center justify-content-end">
                <!-- 购物车按钮 -->
                <OverlayBadge :value="cartItemCount" severity="danger" :style="{ marginRight: '30px' }" @click="showCart">
                    <i class="pi pi-shopping-cart" style="font-size: 2rem" />
                </OverlayBadge>

                <Button
                    label="Submit"
                    class="mr-3"
                    :disabled="disabled_checkout"
                    @click="checkout"
                    :style="{ marginRight: '20px' }"
                />
            </div>
        </div>
    </div>
    <Toast />
    <Cart ref="cartRef" :updateCartItemCount="updateCartItemCount"/>
</template>

<script setup>
import {ref,onMounted,onBeforeUnmount} from 'vue';

import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import TabPanels from 'primevue/tabpanels';

import Button from 'primevue/button';
import DishList from "@/components/DishList.vue";
import Cart from "@/components/Cart.vue";

import Panel from "primevue/panel";
import Badge from 'primevue/badge';
import OverlayBadge from 'primevue/overlaybadge';
import client_api from './client.js';

const props = defineProps({
    switchTo: {
        type: Function,
        required: true
    }
});

const disabled_checkout = ref(false);
const types = ref([""]);
const typeIndex = ref(0);
const cartItemCount = ref(0);

function updateCartItemCount(value)
{
    cartItemCount.value = cartItemCount.value + value;
}

const dishDatas = [];
const typeDatas = [];

const dishListRef = ref(null);
const cartRef = ref(null);

function showDishList(n) {
    if (dishListRef.value) {
        var category = typeDatas[n];
        var dishs = [];

        for (let i = 0; i < dishDatas.length; i++) {
            var value = dishDatas[i];
            if (value.category == category)
            {
                dishs.push(value);
            }
        }
        dishListRef.value.showDisList(dishs);
    }
}

function InitMenu() {
    var datas = client_api.getMenu();

    if (datas.length == 0) {
        setTimeout(() => {
            InitMenu();
        }, 500);
        return;
    }

    dishDatas.length = 0;
    typeDatas.length = 0;

    for (let i = 0; i < datas.length; i++) {
        var base = datas[i];

        var value = {
            id:  base.id,
            name: base.name,
            description: base.note,
            price: 0,
            image: base.image,
            allergies: base.x,
            quantity: 0,
            category: base.category,
        };

        dishDatas.push(value);

        if (!typeDatas.includes(value.category)) {
            typeDatas.push(value.category);
        }
    }

    types.value = typeDatas;
    typeIndex.value = 0;
    showDishList(0);
}

const clickType = (index) =>
{
    showDishList(index);
    typeIndex.value = index;
};

const showCart = () => {
    var dishs = [];

    for (let i = 0; i < dishDatas.length; i++) {
        var value = dishDatas[i];
        if (value.quantity > 0)
        {
            dishs.push(value);
        }
    }
    cartRef.value.showDisList(dishs);
}


const tableRef = ref("");
client_api.getTableId( (value) => {
    tableRef.value = value;
});

let socket_port = client_api.params.port;
socket_port = socket_port ? socket_port : 80;

let socket_addr = "http://localhost";

client_api.init(socket_addr,socket_port);

const LIMIT_TIME = 10;

const ORDER_TIME_KEY = "order_time_key";


function showLimitTip(remainTime)
{
    var str = 'You submitted too quickly. Please wait ' + remainTime + ' seconds.';
    show_warn(str );
}

const checkout = () => {

    const items = [];

    for (let i = 0; i < dishDatas.length; i++) {
        var value = dishDatas[i];
        if (value.quantity > 0)
        {
            items.push({dishid: value.id,quantity: value.quantity});
        }
    }

    if (items.length === 0) {
        show_warn('Selecione pelo menos um prato');
        return;
    }

    // 获取存储记录
    const record = JSON.parse(localStorage.getItem(ORDER_TIME_KEY) || '{}');
    const now = Date.now();

    // 首次提交或超过限制周期时重置
    if (!record.startTime || (now - record.startTime) > LIMIT_TIME * 1000) {
        record.startTime = now;
    }
    else {
        const remainTime = LIMIT_TIME - parseInt((now - record.startTime)/1000);
        showLimitTip(remainTime);
        return;
    }

    // 允许提交
    localStorage.setItem(ORDER_TIME_KEY, JSON.stringify(record));

    disabled_checkout.value = true;
    client_api.submit_order({
        people: currentPeople,
        table: currentTable,
        items
    });
}

onMounted(() => {
    InitMenu();

    client_api.setOnOrderConfirmed((order_id) => {

        for (let i = 0; i < dishDatas.length; i++) {
            const value = dishDatas[i];
            value.quantity = 0;
        }

        const id = order_id;
        show_success(`The order has been submitted,\norder number: #${id}.`);
        disabled_checkout.value = false;

        showDishList(typeIndex.value);
        cartItemCount.value = 0;
    });

    client_api.setOnShowError((value) => {
        disabled_checkout.value = false;
        show_error(value);
    });

});

onBeforeUnmount(() => {
    client_api.cleanup();
})

import Toast from 'primevue/toast';
import { useToast } from 'primevue/usetoast';
const toast = useToast();

function show_success(msg)
{
    toast.add({
        severity: 'success', // 类型：success | info | warn | error
        summary: 'success',
        detail: msg,
        life: 3000 // 显示时长（毫秒）
    });
}

function show_info(msg)
{
    toast.add({
        severity: 'info', // 类型：success | info | warn | error
        summary: 'info',
        detail: msg,
        life: 3000 // 显示时长（毫秒）
    });
}

function show_warn(msg)
{
    toast.add({
        severity: 'warn', // 类型：success | info | warn | error
        summary: 'warn',
        detail: msg,
        life: 3000 // 显示时长（毫秒）
    });
}

function show_error(msg)
{
    toast.add({
        severity: 'error', // 类型：success | info | warn | error
        summary: 'error',
        detail: msg,
        life: 3000 // 显示时长（毫秒）
    });
}


</script>

<style scoped>
</style>