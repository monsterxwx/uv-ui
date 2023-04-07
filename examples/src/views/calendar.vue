<template>
  <div class="base-page">
    <uvCalendar v-model="dateData" />
    {{ dateData }}
  </div>
</template>

<script setup>
import { uvCalendar } from 'uv-ui'
import { ref } from 'vue'
const dateData = ref(null)
</script>

<style lang="scss" scoped>
.base-page {
  width: 100%;
  height: 100%;
  background-color: #eeeeee;
}
</style>
