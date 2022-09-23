<template>
  <uvCell
    class="uv-form-item"
    ref="formItemRef"
    v-bind="$attr"
    :arrow="arrow"
    :arrow-direction="arrowDirection"
    :title="label"
    :label-width="labelWidth"
    :label-position="labelPosition?labelPosition: parentProps.labelPosition"
    :clickable="clickable"
    :tips="!!field.errorMsg"
    :error-msg="field.errorMsg"
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
import { inject, onBeforeMount, onMounted, toRefs, reactive, ref } from 'vue'
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
const { props: parentProps, addField, removeField } = inject('form')
const { labelWidth, rules } = parentProps

const formItemRef = ref(null)

const validate = () => {
  if (field.isRequired) {
    // 如果值为空
    if (!parentProps.model[props.prop]) {
      const msg = rules[props.prop].find(item => item.required === true)
      field.errorMsg = msg.message
      return false
    } else {
      field.errorMsg = null
      return true
    }
  } else {
    field.errorMsg = null
    return true
  }
}

const resetFields = () => {
  console.log('qing')
}

const clearValidate = () => {
  field.errorMsg = null
}

const field = reactive({
  ...toRefs(props),
  $el: formItemRef,
  isRequired: false,
  showErrMsg: false,
  errorMsg: null,
  resetFields,
  clearValidate,
  validate
})

onMounted(() => {
  if (rules && rules[props.prop]) {
    const isRequired = rules[props.prop].find(item => item.required === true)
    if (isRequired) {
      field.isRequired = true
    }
  }
  addField(field)
})

onBeforeMount(() => {
  removeField(field)
})

// provide('form-item', { props, rules, addField, removeField })

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
    --uv-cell-content-value-slot-text-align: left;
    --uv-input-height: 24px;
    :deep() {
      .uv-cell-content-value {
        width: 100%;
      }
    }
  }

</style>
