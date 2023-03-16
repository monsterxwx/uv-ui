<template>
  <div
    class="uv-radio"
    ref="radioRef"
    :class="uvRadioClass"
    @click="change"
  >
    <div
      v-if="labelPosition==='left'"
      class="uv-radio-left"
    >
      <slot>
        {{ label }}
      </slot>
    </div>
    <div
      class="uv-radio-icon"
      :style="uvStyle"
      :class="[
        (parentProps?.shape || props.shape) === 'round' ? 'round' : '',
        context.isSelect?'active':''
      ]"
    >
      <uv-icon
        v-if="context.isSelect"
        name="select"
        :color="disabled?'#c8c9cc':'#fff'"
        size="18"
      />
    </div>
    <div
      v-if="labelPosition==='right'"
      class="uv-radio-right"
    >
      <slot>
        {{ label }}
      </slot>
    </div>
  </div>
</template>

<script setup>

import uvIcon from '../icon'
import { computed, ref, reactive, onMounted } from 'vue'
import { useParent } from '@uv-ui/hooks'

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  shape: {
    type: String,
    default: 'round'
  },
  label: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  },
  checkedColor: {
    type: String
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

const radioRef = ref(null)

const context = reactive({
  $el: radioRef,
  label: props.label,
  isSelect: false
})

const { props: parentProps, updateItem, index } = useParent('radio-group', context)

onMounted(() => {
  if (parentProps && parentProps.modelValue === context.label) {
    context.isSelect = true
  }
})

const emit = defineEmits(['update:modelValue', 'change'])

const uvRadioClass = computed(() => {
  return [
    props.disabled ? 'uv-radio-disabled' : '',
    props.spaceBetween ? 'uv-radio-space-between' : ''
  ]
})
const uvStyle = computed(() => {
  return {
    border: context.isSelect ? `1px solid ${props.checkedColor || parentProps?.checkedColor}` : '',
    backgroundColor: context.isSelect ? `${props.checkedColor || parentProps?.checkedColor}` : '',
    width: `${parentProps?.iconSize || 18}px`,
    height: `${parentProps?.iconSize || 18}px`
  }
})
const change = () => {
  if (props.disabled) return
  if (parentProps && parentProps.modelValue) {
    updateItem(index.value)
  } else {
    context.isSelect = !context.isSelect
    emit('update:modelValue', !props.modelValue)
    emit('change', props.label)
  }
}
</script>
<script>
export default {
  name: 'UvRadio'
}
</script>

<style lang="scss">
:root {
  --uv-radio-icon-border: 1px solid #c8c9cc;
  --uv-radio-icon-active-border: 1px solid #1989fa;
  --uv-radio-icon-active-bg-color: #1989fa;
  --uv-radio-icon-disabled-border: 1px solid #c8c9cc;
  --uv-radio-icon-disabled-bg-color: #ebedf0;
  --uv-radio-text-margin: 8px;
  --uv-radio-text-size: 14px;
  --uv-radio-space-between-padding: 0 10px;
}
.uv-radio {
  display: flex;
  align-items: center;
  .uv-radio-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    border: var(--uv-radio-icon-border);
    transition: all 0.3s;
  }
  .active {
    border: var(--uv-radio-icon-active-border);
    background-color: var(--uv-radio-icon-active-bg-color);
  }
  .round {
    border-radius: 50%;
  }
  .uv-radio-right {
    margin-left: var(--uv-radio-text-margin);
    font-size: var(--uv-radio-text-size);
  }
  .uv-radio-left {
    margin-right: var(--uv-radio-text-margin);
    font-size: var(--uv-radio-text-size);
  }
}
.uv-radio-disabled {
  cursor: no-drop;
  color: #c8c9cc;
  .uv-radio-icon {
    border: var(--uv-radio-icon-disabled-border) !important;
    background-color: var(--uv-radio-icon-disabled-bg-color) !important;
  }
}
.uv-radio-space-between {
  justify-content: space-between;
  padding: var(--uv-radio-space-between-padding);
}
</style>
