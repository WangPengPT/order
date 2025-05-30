<template>
    <div class="q-pa-md">
        <p>上传菜单</p>
        <div class="q-gutter-sm row items-start">
            <q-uploader :url="uploadUrl"  style="max-width: 300px" />
        </div>
    </div>
</template>


<script>
import client from "src/api/Client.js";

const uploadUrl = client.getAddr() + "/upload";

export default {
    setup () {
        return {
            uploadUrl
        }
    }
}
</script>
