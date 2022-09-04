<template>
  <div>
    <uv-search placeholder="请输入内容" />
    <div class="title">
      修改背景色
    </div>
    <div class="tip">
      通过<span class="code">bgColor</span> 设置
    </div>
    <uv-search bg-color="#4fc08d" />
    <div class="title">
      修改搜索框的背景色
    </div>
    <div class="tip">
      通过<span class="code">searchBgColor</span> 设置
    </div>
    <uv-search
      bg-color="#f6f7f9"
      search-bg-color="#fff"
    />
    <div class="title">
      搜索框圆角
    </div>
    <div class="tip">
      通过<span class="code">round</span> 设置
    </div>
    <uv-search round />
    <div class="title">
      是否禁用
    </div>
    <div class="tip">
      通过<span class="code">disabled</span> 设置
    </div>
    <uv-search disabled />
    <div class="title">
      搜索框内容对齐
    </div>
    <div class="tip">
      通过<span class="code">inputAlign</span> 设置,默认为<span class="code">left</span>，可选<span class="code">center</span><span class="code">right</span>
    </div>
    <uv-search
      input-align="center"
    />
    <div class="title">
      显示可清除图标
    </div>
    <div class="tip">
      通过<span class="code">clearable</span> 设置
    </div>
    <uv-search
      v-model="value"
      clearable
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
const value = ref('')
</script>

<style lang="scss" scoped>

</style>
