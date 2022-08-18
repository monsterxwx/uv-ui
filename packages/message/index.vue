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

<style lang="scss" scoped>
.uv-message {
  .uv-message-value {
    position: fixed;
    top: 30px;
    left: 50%;
    padding: 8px 10px;
    width: 70%;
    height: 40px;
    border-radius: 4px;
    background-color: #ffffff;
    box-shadow: 0 4px 12px #00000026;
    transform: translateX(-50%);
    animation: face 0.5s;
  }

  @keyframes face {
    0% {
      transform: translate(-50%, -100%);
    }
    100% {
      transform: translate(-50%, 0);
    }
  }
  .uv-message-value.remove {
    animation: remove 0.6s;
  }

  @keyframes remove {
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
