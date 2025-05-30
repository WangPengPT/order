<template>
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
                <q-input outlined v-model="password" type="password" label="password" />
                <q-btn class="q-mt-sm" label="Login" @click="login(password)" color="primary"/>
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
const password = ref('');
const alert = ref(false);

login('123456');

function login(pwd) {
    console.log(pwd);
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
        return {
            login,
            alert,
            password,
            showLogin,
        }
    }
}
</script>
