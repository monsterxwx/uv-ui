<template>
  <div
    class="uv-pagination"
  >
    <div
      @click="prevClick"
      :class="[
        prevText?'uv-pagination-prev-text':'uv-pagination-prev',
        modelValue===1?'uv-pagination-prev-disabled':''
      ]"
    >
      <div v-if="prevText">
        <slot name="prev">
          {{ prevText }}
        </slot>
      </div>
      <uv-icon
        v-else
        :color="modelValue===1?disabledColor:defaultColor"
        size="14"
        name="arrow-left"
      />
    </div>
    <div class="uv-pagination-content">
      <template
        v-for="item in pageNum"
        :key="item"
      >
        <div
          @click="itemClick(item)"

          v-if="isShow(item)"

          :class="modelValue===item?'uv-pagination-content-item-active':''"
          class="uv-pagination-content-item "
        >
          {{ item }}
        </div>
      </template>
    </div>
    <div
      @click="nextClick"
      :class="[
        nextText?'uv-pagination-next-text':'uv-pagination-next',
        modelValue===pageNum?'uv-pagination-next-disabled':''
      ]"
    >
      <div v-if="nextText">
        <slot name="next">
          {{ nextText }}
        </slot>
      </div>
      <uv-icon
        v-else
        size="14"
        :color="modelValue===pageNum?disabledColor:defaultColor"
        name="arrow-right"
      />
    </div>
  </div>
</template>

<script setup>

import { computed } from 'vue'
import uvIcon from '../icon'
const props = defineProps({
  // 每页显示条数
  pageSize: {
    type: Number,
    default: 10
  },
  // 当前页数
  modelValue: {
    type: Number,
    default: 1
  },
  // 总数
  total: {
    type: Number,
    default: 0
  },
  // 替代图标上一页文字
  prevText: {
    type: String
  },
  // 替代图标下一页文字
  nextText: {
    type: String
  },
  disabledColor: {
    type: String,
    default: '#bbbec4'
  },
  defaultColor: {
    type: String,
    default: '#606266'
  }

})

const pageNum = computed(() => {
  return Math.ceil(props.total / props.pageSize)
})

const isShow = (idx) => {
  if (props.modelValue <= 3 && idx <= 5) {
    return true
  } else if (props.modelValue > 3 && props.modelValue + 2 < pageNum.value) {
    const value = Math.abs(props.modelValue - idx)
    if (value <= 2) {
      return true
    } else {
      return false
    }
  } else if (props.modelValue + 2 >= pageNum.value) {
    if (idx + 4 >= pageNum.value) {
      return true
    } else {
      return false
    }
  } else {
    return false
  }
}

const emit = defineEmits(['update:modelValue', 'change'])

const itemClick = (index) => {
  emit('update:modelValue', index)
  emit('change', index)
}
const prevClick = () => {
  let value = 0
  if (props.modelValue >= 2) {
    value = props.modelValue - 1
    emit('update:modelValue', value)
    emit('change', value)
  }
}
const nextClick = () => {
  let value = 0
  if (props.modelValue < pageNum.value) {
    value = Number(props.modelValue + 1)
    emit('update:modelValue', value)
    emit('change', value)
  }
}
</script>
<script>
export default {
  name: 'UvPagination'
}
</script>
<style lang="scss">
:root {
  --uv-pagination-font-size: 14px;
  --uv-pagination-content-item-size: 34px;
  --uv-pagination-content-item-color: #606266;
  --uv-pagination-content-item-gap: 8px;
  --uv-pagination-content-item-border-radius: 2px;
  --uv-pagination-content-item-active-color: #ffffff;
  --uv-pagination-content-item-bg-color: #f0f2f5;
  --uv-pagination-content-item-acitve-bg-color: #409eff;
  --uv-pagination-disabled-color: #bbbec4;
  --uv-pagination-text-padding: 0 5px;
}
.uv-pagination {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: var(--uv-pagination-content-item-gap);
  font-size: var(--uv-pagination-font-size);
  .uv-pagination-content {
    display: flex;
    align-items: center;
    gap: var(--uv-pagination-content-item-gap);
    .uv-pagination-content-item {
      display: flex;
      justify-content: center;
      align-items: center;
      width: var(--uv-pagination-content-item-size);
      height: var(--uv-pagination-content-item-size);
      border-radius: var(--uv-pagination-content-item-border-radius);
      color: var(--uv-pagination-content-item-color);
      background-color: var(--uv-pagination-content-item-bg-color);
    }
    .uv-pagination-content-item-active {
      color: var(--uv-pagination-content-item-active-color);
      background-color: var(--uv-pagination-content-item-acitve-bg-color);
    }
  }
  .uv-pagination-prev,
  .uv-pagination-next {
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--uv-pagination-content-item-size);
    height: var(--uv-pagination-content-item-size);
    border-radius: var(--uv-pagination-content-item-border-radius);
    background-color: var(--uv-pagination-content-item-bg-color);
    &:active {
      opacity: 0.6;
    }
  }
  .uv-pagination-prev-text,
  .uv-pagination-next-text {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: var(--uv-pagination-text-padding);
    height: var(--uv-pagination-content-item-size);
    border-radius: var(--uv-pagination-content-item-border-radius);
    white-space: nowrap;
    color: var(--uv-pagination-content-item-color);
    background-color: var(--uv-pagination-content-item-bg-color);
    &:active {
      opacity: 0.6;
    }
  }
  .uv-pagination-prev-disabled,
  .uv-pagination-next-disabled {
    color: var(--uv-pagination-disabled-color);
    background-color: var(--uv-pagination-content-item-bg-color);
    &:active {
      opacity: 1;
    }
  }
}
</style>
