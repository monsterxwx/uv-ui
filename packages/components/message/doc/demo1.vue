<template>
  <div>
    <div class="title">
      标题
    </div>
    <div class="tip">
      通过<span class="code">shape</span> 设置
    </div>
    <uv-button @click="showMessage">
      点击显示
    </uv-button>
  </div>
</template>

<script setup>

import { Message } from '../../../index'
const showMessage = () => {
  Message({
    content: 'test'
  })
}
</script>

<style lang="scss" scoped>

</style>
