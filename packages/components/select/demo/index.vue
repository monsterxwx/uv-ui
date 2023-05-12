<template>
  <div>
    <demoBlock title="基本使用">
      <uv-select
        :list="list"
        key-name="name"
        placeholder="请选择"
        v-model="test1"
      />
    </demoBlock>
    <demoBlock title="是否可搜索">
      <uv-select
        v-model="test2"
        placeholder="请选择"
        item-bg-color="#f5f7fa"
        :list="list"
        key-name="name"
        filterable
      />
    </demoBlock>
    <demoBlock title="空数据">
      <uv-select
        v-model="test2"
        placeholder="请选择"
      />
      <uv-select
        v-model="test2"
        placeholder="请选择"
      >
        <template #empty>
          <div style="padding: 10px;font-size: 14px;">
            测试空数据
          </div>
        </template>
      </uv-select>
    </demoBlock>
    <demoBlock title="开启多选">
      <uv-select
        :list="list"
        key-name="name"
        v-model="test3"
        multiple
        placeholder="请选择"
      />
    </demoBlock>
  </div>
</template>

<script setup>
import demoBlock from '../../../demo/demo-block.vue'
import { uvSelect } from 'uv-ui'
import { ref } from 'vue'

const test1 = ref('')
const test2 = ref('')
const test3 = ref('')

const list = ref([
  {
    name: 'Option1'
  },
  {
    name: 'Option2'
  },
  {
    name: 'Option3'
  },
  {
    name: 'Option4'
  },
  {
    name: 'Option5'
  },
  {
    name: 'Option6'
  },
  {
    name: 'Option7'
  },
  {
    name: 'Option8'
  }
])

</script>

<style lang="scss" scoped>

</style>
