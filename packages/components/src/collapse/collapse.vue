<template>
  <div
    class="uv-collapse"
  >
    <slot />
  </div>
</template>

<script setup>

import { provide, ref, watch } from 'vue'

const props = defineProps({
  // 是否手风琴模式
  accordion: {
    type: Boolean,
    default: false
  },
  // 当前展开的值
  modelValue: {
    type: [Array, String, Number],
    default: () => ([])
  }
})
const activeNames = ref([].concat(props.modelValue))

watch(() => props.modelValue, (newValue) => {
  activeNames.value = [].concat(newValue)
})

const emit = defineEmits(['update:modelValue'])
const setActiveNames = (name) => {
  activeNames.value = [].concat(name)
  const res = props.accordion ? name : activeNames.value
  emit('update:modelValue', res)
}

const handleItemClick = (item) => {
  const activeNamesArr = activeNames.value.slice(0)
  const index = activeNamesArr.indexOf(item)
  if (props.accordion) {
    if (index > -1) {
      setActiveNames('')
    } else {
      setActiveNames(item)
    }
  } else {
    if (index > -1) {
      activeNamesArr.splice(index, 1)
    } else {
      activeNamesArr.push(item)
    }
    setActiveNames(activeNamesArr)
  }
}

provide('collapse', {
  activeNames,
  handleItemClick
})

</script>
<script>
export default {
  name: 'UvCollapse'
}
</script>
<style lang="scss">
.uv-collapse {
  padding: 0 16px;
  background-color: #ffffff;
}
</style>
