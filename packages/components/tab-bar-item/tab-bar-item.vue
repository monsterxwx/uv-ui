<template>
  <div
    class="uv-tab-bar-item"
    ref="tabBarItemRef"
    :style="{color:context.isActive?activeColor:inactiveColor,backgroundColor:context.isActive?activeBgColor:''}"
    @click="handleClickItem"
  >
    <div class="uv-tab-bar-item-icon">
      <slot name="icon">
        <uv-icon
          :size="iconSize"
          :name="iconName"
          :color="context.isActive?activeColor:inactiveColor"
          v-bind="iconProps"
        />
      </slot>
    </div>

    <div class="uv-tab-bar-item-text">
      <slot name="text">
        {{ text }}
      </slot>
    </div>
  </div>
</template>

<script setup>

import { reactive, onMounted, ref } from 'vue'
import { useParent } from '../../hooks/index'
import uvIcon from '../icon'
defineProps({
  iconSize: {
    type: [Number, String]
  },
  iconName: {
    type: String
  },
  iconProps: {
    type: Object
  },
  text: {
    type: String
  }
})

const tabBarItemRef = ref(null)

const context = reactive({
  $el: tabBarItemRef,
  isActive: false
})

const { props: parentProps, acitveItemUpdate, index } = useParent('tab-bar', context)

onMounted(() => {
  if (parentProps && parentProps.modelValue === index.value) {
    context.isActive = true
  }
})

const { activeColor, inactiveColor, activeBgColor } = parentProps

const handleClickItem = () => {
  if (!context.isActive) {
    context.isActive = true
  }
  acitveItemUpdate(index.value)
}
</script>
<script>
export default {
  name: 'UvTabBarItem'
}
</script>

<style lang="scss">
:root {
  --uv-tab-bar-item-font-size: 12px;
  --uv-tab-bar-item-text-margin-top: 5px;
}
.uv-tab-bar-item {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: var(--uv-tab-bar-item-font-size);
  flex: 1;
  flex-direction: column;
  .uv-tab-bar-item-text {
    margin-top: var(--uv-tab-bar-item-text-margin-top);
  }
}
</style>
