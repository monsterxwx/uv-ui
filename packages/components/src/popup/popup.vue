<template>
  <div class="uv-popup">
    <overLay
      :overlay="overlay"
      :show="modelValue"
      @click="closePop"
    />
    <Transition :name="'uv-popup-slide-'+position">
      <div
        v-show="modelValue"
        :class="uvClass"
        :style="{height:height,backgroundColor:bgColor,padding:padding?'10px':'none'}"
      >
        <div class="uv-popup-content">
          <div
            v-if="close"
            class="uv-popup-content-close"
          >
            <uv-icon
              @click="closeEvent"
              name="close"
              size="24"
              color="#c8c9cc"
            />
          </div>
          <div class="uv-popup-content-item">
            <slot />
          </div>
          <div
            v-if="action"
            class="uv-popup-content-button"
          >
            <div
              class="uv-popup-content-button-cancle"
              @click.stop="cancleEvent"
            >
              {{ leftName }}
            </div>
            <div
              class="uv-popup-content-button-confim"
              @click.stop="confimEvent"
            >
              {{ rightName }}
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
 
import { computed } from 'vue'
import uvIcon from '../icon'
import overLay from '../overlay'
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  position: {
    type: String,
    default: 'bottom'
  },
  bgColor: {
    type: String,
    default: '#fff'
  },
  round: {
    type: Boolean,
    default: false
  },
  padding: {
    type: Boolean,
    default: true
  },
  overlay: {
    type: Boolean,
    default: true
  },
  clickOverlayClose: {
    type: Boolean,
    default: true
  },
  height: {
    type: String,
    default: 'auto'
  },
  action: {
    type: Boolean,
    default: false
  },
  close: {
    type: Boolean,
    default: false
  },
  leftName: {
    type: String,
    default: '取消'
  },
  rightName: {
    type: String,
    default: '确定'
  }
})
const emit = defineEmits(['update:modelValue', 'cancle', 'confim', 'close'])
const uvClass = computed(() => {
  return [
    'uv-popup-wrap',
    props.position ? `uv-popup-${props.position}` : '',
    props.round ? `uv-popup-${props.position}-round` : ''
  ]
})

const closePop = () => {
  if (props.clickOverlayClose) {
    emit('update:modelValue', false)
  }
}
const cancleEvent = () => {
  emit('cancle')
  emit('update:modelValue', false)
}
const confimEvent = () => {
  emit('confim')
}
const closeEvent = () => {
  emit('close')
  emit('update:modelValue', false)
}
</script>
<script>
export default {
  name: 'UvPopup'
}
</script>

