<template>
  <div class="uv-text-ellipsis" ref="textEllipsisRef">
    {{ expanded?content:text }}
    <span @click="clickAction" class="uv-text-ellipsis-action-text">
      {{ expanded ? collapseText : expandText }}
    </span>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'
import { pxToNum } from '../../utils'
const props = defineProps({
  content: {
    type: String,
    default: ''
  },
  rows: {
    type: [String, Number],
    default: 1
  },
  expandText: {
    type: String,
    default: ''
  },
  collapseText: {
    type: String,
    default: ''
  },
  dots: {
    type: String,
    default: '...'
  }
})

const emit = defineEmits(['clickAction'])

const textEllipsisRef = ref()
const hasAction = ref(false)
const expanded = ref(false)
const text = ref('')

const cloneContainer = () => {
  if (!textEllipsisRef.value) return

  const originStyle = window.getComputedStyle(textEllipsisRef.value)
  const container = document.createElement('div')
  const styleNames = Array.prototype.slice.apply(originStyle)
  styleNames.forEach((name) => {
    container.style.setProperty(name, originStyle.getPropertyValue(name))
  })

  container.style.position = 'fixed'
  container.style.zIndex = '-9999'
  container.style.top = '-9999px'
  container.style.height = 'auto'
  container.style.minHeight = 'auto'
  container.style.maxHeight = 'auto'

  container.innerText = props.content
  document.body.appendChild(container)
  return container
}

const calcEllipsisText = (container, maxHeight) => {
  const { dots, content, expandText } = props
  let left = 0
  let right = content.length
  let res = -1

  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    container.innerText = content.slice(0, mid) + dots + expandText
    if (container.offsetHeight <= maxHeight) {
      left = mid + 1
      res = mid
    } else {
      right = mid - 1
    }
  }
  return content.slice(0, res) + dots
}

const calcEllipsised = () => {
  const container = cloneContainer()
  if (!container) return
  const { paddingBottom, paddingTop, lineHeight } = container.style
  const maxHeight =
        (Number(props.rows) + 0.5) * pxToNum(lineHeight) +
        pxToNum(paddingTop) +
        pxToNum(paddingBottom)
  if (maxHeight < container.offsetHeight) {
    hasAction.value = true
    text.value = calcEllipsisText(container, maxHeight)
  } else {
    hasAction.value = false
    text.value = props.content
  }

  document.body.removeChild(container)
}

const clickAction = (event) => {
  expanded.value = !expanded.value
  emit('clickAction', event)
}

onMounted(() => {
  calcEllipsised()
})

watch(() => [props.content, props.rows], calcEllipsised)

</script>
<script>
export default {
  name: 'UvTextEllipsis'
}
</script>

<style lang="scss">
:root {
  --uv-text-ellipsis-action-text-color: #1989fa;
  --uv-text-ellipsis-line-height: 1.6;
  --uv-text-ellipsis-color: #323233;
  --uv-text-ellipsis-font-size: 14px;
}
.uv-text-ellipsis {
  font-size: var(--uv-text-ellipsis-font-size);
  white-space: pre-wrap;
  color: var(--uv-text-ellipsis-color);
  line-height: var(--uv-text-ellipsis-line-height);
  word-break: break-word;
  .uv-text-ellipsis-action-text {
    color: var(--uv-text-ellipsis-action-text-color);
  }
}

</style>
