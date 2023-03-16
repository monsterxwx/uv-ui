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

<style lang="scss">
:root {
  --uv-slider-height: 3px;
  --uv-slider-border-radius: 50px;
  --uv-slider-circle-content-size: 24px;
  --uv-slider-circle-content-bg-color: #ffffff;
  --uv-slider-circle-content-box-shadow: 0 1px 2px rgb(0 0 0 / 50%);
  --uv-slider-value-disabled-bg-color: #88c0fa !important;
  --uv-slider-disabled-circle-content-box-shadow: 0 1px 2px rgb(0 0 0 / 40%);
}
.uv-slider {
  position: relative;
  margin: 10px 0;
  width: 100%;
  height: var(--uv-slider-height);
  border-radius: var(--uv-slider-border-radius);
  .uv-slider-value {
    position: absolute;
    top: 0;
    left: 0;
    padding: 0 10px;
    height: var(--uv-slider-height);
    border-radius: var(--uv-slider-border-radius);
    transition: all 0.1s;
    .uv-slider-circle {
      position: absolute;
      right: -1px;
      cursor: grab;
      transform: translateY(-50%);
      .uv-slider-circle-content {
        width: var(--uv-slider-circle-content-size);
        height: var(--uv-slider-circle-content-size);
        border-radius: 50%;
        background-color: var(--uv-slider-circle-content-bg-color);
        box-shadow: var(--uv-slider-circle-content-box-shadow);
      }
    }
  }
  .uv-slider-value-disabled {
    background-color: var(--uv-slider-value-disabled-bg-color);
    .uv-slider-circle-content {
      cursor: not-allowed;
      box-shadow: var(--uv-slider-disabled-circle-content-box-shadow);
    }
  }
}
</style>
