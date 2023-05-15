<template>
  <div>
    <demoBlock title="基本使用">
      <uv-tab :list="list1" />
    </demoBlock>
    <demoBlock title="是否滚动">
      <uv-tab
        :list="list2"
        scroll
      />
    </demoBlock>
    <demoBlock title="修改下划线样式">
      <uv-tab
        line-height="6px"
        line-color="#07c160"
        :list="list1"
      />
    </demoBlock>
    <demoBlock title="收缩布局">
      <uv-tab
        shrink
        :list="list1"
      />
    </demoBlock>
    <demoBlock title="标签属性">
      <uv-tab
        bg-color="#07c160"
        active-color="#fff"
        :list="list1"
      />
    </demoBlock>
    <demoBlock title="初始化活跃子项,父组件改变子组件也会改变">
      <div style="display: flex;gap: 10px;margin-bottom: 10px;">
        <uv-button @click="acitveIndex=0">
          变成0
        </uv-button>
        <uv-button @click="acitveIndex=3">
          变成3
        </uv-button>
      </div>

      <uv-tab
        :acitve-index="acitveIndex"
        :list="list1"
      />
    </demoBlock>
  </div>
</template>

<script setup>
import demoBlock from '../../../demo/demo-block.vue'
import { uvTab, uvButton } from 'uv-ui'
import { ref } from 'vue'
const list1 = ref([
  '标签1', '标签2', '标签3', '标签4'
])

const list2 = ref([
  '标签1', '标签2', '标签3', '标签4', '标签5', '标签6', '标签7', '标签8', '标签9', '标签10'
])

const acitveIndex = ref(2)
</script>

<style lang="scss" scoped>

</style>
