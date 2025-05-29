<template>
  <router-view />

</template>

<script setup>
import client from "src/api/Client.js";
client.init();
</script>
