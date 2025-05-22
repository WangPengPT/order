
<template>
  <HomePage v-if="currentView === 'HomePage'" :switchTo="switchTo" />
  <Welcome v-if="currentView === 'Welcome'" :switchTo="switchTo" />
</template>


<script setup>
import { ref } from 'vue'

import HomePage from './components/HomePage.vue'
import Welcome from './components/Welcome.vue'

const currentView = ref('HomePage')

const switchTo = (value) => {
  currentView.value = value;
};
</script>
