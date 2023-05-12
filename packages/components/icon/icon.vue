<template>
  <div class="uv-icon">
    <svg
      class="uv-icon-svg"
      :style="iconColor"
      aria-hidden="true"
    >
      <use :xlink:href="iconName" />
    </svg>
    <div
      v-if="dot"
      class="uv-icon-info"
      :class="styleDot"
    >
      {{ badge }}
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

import './iconfont'
const props = defineProps({
  name: {
    type: String
  },
  color: {
    type: String
  },
  size: {
    type: [String, Number],
    default: '14'
  },
  dot: {
    type: Boolean,
    default: false
  },
  badge: {
    type: [String, Number]
  }
})
const iconName = computed(() => {
  return `#uv-${props.name}`
})
const iconColor = computed(() => {
  return {
    color: props.color,
    fontSize: props.size + 'px'
  }
})
const styleDot = computed(() => {
  return {
    'uv-icon-dot': props.dot && !props.badge
  }
})

</script>
<script>
export default {
  name: 'UvIcon'
}
</script>

<style lang="scss">
:root {
  --uv-icon-info-top: 4px;
  --uv-icon-info-right: 0;
  --uv-icon-info-padding: 0 3px;
  --uv-icon-info-min-width: 16px;
  --uv-icon-info-font-size: 12px;
  --uv-icon-info-font-weight: 500;
  --uv-icon-info-border: 1px solid #ffffff;
  --uv-icon-info-border-radius: 16px;
  --uv-icon-info-color: #ffffff;
  --uv-icon-info-bg-color: #ee0a24;
  --uv-icon-dot-size: 8px;
  --uv-icon-dot-bg-color: #ee0a24;
}
.uv-icon {
  position: relative;
  display: inline-block;
  .uv-icon-svg {
    overflow: hidden;
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentcolor;
  }
  .uv-icon-info {
    position: absolute;
    top: var(--uv-icon-info-top);
    right: var(-uv-icon-info-right);
    padding: var(--uv-icon-info-padding);
    min-width: var(--uv-icon-info-min-width);
    font-size: var(--uv-icon-info-font-size);
    font-weight: var(--uv-icon-info-font-weight);
    border: var(--uv-icon-info-border);
    border-radius: var(--uv-icon-info-border-radius);
    text-align: center;
    color: var(--uv-icon-info-color);
    background-color: var(--uv-icon-info-bg-color);
    box-sizing: border-box;
    line-height: 1.2;
    transform: translate(50%, -50%);
  }
  .uv-icon-dot {
    width: var(--uv-icon-dot-size);
    min-width: 0;
    height: var(--uv-icon-dot-size);
    border-radius: 100%;
    background-color: var(--uv-icon-dot-bg-color);
  }
}
</style>
