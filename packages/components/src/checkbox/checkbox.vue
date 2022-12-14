<template>
  <div
    class="uv-check-box"
    ref="checkboxRef"
    :class="uvCheckBoxClass"
    @click="change"
  >
    <div
      v-if="labelPosition==='left'"
      class="uv-check-box-left"
    >
      <slot>
        {{ label }}
      </slot>
    </div>
    <div
      class="uv-check-box-icon"
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
      class="uv-check-box-right"
    >
      <slot>
        {{ label }}
      </slot>
    </div>
  </div>
</template>

<script setup>
import './index.scss'
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

const checkboxRef = ref(null)

const context = reactive({
  $el: checkboxRef,
  label: props.label,
  isSelect: false
})

const { props: parentProps, updateItem, index } = useParent('checkbox-group', context)

onMounted(() => {
  if (parentProps && parentProps.modelValue.find(item => item === context.label)) {
    context.isSelect = true
  }
})

const emit = defineEmits(['update:modelValue', 'change'])

const uvCheckBoxClass = computed(() => {
  return [
    props.disabled ? 'uv-check-box-disabled' : '',
    props.spaceBetween ? 'uv-check-box-space-between' : ''
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
  name: 'UvCheckbox'
}
</script>


