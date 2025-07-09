<template>

  <Button icon="pi pi-bars " class="absolute top-0 border-0 custom-clean-button" @click="toggle"></Button>
  <Button icon="pi pi-instagram" class="absolute top-0 border-0 right-0 custom-clean-button" @click=""></Button>

  <div class="m-3">
    <div :class="['w-full', 'p-4']">
      <Image src="/images/icon.png" alt="Xiaoxiong Kitchen Logo"
        image-class="max-w-10rem h-auto w-full mx-auto block" />
    </div>

    <div class="flex w-full">
      <Accordion class="w-full max-w-xl mx-auto">
        <AccordionPanel value="0">
          <AccordionHeader>
            🍜 {{ $t('home.introTitle') }}
          </AccordionHeader>
          <AccordionContent>
            {{ $t('home.intro') }}
          </AccordionContent>
        </AccordionPanel>
      </Accordion>
    </div>

    <div class="pt-5 pb-5">
      <Button @click="click_next()" class="w-full font-bold ">
        {{ $t('home.orderNow') }}
      </Button>
    </div>

    <div class="border-solid max-w-30rem p-3">
      <h1 class="text-center font-bold">
        {{ $t('home.infoTitle') }}
      </h1>
        <Swiper :slides-per-view="1" :loop="true" class="w-full h-full" :modules="[Pagination]" :pagination="{ clickable: true }">
          <SwiperSlide v-for="(img, index) in images" :key="index">
            <img :src="img" class=" w-full h-full" />
          </SwiperSlide>
        </Swiper>
      <div class="w-full">
        <h2 class="font-bold pt-3">{{ $t('home.firstTitle') }}</h2>
        <div class="flex flex-column">
          <span>{{ $t('home.firstText1') }} </span>
        </div>
      </div>
      <div class="w-full">
        <h2 class="font-bold pt-3">{{ $t('home.secondTitle') }}</h2>
        <div class="flex flex-column">
          <span>{{ $t('home.secondText1') }}</span>
          <span>{{ $t('home.secondText2') }}</span>
        </div>
      </div>
      <div class="w-full text-right">
        <Button class="custom-bottom-button" @click="">{{ $t('home.more') }}</Button>
      </div>

    </div>

    <div class="p-4"> </div>

    <div class="border-solid p-3">
      <h2 class=" font-bold">{{ $t('home.hourTitle') }}</h2>

      <div class="flex flex-row justify-content-between	">
        <span>{{ $t('home.hourWeekdays') }}</span>
        <span>{{ $t('home.hourWeekdaysHours') }}</span>
      </div>

      <div class="flex flex-row justify-content-between	">
        <span>{{ $t('home.hourWeekends') }}</span>
        <span>{{ $t('home.hourWeekendsHours') }}</span>
      </div>
    </div>

    <div class="flex flex-row w-full justify-content-center	">
      <Button class="m-3 custom-bottom-button"
        @click='navigateTo("https://koreanbarbecue.simplybook.it/v2/#book/provider/2")'>
        {{ $t('home.reserve') }}
      </Button>
    </div>

  </div>

  <Dialog v-model:visible="isOpen" position="left" class="h-full" :modal="true" :draggable="false" :closable="false"
    dismissableMask>
    <div class="flex flex-column h-full">
      <Button label="PT" @click="changeLang('en')" class="custom-bottom-button m-2"> <img
          src="https://flagcdn.com/w40/gb.png" alt="EN" width="24" class="flag-icon" /> EN </Button>
      <Button label="EN" @click="changeLang('pt')" class="custom-bottom-button m-2"> <img
          src="https://flagcdn.com/w40/pt.png" alt="PT" width="24" class="flag-icon" /> PT </Button>
      <Button @click="changeLang('zh')" class="custom-bottom-button m-2"> <img src="https://flagcdn.com/w40/cn.png"
          alt="中文" width="20" class="mr-2" />中文 </Button>
    </div>
  </Dialog>


</template>

<script setup>
import client from './client';
import { ref, onMounted } from 'vue'
import Dialog from 'primevue/dialog';
import Button from 'primevue/button'
import Image from 'primevue/image'
import { Pagination } from 'swiper/modules'
import Accordion from 'primevue/accordion';
import AccordionPanel from 'primevue/accordionpanel';
import AccordionHeader from 'primevue/accordionheader';
import AccordionContent from 'primevue/accordioncontent';
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import { useI18n } from 'vue-i18n'
const isOpen = ref(false)
const { switchTo } = defineProps(['switchTo'])

const images = ref([])

onMounted(() => {
  // 手动添加你放在 public/welcomeImages/ 下的文件名
  const filenames = ['bibimbap.jpg', 'meet1.jpg', 'meet2.jpg', 'paocai.jpg', 'yeargao.png']
  // 构建完整路径（public 文件夹内的资源可直接用 / 开头访问）
  images.value = filenames.map((name) => `/welcomeImages/${name}`)
})


// 允许提交
const now = Date.now();
const timeStr = localStorage.getItem("login_time");
const showLangMenu = ref(false)
const { locale } = useI18n()
let time;
if (timeStr) time = JSON.parse(timeStr);

function navigateTo(url) {
  window.open(url, '_blank') // 或者 '_self' 若你不想新开窗口
}

function toggle() {
  isOpen.value = !isOpen.value
}

if (!time) {
  // nothing
}
else if ((now - time) > 60 * 5 * 1000) {
  localStorage.clear();
}
else {
  click_next();
}

function changeLang(str) {
  switch (str) {
    case 'zh':
      locale.value = 'zh'
      break;

    case 'en':
      locale.value = 'en'
      break;

    case 'pt':
      locale.value = 'pt'
      break;

    default:
      break;
  }
}

function toggleLangMenu() {
  showLangMenu.value = true
}

function click_next() {
  switchTo('HomePage');
}

</script>

<style scoped>
.custom-clean-button {
  background-color: var(--surface-a) !important;
  color: var(--text-color) !important;
  border: 1px solid var(--surface-border) !important;
}

.custom-bottom-button {
  background-color: var(--surface-a) !important;
  color: var(--text-color) !important;
}
</style>
