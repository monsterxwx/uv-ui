<template>
  <uvCell
    class="uv-form-item"
    ref="formItemRef"
    v-bind="$attrs"
    :arrow="arrow"
    :arrow-direction="arrowDirection"
    :title="label"
    :label-width="labelWidth"
    :label-position="labelPosition || parentProps.labelPosition"
    :clickable="clickable"
    :required="required || field.isRequired"
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
import { clone } from 'lodash-es'
import { getProp } from '../../../utils'
import { inject, onBeforeMount, onMounted, toRefs, reactive, ref, nextTick, computed } from 'vue'
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
  required: {
    type: Boolean
  }
})

// 默认初始值
let initialValue

const fieldValue = computed(() => {
  const model = parentProps?.model
  if (!model || !props.prop) {
    return
  }
  return getProp(model, props.prop).value
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

const resetField = async () => {
  const model = parentProps?.model
  if (!model || !props.prop) return
  const computedValue = getProp(model, props.prop)
  computedValue.value = clone(initialValue)
  await nextTick()
  clearValidate()
}

const clearValidate = () => {
  field.errorMsg = null
}

const field = reactive({
  ...toRefs(props),
  $el: formItemRef,
  isRequired: false,
  errorMsg: null,
  clearValidate,
  validate,
  resetField
})

onMounted(() => {
  if (rules && rules[props.prop]) {
    const isRequired = rules[props.prop].find(item => item.required === true)
    if (isRequired) {
      field.isRequired = true
    }
  }
  initialValue = clone(fieldValue.value)
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
