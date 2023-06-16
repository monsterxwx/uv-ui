<template>
  <div>
    <demoBlock title="基本使用">
      <uv-swipe :autoplay="3000">
        <uv-swipe-item>
          <div class="test color1">
            1
          </div>
        </uv-swipe-item>
        <uv-swipe-item>
          <div class="test color2">
            2
          </div>
        </uv-swipe-item>
        <uv-swipe-item>
          <div class="test color3">
            3
          </div>
        </uv-swipe-item>
      </uv-swipe>
    </demoBlock>
    <demoBlock title="关闭自动轮播">
      <uv-swipe>
        <uv-swipe-item>
          <div class="test color1">
            1
          </div>
        </uv-swipe-item>
        <uv-swipe-item>
          <div class="test color2">
            2
          </div>
        </uv-swipe-item>
        <uv-swipe-item>
          <div class="test color3">
            3
          </div>
        </uv-swipe-item>
      </uv-swipe>
    </demoBlock>
  </div>
</template>

<script setup>
import demoBlock from '../../../demo/demo-block.vue'
import { uvSwipe, uvSwipeItem } from 'uv-ui'

</script>

<style lang="scss" scoped>
.test {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
}
.color1 {
  background-color: #ffbbaa;
}
.color2 {
  background-color: green;
}
.color3 {
  background-color: orange;
}
</style>
