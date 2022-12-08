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
import './index.scss'
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

