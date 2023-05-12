<template>
  <div
    class="uv-checkbox-group"
    :style="{flexDirection:direction==='column'? 'column':'row'}"
  >
    <slot />
  </div>
</template>

<script setup>

import { computed, ref, watch } from 'vue'
import { useChildren } from '../../hooks/index'
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
  },
  shape: {
    type: String,
    default: 'round' // square or round
  }
})
const emit = defineEmits(['update:modelValue', 'change'])

// 用于表单重置初始数据后需要重置所有选项状态
const isNeedWatch = ref(false)

watch(() => props.modelValue, (newValue) => {
  if (isNeedWatch.value) {
    fields.forEach(chil => {
      chil.isSelect = false
    })
    newValue.forEach(item => {
      fields.forEach(chil => {
        if (chil.label === item) {
          chil.isSelect = true
        }
      })
    })
  }
  isNeedWatch.value = true
})

const updateItem = (index) => {
  if (props.max && selectNum.value === props.max) {
    if (!fields[index].isSelect) {
      return
    }
  }
  isNeedWatch.value = false
  fields[index].isSelect = !fields[index].isSelect
  const newArr = []
  fields.forEach(item => {
    if (item.isSelect) {
      newArr.push(item.label)
    }
  })
  emit('change', newArr)
  emit('update:modelValue', newArr)
}

const selectNum = computed(() => {
  return props.modelValue.length
})

const { fields } = useChildren('checkbox-group', { props, updateItem })

</script>
<script>
export default {
  name: 'UvCheckboxGroup'
}
</script>

<style lang="scss">
:root {
  --uv-checkbox-group-gap: 10px;
}
.uv-checkbox-group {
  display: flex;
  flex-wrap: wrap;
  gap: var(--uv-checkbox-group-gap);
}
</style>
