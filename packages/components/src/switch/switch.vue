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

