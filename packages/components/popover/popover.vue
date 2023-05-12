<template>
  <div>
    <span
      style="display: inline-block;"
      ref="contentRef"
    >
      <slot name="reference" />
    </span>
    <Transition name="popover">
      <div
        class="uv-popover"
        ref="popoverRef"
        style=""
        v-show="modelValue"
      >
        <div
          :class="[
            showPositon==='bottom'?'uv-popover-arrow-top':'uv-popover-arrow-bottom',
            showArrowPostion==='left'?'uv-popover-arrow-left':'uv-popover-arrow-right'
          ]"
        />
        <div class="uv-popover-content">
          <slot>
            <div
              class="uv-popover-content-item"
              :class="item.disabled?'uv-popover-content-item-disabled':''"
              v-for="(item,index) in list"
              :key="keyName ? item[keyName] : index"
              @click="selectItemClick(item)"
            >
              <div
                class="uv-popover-content-item-text"
              >
                {{ keyName ? item[keyName] : index }}
              </div>
            </div>
          </slot>
        </div>
      </div>
    </Transition>
    <uv-overlay
      :show="modelValue"
      :overlay="false"
      @click="closePopover"
    />
  </div>
</template>

<script setup>

import { ref, watch } from 'vue'
import uvOverlay from '../overlay'

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  list: {
    type: Array
  },
  keyName: {
    type: String
  },
  closeOnClickAction: {
    type: Boolean,
    default: true
  },
  closeOnClickOutside: {
    type: Boolean,
    default: true
  }
})

watch(() => props.modelValue, (newValue) => {
  showPopover()
})

const contentRef = ref(null)
const popoverRef = ref(null)
const showPositon = ref('bottom')
const showArrowPostion = ref('left')

const emit = defineEmits(['update:modelValue', 'change'])

const closePopover = () => {
  if (props.closeOnClickOutside) {
    emit('update:modelValue', false)
  }
}

const showPopover = () => {
  const { top, left, bottom, right } = contentRef.value.children[0].getBoundingClientRect()
  // 箭头位置，左or右
  if (left > ((screen.availWidth) / 2)) {
    showArrowPostion.value = 'right'
    // const left = Number()
    popoverRef.value.style.right = (screen.availWidth - right) + 'px'
  } else {
    showArrowPostion.value = 'left'
    popoverRef.value.style.left = left + 'px'
  }
  // 弹框位置，上or下
  if (top > ((screen.availHeight) / 2)) {
    showPositon.value = 'top'
    popoverRef.value.style.bottom = Number(screen.availHeight - top + 10) + 'px'
  } else {
    showPositon.value = 'bottom'
    popoverRef.value.style.top = Number(bottom + 10) + 'px'
  }
}

const selectItemClick = (item) => {
  if (item.disabled) return
  emit('change', item)
  if (props.closeOnClickAction) {
    emit('update:modelValue', false)
  }
}
</script>
<script>
export default {
  name: 'UvPopover'
}
</script>
<style lang="scss">
:root {
  --uv-popover-z-index: 2000;
  --uv-popover-color: #323233;
  --uv-popover-bg-color: #ffffff;
  --uv-popover-content-box-shadow: 0 2px 12px rgb(50 50 51 / 12%);
  --uv-popover-content-border-radius: 8px;
  --uv-popover-content-item-padding: 0 16px;
  --uv-popover-content-item-width: 128px;
  --uv-popover-content-item-height: 44px;
  --uv-popover-content-item-active-bg-color: #f2f3f5;
  --uv-popover-transition-time: 0.15s;
  --uv-popover-arrow-postion-distance: 25px;
  --uv-popover-content-item-text-border-bottom: 1px solid #f7f8f9;
}
.uv-popover {
  position: absolute;
  z-index: var(--uv-popover-z-index);
  display: inline-block;
  color: var(--uv-popover-color);
  transition: all var(--uv-popover-transition-time);
  .uv-popover-arrow-top {
    position: absolute;
    top: -12px;
    width: 0;
    height: 0;
    line-height: 0;
    border-top: 6px solid transparent;
    border-right: 6px solid transparent;
    border-bottom: 6px solid var(--uv-popover-bg-color);
    border-left: 6px solid transparent;
  }
  .uv-popover-arrow-bottom {
    position: absolute;
    bottom: -12px;
    width: 0;
    height: 0;
    line-height: 0;
    border-top: 6px solid var(--uv-popover-bg-color);
    border-right: 6px solid transparent;
    border-bottom: 6px solid transparent;
    border-left: 6px solid transparent;
  }
  .uv-popover-arrow-left {
    left: var(--uv-popover-arrow-postion-distance);
  }
  .uv-popover-arrow-right {
    right: var(--uv-popover-arrow-postion-distance);
  }
  .uv-popover-content {
    overflow: hidden;
    border-radius: var(--uv-popover-content-border-radius);
    background: var(--uv-popover-bg-color);
    box-shadow: var(--uv-popover-content-box-shadow);
    .uv-popover-content-item {
      padding: var(--uv-popover-content-item-padding);
      width: var(--uv-popover-content-item-width);
      height: var(--uv-popover-content-item-height);
      &:active {
        background-color: var(--uv-popover-content-item-active-bg-color);
      }
      .uv-popover-content-item-text {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        flex: 1;
        border-bottom: var(--uv-popover-content-item-text-border-bottom);
      }
      &:last-child {
        .uv-popover-content-item-text {
          border-bottom: none;
        }
      }
    }
    .uv-popover-content-item-disabled {
      color: #c8c9cc;
      &:active {
        background-color: initial;
      }
    }
  }
}
.popover-enter-active {
  transition-timing-function: ease-out;
}
.popover-leave-active {
  transition-timing-function: ease-in;
}
.popover-enter-from,
.popover-leave-to {
  transform: scale(0.8);
  opacity: 0;

  // transform-origin: 0 0;
}

</style>
