<template>
  <div>
    <uv-button @click="openPicker=true">
      打开picker
    </uv-button>
    <uv-picker
      round
      v-model:show="openPicker"
      v-model="value"
      title="标题"
      :list="list"
      key-name="value"
    />
    <div class="title">
      标题
    </div>
    <div class="tip">
      通过<span class="code">shape</span> 设置
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const openPicker = ref(false)
const value = ref('')
const list = ref([{ key: 1, value: '一一' }, { key: 2, value: '二二' }, { key: 3, value: '三三' }, { key: 3, value: '四四' }, { key: 3, value: '五五' }, { key: 3, value: '六六' }])
</script>

<style lang="scss" scoped>

</style>
