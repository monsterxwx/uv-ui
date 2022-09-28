<template>
  <div
    class="uv-checkbox-group"
    :style="{flexDirection:direction==='column'? 'column':'row'}"
  >
    <slot />
  </div>
</template>

<script setup>
import { computed, provide } from 'vue'
const props = defineProps({
  modelValue: {
    type: Array,
    default: () => ([])
  },
  max: {
    type: Number
  },
  direction: {
    type: String,
    default: 'row' // column 表示纵向，默认row横向
  },
  iconSize: {
    type: [Number, String],
    default: 18
  },
  checkedColor: {
    type: String,
    default: '#1989fa'
  }
})
const emit = defineEmits(['update:modelValue', 'change'])

const fields = []

const addField = (field) => {
  fields.push(field)
}

const removeField = (field) => {
  fields.splice(fields.indexOf(field), 1)
}

const updateItem = (index) => {
  if (props.max && selectNum.value === props.max) {
    if (!fields[index].isSelect) {
      return
    }
  }
  fields[index].isSelect = !fields[index].isSelect
  const newArr = fields.filter(item => item.isSelect).map(item => item.label)
  emit('change', newArr)
  emit('update:modelValue', newArr)
}

const selectNum = computed(() => {
  return props.modelValue.length
})

provide('checkbox-group', { props, addField, removeField, updateItem, fields })

</script>
<script>
export default {
  name: 'UvCheckboxGroup'
}
</script>

<style>
  :root {
    --uv-checkbox-group-gap: 10px;
  }
</style>

<style lang="scss" scoped>
.uv-checkbox-group {
  display: flex;
  flex-wrap: wrap;
  gap: var(--uv-checkbox-group-gap);
}
</style>
