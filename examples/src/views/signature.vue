<template>
  <div class="signature">
    <uvSignature @submit="submitImg" />
    <div class="img-label">
      <div class="img-title">
        图片截图：
      </div>
      <img
        v-if="imgUrl"
        class="exportImg"
        :src="imgUrl"
        alt=""
      >
    </div>
    <div>修改画笔 宽度 (lineWidth) 和 颜色 (pen-color) </div>
    <uvSignature pen-color="#bfa" :line-width="6" />
  </div>
</template>

<script setup>
import { uvSignature } from 'uv-ui'
import { ref } from 'vue'

const imgUrl = ref('')
const submitImg = (e) => {
  imgUrl.value = e.image
}
</script>

<style lang="scss" scoped>
.signature {
  display: flex;
  padding: 10px;
  width: 100%;
  height: 100%;
  background-color: #f7f8fa;
  flex-direction: column;
  gap: 20px;
  .img-label {
    display: flex;
    flex-direction: column;
    gap: 5px;
    .img-title {
      font-size: 14px;
      font-weight: 700;
    }
    .exportImg {
      width: 100%;
      height: 200px;
    }
  }
}

</style>
