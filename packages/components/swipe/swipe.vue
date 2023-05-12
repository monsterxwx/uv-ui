<template>
  <div
    class="uv-swipe"
    ref="swiperRef"
  >
    <div
      @touchstart="touchstart"
      @touchmove="touchmove"
      @touchend="touchend"
      @transitionend="transitionend"
      ref="swipeListRef"
      class="uv-swipe-list"
      :style="{width: `${listWidth}px`,transform: `translateX(${transformX}px)`}"
    >
      <slot />
    </div>
  </div>
</template>

<script setup>

import { computed, onMounted, reactive, ref, watch, nextTick } from 'vue'
import { useTouch, useChildren } from '../../hooks/index'
const props = defineProps({
  autoplay: {
    type: Boolean,
    default: true
  },
  duration: {
    type: Number,
    default: 0.3
  },
  interval: {
    type: Number,
    default: 3000
  }
})

const state = reactive({
  activeIndex: 0, // 当前活跃的子项
  width: 0 // 屏幕宽度
})

const addAnimation = () => {
  swipeListRef.value.style.transition = `transform ${props?.duration}s ease`
}
const removeAnimation = () => {
  swipeListRef.value.style.transition = 'none'
}

const swiperRef = ref(null)
const swipeListRef = ref(null)

const { childrenNum, fields } = useChildren('swipe', { props })

onMounted(() => {
  state.width = swiperRef.value.offsetWidth
})
// 轮播总宽度
const listWidth = computed(() => {
  return childrenNum.value * state.width
})

const touch = useTouch()
const transformX = ref(0)
let startX = null
function touchstart (event) {
  stopSwipe()
  touch.start(event)
  startX = transformX.value
}

function touchmove (event) {
  touch.move(event)
  const { deltaX } = touch
  removeAnimation()
  if (deltaX.value < 0 && state.activeIndex === childrenNum.value - 1) { // 左移且index为最后一张
    fields[0].transform = listWidth.value
  } else if (deltaX.value > 0 && state.activeIndex === 0) { // 右移且当前index为0
    // 将最后一张轮播换到首位
    fields[fields.length - 1].transform = -listWidth.value
  }
  transformX.value = startX + deltaX.value
}

function touchend (event) {
  if (props.autoplay) {
    autoSwipe()
  }
  addAnimation()
  const { deltaX } = touch
  if (deltaX.value < (-state.width / 3)) {
    state.activeIndex++
  } else if (deltaX.value > (state.width / 3)) {
    state.activeIndex--
  }
  transformX.value = -state.width * state.activeIndex
}

function transitionend () {
  removeAnimation()
  if (state.activeIndex < 0) {
    fields[fields.length - 1].transform = 0
    state.activeIndex = childrenNum.value - 1
    transformX.value = -state.width * (childrenNum.value - 1)
  } else if (state.activeIndex > (childrenNum.value - 1)) {
    fields[0].transform = 0
    state.activeIndex = 0
    transformX.value = 0
  } else {
    fields.forEach(item => {
      item.transform = 0
    })
  }
}

const timer = ref(null)
const autoSwipe = () => {
  timer.value = setInterval(() => {
    if (state.activeIndex === childrenNum.value - 1) { // index为最后一张
      removeAnimation()
      fields[0].transform = listWidth.value
    } else if (state.activeIndex === 0) { // index为0
    // 将最后一张轮播换到首位
      removeAnimation()
      fields[fields.length - 1].transform = -listWidth.value
    }
    addAnimation()
    state.activeIndex++
    transformX.value = -state.width * state.activeIndex
  }, props.interval)
}

const stopSwipe = () => {
  removeAnimation()
  clearInterval(timer.value)
}

watch(() => props.autoplay, async () => {
  await nextTick()
  if (props.autoplay === true) {
    autoSwipe()
  } else {
    stopSwipe()
  }
}, {
  immediate: true
})
</script>
<script>
export default {
  name: 'UvSwipe'
}
</script>

<style lang="scss">
.uv-swipe {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: auto;
  .uv-swipe-list {
    position: relative;
    display: flex;
    height: 100%;
  }
}
</style>
