<template>
  <div class="uv-circle-progress" :style="{width:size+'px',height:size+'px'}">
    <svg
      class="uv-circle-progress-svg"
      :viewBox="`0 0 ${viewBoxSize} ${viewBoxSize}`"
      :style="svgStyle"
    >
      <defs v-if="isObject(color)">
        <linearGradient
          :id="id"
          x1="100%"
          y1="0%"
          x2="0%"
          y2="0%"
        >
          <stop
            v-for="(key,index) in stopsList"
            :key="index"
            :offset="key"
            :stop-color="color[key]"
          />
        </linearGradient>
      </defs>
      <!-- 轨道 -->
      <path class="uv-circle-progress-layer" :style="layerStyle" :d="path" />
      <!-- 进度 -->
      <path class="uv-circle-progress-hover" :style="hoverStyle" :d="path" />
    </svg>
    <slot>
      <div class="uv-circle-progress-text">
        {{ text }}
      </div>
    </slot>
  </div>
</template>

<script setup>
import { computed, watch } from 'vue'
import { isObject } from '../../utils'
import { useRequestAnimationFrame } from '../../hooks'

const { requestAnimationFrame, cancelAnimationFrame } = useRequestAnimationFrame()

const props = defineProps({
  size: {
    type: [String, Boolean]
  },
  text: {
    type: String,
    default: ''
  },
  strokeWidth: {
    type: [String, Number],
    default: 40
  },
  // 进度起始位置，可选值为 left、right、bottom
  startPosition: {
    type: String,
    default: 'top'
  },
  color: {
    type: [String, Object],
    default: '#1989fa'
  },
  // 轨道颜色
  layerColor: {
    type: String
  },
  // 填充颜色
  fill: {
    type: String,
    default: 'none'
  },
  // 是否顺时针增加
  clockwise: {
    type: Boolean,
    default: true
  },
  // 进度条端点的形状，可选值为 square butt
  strokeLinecap: {
    type: String,
    default: 'round'
  },
  currentRate: {
    type: Number
  },
  // 目标进度
  rate: {
    type: [Number, String],
    default: 100
  },
  // 动画速度
  speed: {
    type: [Number, String],
    default: 0
  }
})

const emit = defineEmits(['update:currentRate'])

let uid = 0

const id = `uv-circle-${uid++}`

function getPath (clockwise, viewBoxSize) {
  const sweepFlag = clockwise ? 1 : 0
  return `M ${viewBoxSize / 2} ${
    viewBoxSize / 2
  } m 0, -500 a 500, 500 0 1, ${sweepFlag} 0, 1000 a 500, 500 0 1, ${sweepFlag} 0, -1000`
}

const viewBoxSize = computed(() => +props.strokeWidth + 1000)

const path = computed(() => getPath(props.clockwise, viewBoxSize.value))

const svgStyle = computed(() => {
  const ROTATE_ANGLE_MAP = {
    top: 0,
    right: 90,
    bottom: 180,
    left: 270
  }
  const angleValue = ROTATE_ANGLE_MAP[props.startPosition]
  if (angleValue) {
    return {
      transform: `rotate(${angleValue}deg)`
    }
  } else {
    return {
      transform: 'rotate(0deg)'
    }
  }
})

const stopsList = computed(() => {
  if (isObject(props.color)) {
    return Object.keys(props.color).sort((a, b) => parseFloat(a) - parseFloat(b))
  } else {
    return []
  }
})

const layerStyle = computed(() => {
  return {
    fill: props.fill,
    stroke: props.layerColor,
    strokeWidth: props.strokeWidth + 'px'
  }
})

const hoverStyle = computed(() => {
  const PERIMETER = 3140
  const { strokeWidth, currentRate, strokeLinecap } = props
  const offset = (PERIMETER * currentRate) / 100
  const color = isObject(props.color) ? `url(#${id})` : props.color

  return {
    stroke: color,
    strokeLinecap,
    strokeWidth: `${+strokeWidth + 1}px`,
    strokeDasharray: `${offset}px ${PERIMETER}px`
  }
})

const format = (rate) => Math.min(Math.max(+rate, 0), 100)

watch(
  () => props.rate,
  (rate) => {
    let rafId
    const startTime = Date.now()
    const startRate = props.currentRate
    const endRate = format(rate)
    const duration = Math.abs(
      ((startRate - endRate) * 1000) / +props.speed
    )

    const animate = () => {
      const now = Date.now()
      const progress = Math.min((now - startTime) / duration, 1)
      const rate = progress * (endRate - startRate) + startRate

      emit('update:currentRate', format(parseFloat(rate.toFixed(1))))

      if (endRate > startRate ? rate < endRate : rate > endRate) {
        rafId = requestAnimationFrame(animate)
      }
    }

    if (props.speed) {
      if (rafId) {
        cancelAnimationFrame(rafId)
      }
      rafId = requestAnimationFrame(animate)
    } else {
      emit('update:currentRate', endRate)
    }
  },
  { immediate: true }
)

</script>
<script>
export default {
  name: 'UvCircleProgress'
}
</script>

<style lang="scss">
:root {
  --uv-circle-progress-size: 100px;
  --uv-circle-progress-layer-color: #ffffff;
  --uv-circle-progress-hover-color: #1989fa;
  --uv-circle-progress-svg-z-index: 1;
  --uv-circle-progress-text-font-size: 14px;
  --uv-circle-progress-text-font-weight: 700;
  --uv-circle-progress-text-color: #323233;
}
.uv-circle-progress {
  position: relative;
  display: inline-block;
  width: var(--uv-circle-progress-size);
  height: var(--uv-circle-progress-size);
  text-align: center;
  &-svg {
    position: absolute;
    top: 0;
    left: 0;
    z-index: var(--uv-circle-progress-svg-z-index);
    width: 100%;
    height: 100%;
  }
  &-layer {
    stroke: var(--uv-circle-progress-layer-color);
  }
  &-hover {
    fill: none;
    stroke: var(--uv-circle-progress-hover-color);
    stroke-linecap: round;
  }
  &-text {
    position: absolute;
    top: 50%;
    left: 50%;
    font-size: var(--uv-circle-progress-text-font-size);
    font-weight: var(--uv-circle-progress-text-font-weight);
    color: var(--uv-circle-progress-text-color);
    transform: translate(-50%, -50%);
  }
}

</style>
