<template>
  <div>
    <demoBlock title="基本使用">
      <uv-rate v-model="test" />
    </demoBlock>
    <demoBlock title="自定义图标">
      <uv-rate
        v-model="test1"
        icon="love-fill"
      />
    </demoBlock>
    <demoBlock title="自定义样式">
      <uv-rate
        v-model="test1"
        icon="love-fill"
        color="#ee0a24"
      />
    </demoBlock>
    <demoBlock title="自定义数量">
      <uv-rate
        v-model="test2"
        :count="10"
      />
    </demoBlock>
    <demoBlock title="只读状态">
      <uv-rate
        v-model="test2"
        readonly
        :count="10"
      />
    </demoBlock>
  </div>
</template>

<script setup>
import demoBlock from '../../../demo/demo-block.vue'
import { uvRate } from 'uv-ui'
import { ref } from 'vue'
const test = ref(3)
const test1 = ref(5)
const test2 = ref(7)
</script>

<style lang="scss" scoped>

</style>
