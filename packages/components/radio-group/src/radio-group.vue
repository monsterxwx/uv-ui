<template>
  <div
    class="uv-radio-group"
    :style="{flexDirection:direction==='column'? 'column':'row'}"
  >
    <slot />
  </div>
</template>

<script setup>
import { useChildren } from '../../../hooks/useContext.js'
const props = defineProps({
  modelValue: {
    type: String
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
  },
  shape: {
    type: String,
    default: 'round' // square or round
  }
})
const emit = defineEmits(['update:modelValue', 'change'])

const updateItem = (index) => {
  fields.forEach((item, idx) => {
    if (idx === index) {
      item.isSelect = !item.isSelect
    } else {
      item.isSelect = false
    }
  })
  emit('change', fields[index].label)
  emit('update:modelValue', fields[index].label)
}

const { fields } = useChildren('radio-group', { props, updateItem })

</script>
<script>
export default {
  name: 'UvRadioGroup'
}
</script>

<style>
  :root {
    --uv-radio-group-gap: 10px;
  }
</style>

<style lang="scss" scoped>
.uv-radio-group {
  display: flex;
  flex-wrap: wrap;
  gap: var(--uv-radio-group-gap);
}
</style>
