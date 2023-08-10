<template>
  <div style="width: 100%;height: 100%;">
    <demoBlock title="基本使用">
      <uvQrCode text="https://monsterwx.gitee.io/uv-ui" />
    </demoBlock>
    <demoBlock title="中间加入图片">
      <uvQrCode text="https://monsterwx.gitee.io/uv-ui" icon-url="https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg" />
    </demoBlock>
    <demoBlock title="修改二维码样式">
      <uvQrCode text="https://monsterwx.gitee.io/uv-ui" code-color="#67c23a" />
    </demoBlock>
  </div>
</template>

<script setup>
import demoBlock from '../../../demo/demo-block.vue'
import { uvQrCode } from 'uv-ui'

</script>

<style lang="scss" scoped>

</style>
