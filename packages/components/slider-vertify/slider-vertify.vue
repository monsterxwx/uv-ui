<template>
  <div
    class="uv-slider-vertify"
    :style="{
      width: width + 'px',
      margin: '0 auto',
      display: visible ? '' : 'none',
    }"
    @mousemove="handleDragMove"
    @mouseup="handleDragEnd"
    @touchmove="handleDragMove"
    @touchend="handleDragEnd"
  >
    <div>
      <canvas ref="canvasRef" :width="width" :height="height" />
      <canvas
        ref="blockRef"
        class="uv-slider-vertify-block"
        :width="width"
        :height="height"
        @mousedown="handleDragStart"
        @touchstart="handleDragStart"
      />
    </div>
    <div
      :class="sliderClass"
      :style="{
        pointerEvents: isLoading ? 'none' : 'auto',
        width: width + 'px',
      }"
    >
      <div class="uv-slider-vertify-slider-mask" :style="{ width: sliderLeft + 'px' }">
        <div
          class="uv-slider-vertify-slider"
          :style="{ left: sliderLeft + 'px' }"
          @mousedown="handleDragStart"
          @touchstart="handleDragStart"
        >
          <div class="uv-slider-vertify-slider-icon">
            &rarr;
          </div>
        </div>
      </div>
      <div class="uv-slider-vertify-slider-text">
        {{ textTip }}
      </div>
    </div>
    <div
      class="uv-slider-vertify-refresh-icon"
      @click="handleRefresh"
      :style="{ backgroundImage: `url(${refreshIcon})` }"
    />
    <div
      class="uv-slider-vertify-loading-container"
      :style="{
        width: width + 'px',
        height: height + 'px',
        display: isLoading ? '' : 'none',
      }"
    >
      <div class="uv-slider-vertify-loading-icon" />
      <span>加载中...</span>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'

const props = defineProps({
  // canvas宽度
  width: {
    type: Number,
    default: 320
  },
  // canvas高度
  height: {
    type: Number,
    default: 160
  },
  visible: {
    type: Boolean,
    default: true
  },
  refreshIcon: {
    type: String,
    default: 'http://cdn.dooring.cn/dr/icon12.png'
  },
  // 滑块边长
  l: {
    type: Number,
    default: 42
  },
  // 滑块半径
  r: {
    type: Number,
    default: 9
  },
  imgUrl: {
    type: String,
    default: ''
  },
  text: {
    type: String,
    default: ''
  },
  // 拖拽滑块时的回调, 参数为当前滑块拖拽的距离
  onDraw: {
    type: Function,
    default: (l) => {}
  },
  //  用户的自定义验证逻辑
  onCustomVertify: {
    type: Function,
    default: (VertifyType) => VertifyType
  },
  // 重制刷新前的回调
  onBeforeRefresh: {
    type: Function,
    default: () => {}
  },
  // 验证成功回调
  onSuccess: {
    type: Function,
    default: () => {}
  },
  // 验证失败回调
  onFail: {
    type: Function,
    default: () => {}
  },
  // 刷新时回调
  onRefresh: {
    type: Function,
    default: () => {}
  }

})

const isLoading = ref(false)
const sliderLeft = ref(0)
const sliderClass = ref('uv-slider-vertify-container')
const textTip = ref(props.text)
const canvasRef = ref(null)
const blockRef = ref(null)
const imgRef = ref(null)
const isMouseDownRef = ref(false)
const trailRef = ref([])
const originXRef = ref(0)
const originYRef = ref(0)
const xRef = ref(0)
const yRef = ref(0)
const PI = Math.PI
const L = props.l + props.r * 2 + 3 // 滑块实际边长

function getRandomNumberByRange (start, end) {
  return Math.round(Math.random() * (end - start) + start)
}

function sum (x, y) {
  return x + y
}

function square (x) {
  return x * x
}

// operation: "fill" | "clip"
const drawPath = (ctx, x, y, operation) => {
  const { l, r } = props
  ctx.beginPath()
  ctx.moveTo(x, y)
  ctx.arc(x + l / 2, y - r + 2, r, 0.72 * PI, 2.26 * PI)
  ctx.lineTo(x + l, y)
  ctx.arc(x + l + r - 2, y + l / 2, r, 1.21 * PI, 2.78 * PI)
  ctx.lineTo(x + l, y + l)
  ctx.lineTo(x, y + l)
  ctx.arc(x + r - 2, y + l / 2, r + 0.4, 2.76 * PI, 1.24 * PI, true)
  ctx.lineTo(x, y)
  ctx.lineWidth = 1
  ctx.fillStyle = 'rgba(255, 255, 255, 0.7)'
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.7)'
  ctx.stroke()
  ctx.globalCompositeOperation = 'destination-over'
  operation === 'fill' ? ctx.fill() : ctx.clip()
}

