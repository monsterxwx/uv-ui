<template>
  <div
    class="uv-num-input"
  >
    <uvPopup
      v-model="showPop"
      :overlay="false"
      bg-color="#f2f3f5"
    >
      <div class="uv-num-content">
        <div class="uv-num-content-left">
          <div
            class="uv-num-content-left-item"
            v-for="item in numArrComputer"
            @click="clickItem(item)"
            :key="item"
          >
            {{ item }}
          </div>
        </div>
        <div class="uv-num-content-right">
          <div
            @click="delNum"
            class="uv-num-content-right-item"
          >
            x
          </div>
          <div
            @click="confim"
            class="uv-num-content-right-item uv-num-input-confim"
          >
            完成
          </div>
        </div>
      </div>
    </uvPopup>
  </div>
</template>

<script setup>
import './index.scss'
import { computed, ref, watch } from 'vue'
import uvPopup from '../popup'
const props = defineProps({
  show: {
    type: Boolean,
    default: false
  },
  modelValue: {
    type: String,
    default: ''
  },
  maxlength: {
    type: Number,
    default: -1
  },
  extraKey: {
    type: String
  },
  diyArr: {
    type: Array
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

const numArrComputer = computed(() => {
  const numArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '00', '0', '.']
  if (props.extraKey) {
    numArr.splice(numArr.length - 1, 1)
    numArr.push(props.extraKey)
    return numArr
  } else if (props.diyArr) {
    return props.diyArr
  } else {
    return numArr
  }
})

function confim () {
  emit('update:show', false)
}

const selectArr = ref([])
function clickItem (item) {
  emit('change', item)
  if (props.maxlength === -1) {
    selectArr.value.push(item)
    const str = selectArr.value.join('')
    emit('update:modelValue', str)
  } else if (selectArr.value.length < props.maxlength) {
    selectArr.value.push(item)
    const str = selectArr.value.join('')
    emit('update:modelValue', str)
  }
}
function delNum () {
  if (selectArr.value.length > 0) {
    selectArr.value.pop()
    const str = selectArr.value.join('')
    emit('update:modelValue', str)
  }
}
</script>
<script>
export default {
  name: 'UvNumInput'
}
</script>

