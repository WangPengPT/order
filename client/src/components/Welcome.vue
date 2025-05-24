<template>
    <p>Welcome</p>
</template>

<script setup>

const props = defineProps({
    switchTo: {
        type: Function,
        required: true
    }
});

</script>