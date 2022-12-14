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
import './index.scss'
import { provide, nextTick } from 'vue'
import uvCellGroup from '../cell-group'
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

const fields = []

const addField = (field) => {
  fields.push(field)
}

const removeField = (field) => {
  fields.splice(fields.indexOf(field), 1)
}

provide('form', { props, fields, addField, removeField })

const validate = () => {
  return new Promise((resolve, reject) => {
    nextTick(() => {
      const isValidatePass = fields.map(item => {
        return item.validate()
      }).every(item => item === true)
      if (isValidatePass) {
        resolve(true)
      } else {
        // eslint-disable-next-line prefer-promise-reject-errors
        reject(false)
      }
    })
  })
}
const resetFields = () => {
  if (!props.model) {
    return
  }
  fields.forEach((field) => field.resetField())
}
const clearValidate = () => {
  fields.forEach(item => item.clearValidate())
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

