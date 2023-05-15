<template>
  <div>
    <demoBlock title="基本使用">
      <uv-pagination
        v-model="activeIndex"
        @change="change"
        :total="100"
      />
    </demoBlock>
    <demoBlock title="替换翻页按钮">
      <uv-pagination
        v-model="activeIndex1"
        prev-text="上一页"
        next-text="下一页"
        :total="100"
      />
    </demoBlock>
  </div>
</template>

<script setup>
import demoBlock from '../../../demo/demo-block.vue'
import { uvPagination } from 'uv-ui'
import { ref } from 'vue'

const activeIndex = ref(1)
const activeIndex1 = ref(1)
const change = (page) => {
  console.log(page)
}
</script>

<style lang="scss" scoped>

</style>
