<template>
    <!-- 标题区域 -->
    <div class="mb-4">
      <h2 class="text-3xl font-bold">今日推荐菜品</h2>
      <p class="text-color-secondary">共 {{ dishes.length }} 道特色美食</p>
    </div>

    <!-- 菜品列表 -->
    <div class="flex flex-column gap-3">
      <!-- 单个菜品项 -->
      <div
          v-for="(item, index) in dishes"
          :key="index"
          class="p-3 border-round surface-section shadow-1 flex align-items-center gap-3 transition-all transition-duration-200 hover:shadow-3"
      >
        <!-- 左侧图片区域（缩小版） -->
        <img
            :src="item.image"
            class="w-5rem h-5rem border-round flex-shrink-0"
            style="object-fit: cover; min-width: 5rem"
        />

        <!-- 中间信息区域（扩展版） -->
        <div class="flex-grow-1 min-width-0">
          <div class="flex flex-column gap-1">
            <!-- 名称和过敏源 -->
            <div class="flex align-items-center gap-2">
              <span
                  class="text-lg font-bold whitespace-nowrap overflow-hidden text-overflow-ellipsis"
                  style="max-width: 20rem"
                  v-tooltip.top="item.name"
              >
                {{ item.name }}
              </span>
              <i
                  v-for="(allergy, i) in item.allergies"
                  :key="i"
                  class="pi pi-exclamation-circle text-red-500"
                  v-tooltip.top="allergy"
              />
            </div>

            <!-- 菜品描述（两行显示） -->
            <p
                class="text-color-secondary m-0 line-height-3"
                style="
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                overflow: hidden;
              "
            >
              {{ item.description }}
            </p>
          </div>
        </div>

        <!-- 右侧操作区域 -->
        <div class="flex-shrink-0 flex align-items-center gap-3">
          <!-- 加减按钮组 -->
          <div class="flex align-items-center gap-2">
            <Button
                icon="pi pi-minus"
                rounded
                :disabled="item.quantity <= 0"
                @click="changeQuantity(index, -1)"
                class="w-2rem h-2rem"
            />
            <span class="w-1rem text-center">{{ item.quantity }}</span>
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
</template>

<script setup>
import { ref } from 'vue';
import Button from 'primevue/button';


const dish = {
  name: '秘制黑松露和',
  description: '精选澳洲M5和牛肉饼',
  price: 158,
  image: 'https://comesushi.com/cdn/shop/files/2025-05-09181337.jpg',
  allergies: ['含麸质', '乳制品'],
  liked: false,
  quantity: 0,
};

var datas = [];
for (let i = 0; i < 20; i++) {
  datas.push({ ...dish });
}

// 示例数据
const dishes = ref(datas);

// 修改数量的方法
const changeQuantity = (index, delta) => {
  const newQuantity = dishes.value[index].quantity + delta;
  if (newQuantity > 0) {
    dishes.value[index].quantity = newQuantity;
  }
};

// 点赞切换
const toggleLike = (index) => {
  dishes.value[index].liked = !dishes.value[index].liked;
};
</script>

<style scoped>
/* 图片尺寸 */
.w-4rem { width: 4rem; }
.h-4rem { height: 4rem; }

/* 数量选择器样式 */
.w-2rem {
  width: 2rem;
  height: 2rem;
}
</style>