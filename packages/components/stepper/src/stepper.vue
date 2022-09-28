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
        size="20"
        name="minus"
        :color="min===current || disabled?'c8c9cc':'#323233'"
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
        v-model="current"
      >
    </div>
    <div
      class="uv-stepper-add"
      :style="{width:size+'px',height:size+'px'}"
      :class="max===current || disabled?'uv-stepper-disabled':''"
      @click.stop="addClick"
    >
      <uv-icon
        size="20"
        name="add"
        :color="max===current || disabled?'c8c9cc':'#323233'"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, watch, inject } from 'vue'
const props = defineProps({
  modelValue: {
    type: Number
  },
  max: {
    type: Number
  },
  min: {
    type: Number,
    default: 0
  },
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
const current = ref(1)

watch(() => props.modelValue, (newValue) => {
  current.value = newValue
}, {
  immediate: true
})

function change () {
  emit('change', current.value)
  if (parentProps) {
    validateBlurOrChange('change')
  }
}

function subClick () {
  if ((props.min && current.value - 1 < props.min) || props.disabled) return
  current.value = current.value - 1
  emit('add', current.value)
  emit('update:modelValue', current.value)
  change()
}
function addClick () {
  if ((props.max && current.value + 1 > props.max) || props.disabled) return
  current.value = current.value + 1
  emit('add', current.value)
  emit('update:modelValue', current.value)
  change()
}

function filter (value) {
  value = String(value).replace(/[^0-9.-]/g, '')
  if (props.integer && value.indexOf('.') !== -1) {
    value = value.split('.')[0]
  }
  return value
}

function handleInput (e) {
  const { value } = e.target
  const formatted = filter(value)
  current.value = Number(formatted)
  emit('update:modelValue', current.value)
}
</script>
<script>
export default {
  name: 'UvStepper'
}
</script>

<style lang="scss" scoped>
.uv-stepper {
  display: flex;
  gap: 2px;
  align-items: center;
  input {
    width: 100%;
    height: 100%;
    border: none;
    text-align: center;
    color: #323233;
    background-color: #f2f3f5;
    outline: none;
  }

  @mixin common {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2px;
    background-color: #f2f3f5;
  }
  .uv-stepper-minus {
    @include common;

    border-radius: 4px 0 0 4px;
    &:active {
      background-color: #f7f8f9;
    }
  }
  .uv-stepper-input {
    @include common;

    width: 28px;
  }
  .uv-stepper-add {
    @include common;

    border-radius: 0 4px  4px 0;
    &:active {
      background-color: #f7f8f9;
    }
  }
  .uv-stepper-disabled {
    background-color: #f7f8fa;
    cursor: not-allowed;
  }
}
</style>
