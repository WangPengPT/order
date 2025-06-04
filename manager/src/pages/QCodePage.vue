<template>
    <q-page class="flex flex-center column q-pa-md">
        <div class="text-h4 q-mb-md">座号二维码生成器</div>

        <!-- 座号输入框 -->
        <q-input
            v-model="seatNumber"
            label="请输入座号"
            outlined
            class="q-mb-md"
            style="min-width: 300px;"
            :rules="[val => !!val || '座号不能为空']"
        />

        <!-- 生成按钮 -->
        <q-btn
            label="生成二维码"
            color="primary"
            class="q-mb-md"
            @click="generateQRCode"
            :disable="!seatNumber"
        />

        <!-- 二维码显示区域 -->
        <div class="q-mb-md">
            <canvas ref="qrCanvas"></canvas>
        </div>

        <!-- 下载按钮，只在二维码生成后显示 -->
        <q-btn
            v-if="qrCodeGenerated"
            label="下载二维码"
            color="positive"
            icon="download"
            @click="downloadQRCode"
        />
    </q-page>
</template>

<script>
import { ref } from 'vue';
import QRCode from 'qrcode';

export default {
    setup() {
        const seatNumber = ref('');
        const qrCanvas = ref(null);
        const qrCodeGenerated = ref(false);

        // 生成二维码
        const generateQRCode = () => {
            if (seatNumber.value) {
                let data = window.global_qr_addr + seatNumber.value;

                console.log("The qrcode data: ", data);
                
                QRCode.toCanvas(qrCanvas.value, data, { width: 300 }, (error) => {
                    if (error) {
                        console.error(error);
                        // 这里可以添加错误提示
                    } else {
                        qrCodeGenerated.value = true;
                    }
                });
            }
        };

        // 下载二维码
        const downloadQRCode = () => {
            if (qrCanvas.value) {
                const link = document.createElement('a');
                link.download = `座号-${seatNumber.value}-二维码.png`;
                link.href = qrCanvas.value.toDataURL('image/png');
                link.click();
            }
        };

        return {
            seatNumber,
            qrCanvas,
            qrCodeGenerated,
            generateQRCode,
            downloadQRCode
        };
    }
};
</script>


