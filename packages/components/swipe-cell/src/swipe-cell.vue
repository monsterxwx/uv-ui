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
        v-if="left"
      >
        <slot name="left">
          <div class="left-content">
            <div class="left-cancle left-content-item-common">
              取消
            </div>
            <div class="left-confim left-content-item-common">
              确定
            </div>
          </div>
        </slot>
      </div>

      <div class="uv-swipe-cell-content">
        <slot>
          <div>标题</div>
          <div>内容</div>
        </slot>
      </div>
      <div
        class="uv-swipe-cell-right uv-swipe-cell-position"
        v-if="right"
      >
        <slot name="right">
          <div class="right-content">
            <div class="right-cancle right-content-item-common">
              取消
            </div>
            <div class="right-confim right-content-item-common">
              确定
            </div>
          </div>
        </slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useTouch } from '../../../hooks/useTouch'

const props = defineProps({
  left: {
    type: Boolean,
    default: false
  },
  right: {
    type: Boolean,
    default: true
  }
})
const transformLength = ref(0)
const touch = useTouch()
function touchstart (event) {
  touch.start(event)
}

function touchmove (event) {
  const { deltaX } = touch
  touch.move(event)
  if ((deltaX.value > 0 && props.left) || (deltaX.value < 0 && props.right)) {
    if (Math.abs(deltaX.value) < 50) {
      transformLength.value = deltaX.value
    } else {
      transformLength.value = deltaX.value > 0 ? 120 : -120
    }
  }
}

function touchend (event) {
  const { deltaX } = touch
  if (Math.abs(deltaX.value) < 50) {
    transformLength.value = 0
  }
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

<style lang="scss" scoped>
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
      align-items: center;
      height: 100%;
    }
    .uv-swipe-cell-left {
      left: 0;
      transform: translate3d(-100%, 0, 0);
    }
    .uv-swipe-cell-content {
      position: relative;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      overflow: hidden;
      padding: 10px 16px;
      width: 100%;
      font-size: 14px;
      color: #323233;
      background-color: #ffffff;
      line-height: 24px;
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
        width: 60px;
        height: 100%;
        font-size: 14px;
        color: #ffffff;
      }
      .left-confim,
      .right-confim {
        background-color: #1989fa;
      }
      .left-cancle,
      .right-cancle {
        background-color: #ee0a24;
      }
    }
  }
}
</style>
