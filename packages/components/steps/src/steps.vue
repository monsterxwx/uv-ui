<template>
  <div
    class="uv-steps"
  >
    <div class="uv-steps-content">
      <slot />
    </div>
  </div>
</template>

<script setup>
import { provide, onMounted, watch } from 'vue'

const props = defineProps({
  modelValue: {
    type: Number,
    default: 0
  },
  isAbleClick: {
    type: Boolean,
    default: true
  },
  activeColor: {
    type: String,
    default: '#0078d4'
  },
  inactiveColor: {
    type: String,
    default: '#999999'
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

watch(() => props.modelValue, (newValue) => {
  acitveItemUpdate(newValue)
  emit('change', newValue)
})

const acitveItemUpdate = (index) => {
  if (props.isAbleClick) {
    emit('update:modelValue', index)
  }
  fields.forEach((item, idx) => {
    // 判断活跃子项
    if (idx <= index) {
      item.isActive = true
    } else {
      item.isActive = false
    }
    // 判断活跃线
    if (idx < index) {
      item.lineActive = true
    } else {
      item.lineActive = false
    }
  })
}
provide('steps', { props, addField, removeField, acitveItemUpdate, fields })

onMounted(() => {
  fields[props.modelValue].isActive = true
})
</script>
<script>
export default {
  name: 'UvSteps'
}
</script>

<style>
:root {
  --uv-steps-padding: 10px;
  --uv-steps-bg-color: #ffffff;
}
</style>

<style lang="scss" scoped>
.uv-steps {
  padding: var(--uv-steps-padding);
  background-color: var(--uv-steps-bg-color);
  .uv-steps-content {
    position: relative;
    display: flex;
  }
}
</style>
