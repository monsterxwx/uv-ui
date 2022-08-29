<template>
  <div>
    <uv-rate v-model="test" />
    <div class="title">
      自定义图标
    </div>
    <div class="tip">
      通过<span class="code">icon</span> 属性设置，图标在图标库中选择
    </div>
    <uv-rate
      v-model="test1"
      icon="love-fill"
    />
    <div class="title">
      自定义样式
    </div>
    <div class="tip">
      <div>通过<span class="code">color</span> 属性设置选中时样式</div>
      <div>通过<span class="code">voidColor</span> 属性设置未选中时样式</div>
      <div>通过<span class="code">size</span> 属性设置大小</div>
      <div>通过<span class="code">gutter</span> 属性设置每个图标的间隔</div>
    </div>
    <uv-rate
      v-model="test1"
      icon="love-fill"
      color="#ee0a24"
    />
    <div class="title">
      自定义数量
    </div>
    <div class="tip">
      通过<span class="code">count</span> 设置
    </div>
    <uv-rate
      v-model="test2"
      :count="10"
    />
    <div class="title">
      只读状态
    </div>
    <div class="tip">
      通过<span class="code">readonly</span> 设置，只能看，不能修改
    </div>
    <uv-rate
      v-model="test2"
      readonly
      :count="10"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
const test = ref(3)
const test1 = ref(5)
const test2 = ref(7)
</script>

<style lang="scss" scoped>

</style>
