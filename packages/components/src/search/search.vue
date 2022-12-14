<template>
  <div
    class="uv-search"
    :style="{backgroundColor:bgColor}"
  >
    <div
      class="uv-search-content"
      :class="uvSearchClass"
      :style="{backgroundColor:searchBgColor}"
    >
      <div>
        <uv-icon
          name="search"
          size="22"
          color="#99a0ac"
        />
      </div>
      <div
        class="uv-search-content-input"
      >
        <input
          :value="modelValue"
          :style=" {textAlign:inputAlign,backgroundColor:searchBgColor}"
          :disabled="disabled"
          @input="handleInput"
          @focus="handleFocus"
          @blur="handleBlur"
          :placeholder="placeholder"
        >
      </div>
      <div
        @click="clearValueEvent"
        v-if="clearable && modelValue"
        class="uv-search-content-close"
      >
        <uv-icon
          name="error"
          size="22"
          color="#99a0ac"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import './index.scss'
import uvIcon from '../icon'
import { computed } from 'vue'

const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: '请输入'
  },
  clearable: {
    type: Boolean,
    default: false
  },
  round: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  inputAlign: {
    type: String,
    default: 'left'
  },
  bgColor: {
    type: String,
    default: '#fff'
  },
  searchBgColor: {
    type: String,
    default: '#f7f8fa'
  }
})
const emit = defineEmits(['update:modelValue', 'clear', 'focus', 'blur'])
const uvSearchClass = computed(() => {
  return [
    props.round ? 'uv-search-content-round' : ''
  ]
})
function clearValueEvent () {
  emit('update:modelValue', '')
  emit('clear')
}
function handleInput (e) {
  const { value } = e.target
  emit('update:modelValue', value)
}
function handleFocus () {
  emit('focus')
}
function handleBlur (e) {
  const { value } = e.target
  emit('blur', value)
}
</script>
<script>
export default {
  name: 'UvSearch'
}
</script>

