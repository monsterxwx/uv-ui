<template>
  <div
    class="uv-form"
  >
    <uvCellGroup
      :card="card"
      :gap="gap"
    >
      <slot />
    </uvCellGroup>
  </div>
</template>

<script setup>
import { provide, ref, nextTick } from 'vue'
import uvCellGroup from '../../cell-group'
const props = defineProps({
  model: Object,
  rules: {
    type: Object
  },
  labelPosition: { // 标题对齐方式,默认向左对齐,可选top,right,left
    type: String,
    default: 'left'
  },
  labelWidth: {
    type: Number
  },
  card: {
    type: Boolean,
    default: false
  },
  gap: {
    type: Boolean,
    default: false
  }
})

// 所有form-item孩子
const children = ref([])

provide('form', { props, children })

const validate = () => {
  const validateChildren = children.value.filter(item => {
    return item.value.$el
  })
  console.log(validateChildren)
  return new Promise((resolve, reject) => {
    nextTick(() => {
      const isPassValidate = validateChildren.every(item => !item.value.errorMsg)
      if (isPassValidate) {
        resolve(true)
      } else {
        children.value.forEach(item => {
          if (item.value.$el) {
            item.value.showTips = true
          }
        })
        // eslint-disable-next-line prefer-promise-reject-errors
        reject(false)
      }
    })
  })
}
const resetFields = () => {
  console.log('resetFields')
}
const clearValidate = () => {
  console.log('clearValidate')
  children.value.forEach(item => {
    if (item.value.$el) {
      item.value.showTips = false
    }
  })
}
defineExpose({
  validate,
  resetFields,
  clearValidate
})
</script>
<script>
export default {
  name: 'UvForm'
}
</script>

<style lang="scss" scoped>

</style>
