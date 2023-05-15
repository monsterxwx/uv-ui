<template>
  <div>
    <demoBlock title="文字水印">
      <div style="position: relative;width: 100%;height: 300px;background-color: #ffffff;">
        <uvWaterMark content="uv-ui" :opacity="0.6" />
      </div>
    </demoBlock>
    <demoBlock title="图片水印">
      <div style="position: relative;width: 100%;height: 300px;background-color: #ffffff;">
        <uvWaterMark image="https://fastly.jsdelivr.net/npm/@vant/assets/vant-watermark.png" />
      </div>
    </demoBlock>
  </div>
</template>

<script setup>
import demoBlock from '../../../demo/demo-block.vue'
import { uvWaterMark } from 'uv-ui'

</script>

<style lang="scss" scoped>

</style>
