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
import { getProp, clone } from '../../utils/index.js'
import { inject, onBeforeMount, onMounted, toRefs, reactive, ref, nextTick, computed, provide } from 'vue'
import uvCell from '../cell'
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
  if (!props.prop || !rules[props.prop]) {
    return true
  }
  const currentRules = rules[props.prop]
  const validatePass = currentRules.map(item => {
    let isPass = ''
    if (item.required === true) {
      if (!parentProps.model[props.prop]) {
        // 如果值为空
        field.errorMsg = item.message
        isPass = false
      } else {
        field.errorMsg = null
        isPass = true
      }
    }
    if (item.trigger) {
      const isTrue = validateBlurOrChange(item.trigger)
      isPass = isTrue
    }
    return isPass
  }).every(item => item === true)
  if (validatePass) {
    return true
  } else {
    return false
  }
}

// 值改变验证or失去焦点验证
const validateBlurOrChange = (trigger) => {
  if (!props.prop || !rules[props.prop]) {
    if (!props.prop) {
      console.error('请传入form-item中传入prop属性')
    } else if (!rules[props.prop]) {
      console.error('未传入该属性的rule规则')
    }
    return
  }
  const validateObj = rules[props.prop].find(item => item.trigger === trigger)
  if (validateObj) {
    // 如果为必传
    if (validateObj.required) {
      // 如果该值必填
      if (!parentProps.model[props.prop]) {
        // 值为空时触发验证
        field.errorMsg = validateObj.message
        return false
      } else {
        field.errorMsg = null
        return true
      }
    }
    if (validateObj.validator) {
      // 如果存在自定义验证
      // 获取当前值
      const value = parentProps.model[props.prop]
      const isTrue = validateObj.validator(value)
      if (isTrue) {
        field.errorMsg = null
        return true
      } else {
        field.errorMsg = validateObj.message
        return false
      }
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

provide('form-item', { props, validateBlurOrChange })

</script>
<script>
export default {
  name: 'UvFormItem'
}
</script>
<style lang="scss">
.uv-form-item {
  --uv-cell-content-justify-content: flex-start;
  --uv-cell-content-value-slot-text-align: left;
  --uv-input-height: 24px;
  .uv-cell-content-value {
    width: 100%;
  }
}
</style>
