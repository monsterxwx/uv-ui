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
import './index.scss'
import { ref } from 'vue'
import uvOverlay from '../overlay.vue'
import uvIcon from '../icon.vue'
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

