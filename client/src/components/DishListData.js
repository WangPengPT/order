import {ref} from "vue";

// dish that only show in current page
const dishes = ref([]);

// all of dish
const dishDatas = ref([]);

const showDisList = (datas) => {
    dishes.value.length = 0;
    for (let i = 0; i < datas.length; i++) {
        dishes.value.push(datas[i]);
    }
};

export default {
    dishDatas,
    dishes,
    showDisList,
};