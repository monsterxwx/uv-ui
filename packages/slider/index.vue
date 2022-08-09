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
        @touchmove.stop="throttleMove"
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
import { throttle } from '../utils'
import { onMounted, ref } from 'vue'
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
const emit = defineEmits(['update:modelValue', 'change', 'drag-start'])
const sliderRef = ref(null)
const sliderValueRef = ref(null)
const sliderWidth = ref('')
const sliderValueWidth = ref(0)

onMounted(() => {
  sliderWidth.value = sliderRef.value.offsetWidth
})
const touchMoveValue = ref('')
function touchstart (e) {
  emit('drag-start', e)
  sliderValueWidth.value = sliderValueRef.value.offsetWidth
}
function touchmove (e) {
  if (props.disabled) return
  touchMoveValue.value = e.touches[0].clientX
  const difference = touchMoveValue.value - sliderValueWidth.value
  let percent = parseInt((difference / sliderWidth.value) * 100)
  if (percent < props.min) {
    percent = props.min
  } else if (percent > props.max) {
    percent = props.max
  }
  emit('update:modelValue', percent)
}

const throttleMove = (e) => {
  throttle(touchmove, 30)(e)
}

function touchend () {
  emit('change', props.modelValue)
}
</script>
<script>
export default {
  name: 'UvSlider'
}
</script>

<style lang="scss" scoped>
.uv-slider {
  position: relative;
  margin: 10px 0;
  width: 100%;
  height: 3px;
  border-radius: 50px;
  .uv-slider-value {
    position: absolute;
    top: 0;
    left: 0;
    padding: 0 10px;
    height: 3px;
    border-radius: 50px;
    .uv-slider-circle {
      position: absolute;
      right: -1px;
      cursor: grab;
      transform: translateY(-50%);
      &-content {
        width: 24px;
        height: 24px;
        border-radius: 50%;
        background-color: #ffffff;
        box-shadow: 0 1px 2px rgb(0 0 0 / 50%);
      }
    }
  }
  .uv-slider-value-disabled {
    background-color: #88c0fa !important;
    .uv-slider-circle-content {
      cursor: not-allowed;
      box-shadow: 0 1px 2px rgb(0 0 0 / 40%);
    }
  }
}

</style>
