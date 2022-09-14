<template>
  <div>
    <uv-select
      :list="list"
      key-name="name"
      placeholder="请选择"
      v-model="test1"
    />
    <div class="title">
      是否可搜索
    </div>
    <div class="tip">
      通过<span class="code">filterable</span> 开启
    </div>
    <uv-select
      v-model="test2"
      placeholder="请选择"
      item-bg-color="#f5f7fa"
      :list="list"
      key-name="name"
      filterable
    />
    <div class="title">
      空数据
    </div>
    <uv-select
      v-model="test2"
      placeholder="请选择"
    />
    <div class="tip">
      可以使用插槽自定义内容,通过<span class="code">empty</span>名称插槽自定义
    </div>
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
    <div class="title">
      开启多选
    </div>
    <div class="tip">
      通过<span class="code">multiple</span> 开启
    </div>
    <uv-select
      :list="list"
      key-name="name"
      v-model="test3"
      multiple
      placeholder="请选择"
    />
  </div>
</template>

<script setup>
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
