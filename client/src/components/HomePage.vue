<template>
  <div class="min-h-screen flex flex-column">
    <!-- 顶部固定 -->
    <div class="fixed top-0 left-0 w-full h-4rem bg-white p-3">
      <div class="scrollable-content">
        <Tabs value="0">
          <TabList>
            <Tab value="0">Header I</Tab>
            <Tab value="1">Header II</Tab>
            <Tab value="2">Header III</Tab>
            <Tab value="0">Header I</Tab>
            <Tab value="1">Header II</Tab>
            <Tab value="2">Header III</Tab>
            <Tab value="0">Header I</Tab>
            <Tab value="1">Header II</Tab>
            <Tab value="2">Header III</Tab>
            <Tab value="0">Header I</Tab>
            <Tab value="1">Header II</Tab>
            <Tab value="2">Header III</Tab>
            <Tab value="0">Header I</Tab>
            <Tab value="1">Header II</Tab>
            <Tab value="2">Header III</Tab>
          </TabList>
          <TabPanels>
          </TabPanels>
        </Tabs>
      </div>
    </div>

    <!-- 中间内容（滚动区域） -->
    <div
        class="flex-grow-1 overflow-auto"
        :style="{ paddingTop: '4rem', paddingBottom: '4rem' }"
    >
      <DishList />
    </div>

    <!-- 底部固定 -->
    <div class="fixed bottom-0 left-0 w-full h-4rem bg-white p-3">
      <div class="h-full flex align-items-center justify-content-end">
        <Button
            label="check out"
            class="mr-3"
            :style="{ marginRight: '10px' }"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import TabPanels from 'primevue/tabpanels';

import Button from 'primevue/button';
import DishList from "@/components/DishList.vue";

const props = defineProps({
  switchTo: {
    type: Function,
    required: true
  }
});


</script>

<style scoped>
/* 横向滚动容器 */
.scrollable-content {
  display: flex;
  overflow-x: auto;    /* 允许横向滚动 */
  gap: 1rem;
  padding: 1rem 0;
  white-space: nowrap;

  /* 隐藏滚动条 */
  scrollbar-width: none;         /* Firefox 兼容 */
  /* 隐藏滚动条 */
  ms-overflow-style: none;      /* IE/Edge 兼容 */

}

/* WebKit 内核浏览器隐藏滚动条 */
.scrollable-content::-webkit-scrollbar {
  display: none;
} /* WebKit 兼容 */

/* 可选：优化触摸滚动 */
.scrollable-content {
  -webkit-overflow-scrolling: touch;  /* 移动端顺滑滚动 */
}
</style>