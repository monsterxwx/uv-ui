<template>
  <div
    class="uv-stepper"
  >
    <div
      class="uv-stepper-minus"
      :class="min===modelValue?'uv-stepper-disabled':''"
      @click="subClick"
    >
      <uv-icon
        size="20"
        name="minus"
        :color="min===modelValue?'c8c9cc':'#323233'"
      />
    </div>

    <div class="uv-stepper-input">
      <input
        @input="handleInput"
        :value="modelValue"
      >
    </div>
    <div
      class="uv-stepper-add"
      :class="max===modelValue?'uv-stepper-disabled':''"
      @click="addClick"
    >
      <uv-icon
        size="20"
        name="add"
        :color="max===modelValue?'c8c9cc':'#323233'"
      />
    </div>
  </div>
</template>

<script setup>
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
  }

})
const emit = defineEmits(['update:modelValue', 'add', 'sub'])
function subClick () {
  if (props.modelValue - 1 < props.min) return
  emit('add', props.modelValue - 1)
  emit('update:modelValue', props.modelValue - 1)
}
function addClick () {
  if (props.max && props.modelValue + 1 > props.max) return
  emit('add', props.modelValue + 1)
  emit('update:modelValue', props.modelValue + 1)
}

function handleInput (e) {
  const { value } = e.target
  const reg = /^[0-9]+.{0,1}[0-9]{0,2}$/
  const isNum = reg.test(value)
  if (!isNum) {
    return
  }
  emit('update:modelValue', value - 0)
  console.log('是否数字', isNum)
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
    width: 26px;
    height: 28px;
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
