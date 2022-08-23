<template>
  <div>
    <uv-switch v-model="test" />
    <div class="title">
      禁用状态
    </div>
    <div class="tip">
      通过<span class="code">disabled</span> 开启
    </div>
    <uv-switch
      v-model="test"
      disabled
    />
    <div class="title">
      自定义尺寸
      <div>
        <uv-stepper v-model="num" />
      </div>
    </div>
    <div class="tip">
      通过<span class="code">size</span> 设置
    </div>
    <uv-switch
      v-model="test"
      :size="num"
    />
    <div class="title">
      自定义活跃状态背景色和默认背景色
    </div>
    <div class="tip">
      通过<span class="code">activeColor</span>和<span class="code">inactiveColor</span> 设置
    </div>
    <uv-switch
      v-model="test"
      active-color="#ee0a24"
      inactive-color="#88c1fa"
    />
  </div>
</template>

<script setup>

import { ref } from 'vue'
const test = ref(false)
const num = ref(32)
</script>

<style lang="scss" scoped>

</style>
