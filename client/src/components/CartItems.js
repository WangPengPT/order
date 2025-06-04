import {ref} from "vue";

const cartItemCount = ref(0);
const cartDishs = ref([]);
function addItem(item)
{
    item.id = generateUniqueCode;
    cartItemCount.value = cartItemCount.value + 1;
    cartDishs.value.push(item);
}

function removeItem(item)
{
    for (let i = 0; i < cartDishs.value.length; i++) {
        if (cartDishs.value[i].id == item.id)
        {
            cartDishs.value.splice(i, 1);
            cartItemCount.value = cartItemCount.value - 1;
            break;
        }
    }
}

function generateUniqueCode() {
    const timestamp = Date.now().toString(36); // 将时间戳转换为36进制字符串
    const randomNum = Math.random().toString(36).substring(2, 5); // 生成随机字符串
    return `${timestamp}-${randomNum}`;
}

export default {
    addItem,
    removeItem,
    cartDishs,
    cartItemCount
};