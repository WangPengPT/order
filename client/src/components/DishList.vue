<template>
  <div class="card p-4">
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
            <p
                class="text-color-secondary line2 whitespace-nowrap overflow-hidden text-overflow-ellipsis"
                style="max-width: 20rem"
            >
              {{ item.description }}
            </p>
          </div>
        </div>

        <!-- 操作区域 -->
        <div class="flex-shrink-0 flex align-items-center gap-3">
          <div class="flex align-items-end gap-1">
            <span v-if="item.price > 0" class="text-xl font-bold text-primary">¥{{ item.price }}</span>
            <span v-if="item.price > 0" class="text-sm text-color-secondary">/ 份</span>
            <Button
                icon="pi pi-info"
                rounded
                @click="showDish(item)"
                class="w-2rem h-2rem"
            />
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
  </div>

  <Dialog v-model:visible="dlgVisible" modal header="dish" :style="{ width: '30rem' }">
    <template #header>
      <div class="inline-flex items-center justify-center gap-2">
        <Avatar image="favicon.avif" shape="circle" />
        <span class="font-bold whitespace-nowrap">菜品详情</span>
      </div>
    </template>
    <div class="flex items-center gap-1 mb-2">
      <span class="text-xl font-bold" style="max-width: 20rem">{{dishItem.name}}</span>
    </div>
    <div class="flex items-center gap-1 mb-2">
      <span class="text-color-secondary m-0 line-height-3" style="max-width: 30rem">{{dishItem.description}}</span>
    </div>
    <div class="flex items-center gap-1 mb-2">
    <img
        :src="dishItem.image"
        :alt="dishItem.name"
        class="w-20rem h-20rem border-round flex-shrink-0"
        style="object-fit: cover; min-width: 20rem"
    />
    </div>
    <div class="flex align-items-center gap-2">
      <img
          v-for="(image, index) in dishItem.allergies"
          :src="'images/' + image + '.png'"
          :alt="image"
          class="w-2rem h-2rem border-round flex-shrink-0"
          style="object-fit: cover; min-width: 2rem"
      />
    </div>
  </Dialog>
</template>

<script setup>
import { ref } from 'vue';
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';
import Avatar from 'primevue/avatar';

const dish1 =  {
  name: '秘制黑松露和牛汉堡套餐',
  description: '澳洲M5和牛肉饼搭配法国黑松露酱.国黑松露国黑松露国黑松露..1·2121212121212121',
  price: 0,
  image: 'https://comesushi.com/cdn/shop/files/2025-05-09181337.jpg',
  allergies: ['1', '2','1', '2','1', '2','1', '2','1', '2','1', '2'],
  liked: false,
  quantity: 0
};

const dish2 =  {
  name: '短的',
  description: '澳洲M5和牛肉饼搭配',
  price: 22,
  image: 'https://comesushi.com/cdn/shop/files/2025-05-09181337.jpg',
  allergies: ['1', '2','1', '2','1', '2','1', '2','1', '2','1', '2'],
  liked: false,
  quantity: 0
};


const datas = [];
for (let i = 0; i < 10; i++) {
  datas.push({...dish1});
  datas.push({...dish2});
}

// 菜品数据
const dishes = ref(datas);

// 修改数量
const changeQuantity = (index, delta) => {
  const newQuantity = dishes.value[index].quantity + delta;
  if (newQuantity >= 0) {
    dishes.value[index].quantity = newQuantity;
  }
};

// 切换收藏状态
const toggleLike = (index) => {
  dishes.value[index].liked = !dishes.value[index].liked;
};


var dlgVisible = ref(false);

const hideDish = () => {
  dlgVisible.value = false;
}

const dishItem = ref({});
const showDish = (dish) => {
  dlgVisible.value = true;
  dishItem.value = dish;
  console.log("show dish")
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