const getRandomImgSrc = () => {
  const { imgUrl, width, height } = props
  return (
    imgUrl ||
    `https://picsum.photos/id/${getRandomNumberByRange(0, 1084)}/${width}/${height}`
  )
}

const createImg = (onload) => {
  const img = new Image()
  img.crossOrigin = 'Anonymous'
  img.onload = onload
  img.onerror = () => {
    img.setSrc(getRandomImgSrc()) // 图片加载失败的时候重新加载其他图片
  }

  img.setSrc = (src) => {
    img.src = src
  }
  img.setSrc(getRandomImgSrc())
  return img
}

const draw = (img) => {
  const { width, height, r } = props
  const canvasCtx = canvasRef.value.getContext('2d')
  const blockCtx = blockRef.value.getContext('2d')
  // 随机位置创建拼图形状
  xRef.value = getRandomNumberByRange(L + 10, width - (L + 10))
  yRef.value = getRandomNumberByRange(10 + r * 2, height - (L + 10))
  drawPath(canvasCtx, xRef.value, yRef.value, 'fill')
  drawPath(blockCtx, xRef.value, yRef.value, 'clip')

  // 画入图片
  canvasCtx.drawImage(img, 0, 0, width, height)
  blockCtx.drawImage(img, 0, 0, width, height)

  // 提取滑块并放到最左边
  const y1 = yRef.value - r * 2 - 1
  const ImageData = blockCtx.getImageData(xRef.value - 3, y1, L, L)
  blockRef.value.width = L
  blockCtx.putImageData(ImageData, 0, y1)
}

const initImg = () => {
  const img = createImg(() => {
    isLoading.value = false
    draw(img)
  })
  imgRef.value = img
}
const reset = () => {
  const { width, height, onBeforeRefresh } = props
  const canvasCtx = canvasRef.value.getContext('2d')
  const blockCtx = blockRef.value.getContext('2d')
  // 重置样式
  sliderLeft.value = 0
  sliderClass.value = 'uv-slider-vertify-container'
  blockRef.value.width = width
  blockRef.value.style.left = 0 + 'px'

  // 清空画布
  canvasCtx.clearRect(0, 0, width, height)
  blockCtx.clearRect(0, 0, width, height)

  onBeforeRefresh && onBeforeRefresh()

  // 重新加载图片
  isLoading.value = true
  imgRef.value.setSrc(getRandomImgSrc())
}

const handleRefresh = () => {
  const { onRefresh } = props
  reset()
  typeof onRefresh === 'function' && onRefresh()
}

const verify = () => {
  const arr = trailRef.value // 拖动时y轴的移动距离
  const average = arr.reduce(sum) / arr.length
  const deviations = arr.map((x) => x - average)
  const stddev = Math.sqrt(deviations.map(square).reduce(sum) / arr.length)
  const left = parseInt(blockRef.value.style.left)
  return {
    spliced: Math.abs(left - xRef.value) < 10,
    verified: stddev !== 0, // 简单验证拖动轨迹，为零时表示Y轴上下没有波动，可能非人为操作
    left,
    destX: xRef.value
  }
}

const handleDragStart = function (e) {
  originXRef.value = e.clientX || e.touches[0].clientX
  originYRef.value = e.clientY || e.touches[0].clientY
  isMouseDownRef.value = true
}

const handleDragMove = (e) => {
  const { width, onDraw } = props
  if (!isMouseDownRef.value) return false
  e.preventDefault()
  const eventX = e.clientX || e.touches[0].clientX
  const eventY = e.clientY || e.touches[0].clientY
  const moveX = eventX - originXRef.value
  const moveY = eventY - originYRef.value
  if (moveX < 0 || moveX + 38 >= width) return false
  sliderLeft.value = moveX
  const blockLeft = ((width - 40 - 20) / (width - 40)) * moveX
  blockRef.value.style.left = blockLeft + 'px'

  sliderClass.value = 'uv-slider-vertify-container uv-slider-vertify-container-active'
  trailRef.value.push(moveY)
  onDraw && onDraw(blockLeft)
}

