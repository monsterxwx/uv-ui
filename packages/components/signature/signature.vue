<template>
  <div class="uv-signature" :style="{height:height}">
    <div class="uv-signature-content" ref="wrapRef">
      <canvas
        ref="canvasRef"
        :width="state.width"
        :height="state.height"
        @touchstartPassive="touchStart"
        @touchmove="touchMove"
        @touchend="touchEnd"
      />
    </div>
    <slot name="footer">
      <div class="uv-signature-footer">
        <div class="uv-signature-footer-clear" @click="clear">
          {{ clearButtonText }}
        </div>
        <div class="uv-signature-footer-confim" @click="submit">
          {{ confirmButtonText }}
        </div>
      </div>
    </slot>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { useRect } from '../../hooks/index'

const props = defineProps({
  width: {
    type: String,
    default: '100%'
  },
  height: {
    type: String,
    default: '200px'
  },
  lineWidth: {
    type: Number,
    default: 3
  },
  penColor: {
    type: String,
    default: '#000'
  },
  exportImgType: {
    type: String,
    default: 'png'
  },
  clearButtonText: {
    type: String,
    default: '清空'
  },
  confirmButtonText: {
    type: String,
    default: '确认'
  }
})

const emit = defineEmits(['start', 'signing', 'end', 'clear', 'submit'])

const wrapRef = ref(null)
const canvasRef = ref(null)

const state = reactive({
  width: 0,
  height: 0,
  ctx: null
})

let canvasRect = ''

onMounted(() => {
  state.ctx = canvasRef.value?.getContext('2d')
  state.width = wrapRef.value?.offsetWidth || 0
  state.height = wrapRef.value?.offsetHeight || 0
})

const touchStart = () => {
  if (!state.ctx) {
    return false
  }

  state.ctx.beginPath()
  state.ctx.lineWidth = props.lineWidth
  state.ctx.strokeStyle = props.penColor
  canvasRect = useRect(canvasRef)

  emit('start')
}

const touchMove = (event) => {
  if (!state.ctx) {
    return false
  }

  const touch = event.touches[0]
  const mouseX = touch.clientX - (canvasRect?.left || 0)
  const mouseY = touch.clientY - (canvasRect?.top || 0)

  state.ctx.lineCap = 'round'
  state.ctx.lineJoin = 'round'
  state.ctx?.lineTo(mouseX, mouseY)
  state.ctx?.stroke()

  emit('signing', event)
}

const touchEnd = (event) => {
  emit('end')
}

const clear = () => {
  if (state.ctx) {
    state.ctx.clearRect(0, 0, state.width, state.height)
    state.ctx.closePath()
  }
  emit('clear')
}

const isCanvasEmpty = (canvas) => {
  const empty = document.createElement('canvas')
  empty.width = canvas.width
  empty.height = canvas.height
  return canvas.toDataURL() === empty.toDataURL()
}

const submit = () => {
  const canvas = canvasRef.value
  if (!canvas) {
    return
  }

  const isEmpty = isCanvasEmpty(canvas)
  const image = isEmpty
    ? ''
    : canvas.toDataURL(
            `image/${props.exportImgType}`,
            props.exportImgType === 'jpg' ? 0.9 : null
    )

  emit('submit', {
    image,
    canvas
  })
}
defineExpose({
  clear,
  submit
})

</script>

<script>
export default {
  name: 'UvSignature'
}
</script>

<style lang="scss">
:root {
  --uv-signature-default-gap: 5px;
  --uv-signature-content-border: 1px dotted #dadada;
  --uv-signature-content-border-radius: 8px;
  --uv-signature-content-bg-color: #ffffff;
  --uv-signature-footer-button-text-padding: 8px 16px;
  --uv-signature-footer-button-text-size: 12px;
  --uv-signature-footer-button-border-radius: 4px;
  --uv-signature-footer-clear-button-border: 1px solid #dcdee0;
  --uv-signature-footer-clear-button-color: #323233;
  --uv-signature-footer-clear-button-bg-color: #ffffff;
  --uv-signature-footer-confim-button-color: #ffffff;
  --uv-signature-footer-confim-button-bg-color: #1989fa;
}
.uv-signature {
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: var(--uv-signature-default-gap);
  .uv-signature-content {
    overflow: hidden;
    width: 100%;
    height: 100%;
    border: var(--uv-signature-content-border);
    border-radius: var(--uv-signature-content-border-radius);
    background-color: var(--uv-signature-content-bg-color);
  }
  .uv-signature-footer {
    display: flex;
    justify-content: flex-end;
    gap: var(--uv-signature-default-gap);
    .uv-signature-footer-clear,
    .uv-signature-footer-confim {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: var(--uv-signature-footer-button-text-padding);
      font-size: var(--uv-signature-footer-button-text-size);
      border-radius: var(--uv-signature-footer-button-border-radius);
    }
    .uv-signature-footer-clear {
      border: var(--uv-signature-footer-clear-button-border);
      color: var(--uv-signature-footer-clear-button-color);
      background-color: var(--uv-signature-footer-clear-button-bg-color);
    }
    .uv-signature-footer-confim {
      color: var(--uv-signature-footer-confim-button-color);
      background-color: var(--uv-signature-footer-confim-button-bg-color);
    }
  }
}

</style>
