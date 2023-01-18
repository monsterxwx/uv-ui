<template>
  <div>
    <span
      style="display: inline-block;"
      ref="contentRef"
    >
      <slot name="reference" />
    </span>
    <Transition name="popover">
      <div
        class="uv-popover"
        ref="popoverRef"
        style=""
        v-show="modelValue"
      >
        <div
          :class="[
            showPositon==='bottom'?'uv-popover-arrow-top':'uv-popover-arrow-bottom',
            showArrowPostion==='left'?'uv-popover-arrow-left':'uv-popover-arrow-right'
          ]"
        />
        <div class="uv-popover-content">
          <slot>
            <div
              class="uv-popover-content-item"
              :class="item.disabled?'uv-popover-content-item-disabled':''"
              v-for="(item,index) in list"
              :key="keyName ? item[keyName] : index"
              @click="selectItemClick(item)"
            >
              <div
                class="uv-popover-content-item-text"
              >
                {{ keyName ? item[keyName] : index }}
              </div>
            </div>
          </slot>
        </div>
      </div>
    </Transition>
    <uv-overlay
      :show="modelValue"
      :overlay="false"
      @click="closePopover"
    />
  </div>
</template>

<script setup>
 
import { ref, watch } from 'vue'
import uvOverlay from '../overlay'

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  list: {
    type: Array
  },
  keyName: {
    type: String
  },
  closeOnClickAction: {
    type: Boolean,
    default: true
  },
  closeOnClickOutside: {
    type: Boolean,
    default: true
  }
})

watch(() => props.modelValue, (newValue) => {
  showPopover()
})

const contentRef = ref(null)
const popoverRef = ref(null)
const showPositon = ref('bottom')
const showArrowPostion = ref('left')

const emit = defineEmits(['update:modelValue', 'change'])

const closePopover = () => {
  if (props.closeOnClickOutside) {
    emit('update:modelValue', false)
  }
}

const showPopover = () => {
  const { top, left, bottom, right } = contentRef.value.children[0].getBoundingClientRect()
  // 箭头位置，左or右
  if (left > ((screen.availWidth) / 2)) {
    showArrowPostion.value = 'right'
    // const left = Number()
    popoverRef.value.style.right = (screen.availWidth - right) + 'px'
  } else {
    showArrowPostion.value = 'left'
    popoverRef.value.style.left = left + 'px'
  }
  // 弹框位置，上or下
  if (top > ((screen.availHeight) / 2)) {
    showPositon.value = 'top'
    popoverRef.value.style.bottom = Number(screen.availHeight - top + 10) + 'px'
  } else {
    showPositon.value = 'bottom'
    popoverRef.value.style.top = Number(bottom + 10) + 'px'
  }
}

const selectItemClick = (item) => {
  if (item.disabled) return
  emit('change', item)
  if (props.closeOnClickAction) {
    emit('update:modelValue', false)
  }
}
</script>
<script>
export default {
  name: 'UvPopover'
}
</script>
