<template>
    <div class="min-h-screen flex flex-column">

        <!-- 中间内容（滚动区域） -->
        <div
            class="flex-grow-1 overflow-auto"
            :style="{ paddingTop: '3rem', paddingBottom: '3rem' }"
        >
            <DishList ref="dishListRef"/>
        </div>

        <!-- 顶部固定 -->
        <div class="fixed top-0 left-0 w-full h-3rem bg-white">
            <div class="scrollable-content">
                <Tabs :value="typeIndex">
                    <TabList>
                        <Tab v-for="(item, index) in types" :value="index" @click="clickType(index)">{{ item }}</Tab>
                    </TabList>
                    <TabPanels>
                    </TabPanels>
                </Tabs>
            </div>
        </div>

        <!-- 底部固定 -->
        <div class="fixed bottom-0 left-0 w-full h-3rem bg-white p-3">
            <div class="h-full flex align-items-center justify-content-end">
                <Button
                    label="check out"
                    class="mr-3"
                    @click="checkout"
                    :style="{ marginRight: '10px' }"
                />
            </div>
        </div>
    </div>
</template>

<script setup>
import {ref,onMounted} from 'vue';

import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import TabPanels from 'primevue/tabpanels';

import Button from 'primevue/button';
import DishList from "@/components/DishList.vue";

import Panel from "primevue/panel";

const props = defineProps({
    switchTo: {
        type: Function,
        required: true
    }
});

const types = ref(["11", "11", "11", "11", "11", "11", "11", "11",]);
const typeIndex = ref(0);

const dishDatas = [];
const typeDatas = [];

const dishListRef = ref(null);

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
    var datas = window.client_api.getMenu();

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
};


let currentTable = "1223";
let currentPeople = 3;

const MAX_SUBMIT =  3;
const LIMIT_TIME = 30;

const ORDER_TIME_KEY = "order_time_key";


function showLimitTip(remainTime)
{
    alert('limit time' + remainTime );
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
        alert('Selecione pelo menos um prato');
        return;
    }

    // 获取存储记录
    const record = JSON.parse(localStorage.getItem(ORDER_TIME_KEY) || '{}');
    const now = Date.now();

    // 首次提交或超过限制周期时重置
    if (!record.startTime || (now - record.startTime) > LIMIT_TIME) {
        record.startTime = now;
        record.count = 0;
    }

    // 检查提交次数
    if (record.count >= MAX_SUBMIT) {
        const remainTime = LIMIT_TIME - (now - record.startTime);
        showLimitTip(remainTime);
        return;
    }

    // 允许提交
    record.count++;
    localStorage.setItem(ORDER_TIME_KEY, JSON.stringify(record));

    window.client_api.submit_order({
        people: currentPeople,
        table: currentTable,
        items
    });
}

onMounted(() => {
    InitMenu();

    window.client_api.setOnMenu(() => {
        InitMenu();
    });

    window.client_api.setOnOrderConfirmed((value) => {
        alert('order add:' + value );
    });
});

</script>

<style scoped>
/* 横向滚动容器 */
.scrollable-content {
    display: flex;
    overflow-x: auto; /* 允许横向滚动 */
    gap: 1rem;
    padding: 1rem 0;
    white-space: nowrap;

    /* 隐藏滚动条 */
    scrollbar-width: none; /* Firefox 兼容 */
    /* 隐藏滚动条 */
    ms-overflow-style: none; /* IE/Edge 兼容 */

}

/* WebKit 内核浏览器隐藏滚动条 */
.scrollable-content::-webkit-scrollbar {
    display: none;
}

/* WebKit 兼容 */

/* 可选：优化触摸滚动 */
.scrollable-content {
    -webkit-overflow-scrolling: touch; /* 移动端顺滑滚动 */
}
</style>