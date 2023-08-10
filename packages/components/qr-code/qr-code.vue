<template>
  <div class="uv-qr-code">
    <div v-if="iconUrl" class="uv-qr-code-img-warp" :style="{width:iconSize+'px',height:iconSize+'px'}">
      <img
        :src="iconUrl"
        class="uv-qr-code-img-logo"
      >
    </div>
    <div ref="QrCodeRef" />
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue'
import QRCode from './qrcode.js'

const props = defineProps({
  iconUrl: {
    type: String,
    default: ''
  },
  iconSize: {
    type: Number,
    default: 30
  },
  text: {
    type: String,
    default: ''
  },
  // 二维码大小
  codeSize: {
    type: Number,
    default: 70
  },
  // 二维码颜色
  codeColor: {
    type: String,
    default: '#000000'
  },
  // 二维码背景
  codeBgColor: {
    type: String,
    default: '#ffffff'
  },
  // 容错级别 [L|M|Q|H]
  correctLevel: {
    type: String,
    default: 'H'
  }
})

const QrCodeRef = ref(null)

const initQrCode = () => {
  QrCodeRef.value.innerHTML = ''
  const { text, codeSize, codeColor, codeBgColor, correctLevel } = props
  const qrcode = new QRCode(QrCodeRef.value, {
    text,
    width: codeSize,
    height: codeSize,
    colorDark: codeColor,
    colorLight: codeBgColor,
    correctLevel: QRCode.CorrectLevel[correctLevel]
  })
  return qrcode
}

watch(props, () => {
  initQrCode()
})

onMounted(() => {
  initQrCode()
})
</script>
<script>
export default {
  name: 'UvQrCode'
}
</script>

<style lang="scss">
:root {
  --uv-qr-code: 0;
}
.uv-qr-code {
  position: relative;
  display: inline-block;
  .uv-qr-code-img-warp {
    position: absolute;
    top: 50%;
    left: 50%;
    overflow: hidden;
    border: 2px solid #ffffff;
    border-radius: 4px;
    background-color: #ffffff;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 12px rgb(0 0 0 / 12%);
  }
  .uv-qr-code-img-logo {
    width: 100%;
    height: 100%;
    border-radius: 4px;
  }
}

</style>
