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
<style lang="scss">
:root {
  --uv-dialog-width: 90%;
  --uv-dialog-min-height: 100px;
  --uv-dialog-border-radius: 16px;
  --uv-dialog-bg-color: #ffffff;
  --uv-dialog-transition-time: 0.3s;
  --uv-dialog-title-padding: 15px 0 10px;
  --uv-dialog-title-text-align: center;
  --uv-dialog-title-color: #323233;
  --uv-dialog-content-padding: 8px 24px 26px;
  --uv-dialog-content-font-size: 14px;
  --uv-dialog-content-color: #646566;
  --uv-dialog-bottom-button-height: 48px;
  --uv-dialog-bottom-button-border-top: 1px solid #f7f8f9;
  --uv-dialog-bottom-button-center-line-color: #f7f8f9;
  --uv-dialog-confim-active-bg-color: #e6e6e6;
  --uv-dialog-cancle-bg-color: #e6e6e6;
  --uv-dialog-button-undisabled-color: #646566;
}
.uv-dialog-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  .uv-dialog {
    position: relative;
    overflow: hidden;
    width: var(--uv-dialog-width);
    min-height: var(--uv-dialog-min-height);
    border-radius: var(--uv-dialog-border-radius);
    background-color: var(--uv-dialog-bg-color);
    transition: var(--uv-dialog-transition-time);
    .uv-dialog-title {
      padding: var(--uv-dialog-title-padding);
      width: 100%;
      font-weight: 700;
      text-align: var(--uv-dialog-title-text-align);
      color: var(--uv-dialog-title-color);
    }
    .uv-dialog-content {
      padding: var(--uv-dialog-content-padding);
      width: 100%;
      font-size: var(--uv-dialog-content-font-size);
      color: var(--uv-dialog-content-color);
    }
    .uv-dialog-bottom-button {
      width: 100%;
      height: var(--uv-dialog-bottom-button-height);
      border-top: var(--uv-dialog-bottom-button-border-top);
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
          background-color: var(--uv-dialog-bottom-button-center-line-color);
        }
      }
      .uv-dialog-confim {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        flex: 1;
        &:active {
          background-color: var(--uv-dialog-confim-active-bg-color);
        }
      }
      .uv-dialog-cancle {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        flex: 1;
        &:active {
          background-color: var(--uv-dialog-cancle-bg-color);
        }
      }
      .uv-dialog-button-undisabled {
        color: var(--uv-dialog-button-undisabled-color) !important;
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
