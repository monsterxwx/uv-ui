<template>
  <div
    class="uv-swipe"
    ref="swiperRef"
  >
    <div
      @touchstart="touchstart"
      @touchmove="touchmove"
      @touchend="touchend"
      ref="swipeListRef"
      class="uv-swipe-list"
      :style="{width: `${swipeListWidth}px`,transform: `translateX(${transformX}px)`}"
    >
      <slot />
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useTouch } from '../../../hooks/useTouch.js'
defineProps({
  autoplay: {
    type: [Number, String]
  },
  initialSwipe: {
    type: [Number, String],
    default: 0
  },
  loop: {
    type: Boolean,
    default: true
  }
})

const currentIndex = ref(0)
const listLenght = ref(0)
const swiperRef = ref(null)
const swiperWidth = ref(0)
const swipeListRef = ref(null)
const swipeListWidth = ref(0)

onMounted(() => {
  swiperWidth.value = swiperRef.value.offsetWidth
  listLenght.value = swipeListRef.value.children ? (swipeListRef.value.children.length) : 0
  swipeListWidth.value = listLenght.value * swiperWidth.value
})

const touch = useTouch()
const transformX = ref(0)
function touchstart (event) {
  touch.start(event)
}

function touchmove (event) {
  touch.reset()
  touch.move(event)
  const { deltaX } = touch
  transformX.value = transformX.value + deltaX.value

  console.log('deltaX', transformX.value)
}

function touchend (event) {
  const { deltaX } = touch
  if (-deltaX.value > (swiperWidth.value / 8)) {
    currentIndex.value++
    if (currentIndex.value > listLenght.value - 1) {
      currentIndex.value = 0
    }
  } else if (deltaX.value > (swiperWidth.value / 8)) {
    currentIndex.value--
    if (currentIndex.value < 0) {
      currentIndex.value = listLenght.value - 1
    }
  }
  transformX.value = -swiperWidth.value * currentIndex.value
}
</script>
<script>
export default {
  name: 'UvSwipe'
}
</script>

<style>
:root {
  --uv-test: 1px;
}
</style>

<style lang="scss" scoped>
  .uv-swipe {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: auto;
    .uv-swipe-list {
      position: relative;
      display: flex;
      height: 100%;
      transition: transform 0.3s;
    }
  }

</style>
