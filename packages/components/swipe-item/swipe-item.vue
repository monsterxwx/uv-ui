<template>
  <div
    class="uv-swipe-item"
    :style="{transform: `translateX(${context.transform}px)`}"
    ref="swipeItemRef"
  >
    <slot />
  </div>
</template>

<script setup>

import { reactive, ref } from 'vue'
import { useParent } from '../../hooks/index'

const swipeItemRef = ref(null)

const context = reactive({
  $el: swipeItemRef,
  transform: 0
})

useParent('swipe', context)

</script>
<script>
export default {
  name: 'UvSwipeItem'
}
</script>

<style lang="scss">
.uv-swipe-item {
  position: relative;
  width: 100%;
  img {
    display: block;
    width: 100%;
    height: 100%;
  }
}
</style>