const handleDragEnd = (e) => {
  const { onCustomVertify, onSuccess, onFail } = props
  if (!isMouseDownRef.value) return false
  isMouseDownRef.value = false
  const eventX = e.clientX || e.changedTouches[0].clientX
  if (eventX === originXRef.value) return false
  sliderClass.value = 'uv-slider-vertify-container'
  const { spliced, verified } = onCustomVertify ? onCustomVertify(verify()) : verify()
  if (spliced) {
    if (verified) {
      sliderClass.value = 'uv-slider-vertify-container uv-slider-vertify-container-success'
      typeof onSuccess === 'function' && onSuccess()
    } else {
      sliderClass.value = 'uv-slider-vertify-container uv-slider-vertify-container-fail'
      textTip.value = '请再试一次'
      reset()
    }
  } else {
    sliderClass.value = 'uv-slider-vertify-container uv-slider-vertify-container-fail'
    typeof onFail === 'function' && onFail()
    setTimeout(reset.bind(this), 1000)
  }
}

onMounted(() => {
  initImg()
})

watch(
  () => props.visible,
  () => {
    if (props.visible) {
      imgRef.value ? reset() : initImg()
    }
  }
)

</script>
<script>
export default {
  name: 'UvSliderVertify'
}
</script>

<style lang="scss">
.uv-slider-vertify {
  position: relative;
  .uv-slider-vertify-block {
    position: absolute;
    top: 0;
    left: 0;
    cursor: pointer;
    cursor: grab;
  }
  .uv-slider-vertify-block:active {
    cursor: grabbing;
  }
  .uv-slider-vertify-container {
    position: relative;
    margin-top: 15px;
    height: 40px;
    border: 1px solid #e4e7eb;
    text-align: center;
    color: #45494c;
    background: #f7f9fa;
    line-height: 40px;
    .uv-slider-vertify-slider-mask {
      position: absolute;
      top: 0;
      left: 0;
      height: 40px;
      border: 0 solid #486cd6;
      background: #d1e9fe;
    }
    .uv-slider-vertify-slider {
      position: absolute;
      top: 0;
      left: 0;
      width: 40px;
      height: 40px;
      background: #ffffff;
      box-shadow: 0 0 3px rgb(0 0 0 / 30%);
      transition: background 0.2s linear;
      cursor: pointer;
      cursor: grab;
    }
    .uv-slider-vertify-slider-icon {
      font-size: 18px;
      color: #000000;
    }
    .uv-slider-vertify-slider:active {
      cursor: grabbing;
    }
    .uv-slider-vertify-slider:hover {
      background: #486cd6;
      .uv-slider-vertify-slider-icon {
        color: #ffffff;
      }
    }
  }
  .uv-slider-vertify-container-active {
    .uv-slider-vertify-slider {
      top: -1px;
      height: 38px;
      border: 1px solid #486cd6;
    }
    .uv-slider-vertify-slider-mask {
      height: 38px;
    }
    .uv-slider-vertify-slider-text {
      display: none;
    }
  }
  .uv-slider-vertify-container-success {
    .uv-slider-vertify-slider {
      top: -1px;
      height: 38px;
      background-color: #0ca14a;
    }
    .uv-slider-vertify-slider-mask {
      height: 38px;
      background-color: #d2f4ef;
    }
    .uv-slider-vertify-slider-icon {
      background-position: 0 -26px;
    }
    .uv-slider-vertify-slider-text {
      display: none;
    }
  }
  .uv-slider-vertify-container-fail {
    .uv-slider-vertify-slider {
      top: -1px;
      height: 38px;
      background-color: #f57a7a;
    }
    .uv-slider-vertify-slider-mask {
      height: 38px;
      background-color: #fce1e1;
    }
    .uv-slider-vertify-slider-icon {
      top: 14px;
      background-position: 0 -82px;
    }
    .uv-slider-vertify-slider-text {
      display: none;
    }
  }
  .uv-slider-vertify-refresh-icon {
    position: absolute;
    top: 5px;
    right: 5px;
    width: 30px;
    height: 30px;
    background-size: 32px;
    cursor: pointer;
  }
  .uv-slider-vertify-loading-container {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 310px;
    height: 155px;
    font-size: 14px;
    color: #45494c;
    background: #edf0f2;
    flex-direction: column;
  }
  .uv-slider-vertify-loading-icon {
    margin-bottom: 10px;
    width: 32px;
    height: 32px;
    background: url("http://cdn.dooring.cn/dr/icon12.png");
    background-size: 32px;
    animation: uv-slider-vertify-rotate 0.8s linear infinite;
  }

  @keyframes uv-slider-vertify-rotate {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
}

</style>
