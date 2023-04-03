<template>
  <div class="uv-calendar">
    1
  </div>
</template>

<script setup>

import { ref } from 'vue'
const props = defineProps({
  modelValue: {
    type: Date
  }
})

</script>
<script>
export default {
  name: 'UvCalendar'
}
</script>
<style lang="scss">
:root {
  --uv-calendar-bg-color: #ffffff;
}
.uv-calendar {
  width: 100%;
  height: 300px;
}
</style>
