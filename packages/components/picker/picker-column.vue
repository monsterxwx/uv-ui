<template>
  <div
    class="uv-picker-column"
    @touchstart="touchstart"
    @touchmove="touchmove"
    @touchend="touchend"
  >
    <ul
      class="uv-picker-content-box"
      ref="pickerBoxRef"
      :style="getOffsetY"
    >
      <li
        class="uv-picker-content-item"
        v-for="(item, idx) in list"
        :key="idx"
        :style="pickerItemStyle(idx)"
      >
        {{ item[labelName] }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useThrottle } from '../../hooks'

const props = defineProps({
  list: {
    type: Array,
    default: () => ([])
  },
  keyName: {
    type: [String, Number],
    default: 'value'
  },
  labelName: {
    type: [String, Number],
    default: 'label'
  },
  value: {
    type: [String, Number],
    default: ''
  },
  columnsType: {
    type: String
  }
})

const emit = defineEmits(['change', 'first-open'])

const offY = ref(null)

const getOffsetY = computed(() => {
  if (typeof offY.value === 'number') {
    return {
      transform: `translate(-50%, ${offY.value}px)`
    }
  } else {
    return {
      transform: 'translate(-50%, -18px)'
    }
  }
})

const activeIndex = ref(0)
const colors = ['gray', '#ccc', '#ddd', '#eee']
const scales = [0.96, 0.9, 0.88, 0.84]

function pickerItemStyle (idx) {
  let color = '#000'; let scale = 1; const len = colors.length - 1
  if (idx > activeIndex.value) {
    const _idx = idx - activeIndex.value > len ? len : idx - activeIndex.value - 1
    color = colors[_idx]
    scale = scales[_idx]
  } else if (idx < activeIndex.value) {
    const _idx = activeIndex.value - idx > len ? len : activeIndex.value - idx - 1
    color = colors[_idx]
    scale = scales[_idx]
  }
  return { color, transform: `scale(${scale})` }
}

function getCurrentValue () {
  // 当前index获取不到list数组值时默认取list最后一条数据
  if (!props.list[activeIndex.value]) {
    activeIndex.value = props.list.length - 1
    changeOffY(activeIndex.value)
  }
  return props.list[activeIndex.value][props.keyName]
}

const defaultValue = ref('')

// 修改offY
const changeOffY = (index) => {
  offY.value = -36 * index - 18
}

watch(() => props.list, (newValue) => {
  defaultValue.value = getCurrentValue()
  emit('first-open', defaultValue.value)
  if (props.columnsType === 'cascade') {
    activeIndex.value = 0
    changeOffY(0)
    emit('first-open', newValue[0][props.keyName])
  }
}, {
  immediate: true
})

// 双向绑定值时当有默认值则自动显示到当前值位置
watch(() => props.value, (newValue) => {
  if (newValue && newValue !== defaultValue.value) {
    const currentIndex = props.list.findIndex(item => item[props.keyName] === newValue)
    if (currentIndex > -1) {
      activeIndex.value = currentIndex
      changeOffY(currentIndex)
      emit('first-open', newValue)
    }
  }
}, {
  immediate: true
})

let startY = null
function touchstart (event) {
  const transformY = offY.value || -18
  startY = event.touches[0].clientY - transformY
}
function touchmove (event) {
  move(event)
}

function touchend () {
  // 重置当前位置
  setTimeout(() => {
    changeOffY(activeIndex.value)
  }, 100)
}

const pickerBoxRef = ref(null)
// 移动的实现
const move = useThrottle((e) => {
  offY.value = e.touches[0].clientY - startY
  if (offY.value > 36) {
    offY.value = 36
  } else if (offY.value < -pickerBoxRef.value.offsetHeight - 36) {
    offY.value = -pickerBoxRef.value.offsetHeight - 36
  }
  // 计算当前位置的就近下标
  activeIndex.value = Math.abs(Math.ceil(offY.value / 36))
  // 判断顶部和底部的一个界限，然后做一个位置的重置
  if (activeIndex.value <= 0 || offY.value > 0) {
    activeIndex.value = 0
  } else if (activeIndex.value > props.list.length - 1 || offY.value < -pickerBoxRef.value.offsetHeight - 18) {
    activeIndex.value = props.list.length - 1
  }

  emit('change', getCurrentValue())
}, 20)

</script>

<style lang="scss">
:root {
  --uv-picker-content-item-font-size: 16px;
}
.uv-picker-column {
  position: relative;
  min-width: 0;
  flex: 1 0;
  height: 100%;
  .uv-picker-content-box {
    position: absolute;
    top: 50%;
    left: 50%;
    margin: 0;
    padding: 0;
    width: 100%;
    list-style: none;
    transition: all 0.2s;
    transition-timing-function: cubic-bezier(0.23, 1, 0.68, 1);
    .uv-picker-content-item {
      height: 36px;
      font-size: var(--uv-picker-content-item-font-size);
      text-align: center;
      transition: color 0.5s;
      line-height: 36px;
    }
  }
}
</style>
