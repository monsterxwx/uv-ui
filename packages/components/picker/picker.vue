<template>
  <uvPopup
    v-model="showPop"
    position="bottom"
    v-bind="$attrs"
  >
    <div class="uv-picker">
      <div class="uv-picker-title">
        <div
          class="uv-picker-title-left"
          @click="cancleHandle"
        >
          {{ leftName }}
        </div>
        <slot name="title">
          <div class="uv-picker-title-center">
            {{ title }}
          </div>
        </slot>
        <div
          class="uv-picker-title-right"
          @click="confimHandle"
        >
          {{ rightName }}
        </div>
      </div>
      <div class="uv-picker-content">
        <div class="uv-picker-content-wrapper" />
        <PickerColumn
          v-for="(item,index) in calcList"
          :key="index"
          :list="item"
          :key-name="keyName"
          :label-name="labelName"
          :value="selectValue[index]"
          @change="change($event,index)"
          @first-open="firstOpen($event,index)"
        />
      </div>
    </div>
  </uvPopup>
</template>

<script setup>

import { ref, inject, computed } from 'vue'
import uvPopup from '../popup'
import PickerColumn from './picker-column.vue'
import { getColumnsType, formatCascadeColumns } from './utils.js'

const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: ''
  },
  title: {
    type: String
  },
  leftName: {
    type: String,
    default: '取消'
  },
  rightName: {
    type: String,
    default: '确定'
  },
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
  childrenName: {
    type: String,
    default: 'children'
  }
})
const emit = defineEmits(['update:modelValue', 'change', 'column-change', 'cancle', 'confim'])

const selectValue = computed(() => {
  const value = String(props.modelValue)
  const regex = /[\\/:\-\s]/
  if (regex.test(value)) {
    return value.split(/[\\/:\-\s]/)
  }
  return value.split(',')
})

const columnsType = computed(() =>
  getColumnsType(props.list, props.childrenName)
)

const calcList = computed(() => {
  const { list, labelName, keyName, childrenName } = props
  switch (columnsType.value) {
    case 'multiple':
      return list
    case 'cascade':
      // return [list]
      return formatCascadeColumns(list, {
        label: labelName,
        value: keyName,
        children: childrenName
      }, selectValue)
    default:
      return [list]
  }
})

const { props: parentProps, validateBlurOrChange } = inject('form-item', {})

const temValue = ref([])

const showPop = ref(false)

const open = () => {
  showPop.value = true
}
const close = () => {
  showPop.value = false
}

function cancleHandle () {
  emit('cancle')
  showPop.value = false
}

function change (e, index) {
  temValue.value[index] = e
  temValue.value.join(',')
  emit('change', temValue.value.join(','))
  emit('column-change', {
    value: e,
    index
  })
}

function firstOpen (e, index) {
  temValue.value[index] = e
}

function confimHandle () {
  emit('confim', temValue.value.join(','))
  emit('update:modelValue', temValue.value.join(','))
  if (parentProps) {
    validateBlurOrChange('blur')
  }
  showPop.value = false
}
defineExpose({
  open,
  close
})
</script>
<script>
export default {
  name: 'UvPicker'
}
</script>

<style lang="scss">
:root {
  --uv-picker-title-btn-font-size: 14px;
  --uv-picker-title-font-size: 16px;
  --uv-picker-title-font-weight: 700;
  --uv-picker-title-color: #323233;
  --uv-picker-title-padding: 2px 0 12px;
  --uv-picker-title-left-text-color: #969799;
  --uv-picker-title-right-text-color: #576b95;
  --uv-picker-content-height: 230px;
  --uv-picker-content-wrapper-border-top-and-bottom: 1px solid #f7f8f9;
  --uv-picker-content-wrapper-box-shadow: 0 0 5px #f7f8f9;
}
.uv-picker {
  .uv-picker-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--uv-picker-title-padding);
    font-size: var(--uv-picker-title-btn-font-size);
    .uv-picker-title-left {
      color: var(--uv-picker-title-left-text-color);
    }
    .uv-picker-title-center {
      font-size: var(--uv-picker-title-font-size);
      font-weight: var(--uv-picker-title-font-weight);
      color: var(--uv-picker-title-color);
    }
    .uv-picker-title-right {
      color: var(--uv-picker-title-right-text-color);
    }
  }
  .uv-picker-content {
    position: relative;
    display: flex;
    overflow: hidden;
    height: var(--uv-picker-content-height);
    cursor: grab;
    .uv-picker-content-wrapper {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 100%;
      height: 36px;
      border-top: var(--uv-picker-content-wrapper-border-top-and-bottom);
      border-bottom: var(--uv-picker-content-wrapper-border-top-and-bottom);
      box-shadow: var(--uv-picker-content-wrapper-box-shadow);
    }
  }
}
</style>
