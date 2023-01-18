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


