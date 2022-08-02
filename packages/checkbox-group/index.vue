<template>
  <div
    class="uv-checkbox-group"
  >
    <slot />
  </div>
</template>

<script setup>
import { provide, toRefs } from 'vue'
const props = defineProps({
  modelValue: {
    type: Array,
    default: () => ([])
  }
})
const emit = defineEmits(['update:modelValue'])
const changeEvent = (value) => {
  const arr = props.modelValue
  const index = arr.findIndex(item => item === value)
  if (index) {
    arr.splice(index, 1)
  } else {
    arr.push(value)
  }

  emit('update:modelValue', arr)
}
// 向子组件传递
provide('CheckboxGroup', {
  name: 'CheckboxGroup',
  ...toRefs(props),
  changeEvent
})

</script>
<script>
export default {
  name: 'UvCheckboxGroup'
}
</script>

<style lang="scss" scoped>
.uv-checkbox-group {
  display: flex;
  gap: 10px;
}
</style>
