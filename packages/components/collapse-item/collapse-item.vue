<template>
  <div
    class="uv-collapse-item"
  >
    <div
      class="collapse-item-title"
      :class="isActive?'collapse-item-bottom-line':''"
      @click="handleItemClick"
    >
      <div :class="disabled?'collapse-item-title-disabled':''">
        <slot name="title">
          {{ title }}
        </slot>
      </div>
      <div class="collapse-item-right">
        <div>
          <slot name="right" />
        </div>
        <div
          class="collapse-item-arrow"
          :class="isActive?'collapse':''"
        >
          <uv-icon
            size="16"
            :color="disabled?'#c8c9cc':'#969799'"
            name="arrow-down"
          />
        </div>
      </div>
    </div>
    <Transition
      name="collapse"
      @enter="onEnter"
      @after-enter="onAfterEnter"
      @leave="onLeave"
      @after-leave="onAfterLeave"
    >
      <div
        v-show="isActive"
        class="collapse-item-content-wrapper"
      >
        <div

          class="collapse-item-content"
        >
          <slot />
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>

import { computed, inject } from 'vue'
import uvIcon from '../icon'

const props = defineProps({
  title: {
    type: String
  },
  name: {
    type: String
  },
  disabled: {
    type: Boolean,
    default: false
  }
})

const collapse = inject('collapse')

const isActive = computed(() => {
  return collapse.activeNames.value.indexOf(props.name) > -1
})

const handleItemClick = () => {
  if (props.disabled) return
  collapse.handleItemClick(props.name)
}

// 动画
const onEnter = (el) => {
  el.style.height = 'auto'
  const endHeight = window.getComputedStyle(el).height
  el.style.height = '0px'
  // eslint-disable-next-line no-unused-expressions
  el.offsetHeight // force repaint
  el.style.height = endHeight
}
const onAfterEnter = (el) => {
  el.style.height = null
}
const onLeave = (el) => {
  el.style.height = window.getComputedStyle(el).height
  // eslint-disable-next-line no-unused-expressions
  el.offsetHeight // force repaint
  el.style.height = '0px'
}
const onAfterLeave = (el) => {
  el.style.height = null
}
</script>
<script>
export default {
  name: 'UvCollapseItem'
}
</script>
<style lang="scss">
:root {
  --uv-collapse-item-border-bottom: 1px solid #f5f6f7;
  --uv-collapse-item-font-size: 14px;
  --uv-collapse-item-title-padding: 10px 0;
  --uv-collapse-item-content-padding: 12px 0;
  --uv-collapse-item-bottom-line-border-bottom: 1px solid #f5f6f7;
  --uv-collapse-item-transition-time: 0.3s;
}
.uv-collapse-item {
  font-size: var(--uv-collapse-item-font-size);
  border-bottom: var(--uv-collapse-item-border-bottom);
  .collapse-item-title {
    display: flex;
    justify-content: space-between;
    padding: var(--uv-collapse-item-title-padding);
    .collapse-item-right {
      display: flex;
      align-items: center;
      .collapse-item-arrow {
        margin-left: 10px;
        transition: all var(--uv-collapse-item-transition-time);
      }
      .collapse {
        transform: rotate(-180deg);
      }
    }
  }
  .collapse-item-title-disabled {
    color: #c8c9cc;
  }
  .collapse-item-bottom-line {
    border-bottom: var(--uv-collapse-item-bottom-line-border-bottom);
  }
  .collapse-item-content-wrapper {
    overflow: hidden;
    transition: height var(--uv-collapse-item-transition-time) ease-in-out;
    .collapse-item-content {
      padding: var(--uv-collapse-item-content-padding);
    }
  }
}
</style>
