<template>
  <div class="uv-tab-wrap">
    <div
      class="uv-tab"
      :style="{backgroundColor:bgColor}"
      :class="[scroll?'uv-tab-scroll':'',shrink?'uv-tab-shrink':'']"
      ref="uvTabRef"
    >
      <div
        ref="uvTabLineRef"
        class="uv-tab-line"
        :style="{height:lineHeight,backgroundColor:lineColor}"
      />
      <div
        class="uv-tab-item"
        @click="changeIndex(index)"
        :class="currentIndex===index?'uv-tab-acitve-item':''"
        :style="{color:currentIndex===index?activeColor:color}"
        v-for="(item,index) in list"
        :key="keyName?item[keyName]:item"
      >
        <div>{{ keyName?item[keyName]:item }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue'
import { scrollLeftTo } from './utils'
const props = defineProps({
  acitveIndex: {
    type: Number,
    default: 0
  },
  bgColor: {
    type: String,
    default: '#fff'
  },
  color: {
    type: String,
    default: '#646566'
  },
  activeColor: {
    type: String,
    default: '#323233'
  },
  scroll: {
    type: Boolean,
    default: false
  },
  lineHeight: {
    type: String,
    default: '3px'
  },
  lineColor: {
    type: String,
    default: '#1989fa'
  },
  list: {
    type: Array
  },
  keyName: {
    type: String
  },
  // 收缩布局，即flex-start
  shrink: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['change'])

const uvTabRef = ref(null)
const uvTabLineRef = ref(null)
const uvTableItemListDom = ref(null)
const currentIndex = ref(0)

watch(() => props.acitveIndex, (newValue) => {
  currentIndex.value = newValue
}, {
  immediate: true
})

watch(currentIndex, (newValue) => {
  const { offsetWidth, offsetLeft } = uvTableItemListDom.value[newValue]
  setTabLine(offsetWidth, offsetLeft)
  if (props.scroll) {
    const tabDom = uvTabRef.value
    const to = offsetLeft - (tabDom.offsetWidth - offsetWidth) / 2
    scrollLeftTo(tabDom, to)
  }
})

const changeIndex = (index) => {
  emit('change', index)
  currentIndex.value = index
}

onMounted(() => {
  initTabLine()
})

const initTabLine = () => {
  uvTableItemListDom.value = uvTabRef.value.querySelectorAll('.uv-tab-item')
  const { offsetWidth, offsetLeft } = uvTableItemListDom.value[currentIndex.value]
  setTimeout(() => {
    uvTabLineRef.value.style.transition = 'transform 0.3s'
  }, 300)
  setTabLine(offsetWidth, offsetLeft)
}

const setTabLine = (width, left) => {
  uvTabLineRef.value.style.width = `${width}px`
  uvTabLineRef.value.style.transform = `translateX(${left}px)`
}

</script>
<script>
export default {
  name: 'UvTab'
}
</script>

<style>
:root {
  --uv-test: 1px;
}
</style>

<style lang="scss" scoped>
.uv-tab-wrap {
  overflow: hidden;
  .uv-tab {
    position: relative;
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 44px;
    font-size: 14px;
    background-color: #ffffff;
    .uv-tab-line {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 40px;
      height: 3px;
      border-radius: 3px;
      background-color: #1989fa;
    }
    .uv-tab-item {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #646566;
    }
    .uv-tab-acitve-item {
      font-weight: 700;
      color: #323233;
    }
  }
  .uv-tab-scroll {
    justify-content: inherit;
    overflow-x: auto;
    padding: 0 10px;
    transition: all 0.3s;
    scrollbar-width: none;
    -ms-overflow-style: none;
    gap: 0 12px;
    .uv-tab-item {
      white-space: nowrap;
    }
    &::-webkit-scrollbar {
      display: none;
    }
  }
  .uv-tab-shrink {
    justify-content: flex-start;
    padding: 0 10px;
    gap: 0 12px;
  }
}
</style>
