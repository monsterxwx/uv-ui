<template>
  <div class="uv-toast">
    <div
      class="uv-toast-value"
      :style="{backgroundColor: bgColor, color: color}"
    >
      <div
        class="uv-toast-value-icon"
        v-if="type==='success' || type==='error'"
      >
        <uv-icon
          :name="type"
          size="36"
          :color="type==='success'?'#07c160':'#f56c6c'"
        />
      </div>
      <div
        class="uv-toast-loading"
        v-if="type==='loading'"
      >
        <div class="uv-toast-loading-item" />
        <div class="uv-toast-loading-item" />
        <div class="uv-toast-loading-item" />
        <div class="uv-toast-loading-item" />
      </div>
      <div class="uv-toast-message">
        {{ message }}
      </div>
    </div>
  </div>
</template>

<script setup>

import uvIcon from '../icon'
defineProps({
  message: {
    type: String,
    default: ''
  },
  duration: {
    type: Number,
    default: 1600
  },
  bgColor: {
    type: String,
    default: '#4a4a4b'
  },
  color: {
    type: String,
    default: '#fff'
  },
  type: {
    type: String,
    default: ''
  }
})
</script>
<script>
export default {
  name: 'Toast'
}
</script>

<style lang="scss">
:root {
  --uv-toast-value-padding: 8px 10px;
  --uv-toast-value-max-width: 150px;
  --uv-toast-value-border-radius: 4px;
  --uv-toast-message-font-size: 13px;
  --uv-toast-message-min-width: 70px;
  --uv-toast-loading-size: 24px;
  --uv-toast-loading-item-color: #1677ff;
}
.uv-toast {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9;
  display: flex;
  justify-content: center;
  align-items: center;
  .uv-toast-value {
    display: inline-block;
    padding: var(--uv-toast-value-padding);
    max-width: var(--uv-toast-value-max-width);
    border-radius: var(--uv-toast-value-border-radius);
    text-align: center;
    animation: uv-toast-face 0.5s;
    .uv-toast-value-icon {
      margin-bottom: 10px;
    }
    .uv-toast-loading {
      position: relative;
      display: inline-block;
      margin: 10px 0;
      width: 1em;
      height: 1em;
      font-size: var(--uv-toast-loading-size);
      transform: rotate(45deg);
      animation: uv-toast-loading-rotate 1.2s infinite linear;
      .uv-toast-loading-item {
        position: absolute;
        display: block;
        width: 0.5em;
        height: 0.5em;
        border-radius: 100%;
        background-color: var(--uv-toast-loading-item-color);
        opacity: 0.3;
        transform: scale(0.75);
        transform-origin: 50% 50%;
        animation: uv-toast-loading-move 1s infinite linear alternate;
        &:nth-child(1) {
          top: 0;
          inset-inline-start: 0;
        }
        &:nth-child(2) {
          top: 0;
          inset-inline-end: 0;
          animation-delay: 0.4s;
        }
        &:nth-child(3) {
          bottom: 0;
          inset-inline-end: 0;
          animation-delay: 0.8s;
        }
        &:nth-child(4) {
          bottom: 0;
          inset-inline-start: 0;
          animation-delay: 1.2s;
        }
      }

      @keyframes uv-toast-loading-move {
        to {
          opacity: 1;
        }
      }

      @keyframes uv-toast-loading-rotate {
        to {
          transform: rotate(405deg);
        }
      }
    }
    .uv-toast-message {
      min-width: var(--uv-toast-message-min-width);
      font-size: var(--uv-toast-message-font-size);
    }
  }

  @keyframes uv-toast-face {
    0% { opacity: 0; }
    100% {
      opacity: 1;
    }
  }
  .uv-toast-value.remove {
    animation: uv-toast-remove 0.6s;
  }

  @keyframes uv-toast-remove {
    0% { opacity: 1; }
    100% {
      opacity: 0;
    }
  }
}

</style>
