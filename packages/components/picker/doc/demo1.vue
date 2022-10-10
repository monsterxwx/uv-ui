<template>
  <div>
    <uv-button @click="openPicker=true">
      打开picker
    </uv-button>
    <div>
      当前值：{{ value }}
    </div>
    <uv-picker
      round
      v-model:show="openPicker"
      v-model="value"
      title="标题"
      :list="list"
      key-name="value"
      @change="change"
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
const list = ref([{ key: 1, value: '杭州' }, { key: 2, value: '宁波' }, { key: 3, value: '温州' }, { key: 3, value: '肇庆' }, { key: 3, value: '湖州' }, { key: 3, value: '广州' }])
function change (value) {
  console.log(value)
}
</script>

<style lang="scss" scoped>

</style>
