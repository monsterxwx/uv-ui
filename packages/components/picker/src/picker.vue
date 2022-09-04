<template>
  <uvPopup
    v-model="showPop"
    v-bind="$attrs"
    position="bottom"
  >
    <div class="uv-picker">
      <div class="uv-picker-title">
        <div class="uv-picker-title-left">
          取消
        </div>
        <slot name="title">
          <div class="uv-picker-title-center">
            {{ title }}
          </div>
        </slot>
        <div class="uv-picker-title-right">
          确认
        </div>
      </div>
      <div class="uv-picker_content">
        <div
          class="uv-picker-content"
          :style="getOffsetY"
          @touchstart="touchstart"
          @touchmove="touchmove"
        >
          <div
            class="uv-picker-content-item "
            v-for="(item,index) in list"
            :key="keyName || index"
          >
            {{ item[keyName] || item }}
          </div>
        </div>
      </div>
    </div>
  </uvPopup>
</template>

<script setup>
import { ref, watch, computed } from 'vue'
import uvPopup from '../../popup/src/popup.vue'
const props = defineProps({
  show: {
    type: Boolean,
    default: false
  },
  modelValue: {
    type: String,
    default: ''
  },
  title: {
    type: String
  },
  list: {
    type: Array,
    required: true
  },
  keyName: {
    type: String
  }
})
const emit = defineEmits(['update:show', 'update:modelValue', 'change'])
const showPop = ref(false)
watch(() => props.show, (newValue) => {
  showPop.value = newValue
})
watch(() => showPop.value, (newValue) => {
  emit('update:show', newValue)
})

const offY = ref(0)
const getOffsetY = computed(() => {
  return {
    transform: `translate(-50%, ${offY.value}px)`
  }
})
function touchstart (e) {
  offY.value = e.touches[0].clientY
  // 记录开始的位置 e.touches[0].clientY
}
function touchmove (e) {
  const value = offY.value - e.touches[0].clientY
  offY.value = value >= 0 ? value : -value
  console.log('move', offY.value)
  // 计算差值offY，然后修改列表transform的translate属性
}

</script>
<script>
export default {
  name: 'UvPicker'
}
</script>

<style lang="scss" scoped>
.uv-picker {
  &-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    &-left {
      color: #969799;
    }
    &-center {
      font-size: 16px;
      font-weight: 700;
      color: #323233;
    }
    &-right {
      color: #576b95;
    }
  }
  &_content {
    position: relative;
    display: flex;
    overflow: hidden;
    height: 254px;
    cursor: grab;
    .uv-picker-content {
      position: absolute;
      left: 50%;
      transition: all 0.3s;
      transition-timing-function: cubic-bezier(0.23, 1, 0.68, 1);
      transform: translate(-50%, 50%);
      flex: 1;
      &-item {
        padding: 20px;
        font-size: 16px;
        white-space: nowrap;
        color: #323233;
      }
    }
    &::after {
      position: absolute;
      top: 58%;
      width: 375px;
      height: 1px;
      background-color: #f7f8f9;
      content: "";
    }
    &::before {
      position: absolute;
      top: 40%;
      width: 375px;
      height: 1px;
      background-color: #f7f8f9;
      content: "";
    }
  }
}
</style>
