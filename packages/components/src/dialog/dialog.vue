<template>
  <uvOverlay
    :show="show"
    :overlay="overlay"
    @click="closeOnClickOverlayClick"
  >
    <div
      class="uv-dialog-wrapper"
    >
      <Transition name="dialog">
        <div
          v-show="show"
          class="uv-dialog"
        >
          <div class="uv-dialog-title">
            {{ title }}
          </div>
          <div class="uv-dialog-content">
            {{ message }}
          </div>
          <div
            class="uv-dialog-bottom-button"
            v-if="showConfirmButton || showCancleButton"
          >
            <div
              :class="showConfirmButton && !showCancleButton?'only-confim':'confim-and-cancle'"
            >
              <div
                v-if="showCancleButton"
                :style="{color:cancleButtonColor}"
                @click="cancelCallback(operationClick)"
                class="uv-dialog-cancle"
                :class="cancelButtonDisabled?'uv-dialog-button-undisabled':''"
              >
                {{ cancleButtonText }}
              </div>
              <div
                v-if="showConfirmButton"
                @click="submitCallback(operationClick)"
                :style="{color:confirmButtonColor}"
                class="uv-dialog-confim"
                :class="confirmButtonDisabled?'uv-dialog-button-undisabled':''"
              >
                {{ confirmButtonText }}
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  </uvOverlay>
</template>

<script setup>
import './index.scss'
import { ref, onMounted } from 'vue'
import uvOverlay from '../overlay.vue'
// import uvIcon from '../icon'
const props = defineProps({
  title: {
    type: String
  },
  message: {
    type: String,
    default: ''
  },
  showConfirmButton: {
    type: Boolean,
    default: true
  },
  confirmButtonText: {
    type: String,
    default: '确认'
  },
  confirmButtonColor: {
    type: String,
    default: '#1989fa'
  },
  confirmButtonDisabled: {
    type: Boolean,
    default: false
  },
  showCancleButton: {
    type: Boolean,
    default: false
  },
  cancleButtonText: {
    type: String,
    default: '取消'
  },
  cancleButtonColor: {
    type: String,
    default: '#000000'
  },
  cancelButtonDisabled: {
    type: Boolean,
    default: false
  },
  overlay: {
    type: Boolean,
    default: true
  },
  closeOnClickOverlay: {
    type: Boolean,
    default: false
  },
  submitCallback: {
    type: Function
  },
  cancelCallback: {
    type: Function
  }
})
const emit = defineEmits(['cancle', 'confim'])
const show = ref(false)
onMounted(() => {
  show.value = true
})
const closeOnClickOverlayClick = () => {
  if (props.closeOnClickOverlay) {
    setTimeout(() => {
      show.value = false
    }, 0)
  }
}
const operationClick = (type) => {
  if (props.confirmButtonDisabled && type === 'confim') return false
  if (props.cancelButtonDisabled && type === 'cancle') return false
  if (type === 'confim') emit('confim')
  if (type === 'cancle') emit('cancle')

  setTimeout(() => {
    show.value = false
  }, 0)
  return true
}

</script>
<script>
export default {
  name: 'ShowDialog'
}
</script>
