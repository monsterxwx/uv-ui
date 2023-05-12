<template>
  <div>
    <demoBlock title="基本使用">
      <uv-button @click="show=true">
        打开动作面板
      </uv-button>
      <uv-action-sheet
        v-model:show="show"
        v-model="value"
        :list="list"
      />
      {{ value }}
    </demoBlock>
    <demoBlock title="选项状态">
      <uv-button @click="show1=true">
        打开动作面板
      </uv-button>
      <uv-action-sheet
        v-model:show="show1"
        v-model="value1"
        :list="list1"
      />
    </demoBlock>
    <demoBlock title="展示取消按钮">
      <uv-button @click="show2=true">
        打开动作面板
      </uv-button>
      <uv-action-sheet
        v-model:show="show2"
        v-model="value1"
        :list="list1"
        cancel-text="取消"
      />
    </demoBlock>
  </div>
</template>

<script setup>
import demoBlock from '../../../demo/demo-block.vue'
import { uvActionSheet, uvButton } from 'uv-ui'
import { ref } from 'vue'
const show = ref(false)
const show1 = ref(false)
const show2 = ref(false)
const value = ref('')
const value1 = ref('')
const list = ref([
  { name: '选项一' },
  { name: '选项二' },
  { name: '选项三' }
])
const list1 = ref([
  { name: '着色选项', color: '#ee0a24' },
  { name: '禁用选项', disabled: true },
  { name: '正常选项' }
])
</script>

<style lang="scss" scoped>
.flex {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}
</style>
