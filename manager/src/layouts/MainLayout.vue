<template>
  <q-layout view="hHh LpR fFf">

    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-btn dense flat round icon="menu">
          <q-menu>
            <q-list style="min-width: 100px">
              <q-item clickable v-close-popup>
                <q-item-section>New tab</q-item-section>
              </q-item>
              <q-item clickable v-close-popup>
                <q-item-section>New incognito tab</q-item-section>
              </q-item>
              <q-separator />
              <q-item clickable v-close-popup>
                <q-item-section>Recent tabs</q-item-section>
              </q-item>
              <q-item clickable v-close-popup>
                <q-item-section>History</q-item-section>
              </q-item>
              <q-item clickable v-close-popup>
                <q-item-section>Downloads</q-item-section>
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
        <q-route-tab to="/about" icon="info_outline" label="About" />
      </q-tabs>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
    <q-dialog
        v-model="showLogin"
        persistent
        :maximized="true"
        transition-hide="slide-down"
    >
        <q-card>
            <q-card-section>
                <div class="text-h6">登录</div>
            </q-card-section>

            <div class="q-pa-md" style="max-width: 300px">
                <q-input outlined v-model="inputPassword" label="password" />
                <q-btn class="q-mt-sm" label="Login" @click="login" color="primary"/>
            </div>
        </q-card>
    </q-dialog>
    <q-dialog v-model="alert">
        <q-card>
            <q-card-section>
                <div class="text-h6">Alert</div>
            </q-card-section>

            <q-card-section class="q-pt-none">
                Your password is invalid.
            </q-card-section>

            <q-card-actions align="right">
                <q-btn flat label="OK" color="primary" v-close-popup />
            </q-card-actions>
        </q-card>
    </q-dialog>
</template>

<script>
import { ref } from 'vue'
import client from "src/api/Client.js";

const showLogin = ref(true);
const inputPassword = ref('');
const alert = ref(false);

login('123456');

function login(pwd) {
    if (!pwd) pwd = inputPassword.value;
    client.login(pwd, (value)=> {
        if (value)
        {
            showLogin.value = false;
        }
        else
        {
            alert.value = true;
        }
    });
}

export default {
  setup () {
    const leftDrawerOpen = ref(false)
    const newOrderCount = ref(0);

    client.updateOrderCount = (value) => {
        newOrderCount.value = value;
    }

    return {
        alert,
        inputPassword,
        login,
        newOrderCount,
        leftDrawerOpen,
        showLogin,
        toggleLeftDrawer () {
            leftDrawerOpen.value = !leftDrawerOpen.value
        }
    }
  }
}
</script>
