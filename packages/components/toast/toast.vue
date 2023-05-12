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
        class="loading-icon"
        v-if="type==='loading'"
      >
        <uv-icon
          name="loading"
          size="30"
          color="#e6e6e6"
        />
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
}
.uv-toast {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  .uv-toast-value {
    display: inline-block;
    padding: var(--uv-toast-value-padding);
    max-width: var(--uv-toast-value-max-width);
    border-radius: var(--uv-toast-value-border-radius);
    text-align: center;
    animation: face 0.5s;
    .uv-toast-value-icon {
      margin-bottom: 10px;
    }
    .loading-icon {
      position: relative;
      animation: rotate 3s linear infinite;
      margin-bottom: 10px;
    }
    .uv-toast-message {
      min-width: var(--uv-toast-message-min-width);
      font-size: var(--uv-toast-message-font-size);
    }
  }

  @keyframes rotate {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes face {
    0% { opacity: 0; }
    100% {
      opacity: 1;
    }
  }
  .uv-toast-value.remove {
    animation: remove 0.6s;
  }

  @keyframes remove {
    0% { opacity: 1; }
    100% {
      opacity: 0;
    }
  }
}

</style>
