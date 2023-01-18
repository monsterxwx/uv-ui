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
