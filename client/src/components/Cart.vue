<template>
    <Dialog v-model:visible="visible" modal header="cart" :style="{ width: '30rem' }" :dismissableMask="true">
        <h2 class="text-3xl font-bold" v-if="isEmpty">Cart is empty.</h2>
        <!-- 菜品列表 -->
        <div class="flex flex-column gap-3">
            <!-- 单个菜品项 -->
            <div
                v-for="(item, index) in dishes"
                :key="index"
                class="p-3 border-round surface-section shadow-1 flex align-items-center gap-3 transition-all transition-duration-200 hover:shadow-3"
            >
                <!-- 图片区域 -->
                <img
                    :src="item.image"
                    :alt="item.name"
                    class="w-4rem h-4rem border-round flex-shrink-0"
                    style="object-fit: cover; min-width: 4rem"
                />

                <!-- 信息区域 -->
                <div class="flex-grow-1 min-width-0">
                    <div class="flex flex-column gap-1">
                        <div class="flex align-items-center gap-2">
                              <span
                                  class="text-xl font-bold line1 whitespace-nowrap overflow-hidden text-overflow-ellipsis"
                                  style="max-width: 20rem"
                              >
                                {{ item.name }}
                              </span>
                        </div>
                    </div>
                </div>

                <!-- 操作区域 -->
                <div class="flex-shrink-0 flex align-items-center gap-3">
                    <div class="flex align-items-end gap-1">
                        <span v-if="item.price > 0" class="text-xl font-bold text-primary">¥{{ item.price }}</span>
                        <span v-if="item.price > 0" class="text-sm text-color-secondary">/ 份</span>
                    </div>

                    <!-- 加减按钮组 -->
                    <div class="flex align-items-center gap-2">
                        <Button
                            icon="pi pi-minus"
                            rounded
                            :disabled="item.quantity <= 0"
                            @click="changeQuantity(index, -1)"
                            class="w-2rem h-2rem"
                        />
                        <span class="w-2rem text-center">{{ item.quantity }}</span>
                        <Button
                            icon="pi pi-plus"
                            rounded
                            :disabled="item.quantity >= 3"
                            @click="changeQuantity(index, 1)"
                            class="w-2rem h-2rem"
                        />
                    </div>
                </div>
            </div>
        </div>
    </Dialog>
</template>

<script setup>
import {ref} from 'vue';
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';
import Avatar from 'primevue/avatar';

// 菜品数据
const dishes = ref([]);
const visible = ref(false);
const isEmpty = ref(true);

// 修改数量
const changeQuantity = (index, delta) => {
    const newQuantity = dishes.value[index].quantity + delta;
    if (newQuantity >= 0) {
        dishes.value[index].quantity = newQuantity;
        props.updateCartItemCount(delta);
    }
};

const props = defineProps({
    updateCartItemCount: {
        type: Function,
        required: true
    }
});

const showDisList = (datas) => {
    visible.value = true;
    dishes.value.length = 0;
    for (let i = 0; i < datas.length; i++) {
        dishes.value.push(datas[i]);
    }

    isEmpty.value = dishes.value.length == 0;
};

defineExpose({
    showDisList
});

</script>

<style scoped>
/* 图片尺寸 */
.w-4rem {
    width: 4rem;
}

.h-4rem {
    height: 4rem;
}

/* 数量选择器样式 */
.w-2rem {
    width: 2rem;
    height: 2rem;
}

/* 响应式调整 */
@media (max-width: 1000000000px) {
    .flex.align-items-center {
        flex-wrap: wrap;
        gap: 1rem;
    }

    .flex-shrink-0 {
        width: 100%;
        justify-content: space-between;
    }
}

.line1 {
    display: -webkit-box;
    -webkit-line-clamp: 1; /* 控制显示3行 */
    -webkit-box-orient: vertical;
    overflow: hidden;
    line-height: 1.5; /* 必须明确行高 */
    max-height: calc(1.5em * 3); /* 行高 × 行数 */
}

.line2 {
    display: -webkit-box;
    -webkit-line-clamp: 2; /* 控制显示3行 */
    -webkit-box-orient: vertical;
    overflow: hidden;
    line-height: 1.5; /* 必须明确行高 */
    max-height: calc(1.5em * 3); /* 行高 × 行数 */
}

</style>