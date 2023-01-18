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

