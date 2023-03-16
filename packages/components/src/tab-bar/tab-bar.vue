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

import { useChildren } from '@uv-ui/hooks'
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
  activeBgColor: {
    type: String
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
    default: '#eee'
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

const emit = defineEmits(['update:modelValue', 'change'])

const acitveItemUpdate = (index) => {
  emit('update:modelValue', index)
  emit('change', index)
  fields.forEach((item, idx) => {
    if (idx !== index) {
      item.isActive = false
    }
  })
}

const { fields } = useChildren('tab-bar', { props, acitveItemUpdate })

</script>
<script>
export default {
  name: 'UvTabBar'
}
</script>
<style lang="scss">
:root {
  --uv-tab-bar-height: 50px;
}
.uv-tab-bar {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: var(--uv-tab-bar-height);
  .uv-tab-bar-placeholder {
    height: var(--uv-tab-bar-height);
  }
}
.uv-tab-bar-fixed {
  position: fixed;
  bottom: 0;
  left: 0;
}
</style>
