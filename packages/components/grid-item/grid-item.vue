<template>
  <div
    class="uv-grid-item "
    ref="gridItemRef"
    :style="rootStyle"
    :class="rootClass"
    @click="clickEvent"
  >
    <div
      class="uv-grid-item-content"
      :style="contentStyle"
      :class="contentClass"
    >
      <slot>
        <div>
          <slot name="icon">
            <uv-icon
              :size="iconSize"
              :name="iconName"
              :color="iconColor"
              v-bind="iconProps"
            />
          </slot>
        </div>
        <div class="uv-grid-item-content-text">
          <slot name="text">
            {{ text }}
          </slot>
        </div>
      </slot>
    </div>
  </div>
</template>

<script setup>

import { reactive, computed, ref } from 'vue'
import { useParent } from '../../hooks/index'
import uvIcon from '../icon'

defineProps({
  iconSize: {
    type: [String, Number],
    default: 28
  },
  iconName: {
    type: String
  },
  iconColor: {
    type: String
  },
  iconProps: {
    type: Object
  },
  text: {
    type: String
  }
})

const emit = defineEmits(['click'])

const gridItemRef = ref(null)
const context = reactive({
  $el: gridItemRef
})
const { props: parentProps, childrenNum, index } = useParent('grid', context)

const rootStyle = computed(() => {
  const { columnNum, gutter } = parentProps
  const percent = `${100 / +columnNum}%`
  const style = {
    flexBasis: percent
  }
  if (gutter) {
    style.paddingRight = gutter + 'px'
    if (childrenNum.value >= columnNum && index.value >= columnNum) {
      style.marginTop = gutter + 'px'
    }
  }

  return style
})

const rootClass = computed(() => {
  const { border, clickable } = parentProps
  const classList = [
    border ? 'uv-grid-item-border' : '',
    clickable ? 'uv-grid-item-clickable' : ''
  ]
  return classList
})

const contentStyle = computed(() => {
  const { bgColor, color } = parentProps
  const style = {
    backgroundColor: bgColor,
    color
  }
  return style
})
const contentClass = computed(() => {
  const { direction, reverse } = parentProps
  const classList = [
    direction === 'column' ? 'uv-grid-item-content-direction-column' : 'uv-grid-item-content-direction-row',
    reverse ? `uv-grid-item-content-direction-${direction}-reverse` : ''
  ]
  return classList
})

const clickEvent = () => {
  emit('click')
}
</script>
<script>
export default {
  name: 'UvGridItem'
}
</script>

<style lang="scss">
:root {
  --uv-grid-item-content-padding: 16px 8px;
  --uv-grid-item-content-active-bg-color: #f2f3f5;
  --uv-grid-item-content-text-white-space: nowrap;
  --uv-grid-item-content-text-font-size: 12px;
  --uv-grid-item-content-text-color: #323233;
  --uv-grid-item-content-text-margin: 8px;
  --uv-grid-item-border: 1px solid #f7f8f9;
}
.uv-grid-item {
  .uv-grid-item-content {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: var(--uv-grid-item-content-padding);
    width: 100%;
    .uv-grid-item-content-text {
      font-size: var(--uv-grid-item-content-text-font-size);
      white-space: var(--uv-grid-item-content-text-white-space);
      color: var(--uv-grid-item-content-text-color);
    }
  }
  .uv-grid-item-content-direction-column {
    flex-direction: column;
    .uv-grid-item-content-text {
      margin-top: var(--uv-grid-item-content-text-margin);
    }
  }
  .uv-grid-item-content-direction-column-reverse {
    flex-direction: column-reverse;
    .uv-grid-item-content-text {
      margin: 0;
      margin-bottom: var(--uv-grid-item-content-text-margin);
    }
  }
  .uv-grid-item-content-direction-row {
    flex-direction: row;
    .uv-grid-item-content-text {
      margin-left: var(--uv-grid-item-content-text-margin);
    }
  }
  .uv-grid-item-content-direction-row-reverse {
    flex-direction: row-reverse;
    .uv-grid-item-content-text {
      margin: 0;
      margin-right: var(--uv-grid-item-content-text-margin);
    }
  }
}
.uv-grid-item-clickable {
  .uv-grid-item-content {
    &:active {
      background-color: var(--uv-grid-item-content-active-bg-color) !important;
    }
  }
}
.uv-grid-item-border {
  border-right: var(--uv-grid-item-border);
  border-bottom: var(--uv-grid-item-border);
}
</style>
