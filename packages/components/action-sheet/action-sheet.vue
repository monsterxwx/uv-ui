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

import uvPopup from '../popup'
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

<style lang="scss">
:root {
  --uv-action-sheet-item-bg-color: #ffffff;
  --uv-action-sheet-item-padding: 14px 16px;
  --uv-action-able-click-bg-color: #f2f3f5;
  --uv-action-cancle-item-margin-top: 10px;
}
.uv-action-sheet {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .uv-action-sheet-item {
    padding: var(--uv-action-sheet-item-padding);
    width: 100%;
    text-align: center;
    background-color: var(--uv-action-sheet-item-bg-color);
  }
  .able-click {
    &:active {
      background-color: var(--uv-action-able-click-bg-color);
    }
  }
  .cancle-item {
    margin-top: var(--uv-action-cancle-item-margin-top);
  }
}
</style>
