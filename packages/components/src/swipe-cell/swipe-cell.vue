<template>
  <div class="uv-swipe-cell">
    <div
      class="uv-swipe-cell-wrapper"
      @touchstart="touchstart"
      @touchmove="touchmove"
      @touchend="touchend"
      :style="uvSwipeCellStyle"
    >
      <div
        class="uv-swipe-cell-left uv-swipe-cell-position"
        ref="swipeCellLeftRef"
        v-if="left"
      >
        <slot name="left">
          <div class="left-content">
            <div
              class="left-content-item-common"
              :style="{backgroundColor:selectBgColor}"
              @click="selectHandle"
            >
              {{ selectText }}
            </div>
          </div>
        </slot>
      </div>

      <div class="uv-swipe-cell-content">
        <slot>
          <div class="uv-swipe-cell-content-default">
            <div>{{ title }}</div>
            <div>{{ content }}</div>
          </div>
        </slot>
      </div>
      <div
        class="uv-swipe-cell-right uv-swipe-cell-position"
        ref="swipeCellRightRef"
        v-if="right"
      >
        <slot name="right">
          <div class="right-content">
            <div
              class=" right-content-item-common"
              :style="{backgroundColor:cancleBgColor}"
              @click="cancleHandle"
            >
              {{ cancleText }}
            </div>
            <div
              class="right-content-item-common"
              :style="{backgroundColor:confimBgColor}"
              @click="confimHandle"
            >
              {{ confimText }}
            </div>
          </div>
        </slot>
      </div>
    </div>
  </div>
</template>

<script setup>

import { computed, ref } from 'vue'
import { useTouch } from '@uv-ui/hooks'

const props = defineProps({
  // 开启左边操作栏
  left: {
    type: Boolean,
    default: false
  },
  // 开启右边操作栏
  right: {
    type: Boolean,
    default: true
  },
  selectText: {
    type: String,
    default: '选择'
  },
  selectBgColor: {
    type: String,
    default: '#1989fa'
  },
  cancleText: {
    type: String,
    default: '删除'
  },
  cancleBgColor: {
    type: String,
    default: '#ee0a24'
  },
  confimText: {
    type: String,
    default: '确定'
  },
  confimBgColor: {
    type: String,
    default: '#1989fa'
  },
  title: {
    type: String,
    default: '标题'
  },
  content: {
    type: String,
    default: '内容'
  }
})

const emits = defineEmits(['cancle', 'confim', 'select'])

const isOpen = ref(false)
const swipeCellLeftRef = ref(null)
const swipeCellRightRef = ref(null)
const leftWidth = computed(() => {
  return swipeCellLeftRef.value ? swipeCellLeftRef.value.clientWidth : 0
})
const rightWidth = computed(() => {
  return swipeCellRightRef.value ? swipeCellRightRef.value.clientWidth : 0
})

const transformLength = ref(0)
const touch = useTouch()
function touchstart (event) {
  touch.start(event)
}

function touchmove (event) {
  const { deltaX } = touch
  touch.move(event)

  // 判断左滑还是右滑
  if (deltaX.value < 0) {
    // 左滑
    if (props.right || isOpen.value) {
      // 已经展开则直接返回
      if (transformLength.value === -rightWidth.value) {
        return
      }
      transformLength.value = Math.abs(deltaX.value) < 50 ? deltaX.value : -rightWidth.value
    }
  } else if (deltaX.value > 0) {
    // 右滑
    if (props.left || isOpen.value) {
      // 已经展开则直接返回
      if (transformLength.value === leftWidth.value) {
        return
      }
      transformLength.value = Math.abs(deltaX.value) < 50 ? deltaX.value : leftWidth.value
    }
  }
  if (Math.abs(transformLength.value) > 0) {
    isOpen.value = true
  } else {
    isOpen.value = false
  }
}

function touchend (event) {
  const { deltaX } = touch
  if (Math.abs(deltaX.value) < 50) {
    transformLength.value = 0
  }
}

function cancleHandle () {
  emits('cancle')
}
function confimHandle () {
  emits('confim')
}

function selectHandle () {
  emits('select')
}

const uvSwipeCellStyle = computed(() => {
  return {
    transform: `translate3d(${transformLength.value}px, 0, 0)`
  }
})
</script>
<script>
export default {
  name: 'UvSwipeCell'
}
</script>

<style lang="scss">
:root {
  --uv-swipe-cell-content-bg-color: #ffffff;
  --uv-swipe-cell-left-right-content-common-color: #ffffff;
  --uv-swipe-cell-left-right-content-common-width: 60px;
  --uv-swipe-cell-left-right-content-common-font-size: 14px;
}
.uv-swipe-cell {
  position: relative;
  overflow: hidden;
  cursor: grab;
  .uv-swipe-cell-wrapper {
    transition-timing-function: cubic-bezier(0.18, 0.89, 0.32, 1);
    transition-property: transform;
    transition-duration: 0.6s;
    .uv-swipe-cell-position {
      position: absolute;
      top: 0;
      display: flex;
      height: 100%;
    }
    .uv-swipe-cell-left {
      left: 0;
      transform: translate3d(-100%, 0, 0);
    }
    .uv-swipe-cell-content {
      position: relative;
      width: 100%;
      background-color: var(--uv-swipe-cell-content-bg-color);
      .uv-swipe-cell-content-default {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 14px 16px;
        font-size: 14px;
        color: #323233;
      }
    }
    .uv-swipe-cell-right {
      right: 0;
      transform: translate3d(100%, 0, 0);
    }
    .left-content,
    .right-content {
      display: flex;
      height: 100%;
      .left-content-item-common,
      .right-content-item-common {
        display: flex;
        justify-content: center;
        align-items: center;
        width: var(--uv-swipe-cell-left-right-content-common-width);
        height: 100%;
        font-size: var(--uv-swipe-cell-left-right-content-common-font-size);
        color: var(--uv-swipe-cell-left-right-content-common-color);
      }
    }
  }
}
</style>
