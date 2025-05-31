<template>
  <q-layout view="hHh LpR fFf">

    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-btn dense flat round icon="menu">
          <q-menu>
            <q-list style="min-width: 100px">
              <q-item clickable v-close-popup>
                <q-item-section>Main</q-item-section>
              </q-item>
              <q-separator />
              <q-item clickable v-close-popup>
                <q-item-section>Settings</q-item-section>
              </q-item>
              <q-separator />
              <q-item clickable v-close-popup>
                <q-item-section>Help &amp; Feedback</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>

        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          Order System
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs align="left">
        <q-route-tab to="/" icon="home" label="Main" />
        <q-route-tab to="/order" icon="wysiwyg" label="Order">
          <q-badge color="red" floating v-if="newOrderCount>0">{{newOrderCount}}</q-badge>
        </q-route-tab>
          <q-route-tab to="/qcode" icon="line_weight" label="QCode" />
        <q-route-tab to="/menu" icon="info_outline" label="Menu" />
      </q-tabs>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
    <Login />
</template>

<script>
import { ref } from 'vue'
import client from "src/api/Client.js";
import Login from "layouts/LoginLayout.vue";


export default {
    components: {Login},
  setup () {
    const leftDrawerOpen = ref(false)
    const newOrderCount = ref(0);

    client.updateOrderCount = (value) => {
        newOrderCount.value = value;
    }

    return {
        newOrderCount,
        leftDrawerOpen,
        toggleLeftDrawer () {
            leftDrawerOpen.value = !leftDrawerOpen.value
        }
    }
  }
}
</script>
