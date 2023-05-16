<template>
  <div class="base-layout">
    <div>
      <uvTab :acitve-index="acitveIndex" @change="change" :list="['基本使用','自定义内容','瞬间滚动']" />
    </div>
    <div class="list">
      <div class="item" v-for="item in 100" :key="item">
        {{ item }}
      </div>
    </div>
    <uvBackTop v-if="acitveIndex===0" />
    <uvBackTop v-if="acitveIndex===1">
      O_O
    </uvBackTop>
    <uvBackTop immediate v-if="acitveIndex===2" />
  </div>
</template>

<script setup>
import { uvBackTop, uvTab } from 'uv-ui'
import { ref } from 'vue'
const acitveIndex = ref(0)
const change = (idx) => {
  acitveIndex.value = idx
}
</script>

<style lang="scss" scoped>
.base-layout {
  display: flex;
  overflow: auto;
  padding: 0 0 10px;
  width: 100%;
  height: 100%;
  flex-direction: column;
  gap: 10px;
  .list {
    display: flex;
    padding: 0 10px;
    flex-direction: column;
    gap: 10px;
  }
  .item {
    padding: 10px;
    color: #323233;
    background-color: #ffffff;
  }
}
</style>
