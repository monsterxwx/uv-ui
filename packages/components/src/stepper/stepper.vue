<template>
  <div
    class="uv-stepper"
  >
    <div
      class="uv-stepper-minus"
      :style="{width:size+'px',height:size+'px'}"
      :class="min===current || disabled?'uv-stepper-disabled':''"
      @click.stop="subClick"
    >
      <uv-icon
        class="uv-stepper-icon"
        size="20"
        name="minus"
        :color="min===current || disabled?'#c8c9cc':'#323233'"
      />
    </div>

    <div
      @click.stop
      class="uv-stepper-input"
      :style="{width:inputWidth,height:size+'px'}"
    >
      <input
        :style="{ color: disabled?'#d0c9cc':'#323233'}"
        :disabled="disableInput || disabled"
        @input="handleInput"
        @blur="handleBlur"
        :value="current"
      >
    </div>
    <div
      class="uv-stepper-add"
      :style="{width:size+'px',height:size+'px'}"
      :class="max===current || disabled?'uv-stepper-disabled':''"
      @click.stop="addClick"
    >
      <uv-icon
        class="uv-stepper-icon"
        size="20"
        name="add"
        :color="max===current || disabled?'#c8c9cc':'#323233'"
      />
    </div>
  </div>
</template>

<script setup>

import { ref, watch, inject } from 'vue'
import { formatNumber } from '@uv-ui/utils'
const props = defineProps({
  modelValue: {
    type: Number
  },
  max: {
    type: Number
  },
  min: {
    type: Number,
    default: 1
  },
  // 步长
  step: {
    type: Number,
    default: 1
  },
  // 只允许输入整数
  integer: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  disableInput: {
    type: Boolean,
    default: false
  },
  inputWidth: {
    type: String,
    default: '28px'
  },
  size: {
    type: Number,
    default: 28
  }

})

const { props: parentProps, validateBlurOrChange } = inject('form-item', {})

const emit = defineEmits(['update:modelValue', 'add', 'sub', 'change'])
const current = ref(props.modelValue || 1)

watch(() => props.modelValue, (newValue) => {
  current.value = newValue
})

watch(current, (newValue) => {
  emit('update:modelValue', newValue)
  emit('change', newValue)
  if (parentProps) {
    validateBlurOrChange('change')
  }
})

function subClick () {
  if ((props.min && current.value <= props.min) || props.disabled) return
  current.value = current.value - props.step
  emit('add', current.value)
}
function addClick () {
  if ((props.max && current.value >= props.max) || props.disabled) return
  current.value = Number(current.value + props.step)
  emit('add', current.value)
}

function handleInput (e) {
  const { value } = e.target
  const formatted = formatNumber(String(value), !props.integer)
  console.log(formatted)
  e.target.value = formatted
  current.value = Number(formatted)
}
function handleBlur (e) {
  if (props.min && current.value <= props.min) {
    e.target.value = props.min
    current.value = Number(props.min)
  } else if (props.max && current.value >= props.max) {
    e.target.value = props.max
    current.value = Number(props.max)
  }
}
</script>
<script>
export default {
  name: 'UvStepper'
}
</script>

<style lang="scss">
:root {
  --uv-stepper-gap: 2px;
  --uv-stepper-input-color: #323233;
  --uv-stepper-bg-color: #f2f3f5;
  --uv-stepper-active-bg-color: #f7f8f9;
  --uv-stepper-disabled-bg-color: #f7f8fa;
  --uv-stepper-border-radius: 4px;
}
.uv-stepper {
  display: flex;
  gap: var(--uv-stepper-gap);
  align-items: center;
  input {
    width: 100%;
    height: 100%;
    border: none;
    text-align: center;
    color: var(--uv-stepper-input-color);
    background-color: var(--uv-stepper-bg-color);
    outline: none;
  }

  @mixin common {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2px;
    background-color: var(--uv-stepper-bg-color);
  }
  .uv-stepper-icon {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .uv-stepper-minus {
    @include common;

    border-radius: var(--uv-stepper-border-radius) 0 0 var(--uv-stepper-border-radius);
    &:active {
      background-color: var(--uv-stepper-active-bg-color);
    }
  }
  .uv-stepper-input {
    @include common;
  }
  .uv-stepper-add {
    @include common;

    border-radius: 0 var(--uv-stepper-border-radius)  var(--uv-stepper-border-radius) 0;
    &:active {
      background-color: var(--uv-stepper-active-bg-color);
    }
  }
  .uv-stepper-disabled {
    background-color: var(--uv-stepper-disabled-bg-color);
    cursor: not-allowed;
  }
}
</style>
