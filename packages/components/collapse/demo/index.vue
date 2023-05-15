<template>
  <div>
    <demoBlock title="基本使用">
      <uv-collapse
        v-model="test"
      >
        <uv-collapse-item
          v-for="item in 3"
          :title="'标题'+item"
          :name="item+''"
          :key="item"
        >
          内容
        </uv-collapse-item>
      </uv-collapse>
    </demoBlock>
    <demoBlock title="手风琴模式">
      <uv-collapse
        v-model="test1"
        accordion
      >
        <uv-collapse-item
          v-for="item in 3"
          :title="'标题'+item"
          :name="item+''"
          :key="item"
        >
          内容
        </uv-collapse-item>
      </uv-collapse>
    </demoBlock>
    <demoBlock title="禁用状态">
      <uv-collapse
        v-model="test2"
      >
        <uv-collapse-item
          title="标题1"
          name="1"
        >
          内容
        </uv-collapse-item>
        <uv-collapse-item
          title="标题2"
          name="2"
        >
          内容
        </uv-collapse-item>
        <uv-collapse-item
          title="标题3"
          name="3"
          disabled
        >
          内容
        </uv-collapse-item>
      </uv-collapse>
    </demoBlock>
    <demoBlock title="插槽">
      <uv-collapse
        v-model="test3"
      >
        <uv-collapse-item
          name="1"
        >
          <template #title>
            自定义title
          </template>
          <template #right>
            自定义right
          </template>
          我是内容
        </uv-collapse-item>
        <uv-collapse-item
          name="2"
        >
          <template #title>
            自定义title
          </template>
          <template #right>
            自定义right
          </template>
          我是内容
        </uv-collapse-item>
      </uv-collapse>
    </demoBlock>
  </div>
</template>

<script setup>
import demoBlock from '../../../demo/demo-block.vue'
import { uvCollapse, uvCollapseItem } from 'uv-ui'
import { ref } from 'vue'

const test = ref(['1'])
const test1 = ref('1')
const test2 = ref(['1'])
const test3 = ref(['1'])
</script>

<style lang="scss" scoped>

</style>
