<template>
  <div>
    <demoBlock title="基本使用">
      <div style="margin-bottom: 10px;font-size: 14px;">
        当前值：{{ value }}
      </div>
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
        @change="change"
      />
    </demoBlock>
  </div>
</template>

<script setup>
import demoBlock from '../../../demo/demo-block.vue'
import { uvPicker, uvButton } from 'uv-ui'
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
