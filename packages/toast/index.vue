<template>
  <div class="uv-toast">
    <div
      class="uv-toast-value"
      :style="{backgroundColor: bgColor, color: color}"
    >
      <div
        class="icon"
        v-if="type==='success' || type==='error'"
      >
        <svgIcon
          :name="type"
          icon-size="36"
          :color="type==='success'?'#07c160':'#f56c6c'"
        />
      </div>
      <div
        class="loading-icon"
        v-if="type==='loading'"
      >
        <svgIcon
          name="loading"
          icon-size="30"
          color="#e6e6e6"
        />
      </div>
      <div class="message">
        {{ message }}
      </div>
    </div>
  </div>
</template>

<script setup>
import svgIcon from '../../src/components/svgIcon'
defineProps({
  message: {
    type: String,
    default: ''
  },
  duration: {
    type: Number,
    default: 2000
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

<style lang="scss" scoped>
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
    padding: 8px 10px;
    max-width: 150px;
    border-radius: 4px;
    text-align: center;
    animation: face 0.5s;
    .icon {
      margin-bottom: 10px;
    }
    .loading-icon {
      position: relative;
      animation: rotate 3s linear infinite;
      margin-bottom: 10px;
    }
    .message {
      font-size: 13px;
    }
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
.uv-toast-value.reomve {
  animation: reomve 0.5s;
}

@keyframes reomve {
  0% { opacity: 1; }
  100% {
    opacity: 0;
  }
}
</style>
