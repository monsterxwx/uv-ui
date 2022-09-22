<template>
  <uvCell
    class="uv-form-item"
    :arrow="arrow"
    :arrow-direction="arrowDirection"
    :title="label"
    :label-width="labelWidth"
    :label-position="labelPosition?labelPosition: parentProps.labelPosition"
    :clickable="clickable"
    :tips="fields.showTips"
    :error-msg="fields.errorMsg"
  >
    <template #title>
      <slot name="label" />
    </template>
    <template #value>
      <slot />
    </template>
  </uvCell>
</template>

<script setup>
import { inject, onMounted, onUnmounted, provide, ref } from 'vue'
import uvCell from '../../cell'
const props = defineProps({
  label: {
    type: String
  },
  labelPosition: {
    type: String
  },
  arrow: {
    type: Boolean,
    default: false
  },
  arrowDirection: {
    type: String
  },
  clickable: {
    type: Boolean,
    default: false
  },
  prop: {
    type: String
  },
  error: {
    type: String
  }
})
const { props: parentProps, children } = inject('form')
const { labelWidth, rules } = parentProps

const fields = ref({})

onMounted(() => {
  children.value.push(fields)
})

onUnmounted(() => {
  const index = children.value.findIndex(fields)
  children.value.splice(index, 1)
})

const addField = (field) => {
  fields.value = field
}

const removeField = () => {
  fields.value = {}
}

provide('form-item', { props, rules, addField, removeField })

</script>
<script>
export default {
  name: 'UvFormItem'
}
</script>

<style>
:root {
  --uv-test: 1px;
}
</style>

<style lang="scss" scoped>
  .uv-form-item {
    --uv-cell-content-justify-content: flex-start;
    :deep() {
      .uv-cell-content-value {
        width: 100%;
      }
    }
  }

</style>
