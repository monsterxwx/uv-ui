<template>
  <div>
    <demoBlock title="基本使用">
      <uv-switch v-model="test" />
    </demoBlock>
    <demoBlock title="禁用状态">
      <uv-switch
        v-model="test"
        disabled
      />
    </demoBlock>
    <demoBlock title="自定义尺寸">
      <div style="margin-bottom: 10px;">
        <uv-stepper v-model="num" />
      </div>
      <uv-switch
        v-model="test"
        :size="num"
      />
    </demoBlock>
    <demoBlock title="自定义活跃状态背景色和默认背景色">
      <uv-switch
        v-model="test"
        active-color="#ee0a24"
        inactive-color="#88c1fa"
      />
    </demoBlock>
  </div>
</template>

<script setup>
import demoBlock from '../../../demo/demo-block.vue'
import { uvSwitch, uvStepper } from 'uv-ui'
import { ref } from 'vue'
const test = ref(false)
const num = ref(32)
</script>

<style lang="scss" scoped>

</style>
