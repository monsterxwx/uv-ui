<template>
  <div>
    <uv-tab :list="list1" />

    <div class="title">
      是否滚动
    </div>
    <div class="tip">
      通过<span class="code">scroll</span> 开启
    </div>
    <uv-tab
      :list="list2"
      scroll
    />
    <div class="title">
      修改下划线样式
    </div>
    <div class="tip">
      <div> 通过<span class="code">lineHeight</span> 修改线条高度</div>
      <div> 通过<span class="code">lineColor</span> 修改线条颜色</div>
    </div>
    <uv-tab
      line-height="6px"
      line-color="#07c160"
      :list="list1"
    />
    <div class="title">
      收缩布局
    </div>
    <div class="tip">
      通过<span class="code">shrink</span> 开启
    </div>
    <uv-tab
      shrink
      :list="list1"
    />
    <div class="title">
      标签属性
    </div>
    <div class="tip">
      <div> 通过<span class="code">color</span> 修改默认字体颜色</div>
      <div> 通过<span class="code">activeColor</span> 修改活跃时字体颜色</div>
      <div> 通过<span class="code">bgColor</span> 修改tab栏的背景颜色</div>
    </div>
    <uv-tab
      bg-color="#07c160"
      active-color="#fff"
      :list="list1"
    />
    <div class="title">
      初始化活跃子项,父组件改变子组件也会改变
    </div>
    <uv-button @click="acitveIndex=0">
      变成0
    </uv-button>
    <uv-button @click="acitveIndex=3">
      变成3
    </uv-button>
    <div class="tip">
      <div> 通过<span class="code">acitveIndex</span> 进行绑定</div>
    </div>

    <uv-tab
      :acitve-index="acitveIndex"
      :list="list1"
    />
  </div>
</template>

<script setup>
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
