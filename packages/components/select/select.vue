<template>
  <uvOverlay
    :show="isActive"
    :overlay="false"
    @click="closeShow"
  />
  <div
    ref="selectRef"
    class="uv-select"
    :class="isActive?'uv-select-active':''"
    @click="openShow"
  >
    <div
      v-if="multiple"
      class="uv-select-multiple"
    >
      <div
        class="uv-select-multiple-item"
        v-if="multipleSelectArr.length>0"
      >
        <div class="uv-select-multiple-item-text">
          {{ multipleSelectArr[0] }}
        </div>
        <uv-icon
          size="16"
          name="error"
          color="#f56c6c"
          @click.stop="deleteCurrentItem"
        />
      </div>
      <div
        class="uv-select-multiple-placeholder"
        v-else
      >
        {{ placeholder }}
      </div>
      <div
        class="uv-select-multiple-item"
        v-if="multipleSelectArr.length>1"
      >
        +{{ multipleSelectArr.length-1 }}
      </div>
    </div>
    <div
      v-else
      class="uv-select-input"
    >
      <input
        :value="modelValue"
        :placeholder="placeholder"
        @input="handleInput"
        :disabled="!filterable"
      >
    </div>
    <div
      class="uv-select-arrow"
      :class="isActive?'uv-select-arrow-up':''"
    >
      <uv-icon
        size="16"
        name="arrow-up-bold"
        color="#aaadb4"
      />
    </div>
    <Transition :name="contentPositon==='bottom'?'select-bottom':'select-top'">
      <div
        v-show="isActive"
        class="uv-select-box"
        :class="contentPositon==='bottom'?'uv-select-box-show-bottom':'uv-select-box-show-top'"
      >
        <div class="uv-select-box-arrow" />
        <div
          class="uv-select-box-content"
          v-if="filterList && filterList.length>0"
        >
          <div
            class="uv-select-box-item"
            :style="{backgroundColor:itemBgColor}"
            v-for="(item,index) in filterList"
            :key="keyName?item[keyName]:index"
            @click.stop="itemClick(item)"
            :class="multiple?modelValue.includes(item[keyName])?'uv-select-box-item-select':'' : item[keyName]===modelValue?'uv-select-box-item-select':''"
          >
            {{ item[keyName] }}
          </div>
        </div>
        <div
          v-else
          class="uv-select-box-content-empty"
        >
          <slot name="empty">
            <div class="uv-select-box-content-empty-default">
              无数据
            </div>
          </slot>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>

import { ref } from 'vue'
import uvOverlay from '../overlay'
import uvIcon from '../icon'
const props = defineProps({
  modelValue: {
    type: [String, Array, Number]
  },
  placeholder: {
    type: String
  },
  // 可筛选
  filterable: {
    type: Boolean,
    default: false
  },
  // 多选
  multiple: {
    type: Boolean,
    default: false
  },
  list: {
    type: Array
  },
  keyName: {
    type: String
  },
  itemBgColor: {
    type: String
  }
})

const isActive = ref(false)

const selectRef = ref(null)
const contentPositon = ref('bottom')

function getShowPositon () {
  // 显示位置处理,在屏幕下半部分向上显示，默认向下显示
  const positon = selectRef.value ? selectRef.value.getBoundingClientRect().top : 0
  if (positon > ((screen.availHeight) / 2)) {
    contentPositon.value = 'top'
  } else {
    contentPositon.value = 'bottom'
  }
}

const openShow = () => {
  getShowPositon()
  if (props.filterable) {
    filterList.value = props.list
  }
  isActive.value = !isActive.value
}

const closeShow = () => {
  isActive.value = false
}

const emit = defineEmits(['update:modelValue', 'change'])

const filterList = ref(props.list)

const handleInput = (e) => {
  const { value } = e.target
  emit('update:modelValue', value)
  filterList.value = props.list.filter(item => item[props.keyName].includes(value))
}
const multipleSelectArr = ref([])
const itemClick = (item) => {
  const value = item[props.keyName]
  if (props.multiple) {
    const haveValueIndex = multipleSelectArr.value.findIndex(res => res === value)
    console.log(haveValueIndex)
    if (haveValueIndex > -1) {
      multipleSelectArr.value.splice(haveValueIndex, 1)
    } else {
      multipleSelectArr.value.push(value)
    }
    emit('update:modelValue', multipleSelectArr.value)
    emit('change', multipleSelectArr.value)
  } else {
    emit('update:modelValue', value)
    emit('change', item)
    isActive.value = false
  }
}

const deleteCurrentItem = () => {
  multipleSelectArr.value.splice(0, 1)
}
</script>
<script>
export default {
  name: 'UvSelect'
}
</script>

