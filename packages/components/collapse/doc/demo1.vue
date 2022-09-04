<template>
  <div>
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
    <div class="title">
      手风琴模式
    </div>
    <div class="tip">
      通过<span class="code">accordion</span> 开启
    </div>
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
    <div class="title">
      禁用状态
    </div>
    <div class="tip">
      通过对子组件<span class="code">disabled</span> 属性开启
    </div>
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
    <div class="title">
      插槽
    </div>
    <div class="tip">
      <div>
        插槽名称<span class="code">title</span> 可以自定义标题
        插槽名称<span class="code">right</span> 可以自定义标题右边内容
        默认插槽自定义内容
      </div>
    </div>
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
  </div>
</template>

<script setup>
import { ref } from 'vue'

const test = ref(['1'])
const test1 = ref('1')
const test2 = ref(['1'])
const test3 = ref(['1'])
</script>

<style lang="scss" scoped>

</style>
