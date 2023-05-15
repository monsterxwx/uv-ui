<template>
  <div>
    <demoBlock title="基本使用">
      <uvSignature @submit="submitImg" />
      <div class="img-label">
        <div class="img-title">
          图片截图：
        </div>
        <img
          v-if="imgUrl"
          class="export-img"
          :src="imgUrl"
          alt=""
        >
      </div>
    </demoBlock>
    <demoBlock title="修改画笔宽度和颜色">
      <uvSignature pen-color="#bfa" :line-width="6" />
    </demoBlock>
  </div>
</template>

<script setup>
import demoBlock from '../../../demo/demo-block.vue'
import { uvSignature } from 'uv-ui'
import { ref } from 'vue'

const imgUrl = ref('')
const submitImg = (e) => {
  imgUrl.value = e.image
}
</script>

<style lang="scss" scoped>
  .img-label {
    display: flex;
    flex-direction: column;
    gap: 5px;
    .img-title {
      font-size: 14px;
      font-weight: 700;
    }
    .export-img {
      width: 100%;
      height: 200px;
    }
  }
</style>
