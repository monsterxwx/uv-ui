<template>
  <div>
    <div class="tips">
      <div>通过 <span class="code">size</span> 设置球大小</div>
      <div>通过 <span class="code">progress</span> 设置进度</div>
    </div>
    <uv-water-waves :progress="progress" />
    <div style="display: flex;gap: 20px;">
      <uv-button @click="autoAdd">
        播放
      </uv-button>
      <uv-button @click="stopAdd">
        停止
      </uv-button>
    </div>
    <div class="title">
      数值为100
    </div>
    <uv-water-waves :progress="100" />
    <div class="title">
      内容插槽
    </div>
    <div class="tips">
      <div>通过 <span class="code">color</span> 设置字体颜色</div>
    </div>
    <uv-water-waves
      :progress="progress1"
      color="#bfa"
    >
      <div>{{ progress1 }}</div>
    </uv-water-waves>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const progress = ref(20)
const progress1 = ref(60)
const inter = ref(null)
const autoAdd = () => {
  inter.value = setInterval(() => {
    progress.value = progress.value + 1
    if (progress.value >= 100) {
      progress.value = 20
    }
  }, 100)
}
const stopAdd = () => {
  clearInterval(inter.value)
}
</script>

<style lang="scss" scoped>

</style>