<style lang="scss">
:root {
  --uv-select-height: 36px;
  --uv-select-width: 200px;
  --uv-select-border: 1px solid #dcdfe6;
  --uv-select-bg-color: #ffffff;
  --uv-select-border-radius: 4px;
  --uv-select-padding: 0 10px 0 0;
  --uv-select-active-border: 1px solid #409eff;
  --uv-select-placeholder-color: #d3c9d6;
  --uv-select-placeholder-font-size: 14px;
  --uv-select-multiple-item-bg-color: #f0f2f5;
  --uv-select-multiple-item-color: #909399;
  --uv-select-input-color: #606266;
  --uv-select-input-font-size: 14px;
  --uv-select-box-box-shadow: 0 0 12px rgb(0 0 0 / 12%);
  --uv-select-box-bg-color: #ffffff;
  --uv-select-box-border-radius: 4px;
  --uv-select-box-height: 150px;
  --uv-select-box-z-index: 999;
  --uv-select-box-content-padding-top: 10px;
  --uv-select-box-item-margin-bottom: 10px;
  --uv-select-box-item-padding: 10px 20px;
  --uv-select-box-item-font-size: 14px;
  --uv-select-box-item-color: #606266;
  --uv-select-box-item-select-color: #409eff;
  --uv-select-box-item-select-font-weight: 700;
  --uv-select-box-content-empty-default-color: #606266;
  --uv-select-box-content-empty-default-font-size: 14px;
}
.uv-select {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--uv-select-padding);
  width: var(--uv-select-width);
  height: var(--uv-select-height);
  border: var(--uv-select-border);
  border-radius: var(--uv-select-border-radius);
  background-color: var(--uv-select-bg-color);
  transition: all 0.3s;
  .uv-select-multiple {
    display: flex;
    align-items: center;
    padding-left: 5px;
    .uv-select-multiple-placeholder {
      padding-left: 8px;
      font-size: var(--uv-select-placeholder-font-size);
      color: var(--uv-select-placeholder-color);
    }
    .uv-select-multiple-item {
      display: flex;
      align-items: center;
      margin-right: 5px;
      padding: 5px;
      font-size: 12px;
      border-radius: 4px;
      color: var(--uv-select-multiple-item-color);
      background-color: var(--uv-select-multiple-item-bg-color);
      .uv-select-multiple-item-text {
        margin-right: 4px;
      }
    }
  }
  .uv-select-input {
    flex: 1;
    input {
      padding: 0 8px;
      width: 100%;
      height: 100%;
      font-size: var(--uv-select-input-font-size);
      border: none;
      border-radius: 4px;
      color: var(--uv-select-input-color);
      background-color: var(--uv-select-bg-color);
      outline: none;
    }
    input::placeholder {
      font-size: var(--uv-select-placeholder-font-size);
      color: var(--uv-select-placeholder-color);
    }
    input:disabled {
      font-size: var(--uv-select-placeholder-font-size);
      color: var(--uv-select-input-color);
    }
  }
  .uv-select-arrow {
    display: flex;
    align-items: center;
    height: 100%;
    transition: all 0.4s;
    transform: rotate(180deg);
  }
  .uv-select-arrow-up {
    transform: rotate(0);
  }
  .uv-select-box {
    position: absolute;
    right: 0;
    left: 0;
    z-index: var(--uv-select-box-z-index);
    height: var(--uv-select-box-height);
    border-radius: var(--uv-select-box-border-radius);
    background-color: var(--uv-select-box-bg-color);
    box-shadow: var(--uv-select-box-box-shadow);
    .uv-select-box-content {
      overflow: auto;
      padding-top: var(--uv-select-box-content-padding-top);
      height: 100%;
      .uv-select-box-item {
        margin-bottom: var(--uv-select-box-item-margin-bottom);
        padding: var(--uv-select-box-item-padding);
        font-size: var(--uv-select-box-item-font-size);
        color: var(--uv-select-box-item-color);
      }
      .uv-select-box-item-select {
        font-weight: var(--uv-select-box-item-select-font-weight);
        color: var(--uv-select-box-item-select-color);
      }
    }
    .uv-select-box-content-empty {
      height: 100%;
      .uv-select-box-content-empty-default {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        font-size: var(--uv-select-box-content-empty-default-font-size);
        color: var(--uv-select-box-content-empty-default-color);
      }
    }
  }
  .uv-select-box-show-bottom {
    top: calc(var(--uv-select-height) + 10px);
    .uv-select-box-arrow {
      position: absolute;
      top: -12px;
      left: 50%;
      z-index: var(--uv-select-box-z-index);
      border-top: 6px solid transparent;
      border-right: 6px solid transparent;
      border-bottom: 6px solid var(--uv-select-box-bg-color);
      border-left: 6px solid transparent;
      transform: translateX(-50%);
    }
  }
  .uv-select-box-show-top {
    bottom: calc(var(--uv-select-height) + 10px);
    .uv-select-box-arrow {
      position: absolute;
      bottom: -12px;
      left: 50%;
      z-index: var(--uv-select-box-z-index);
      border-top: 6px solid var(--uv-select-box-bg-color);
      border-right: 6px solid transparent;
      border-bottom: 6px solid transparent;
      border-left: 6px solid transparent;
      transform: translateX(-50%);
    }
  }
}
.uv-select-active {
  border: var(--uv-select-active-border);
}
.select-bottom-enter-active,
.select-bottom-leave-active {
  transition: all 0.4s;
}
.select-bottom-enter-from,
.select-bottom-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
.select-top-enter-active,
.select-top-leave-active {
  transition: all 0.4s;
}
.select-top-enter-from,
.select-top-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
