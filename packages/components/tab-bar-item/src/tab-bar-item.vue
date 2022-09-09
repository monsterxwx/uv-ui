<template>
  <div
    class="uv-tab-bar-item"
    :style="{color:modelValue===index?activeColor:inactiveColor}"
    @click="handleClickItem(index)"
  >
    <div class="uv-tab-bar-item-icon">
      <slot name="icon">
        <uv-icon
          :size="iconSize"
          :name="iconName"
          :color="modelValue===index?activeColor:inactiveColor"
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
import { inject } from 'vue'
import uvIcon from '../../icon/src/icon.vue'
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

const { props: parentProps } = inject('tab-bar')

const { modelValue, activeColor, inactiveColor } = parentProps

const emit = defineEmits(['click'])

const handleClickItem = () => {
  emit('click')
}
</script>
<script>
export default {
  name: 'UvTabBarItem'
}
</script>

<style>
:root {
  --uv-test: 1px;
}
</style>

<style lang="scss" scoped>
  .uv-tab-bar-item {
    display: flex;
    align-items: center;
    font-size: 12px;
    color: #323233;
    flex-direction: column;
    .uv-tab-bar-item-text {
      margin-top: 5px;
    }
  }
</style>
