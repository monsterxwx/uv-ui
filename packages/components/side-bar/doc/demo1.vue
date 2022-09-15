<template>
  <div>
    <div class="tip">
      <div>通过<span class="code">v-model</span> 绑定活跃的index</div>
      <div>通过<span class="code">list</span> 传入需要显示的子项列表</div>
    </div>
    <uv-side-bar
      v-model="activeIndex"
      :list="list"
    >
      <div v-show="activeIndex===0">
        1
      </div>
      <div v-show="activeIndex===1">
        2
      </div>
      <div v-show="activeIndex===2">
        3
      </div>
      <div v-show="activeIndex===3">
        4
      </div>
      <div v-show="activeIndex===4">
        5
      </div>
    </uv-side-bar>
    <div class="title">
      配置左侧线属性
    </div>
    <div class="tip">
      <div>通过<span class="code">lineWidth</span> 设置线宽度</div>
      <div>通过<span class="code">lineColor</span> 设置线颜色</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const activeIndex = ref(0)
const list = ['手机1', '手机2', '手机3', '手机4', '手机5']

</script>

<style lang="scss" scoped>

</style>
