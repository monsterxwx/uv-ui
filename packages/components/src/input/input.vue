<template>
  <div
    class="uv-input-wrap"
    :style="{border:border?'1px solid #eeeeee':''}"
  >
    <div
      class="uv-input"
    >
      <input
        v-if="type!=='textarea'"
        :style="{textAlign:inputAlign}"
        :disabled="disabled"
        :type="type"
        :value="modelValue"
        :placeholder="placeholder"
        :readonly="readonly"
        @input="handleInput"
        @blur="handleBlur"
        @focus="handleFocus"
        @keydown="handleKeydown"
      >
      <textarea
        v-else
        ref="textareaRef"
        :style="{
          textAlign:inputAlign,
          height:autosize && autosize.minHeight ? autosize.minHeight+'px':'60px'
        }"
        :disabled="disabled"
        :value="modelValue"
        :placeholder="placeholder"
        :readonly="readonly"
        :autoHeight="true"
        @input="handleInput"
        @blur="handleBlur"
        @focus="handleFocus"
        @keydown="handleKeydown"
      />

      <uv-icon
        v-if="modelValue && clearable"
        @click="clearValueEvent"
        name="error"
        color="#96b3d7"
        size="22"
      />
      <!-- 自定义输入框右边内容 -->
      <slot name="right" />
    </div>
    <div
      class="uv-input-word-limit"
      v-if="showWordLimit && maxlength"
    >
      {{ textLength }} / {{ maxlength }}
    </div>
  </div>
</template>

<script setup>
 
import uvIcon from '../icon'
import { ref, watch, nextTick, computed, inject } from 'vue'
const emit = defineEmits(['update:modelValue', 'change', 'blur', 'focus', 'keydown'])
const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: ''
  },
  type: {
    type: String,
    default: 'text'
  },
  placeholder: {
    type: String,
    default: '请输入'
  },
  disabled: {
    type: Boolean,
    default: false
  },
  readonly: {
    type: Boolean,
    default: false
  },
  clearable: {
    type: Boolean,
    default: false
  },
  border: {
    type: Boolean,
    default: false
  },
  formatter: {
    type: Function
  },
  formatTrigger: {
    type: String,
    default: 'change'
  },
  inputAlign: {
    type: String,
    default: 'left'
  },
  autosize: {
    type: [Boolean, Object],
    default: false
  },
  maxlength: {
    type: Number
  },
  showWordLimit: {
    type: Boolean,
    default: false
  }
})

const { props: parentProps, validateBlurOrChange } = inject('form-item', {})

const clearValueEvent = () => {
  emit('update:modelValue', '')
}

const textareaRef = ref(null)

watch(() => props.modelValue, (newValue) => {
  if (props.maxlength) {
    updateValue(newValue)
  }
  // textarea自动高度
  if (props.autosize && props.type === 'textarea') {
    nextTick(() => {
      if (typeof (props.autosize) === 'boolean') {
        textareaRef.value.style.height = textareaRef.value.scrollHeight + 'px'
      } else if (Object.prototype.toString.call(props.autosize) === '[object Object]') {
        const { maxHeight } = props.autosize
        textareaRef.value.style.height = textareaRef.value.scrollHeight < maxHeight ? textareaRef.value.scrollHeight + 'px' : maxHeight + 'px'
      }
    })
  }
})

// 限制输入字数
const textLength = computed(() => Array.from(props.modelValue).length) // 获取文字长度
const getModelValue = () => String(props.modelValue ?? '') // 获取输入值
const cutString = (str, maxlength) => {
  console.log(maxlength)
  return [...str].slice(0, maxlength).join('')
}
const limitValueLength = (value) => {
  const { maxlength } = props
  if (maxlength && textLength.value > maxlength) {
    const modelValue = getModelValue()
    if (modelValue && textLength.value === +maxlength) {
      return modelValue
    }
    return cutString(value, +maxlength)
  }
  return value
}
const updateValue = (e) => {
  let value = e
  value = limitValueLength(value)
  if (props.formatter && props.formatTrigger === 'change') {
    value = props.formatter(value)
    emit('update:modelValue', value)
  } else {
    emit('update:modelValue', value)
  }
}

const handleInput = (e) => {
  const { value } = e.target
  updateValue(value)
  emit('change', value)
  if (parentProps) {
    validateBlurOrChange('change')
  }
}

const handleBlur = (e) => {
  if (props.formatter && props.formatTrigger === 'blur') {
    let { value } = e.target
    value = props.formatter(value)
    emit('update:modelValue', value)
  }
  emit('blur')
  if (parentProps) {
    validateBlurOrChange('blur')
  }
}
const handleFocus = () => {
  emit('focus')
}
const handleKeydown = (evt) => {
  emit('keydown', evt)
}
</script>
<script>
export default {
  name: 'UvInput'
}
</script>




