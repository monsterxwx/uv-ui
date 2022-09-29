<template>
  <div
    class="uv-swipe-item"
    ref="swipeItemRef"
  >
    <slot />
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useParent } from '../../../hooks/useContext.js'

const swipeItemRef = ref(null)

const context = reactive({
  $el: swipeItemRef
})

// const { props: parentProps } = useParent('swipe', context)
useParent('swipe', context)

</script>
<script>
export default {
  name: 'UvSwipeItem'
}
</script>

<style>
:root {
  --uv-test: 1px;
}
</style>

<style lang="scss" scoped>
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
