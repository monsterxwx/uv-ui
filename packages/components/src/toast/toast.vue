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
import './index.scss'
import uvIcon from '../icon.vue'
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

