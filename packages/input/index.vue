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
          :style="{border:border?'1px solid #eeeeee':''}"
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
        <!-- 自定义输入框右边内容 -->
        <slot name="right">
          <svgIcon
            v-if="modelValue && clearable"
            @click="clearValueEvent"
            name="error"
            size="22"
          />
        </slot>
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

import svgIcon from '@/components/svgIcon'
import { ref, watch } from 'vue'
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
  // eslint-disable-next-line vue/require-default-prop
  formatter: {
    type: Function
  },
  formatTrigger: {
    type: String,
    default: 'change'
  }
})
const handleInput = (e) => {
  let { value } = e.target
  if (props.formatter && props.formatTrigger === 'change') {
    value = props.formatter(value)
    emit('update:modelValue', value)
  } else {
    emit('update:modelValue', value)
  }
  emit('input', value)
}

const showTips = ref(false)

const clearValueEvent = () => {
  emit('update:modelValue', '')
  if (props.errorMsg) {
    showTips.value = true
  }
}

watch(() => props.modelValue, (newValue) => {
  if (props.errorMsg && newValue) {
    showTips.value = false
  }
})

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
}
:deep(.uv-cell-content-value) {
  flex: 1;
}
:deep(.uv-cell-content-title) {
  margin: 0 !important;
}
.uv-input {
  display: flex;
  align-items: center;
  input {
    padding: 5px 8px;
    width: 100%;
    border: none;
    border-radius: 4px;
    background-color: #ffffff;
    outline: none;
  }
  input::placeholder {
    color: #d3c9d6;
  }
  input:disabled {
    color: #d3c9d6;
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
