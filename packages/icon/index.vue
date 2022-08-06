<template>
  <div class="uv-icon">
    <svg
      class="icon"
      :style="iconColor"
      aria-hidden="true"
    >
      <use :xlink:href="iconName" />
    </svg>
    <div
      v-if="dot"
      class="uv-info"
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
    type: String,
    default: '20'
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
    'uv-dot': props.dot && !props.badge
  }
})

</script>
<script>
export default {
  name: 'UvIcon'
}
</script>

<style lang="scss" scoped>
.uv-icon {
  position: relative;
  display: inline-block;
  .icon {
    overflow: hidden;
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentcolor;
  }
  .uv-info {
    position: absolute;
    top: 4px;
    right: 0;
    padding: 0 3px;
    min-width: 16px;
    font-size: 12px;
    font-weight: 500;
    border: 1px solid #ffffff;
    border-radius: 16px;
    text-align: center;
    color: #ffffff;
    background-color: #ee0a24;
    box-sizing: border-box;
    line-height: 1.2;
    transform: translate(50%, -50%);
  }
  .uv-dot {
    width: 8px;
    min-width: 0;
    height: 8px;
    border-radius: 100%;
    background-color: #ee0a24;
  }
}

</style>
