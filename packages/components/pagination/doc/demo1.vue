<template>
  <div>
    <uv-pagination
      v-model="activeIndex"
      @change="change"
      :total="100"
    />
    <div class="title">
      替换翻页按钮
    </div>
    <div class="tip">
      <div>通过<span class="code">prevText</span> 设置上一页，通过<span class="code">nextText</span> 设置下一页</div>
      <div>也可以使用插槽<span class="code">prev</span> 自定义上一页，通过<span class="code">next</span> 自定义下一页</div>
    </div>
    <uv-pagination
      v-model="activeIndex1"
      prev-text="上一页"
      next-text="下一页"
      :total="100"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const activeIndex = ref(1)
const activeIndex1 = ref(1)
const change = (page) => {
  console.log(page)
}

</script>

<style lang="scss" scoped>

</style>
