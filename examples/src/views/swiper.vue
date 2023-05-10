<template>
  <div style="width: 100%;height: 100%;touch-action: none;">
    <uv-swipe>
      <uv-swipe-item>
        <div class="test">
          <img style="width: 100%;height: 100%;object-fit: cover;" src="https://tdesign.gtimg.com/site/swiper/01.png" alt="">
        </div>
      </uv-swipe-item>
      <uv-swipe-item>
        <div class="test">
          <img style="width: 100%;height: 100%;object-fit: cover;" src="https://tdesign.gtimg.com/site/swiper/02.png" alt="">
        </div>
      </uv-swipe-item>
      <uv-swipe-item>
        <div class="test ">
          <img style="width: 100%;height: 100%;object-fit: cover;" src="https://tdesign.gtimg.com/site/swiper/03.png" alt="">
        </div>
      </uv-swipe-item>
    </uv-swipe>
  </div>
</template>

<script setup>
import { uvSwipe, uvSwipeItem } from 'uv-ui'

</script>

<style lang="scss" scoped>
.test {
  width: 100%;
  height: 200px;
}

</style>
