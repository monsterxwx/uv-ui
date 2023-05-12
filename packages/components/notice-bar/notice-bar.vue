<template>
  <div
    class="uv-notice-bar"
    :style="{backgroundColor:bgColor}"
    @click="handleClick"
  >
    <div
      class="uv-notice-bar-icon"
      v-if="showLeftIcon"
    >
      <slot name="icon">
        <uv-icon
          size="20"
          color="#ed6a0c"
          name="notice"
          v-bind="iconProps"
        />
      </slot>
    </div>
    <div
      class="uv-notice-bar-content"

      ref="contentRef"
    >
      <div
        class="uv-notice-bar-content-text"
        :class="!scrollable?'ellipsis':''"
        :style="{
          color:color,
          transform: `translateX(${state.translateX}px)`,
          transitionDuration:state.duration+'s'
        }"
        ref="contentTextRef"
        @transitionend="onTransitionEnd"
      >
        <slot>
          {{ text }}
        </slot>
      </div>
    </div>
    <div
      v-if="mode"
      class="uv-notice-bar-content-right"
    >
      <uv-icon
        size="18"
        name="close"
        color="#ed6a0c"
        v-bind="rightIconProps"
        v-if="mode==='close'"
        @click="handleClose"
      />
      <uv-icon
        size="18"
        name="arrow-right"
        color="#ed6a0c"
        v-bind="rightIconProps"
        v-if="mode==='link'"
      />
    </div>
  </div>
</template>

<script setup>

import { onBeforeUnmount, onMounted, reactive, ref } from 'vue'
import uvIcon from '../icon'

const props = defineProps({
  speed: { // 速度
    type: [String, Number],
    default: 60
  },
  delay: { // 延迟时间
    type: [String, Number],
    default: 1
  },
  scrollable: { // 开启滚动
    type: Boolean,
    default: true
  },
  text: {
    type: String
  },
  color: {
    type: String,
    default: '#ed6a0c'
  },
  bgColor: {
    type: String,
    default: '#fffbe8'
  },
  showLeftIcon: {
    type: Boolean,
    default: true
  },
  iconProps: {
    type: Object
  },
  mode: { // 通知栏模式，可选close和link
    type: String
  },
  rightIconProps: {
    type: Object
  }
})

const emit = defineEmits(['click', 'close', 'replay'])

const contentRef = ref(null)
const contentTextRef = ref(null)
const state = reactive({
  contentWidth: 0, // 内容宽度
  contentTextWidth: 0, // 内部文字宽度
  translateX: 0, // 偏移距离
  duration: 0, // 动画持续时间
  autoScrollTimer: null, // 定时器
  firstIn: true,
  ms: props.delay ? props.delay * 1000 : 0
})

onMounted(() => {
  state.contentWidth = contentRef.value.offsetWidth
  state.contentTextWidth = contentTextRef.value.offsetWidth
  reset()
})

const onTransitionEnd = () => {
  emit('replay')
  state.translateX = state.contentWidth
  state.duration = 0
  clearTimeout(state.autoScrollTimer)
  reset()
}

const reset = () => {
  if (!props.scrollable || state.contentTextWidth < state.contentWidth) return
  state.autoScrollTimer = setTimeout(() => {
    state.duration = state.firstIn ? state.contentTextWidth / +props.speed : (state.contentWidth + state.contentTextWidth) / +props.speed
    state.translateX = -state.contentTextWidth
    state.firstIn = false
  }, state.ms)
}

const handleClick = () => {
  emit('click')
}

const handleClose = () => {
  emit('close')
}

onBeforeUnmount(() => {
  clearTimeout(state.autoScrollTimer)
})

defineExpose({
  reset
})
</script>
<script>
export default {
  name: 'UvNoticeBar'
}
</script>

<style lang="scss">
:root {
  --uv-notice-bar-padding: 0 16px;
  --uv-notice-bar-height: 40px;
  --uv-notice-bar-line-height: 24px;
  --uv-notice-bar-icon-padding: 10px;
  --uv-notice-bar-content-text-font-size: 14px;
}
.uv-notice-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--uv-notice-bar-padding);
  height: var(--uv-notice-bar-height);
  line-height: var(--uv-notice-bar-line-height);
  .uv-notice-bar-icon {
    padding-right: var(--uv-notice-bar-icon-padding);
  }
  .uv-notice-bar-content-right {
    padding-left: var(--uv-notice-bar-icon-padding);
  }
  .uv-notice-bar-content {
    position: relative;
    display: flex;
    align-items: center;
    overflow: hidden;
    height: 100%;
    flex: 1;
    .uv-notice-bar-content-text {
      position: absolute;
      font-size: var(--uv-notice-bar-content-text-font-size);
      white-space: nowrap;
      transition-timing-function: linear;
    }
    .ellipsis {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
</style>
