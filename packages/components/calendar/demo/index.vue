<template>
  <div>
    <demoBlock title="基本使用">
      <div style="margin-bottom: 10px;font-size: 14px;">
        当前值： {{ dateData }}
      </div>
      <uvCalendar v-model="dateData" />
    </demoBlock>
  </div>
</template>

<script setup>
import demoBlock from '../../../demo/demo-block.vue'
import { uvCalendar } from 'uv-ui'
import { ref } from 'vue'
const dateData = ref(null)
</script>

<style lang="scss" scoped>

</style>
