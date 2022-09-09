<template>
  <div
    class="uv-tab-bar"
    :class="fixed?'uv-tab-bar-fixed':''"
    :style="{
      zIndex:zIndex,
      backgroundColor:bgColor,
      borderTop:border?`1px solid ${borderColor}`:''
    }"
  >
    <slot />
    <!-- <div
      v-if="fixed && placeholder "
      class="uv-tab-bar-placeholder"
    /> -->
  </div>
</template>

<script setup>
import { provide } from 'vue'
const props = defineProps({
  modelValue: {
    type: [Number, String],
    default: 0
  },
  zIndex: {
    type: [Number, String],
    default: 999
  },
  bgColor: {
    type: String,
    default: '#fff'
  },
  activeColor: {
    type: String,
    default: '#1989fa'
  },
  inactiveColor: {
    type: String,
    default: '#7d7e80'
  },
  border: {
    type: Boolean,
    default: true
  },
  borderColor: {
    type: String,
    default: ' #eee'
  },
  fixed: {
    type: Boolean,
    default: true
  },
  placeholder: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['update:modelValue'])

const handleClickItem = (index) => {
  emit('update:modelValue', index)
}

provide('tab-bar', { props, handleClickItem })
</script>
<script>
export default {
  name: 'UvTabBar'
}
</script>

<style>
:root {
  --uv-test: 1px;
}
</style>

<style lang="scss" scoped>
.uv-tab-bar {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 50px;
  .uv-tab-bar-placeholder {
    height: 50px;
  }
}
.uv-tab-bar-fixed {
  position: fixed;
  bottom: 0;
  left: 0;
}
</style>
