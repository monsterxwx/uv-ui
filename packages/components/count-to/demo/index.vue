<template>
  <div>
    <demoBlock title="基本使用">
      <uv-count-to
        :start="0"
        :end="endCount"
        :auto-play="true"
        :duration="2000"
        prefix="￥"
        suffix="RMB"
      />
    </demoBlock>
    <demoBlock title="字体属性配置">
      <uv-count-to
        :start="0"
        :end="endCount"
        :auto-play="true"
        :duration="2000"
        font-size="30px"
        color="#f56c6c"
        prefix="￥"
        suffix="RMB"
        bold
      />
    </demoBlock>
  </div>
</template>

<script setup>
import demoBlock from '../../../demo/demo-block.vue'
import { uvCountTo } from 'uv-ui'
import { ref } from 'vue'

const endCount = ref(9033)
</script>

<style lang="scss" scoped>

</style>
