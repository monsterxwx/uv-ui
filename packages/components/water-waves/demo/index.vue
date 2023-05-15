<template>
  <div>
    <demoBlock title="基本使用">
      <div style="display: flex;gap: 20px;margin-bottom: 20px;">
        <uv-button @click="autoAdd">
          播放
        </uv-button>
        <uv-button @click="stopAdd">
          停止
        </uv-button>
      </div>
      <uv-water-waves :progress="progress">
        <div>{{ progress }}</div>
      </uv-water-waves>
    </demoBlock>
    <demoBlock title="100%状态">
      <uv-water-waves :progress="100" />
    </demoBlock>
    <demoBlock title="内容插槽">
      <uv-water-waves
        :progress="progress1"
        color="#bfa"
      >
        <div>内容：{{ progress1 }}</div>
      </uv-water-waves>
    </demoBlock>
  </div>
</template>

<script setup>
import demoBlock from '../../../demo/demo-block.vue'
import { uvWaterWaves, uvButton } from 'uv-ui'
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
