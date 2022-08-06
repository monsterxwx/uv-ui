<template>
  <uvCell tips>
    <template #title>
      <div
        class="uv-input-title"
        :class="disabled?'uv-input-title-disabled':''"
      >
        <!-- 自定义label -->
        <slot name="label">
          <div class="uv-input-label">
            {{ label }}
            <div
              v-if="errorMsg"
              class="uv-input-required"
            >
              *
            </div>
          </div>
        </slot>
      </div>
    </template>
    <template #value>
      <div class="uv-input">
        <input
          v-if="type!=='textarea'"
          :style="{border:border?'1px solid #eeeeee':'',textAlign:inputAlign}"
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
            border:border?'1px solid #eeeeee':'',
            textAlign:inputAlign,
            height:autosize && autosize.minHeight ? autosize.minHeight+'px':'28px'
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
        <span
          class="showWordLimit"
          v-if="showWordLimit && maxlength"
        >
          {{ textLength }} / {{ maxlength }}
        </span>

        <uv-icon
          v-if="modelValue && clearable"
          @click="clearValueEvent"
          name="error"
          size="22"
        />
        <!-- 自定义输入框右边内容 -->
        <slot name="right" />
      </div>
    </template>
    <template #tips>
      <div
        v-if="errorMsg"
        v-show="showTips"
        class="uv-input-tips"
      >
        {{ errorMsg }}
      </div>
    </template>
  </uvCell>
</template>

<script setup>

import uvIcon from '../icon'
import { ref, watch, nextTick, computed } from 'vue'
import uvCell from '../cell'
const emit = defineEmits(['update:modelValue', 'input', 'change', 'blur', 'focus', 'keydown'])
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
  label: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  },
  readonly: {
    type: Boolean,
    default: false
  },
  errorMsg: {
    type: String,
    default: ''
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

const showTips = ref(false)

const clearValueEvent = () => {
  emit('update:modelValue', '')
  if (props.errorMsg) {
    showTips.value = true
  }
}

const textareaRef = ref(null)

watch(() => props.modelValue, (newValue) => {
  if (props.maxlength) {
    updateValue(newValue)
  }
  if (props.errorMsg && newValue) {
    showTips.value = false
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
  emit('input', value)
}

const handleBlur = (e) => {
  if (props.formatter && props.formatTrigger === 'blur') {
    let { value } = e.target
    value = props.formatter(value)
    console.log(value)
    emit('update:modelValue', value)
  }
  emit('blur')
  if (!props.modelValue) {
    showTips.value = true
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

<style lang="scss" scoped>
.uv-input-title {
  width: 88px;
}
:deep(.uv-cell-content) {
  justify-content: flex-start;
  align-items: flex-start !important;
}
:deep(.uv-cell-content-value) {
  flex: 1;
}
:deep(.uv-cell-content-title) {
  margin: 0 !important;
  line-height: 26px;
}
.uv-input {
  position: relative;
  display: flex;
  align-items: center;
  input,
  textarea {
    padding: 5px 8px;
    width: 100%;
    border: none;
    border-radius: 4px;
    background-color: #ffffff;
    outline: none;
  }
  input {
    height: 26px;
  }
  textarea {
    resize: none;
  }
  input::placeholder,
  textarea::placeholder {
    color: #d3c9d6;
  }
  input:disabled,
  textarea:disabled {
    color: #d3c9d6;
  }
  .showWordLimit {
    position: absolute;
    right: 10px;
    bottom: -8px;
    font-size: 12px;
    white-space: nowrap;
    color: #646566;
  }
}
.uv-input-title-disabled {
  color: #d3c9d6;
}
.uv-input-label {
  position: relative;
  .uv-input-required {
    position: absolute;
    top: 0;
    left: -8px;
    color: #ee0a24;
  }
}
.uv-input-tips {
  font-size: 13px;
  color: #ee0a24;
}
</style>
