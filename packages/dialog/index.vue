<template>
  <uvOverlay
    :show="show"
    :overlay="overlay"
    @click="closeOnClickOverlayClick"
  >
    <div
      class="uv-wrapper"
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
import { ref, onMounted } from 'vue'
import uvOverlay from '../overlay'
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

<style lang="scss" scoped>
.uv-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  .uv-dialog {
    position: relative;
    overflow: hidden;
    width: 90%;
    min-height: 100px;
    border-radius: 16px;
    background-color: #ffffff;
    transition: 0.3s;
    .uv-dialog-title {
      padding: 15px 0 10px;
      width: 100%;
      font-weight: 700;
      text-align: center;
      color: #323233;
    }
    .uv-dialog-content {
      padding: 8px 24px 26px;
      width: 100%;
      font-size: 14px;
      color: #646566;
    }
    .uv-dialog-bottom-button {
      width: 100%;
      height: 48px;
      border-top: 1px solid #f7f8f9;
      .only-confim {
        display: flex;
        height: 100%;
      }
      .confim-and-cancle {
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100%;
        &::before {
          content: "";
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          width: 1px;
          height: 100%;
          background-color: #f7f8f9;
        }
      }
      .uv-dialog-confim {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        flex: 1;
        &:active {
          background-color: #e6e6e6;
        }
      }
      .uv-dialog-cancle {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        flex: 1;
        &:active {
          background-color: #e6e6e6;
        }
      }
      .uv-dialog-button-undisabled {
        color: #646566 !important;
        &:active {
          background-color: none !important;
        }
      }
    }
  }
}
.dialog-leave-to {
  transform: scale(0.4);
  opacity: 0;
}
.dialog-enter-from {
  transform: scale(0);
}

</style>
