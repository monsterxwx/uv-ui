<template>
  <div class="container">
    <uv-input v-model="value" />
    {{ value }}
  </div>
</template>

<script setup>
import { ref } from 'vue'
const value = ref('')
</script>

<style lang="scss" scoped>

</style>
