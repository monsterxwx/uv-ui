<template>
  <div>
    <demoBlock title="基本使用">
      <uv-button @click="showMessage">
        点击显示
      </uv-button>
    </demoBlock>
    <demoBlock title="修改持续时间">
      <uv-button @click="showMessage1">
        点击显示
      </uv-button>
    </demoBlock>
  </div>
</template>

<script setup>
import demoBlock from '../../../demo/demo-block.vue'
import { Message, uvButton } from 'uv-ui'
const showMessage = () => {
  Message({
    content: 'test'
  })
}

const showMessage1 = () => {
  Message({
    content: '持续6s',
    duration: 6000
  })
}

</script>

<style lang="scss" scoped>

</style>
