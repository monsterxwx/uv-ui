<template>
  <div
    class="uv-switch"
    :class="[modelValue?'uv-switch-on':'',disabled?'uv-switch-disabled':'']"
    :style="uvSwitchStyle"
    @click="changeStatus"
  >
    <div
      class="uv-switch-circle"
      :class="modelValue?' uv-switch-circle-on':''"
    />
  </div>
</template>

<script setup>

import { computed } from 'vue'

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  activeColor: {
    type: String
  },
  inactiveColor: {
    type: String
  },
  size: {
    type: [String, Number]
  }
})
const emit = defineEmits(['update:modelValue'])

function changeStatus () {
  if (props.disabled) return
  emit('update:modelValue', !props.modelValue)
}

const uvSwitchStyle = computed(() => {
  const { size, activeColor, inactiveColor, modelValue } = props
  return {
    fontSize: size + 'px',
    backgroundColor: modelValue ? activeColor : inactiveColor
  }
})
</script>
<script>
export default {
  name: 'UvSwitch'
}
</script>

<style lang="scss">
:root {
  --uv-switch-width: calc(1.8em + 4px);
  --uv-switch-height: calc(1em + 4px);
  --uv-switch-background: #e2e3e7;
  --uv-switch-on-background: #1989fa;
  --uv-switch-transition-time: 0.3s;
  --uv-switch-size: 26px;
  --uv-switch-box-shadow: 0 3px 1px 0 rgb(0 0 0 / 5%);
  --uv-switch-circle-size: 1em;
  --uv-switch-circle-background: #ffffff;
}
.uv-switch {
  position: relative;
  width: var(--uv-switch-width);
  height: var(--uv-switch-height);
  font-size: var(--uv-switch-size);
  border-radius: var(--uv-switch-circle-size);
  background-color: var(--uv-switch-background);
  transition: background-color var(--uv-switch-transition-time);
  box-sizing: content-box;
  .uv-switch-circle {
    position: absolute;
    top: 2px;
    left: 2px;
    width: var(--uv-switch-circle-size);
    height: var(--uv-switch-circle-size);
    font-size: inherit;
    border-radius: 100%;
    background-color: var(--uv-switch-circle-background);
    box-shadow: var(--uv-switch-box-shadow);
    transition: transform var(--uv-switch-transition-time);
  }
  .uv-switch-circle-on {
    transform: translate(calc(var(--uv-switch-width) - var(--uv-switch-circle-size) - 4px));
  }
}
.uv-switch-on {
  background-color: var(--uv-switch-on-background);
}
.uv-switch-disabled {
  cursor: not-allowed;
  opacity: 0.5;
}
</style>
