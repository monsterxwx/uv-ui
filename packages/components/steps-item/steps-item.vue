<template>
  <div
    class="uv-steps-item "

    @click="clickItem"
    ref="itemRef"
  >
    <div
      class="uv-steps-item-icon"
    >
      <slot name="icon">
        <div
          class="uv-steps-item-icon-default"
          :style="{borderColor:context.isActive?activeColor:inactiveColor}"
        />
      </slot>
    </div>

    <div
      class="uv-steps-item-text"
      :style="{color:context.isActive?activeColor:inactiveColor}"
    >
      <slot>{{ title }}</slot>
    </div>
    <div
      class="uv-steps-item-line"
      :style="{backgroundColor:context.lineActive?activeColor:''}"
    />
  </div>
</template>

<script setup>

import { ref, reactive, onMounted } from 'vue'
import { useParent } from '../../hooks/index'

defineProps({
  title: {
    type: String
  }
})

const itemRef = ref(null)

const context = reactive({
  $el: itemRef,
  isActive: false,
  lineActive: false
})

const { props: parentProps, acitveItemUpdate, index } = useParent('steps', context)

onMounted(() => {
  if (parentProps.modelValue === index.value) {
    context.isActive = true
  }
})

const { activeColor, inactiveColor } = parentProps

const clickItem = () => {
  if (parentProps.isAbleClick) {
    acitveItemUpdate(index.value)
  }
}

</script>
<script>
export default {
  name: 'UvStepsItem'
}
</script>

<style lang="scss">
:root {
  --uv-steps-item-font-size: 12px;
  --uv-steps-item-transition-time: 0.3s;
  --uv-steps-item-icon-default-size: 9px;
  --uv-steps-item-icon-default-border-size: 2px;
  --uv-steps-item-text-padding-top: 20px;
  --uv-steps-item-line-bg-color: #ebedf0;
  --uv-steps-item-line-height: 1px;
}
.uv-steps-item {
  position: relative;
  font-size: var(--uv-steps-item-font-size);
  flex: 1;
  .uv-steps-item-icon {
    position: absolute;
    z-index: 1;
    background-color: var(--uv-steps-bg-color);
    transition: all var(--uv-steps-item-transition-time);
    transform: translateX(-50%);
    .uv-steps-item-icon-default {
      width: var(--uv-steps-item-icon-default-size);
      height: var(--uv-steps-item-icon-default-size);
      border: var(--uv-steps-item-icon-default-border-size) solid #999999;
      border-radius: 50%;
    }
  }
  .uv-steps-item-text {
    position: relative;
    padding-top: var(--uv-steps-item-text-padding-top);
    text-align: center;
    transform: translateX(-50%);
  }
  .uv-steps-item-line {
    position: absolute;
    top: calc(var(--uv-steps-item-icon-default-size) / 2);
    left: 0;
    width: 100%;
    height: var(--uv-steps-item-line-height);
    background-color: var(--uv-steps-item-line-bg-color);
    transition: all var(--uv-steps-item-transition-time);
  }
  &:first-child {
    .uv-steps-item-text {
      transform: none;
      text-align: left;
    }
    .uv-steps-item-icon {
      transform: none;
    }
  }
  &:last-child {
    position: absolute;
    right: 0;
    .uv-steps-item-text {
      transform: none;
    }
    .uv-steps-item-icon {
      right: 0;
      transform: none;
    }
    .uv-steps-item-line {
      width: 0;
    }
  }
}
</style>
