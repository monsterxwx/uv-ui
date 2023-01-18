<template>
  <div
    class="uv-slider"
    :style="{backgroundColor:inactiveColor,height:barHeight+'px'}"

    ref="sliderRef"
  >
    <div
      :style="{width: `${modelValue}%`,backgroundColor:activeColor,height:barHeight+'px'}"
      class="uv-slider-value"
      :class="disabled?'uv-slider-value-disabled':''"
    >
      <div
        class="uv-slider-circle"
        ref="sliderValueRef"
        @touchstart="touchstart"
        @touchmove.stop="touchmove"
        @touchend="touchend"
      >
        <slot name="button">
          <div
            class="uv-slider-circle-content"
            :style="{width:buttonSize+'px',height:buttonSize+'px'}"
          />
        </slot>
      </div>
    </div>
  </div>
</template>

<script setup>
 
import { useTouch } from '@uv-ui/hooks'
import { onMounted, ref, inject } from 'vue'
const touch = useTouch()
const props = defineProps({
  modelValue: {
    type: Number,
    default: 0
  },
  inactiveColor: {
    type: String,
    default: '#ebedf0'
  },
  activeColor: {
    type: String,
    default: '#1989fa'
  },
  barHeight: {
    type: [String, Number],
    default: 3
  },
  buttonSize: {
    type: [String, Number],
    default: 24
  },
  disabled: {
    type: Boolean,
    default: false
  },
  min: {
    type: Number,
    default: 0
  },
  max: {
    type: Number,
    default: 100
  }
})

const { props: parentProps, validateBlurOrChange } = inject('form-item', {})

const emit = defineEmits(['update:modelValue', 'change', 'drag-start'])
const sliderRef = ref(null)
const sliderValueRef = ref(null)
const sliderWidth = ref('')

onMounted(() => {
  sliderWidth.value = sliderRef.value.offsetWidth
})
function touchstart (e) {
  touch.start(e)
  emit('drag-start', e)
}
function touchmove (e) {
  if (props.disabled) return
  touch.move(e)
  const { deltaX, startX } = touch
  const difference = Number(startX.value + deltaX.value)
  let percent = parseInt((difference / sliderWidth.value) * 100)
  if (percent < props.min) {
    percent = props.min
  } else if (percent > props.max) {
    percent = props.max
  }
  emit('update:modelValue', percent)
}

function touchend () {
  emit('change', props.modelValue)
  if (parentProps) {
    validateBlurOrChange('change')
  }
}
</script>
<script>
export default {
  name: 'UvSlider'
}
</script>


