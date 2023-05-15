<template>
  <div class="uv-popup" @touchmove.prevent>
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

<style lang="scss">
:root {
  --uv-popup-transition-time: 0.3s;
  --uv-popup-border-radius: 16px;
  --uv-popup-left-right-max-width: 70%;
  --uv-popup-button-font-size: 14px;
  --uv-popup-button-border-radius: 6px;
  --uv-popup-button-padding: 12px 45px;
  --uv-popup-button-box-shadow: rgb(0 0 0 / 15%) 0 2px 8px;
  --uv-popup-button-confim-color: #ffffff;
  --uv-popup-button-cancle-color: #1fa45d;
  --uv-popup-button-confim-bg-color: #07c160;
  --uv-popup-button-cancle-bg-color: #f0f0f0;
}
.uv-popup {
  .uv-popup-bottom {
    bottom: 0;
    left: 0;
    width: 100%;
  }
  .uv-popup-bottom-round {
    border-radius: var(--uv-popup-border-radius)  var(--uv-popup-border-radius) 0 0;
  }
  .uv-popup-top {
    top: 0;
    left: 0;
    width: 100%;
  }
  .uv-popup-top-round {
    border-radius: 0 0 var(--uv-popup-border-radius)  var(--uv-popup-border-radius);
  }
  .uv-popup-center {
    top: 50%;
    left: 50%;
    min-width: 50px;
    min-height: 50px;
    transform: translate(-50%, -50%);
  }
  .uv-popup-center-round {
    border-radius: var(--uv-popup-border-radius);
  }
  .uv-popup-left {
    top: 0;
    left: 0;
    max-width: var(--uv-popup-left-right-max-width);
    min-height: 100%;
  }
  .uv-popup-left-round {
    border-radius: 0  var(--uv-popup-border-radius)  var(--uv-popup-border-radius) 0;
  }
  .uv-popup-right {
    top: 0;
    right: 0;
    max-width: var(--uv-popup-left-right-max-width);
    min-height: 100%;
  }
  .uv-popup-right-round {
    border-radius: var(--uv-popup-border-radius)   0 0 var(--uv-popup-border-radius);
  }
  .uv-popup-wrap {
    position: fixed;
    z-index: 2;
    overflow-y: auto;
    max-height: 100%;
    transition: transform var(--uv-popup-transition-time);
    .uv-popup-content {
      .uv-popup-content-close {
        display: flex;
        justify-content: flex-end;
        padding-bottom: 6px;
        width: 100%;
      }
      .uv-popup-content-button {
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding-top: 10px;

        @mixin base-button() {
          padding: var(--uv-popup-button-padding);
          font-size: var(--uv-popup-button-font-size);
          border-radius: var(--uv-popup-button-border-radius);
          text-align: center;
          white-space: nowrap;
          box-shadow: var(--uv-popup-button-box-shadow);
        }
        .uv-popup-content-button-confim {
          @include base-button;

          color: var(--uv-popup-button-confim-color);
          background-color: var(--uv-popup-button-confim-bg-color);
        }
        .uv-popup-content-button-cancle {
          @include base-button;

          margin-right: 10px;
          color: var(--uv-popup-button-cancle-color);
          background-color: var(--uv-popup-button-cancle-bg-color);
        }
      }
    }
  }
  .uv-popup-slide-top-enter-active,
  .uv-popup-slide-center-enter-active,
  .uv-popup-slide-left-enter-active,
  .uv-popup-slide-right-enter-active,
  .uv-popup-slide-bottom-enter-active {
    transition-timing-function: ease-out;
  }
  .uv-popup-slide-top-leave-active,
  .uv-popup-slide-center-enter-active,
  .uv-popup-slide-left-leave-active,
  .uv-popup-slide-right-leave-active,
  .uv-popup-slide-bottom-leave-active {
    transition-timing-function: ease-in;
  }
  .uv-popup-slide-top-enter-from,
  .uv-popup-slide-top-leave-active {
    transform: translate3d(0, -100%, 0);
  }
  .uv-popup-slide-right-enter-from,
  .uv-popup-slide-right-leave-active {
    transform: translate3d(100%, 0, 0);
  }
  .uv-popup-slide-bottom-enter-from,
  .uv-popup-slide-bottom-leave-active {
    transform: translate3d(0, 100%, 0);
  }
  .uv-popup-slide-left-enter-from,
  .uv-popup-slide-left-leave-active {
    transform: translate3d(-100%, 0, 0);
  }
  .uv-popup-slide-center-enter-from,
  .uv-popup-slide-center-leave-active {
    opacity: 0;
  }
}
</style>
