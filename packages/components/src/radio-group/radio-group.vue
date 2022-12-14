<template>
  <div
    class="uv-radio-group"
    :style="{flexDirection:direction==='column'? 'column':'row'}"
  >
    <slot />
  </div>
</template>

<script setup>
import './index.scss'
import { watch } from 'vue'
import { useChildren } from '@uv-ui/hooks'
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

watch(() => props.modelValue, (newValue) => {
  const index = fields.findIndex(item => item.label === newValue)
  fields.forEach((item, idx) => {
    if (idx === index) {
      item.isSelect = true
    } else {
      item.isSelect = false
    }
  })
})

const updateItem = (index) => {
  const currentValue = fields[index].label
  emit('change', currentValue)
  emit('update:modelValue', currentValue)
}

const { fields } = useChildren('radio-group', { props, updateItem })

</script>
<script>
export default {
  name: 'UvRadioGroup'
}
</script>

