<template>
  <overlay
    :show="modelValue"
    @click="closePop"
  >
    <div
      :class="uvClass"
      @click.stop="clickEvent"
    >
      <slot />
    </div>
  </overlay>
</template>

<script setup>
import { computed } from 'vue'
import overlay from '../overlay'
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  position: {
    type: String,
    default: 'bottom'
  }
})
const emit = defineEmits(['update:modelValue'])
const uvClass = computed(() => {
  return [
    'uv-popup',
    props.position ? props.position : ''

  ]
})
const closePop = () => {
  emit('update:modelValue', false)
}
const clickEvent = () => {
  emit('update:modelValue', false)
}
</script>
<script>
export default {
  name: 'UvPopup'
}
</script>

<style lang="scss" scoped>
.uv-popup {
  position: relative;
  padding: 10px;
  background-color: #ffffff;
}
.bottom {
  bottom: 0;
  left: 0;
  width: 100%;
}
.top {
  top: 0;
  left: 0;
  width: 100%;
}
.center {
  top: 50%;
  left: 50%;
  min-width: 50px;
  min-height: 50px;
  transform: translate(-50%, -50%);
}
.left {
  top: 0;
  left: 0;
  width: 30%;
  height: 100%;
}
.right {
  top: 0;
  right: 0;
  width: 30%;
  height: 100%;
}
</style>
