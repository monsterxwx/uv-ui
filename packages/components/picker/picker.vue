<template>
  <uvPopup
    v-model="showPop"
    position="bottom"
    v-bind="$attrs"
  >
    <div class="uv-picker">
      <div class="uv-picker-title">
        <div
          class="uv-picker-title-left"
          @click="cancleHandle"
        >
          {{ leftName }}
        </div>
        <slot name="title">
          <div class="uv-picker-title-center">
            {{ title }}
          </div>
        </slot>
        <div
          class="uv-picker-title-right"
          @click="confimHandle"
        >
          {{ rightName }}
        </div>
      </div>
      <div
        class="uv-picker-content"
        @touchstart="touchstart"
        @touchmove="touchmove"
        @touchend="touchend"
      >
        <div
          class="uv-picker-content-wrapper"
        />
        <ul
          class="uv-picker-content-box"
          ref="pickerBoxRef"
          :style="getOffsetY"
        >
          <li
            class="uv-picker-content-item"
            v-for="(item, idx) in list"
            :key="keyName || idx"
            :style="pickerItemStyle(Number(idx))"
          >
            {{ item[keyName] || item }}
          </li>
        </ul>
      </div>
    </div>
  </uvPopup>
</template>

<script setup>

import { ref, watch, computed, inject } from 'vue'
import uvPopup from '../popup'
import { throttle } from 'lodash-es'
const props = defineProps({
  show: {
    type: Boolean,
    default: false
  },
  modelValue: {
    type: String,
    default: ''
  },
  title: {
    type: String
  },
  leftName: {
    type: String,
    default: '取消'
  },
  rightName: {
    type: String,
    default: '确定'
  },
  list: {
    type: Array,
    required: true
  },
  keyName: {
    type: String
  }
})
const emit = defineEmits(['update:show', 'update:modelValue', 'change', 'cancle', 'confim'])

const { props: parentProps, validateBlurOrChange } = inject('form-item', {})

const showPop = ref(false)
watch(() => props.show, (newValue) => {
  showPop.value = newValue
})
watch(() => showPop.value, (newValue) => {
  emit('update:show', newValue)
})

const offY = ref(null)

const getOffsetY = computed(() => {
  if (typeof offY.value === 'number') {
    return {
      transform: `translate(-50%, ${offY.value}px)`
    }
  } else {
    return {
      transform: 'translate(-50%, -18px)'
    }
  }
})

const activeIndex = ref(0)
const colors = ['gray', '#ccc', '#ddd', '#eee']
const scales = [0.96, 0.9, 0.88, 0.84]

function pickerItemStyle (idx) {
  let color = '#000'; let scale = 1; const len = colors.length - 1
  if (idx > activeIndex.value) {
    const _idx = idx - activeIndex.value > len ? len : idx - activeIndex.value - 1
    color = colors[_idx]
    scale = scales[_idx]
  } else if (idx < activeIndex.value) {
    const _idx = activeIndex.value - idx > len ? len : activeIndex.value - idx - 1
    color = colors[_idx]
    scale = scales[_idx]
  }
  return { color, transform: `scale(${scale})` }
}

function getCurrentValue () {
  return props.keyName ? props.list[activeIndex.value][props.keyName] : props.list[activeIndex.value]
}

let startY = null
function touchstart (event) {
  const transformY = offY.value || -18
  startY = event.touches[0].clientY - transformY
}
function touchmove (event) {
  move(event)
}

function touchend () {
  // 重置当前位置
  setTimeout(() => {
    offY.value = -activeIndex.value * 36 - 18
  }, 100)
}

const pickerBoxRef = ref(null)
// 移动的实现
const move = throttle((e) => {
  offY.value = e.touches[0].clientY - startY
  if (offY.value > 36) {
    offY.value = 36
  } else if (offY.value < -pickerBoxRef.value.offsetHeight - 36) {
    offY.value = -pickerBoxRef.value.offsetHeight - 36
  }
  // 计算当前位置的就近下标
  activeIndex.value = Math.abs(Math.ceil(offY.value / 36))
  // 判断顶部和底部的一个界限，然后做一个位置的重置
  if (activeIndex.value <= 0 || offY.value > 0) {
    activeIndex.value = 0
  } else if (activeIndex.value > props.list.length - 1 || offY.value < -pickerBoxRef.value.offsetHeight - 18) {
    activeIndex.value = props.list.length - 1
  }

  emit('change', getCurrentValue())
})

function cancleHandle () {
  emit('change')
  showPop.value = false
}

function confimHandle () {
  emit('confim')
  emit('update:modelValue', getCurrentValue())
  if (parentProps) {
    validateBlurOrChange('blur')
  }
  showPop.value = false
}

</script>
<script>
export default {
  name: 'UvPicker'
}
</script>

<style lang="scss">
:root {
  --uv-picker-title-btn-font-size: 14px;
  --uv-picker-title-font-size: 16px;
  --uv-picker-title-font-weight: 700;
  --uv-picker-title-color: #323233;
  --uv-picker-title-padding: 2px 0 12px;
  --uv-picker-title-left-text-color: #969799;
  --uv-picker-title-right-text-color: #576b95;
  --uv-picker-content-height: 230px;
  --uv-picker-content-wrapper-border-top-and-bottom: 1px solid #f7f8f9;
  --uv-picker-content-wrapper-box-shadow: 0 0 5px #f7f8f9;
  --uv-picker-content-item-font-size: 16px;
}
.uv-picker {
  .uv-picker-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--uv-picker-title-padding);
    font-size: var(--uv-picker-title-btn-font-size);
    .uv-picker-title-left {
      color: var(--uv-picker-title-left-text-color);
    }
    .uv-picker-title-center {
      font-size: var(--uv-picker-title-font-size);
      font-weight: var(--uv-picker-title-font-weight);
      color: var(--uv-picker-title-color);
    }
    .uv-picker-title-right {
      color: var(--uv-picker-title-right-text-color);
    }
  }
  .uv-picker-content {
    position: relative;
    display: flex;
    overflow: hidden;
    height: var(--uv-picker-content-height);
    cursor: grab;
    .uv-picker-content-wrapper {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 100%;
      height: 36px;
      border-top: var(--uv-picker-content-wrapper-border-top-and-bottom);
      border-bottom: var(--uv-picker-content-wrapper-border-top-and-bottom);
      box-shadow: var(--uv-picker-content-wrapper-box-shadow);
    }
    .uv-picker-content-box {
      position: absolute;
      top: 50%;
      left: 50%;
      margin: 0;
      padding: 0;
      width: 100%;
      list-style: none;
      transition: all 0.2s;
      flex: 1;
      transition-timing-function: cubic-bezier(0.23, 1, 0.68, 1);
      .uv-picker-content-item {
        height: 36px;
        font-size: var(--uv-picker-content-item-font-size);
        text-align: center;
        transition: color 0.5s;
        line-height: 36px;
      }
    }
  }
}
</style>
