<template>
  <div class="container">
    <uv-button
      type="primary"
      @click="show=true"
    >
      显示popup
    </uv-button>
    <uv-popup v-model="show">
      dde
    </uv-popup>
    <div class="title">
      显示位置
    </div>
    <div class="tip">
      通过 <span class="code">position</span>  设置,可选项为<span class="code">bottom</span><span class="code">top</span><span class="code">center</span><span class="code">left</span><span class="code">right</span>
    </div>
    <uv-button
      type="primary"
      @click="show1=true"
    >
      顶部显示
    </uv-button>
    <uv-popup
      position="left"
      v-model="show1"
    >
      <div>testfaefaegaweasdfae</div>
    </uv-popup>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const show = ref(false)
const show1 = ref(false)
</script>

<style lang="scss" scoped>

</style>
