<template>
  <div>
    <demoBlock title="基本使用">
      <uv-button
        type="primary"
        @click="show=true"
      >
        显示遮罩层
      </uv-button>
      <uv-overlay
        :show="show"
        z-index="2"
        @click="show = false"
      />
    </demoBlock>
    <demoBlock title="嵌入内容">
      <uv-button
        type="primary"
        @click="show1=true"
      >
        打开
      </uv-button>
      <uv-overlay
        :show="show1"
        @click="show1 = false"
      >
        <div class="wrapper">
          <div class="block">
            test
          </div>
        </div>
      </uv-overlay>
    </demoBlock>
  </div>
</template>

<script setup>
import demoBlock from '../../../demo/demo-block.vue'
import { uvOverlay, uvButton } from 'uv-ui'
import { ref } from 'vue'
const show = ref(false)
const show1 = ref(false)
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  .block {
    width: 120px;
    height: 120px;
    background-color: #ffffff;
  }
}
</style>
