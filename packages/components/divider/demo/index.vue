<template>
  <div>
    <demoBlock title="基本使用">
      <uv-divider>标题</uv-divider>
    </demoBlock>
    <demoBlock title="使用 0.5px 线">
      <uv-divider
        hairline
      >
        标题
      </uv-divider>
    </demoBlock>
    <demoBlock title="开启虚线">
      <uv-divider
        dashed
      >
        标题
      </uv-divider>
    </demoBlock>
    <demoBlock title="内容位置">
      <uv-divider
        position="left"
      >
        标题
      </uv-divider>
      <uv-divider
        position="right"
      >
        标题
      </uv-divider>
    </demoBlock>
  </div>
</template>

<script setup>
import demoBlock from '../../../demo/demo-block.vue'
import { uvDivider } from 'uv-ui'

</script>

<style lang="scss" scoped>

</style>
