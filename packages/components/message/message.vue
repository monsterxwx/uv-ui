<template>
  <div
    class="uv-message"
    style="top: 30px;"
  >
    <div class="uv-message-value">
      {{ content }}
    </div>
  </div>
</template>

<script setup>

defineProps({
  content: {
    type: String,
    default: ''
  },
  duration: {
    type: Number,
    default: 3000
  }

})
</script>
<script>
export default {
  name: 'UvMessage'
}
</script>

<style lang="scss">
:root {
  --uv-message-value-top: 30px;
  --uv-message-value-padding: 8px 10px;
  --uv-message-value-width: 70%;
  --uv-message-value-height: 40px;
  --uv-message-value-border-radius: 4px;
  --uv-message-value-bg-color: #ffffff;
  --uv-message-value-box-shadow: 0 4px 12px #00000026;
  --uv-message-animation-time: 0.5s;
  --uv-message-animation-remove-time: 0.6s;
}
.uv-message {
  .uv-message-value {
    position: fixed;
    top: var(--uv-message-value-top);
    left: 50%;
    z-index: 999999;
    padding: var(--uv-message-value-padding);
    width: var(--uv-message-value-width);
    height: var(--uv-message-value-height);
    border-radius: var(--uv-message-value-border-radius);
    background-color: var(--uv-message-value-bg-color);
    box-shadow: var(--uv-message-value-box-shadow);
    transform: translateX(-50%);
    animation: uv-message-face var(--uv-message-animation-time);
  }

  @keyframes uv-message-face {
    0% {
      transform: translate(-50%, -100%);
    }
    100% {
      transform: translate(-50%, 0);
    }
  }
  .uv-message-value.remove {
    animation: uv-message-remove var(--uv-message-animation-remove-time);
  }

  @keyframes uv-message-remove {
    0% {
      transform: translate(-50%, 0);
      opacity: 1;
    }
    100% {
      transform: translate(-50%, -100%);
      opacity: 0;
    }
  }
}
</style>
