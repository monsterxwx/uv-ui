<template>
  <div
    class="uv-floating-panel"
    :style="rootStyle"
    @touchstart="onTouchstart"
    @touchmove="onTouchmove"
    @touchend="onTouchend"
  >
    <div
      class="uv-floating-panel-header"
    >
      <div class="uv-floating-panel-header-bar" />
    </div>
    <div class="uv-floating-panel-content" ref="contentRef">
      <slot />
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useTouch } from '../../hooks'
import { addUnit } from '../../utils'

const props = defineProps({
  height: {
    type: Number,
    default: 100
  },
  maxHeight: {
    type: Number,
    default: 384
  },
  duration: {
    type: Number,
    default: 0.2
  },
  contentDraggable: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['heightChange'])

const touch = useTouch()

const dragging = ref(false)
const height = ref(props.height)
const contentRef = ref(null)

const rootStyle = computed(() => {
  return {
    height: addUnit(props.maxHeight),
    transform: `translateY(calc(100% + ${addUnit(-height.value)}))`,
    transition: !dragging.value ? `transform ${props.duration}s` : 'none'
  }
})

const DAMP = 0.2
const ease = (moveY) => {
  const absDistance = Math.abs(moveY)
  const { height: min, maxHeight: max } = props

  if (absDistance > max) {
    return -(max + (absDistance - max) * DAMP)
  }

  if (absDistance < min) {
    return -(min - (min - absDistance) * DAMP)
  }

  return moveY
}

let startY = ''

const onTouchstart = (e) => {
  touch.start(e)
  dragging.value = true
  startY = -height.value
}

const onTouchmove = (e) => {
  touch.move(e)

  const target = e.target
  if (contentRef.value === target || contentRef.value?.contains(target)) {
    if (!props.contentDraggable) return

    if (-startY < props.maxHeight) {
      if (e.cancelable) e.preventDefault()
      e.stopPropagation()
    } else if (
      !(contentRef.value.scrollTop <= 0 && touch.deltaY.value > 0)
    ) {
      return
    }
  }

  const moveY = touch.deltaY.value + startY
  height.value = -ease(moveY)
}

const onTouchend = () => {
  dragging.value = false
  height.value = height.value > props.maxHeight / 2 ? props.maxHeight : props.height

  if (height.value !== -startY) {
    emit('heightChange', { height: height.value })
  }
}

</script>
<script>
export default {
  name: 'UvFloatingPanel'
}
</script>

<style lang="scss">
:root {
  --uv-floating-panel-border-radius: 16px 16px 0 0;
  --uv-floating-panel-default-height: 100px;
  --uv-floating-panel-header-height: 30px;
  --uv-floating-panel-z-index: 999;
  --uv-floating-panel-bg-color: #ffffff;
  --uv-floating-panel-header-bar-bg-color: #c8c9cc;
  --uv-floating-panel-header-bar-width: 20px;
  --uv-floating-panel-header-bar-height: 3px;
  --uv-floating-panel-header-border-radius: 4px;
}
.uv-floating-panel {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: var(--uv-floating-panel-z-index);
  display: flex;
  width: 100vw;
  border-radius: var(--uv-floating-panel-border-radius);
  background: var(--uv-floating-panel-bg-color);
  flex-direction: column;
  touch-action: none;
  &::after {
    position: absolute;
    bottom: -100vh;
    display: block;
    width: 100vw;
    height: 100vh;
    background-color: inherit;
    content: "";
  }
  .uv-floating-panel-header {
    display: flex;
    justify-content: center;
    align-items: center;
    height: var(--uv-floating-panel-header-height);
    cursor: grab;
    user-select: none;
    .uv-floating-panel-header-bar {
      width: var(--uv-floating-panel-header-bar-width);
      height: var(--uv-floating-panel-header-bar-height);
      border-radius: var(--uv-floating-panel-header-border-radius);
      background-color: var(--uv-floating-panel-header-bar-bg-color);
    }
  }
  .uv-floating-panel-content {
    overflow-y: auto;
    min-height: 0;
    flex: 1 0;
    background-color: var(--uv-floating-panel-bg-color);
  }
}

</style>
