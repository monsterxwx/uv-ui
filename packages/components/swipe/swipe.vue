<template>
  <div
    class="uv-swipe"
    ref="swiperRef"
  >
    <div
      @touchstart="touchstart"
      @touchmove="touchmove"
      @touchend="touchend"
      class="uv-swipe-list"
      :style="{
        width: `${listWidth}px`,
        transform: `translateX(${transformX}px)`,
        transitionDuration: state.lockDuration ? `0ms` : `${duration}ms`
      }"
    >
      <slot />
    </div>
  </div>
</template>

<script setup>
import { nextTickFrame, call } from '../../utils/index.js'
import { computed, onMounted, reactive, ref, watch } from 'vue'
import { useTouch, useChildren } from '../../hooks/index'
const props = defineProps({
  autoplay: {
    type: Number,
    default: 0
  },
  duration: {
    type: Number,
    default: 500
  }
})

const emit = defineEmits(['change'])

const state = reactive({
  // 当前活跃的子项
  activeIndex: 0,
  // 屏幕宽度
  width: 0,
  // 是否停止动画时间
  lockDuration: true
})

watch(() => state.activeIndex, (newValue) => {
  emit('change', newValue)
})

const swiperRef = ref(null)

const { childrenNum, fields } = useChildren('swipe', { props })

onMounted(() => {
  state.width = swiperRef.value.offsetWidth
  startAutoplay()
})
// 轮播总宽度
const listWidth = computed(() => {
  return childrenNum.value * state.width
})

const touch = useTouch()
const transformX = ref(0)

// 修正轮播子项位置
const fixPosition = (fn) => {
  state.lockDuration = true
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

  nextTickFrame(() => {
    state.lockDuration = false
    call(fn)
  })
}

let startX = null
let touching = false // 是否按下

function touchstart (event) {
  if (childrenNum.value <= 1) {
    return
  }
  touch.start(event)
  touching = true
  stopAutoplay()
  fixPosition(() => {
    state.lockDuration = true
  })

  startX = transformX.value
}

function touchmove (event) {
  if (!touching) {
    return
  }
  touch.move(event)
  const { deltaX } = touch
  if (deltaX.value < 0 && state.activeIndex === childrenNum.value - 1) { // 左移且index为最后一张
    fields[0].transform = listWidth.value
  } else if (deltaX.value > 0 && state.activeIndex === 0) { // 右移且当前index为0
    // 将最后一张轮播换到首位
    fields[fields.length - 1].transform = -listWidth.value
  }
  transformX.value = startX + deltaX.value
}

const OVER_MOUSE_LENGHT = 40 // 超过滑动的距离长度

function touchend (event) {
  if (!touching) {
    return
  }

  const { deltaX } = touch
  if (deltaX.value < -OVER_MOUSE_LENGHT) {
    state.activeIndex++
  } else if (deltaX.value > OVER_MOUSE_LENGHT) {
    state.activeIndex--
  }
  touching = false
  state.lockDuration = false
  transformX.value = -state.width * state.activeIndex
  startAutoplay()
}

const next = () => {
  touch.reset()

  fixPosition(() => {
    if (state.activeIndex === childrenNum.value - 1) {
      fields[0].transform = listWidth.value
    }
    state.activeIndex++
    state.lockDuration = false
    transformX.value = -state.width * state.activeIndex
  })
}

let timer = null
const startAutoplay = () => {
  if (+props.autoplay > 0 && childrenNum.value > 1) {
    timer = setTimeout(() => {
      next()
      startAutoplay()
    }, +props.autoplay)
  }
}

const stopAutoplay = () => {
  timer && clearTimeout(timer)
}

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
