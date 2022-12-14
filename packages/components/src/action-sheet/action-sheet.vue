<template>
  <uvPopup
    v-model="showPop"
    :padding="false"
    bg-color="#f7f8fa"
    round
    v-bind="$attrs"
  >
    <div
      class="uv-action-sheet"
    >
      <div
        v-for="item in list"
        :key="item[keyName]"
        class="uv-action-sheet-item"
        :class="item.disabled?'':'able-click'"
        @click="itemClick(item)"
      >
        <div
          :style="{color:item.disabled?'#c8c9cc':item.color?item.color:'#323233'}"
        >
          {{ item[keyName] }}
        </div>
      </div>
      <div
        @click="closeClick"
        v-if="cancelText"
        class="uv-action-sheet-item cancle-item able-click"
      >
        {{ cancelText }}
      </div>
    </div>
  </uvPopup>
</template>

<script setup>
import { ref, watch } from 'vue'
import './index.scss'
import uvPopup from '../popup.vue'
const props = defineProps({
  show: {
    type: Boolean,
    default: false
  },
  modelValue: {
    type: String
  },
  list: {
    type: Array
  },
  keyName: {
    type: String,
    default: 'name'
  },
  cancelText: {
    type: String
  }
})
const emit = defineEmits(['update:show', 'update:modelValue', 'change', 'close'])

const showPop = ref(false)
watch(() => props.show, (newValue) => {
  showPop.value = newValue
})
watch(() => showPop.value, (newValue) => {
  emit('update:show', newValue)
})

const itemClick = (item) => {
  if (item.disabled) return
  emit('change', item)
  emit('update:modelValue', item[props.keyName])
  emit('update:show', false)
}
const closeClick = () => {
  emit('close')
  emit('update:show', false)
}
</script>
<script>
export default {
  name: 'UvActionSheet'
}
</script>

