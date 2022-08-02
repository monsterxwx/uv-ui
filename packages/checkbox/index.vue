<template>
  <div
    class="uv-check-box"
    :class="uvCheckBoxClass"
    @click="change"
  >
    <div
      v-if="labelPosition==='left'"
      class="uv-check-box-left"
    >
      <slot />
    </div>
    <div
      class="uv-check-box-icon"
      :style="uvStyle"
      :class="uvIconClass"
    >
      <svgIcon
        v-if="modelValue"
        name="select"
        :color="disabled?'#c8c9cc':'#fff'"
        size="20"
      />
    </div>
    <div
      v-if="labelPosition==='right'"
      class="uv-check-box-right"
    >
      <slot />
    </div>
  </div>
  <!-- <div class="uv-checkbox">
    <input type="checkbox">
    <span>dd</span>
  </div> -->
</template>

<script setup>

import svgIcon from '@/components/svgIcon'
import { computed } from 'vue'
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  shape: {
    type: String,
    default: 'round'
  },
  name: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  },
  checkedColor: {
    type: String,
    default: '#1989fa'
  },
  labelPosition: {
    type: String,
    default: 'right'
  },
  spaceBetween: {
    type: Boolean,
    default: false
  }

})

const emit = defineEmits(['update:modelValue', 'change'])
const uvIconClass = computed(() => {
  return [
    props.shape === 'round' ? 'round' : '',
    props.modelValue ? 'active' : ''
  ]
})
const uvCheckBoxClass = computed(() => {
  return [
    props.disabled ? 'uv-check-box-disabled' : '',
    props.spaceBetween ? 'uv-check-box-space-between' : ''
  ]
})
const uvStyle = computed(() => {
  return {
    border: props.modelValue ? `1px solid ${props.checkedColor}` : '',
    backgroundColor: props.modelValue ? `${props.checkedColor}` : ''
  }
})
const change = () => {
  if (props.disabled) return
  emit('update:modelValue', !props.modelValue)
  emit('change', props.name)
}
</script>
<script>
export default {
  name: 'UvCheckbox'
}
</script>

<style lang="scss" scoped>
// .uv-checkbox {
//   display: flex;
//   align-items: center;
//   input {
//     width: 20px;
//     height: 20px;
//     border: 1px solid #c8c9cc;
//   }
// }
.uv-check-box {
  display: flex;
  align-items: center;
  &-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
    border: 1px solid #c8c9cc;
    transition: all 0.3s;
  }
  .round {
    border-radius: 50%;
  }
  .active {
    border: 1px solid #1989fa;
    background-color: #1989fa;
  }
  &-right {
    margin-left: 8px;
    font-size: 14px;
  }
  &-left {
    margin-right: 8px;
    font-size: 14px;
  }
}
.uv-check-box-disabled {
  cursor: no-drop;
  color: #c8c9cc;
  .uv-check-box-icon {
    border: 1px solid #c8c9cc !important;
    background-color: #ebedf0 !important;
  }
}
.uv-check-box-space-between {
  justify-content: space-between;
}

</style>
