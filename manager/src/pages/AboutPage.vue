<template>
    <q-page class="q-pa-lg">
    <h2 class="text-h4">用户资料</h2>
    <p>用户ID: {{ $route.params.id }}</p>
    <q-btn
        label="返回首页"
        to="/"
        color="primary"
        class="q-mt-md"
    />
    </q-page>
</template>
