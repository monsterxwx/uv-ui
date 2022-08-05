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
        <svgIcon
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
        <svgIcon
          name="error"
          size="22"
          color="#99a0ac"
        />
      </div>
    </div>
  </div>
</template>

<script setup>

import svgIcon from '@/components/svgIcon'
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

<style lang="scss" scoped>
.uv-search {
  position: relative;
  padding: 10px;
  .uv-search-content {
    display: flex;
    align-items: center;
    padding: 2px 10px;
    border-radius: 4px;
    &-input {
      flex: 1;
      font-size: 14px;
      input {
        padding: 8px;
        width: 100%;
        border: none;
        border-radius: 4px;
        outline: none;
      }
      input::placeholder {
        color: #d3c9d6;
      }
      input:disabled {
        color: #d3c9d6;
      }
    }
  }
  .uv-search-content-round {
    border-radius: 40px;
  }
}

</style>
