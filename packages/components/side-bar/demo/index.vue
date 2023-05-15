<template>
  <div>
    <demoBlock title="基本使用">
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
    </demoBlock>
    <demoBlock title="配置左侧线属性">
      <uv-side-bar
        line-width="7px"
        line-color="green"
        v-model="activeIndex"
        :list="list"
      >
        <div v-show="activeIndex===0">
          1
        </div>
        <div v-show="activeIndex===1">
          2
        </div>
      </uv-side-bar>
    </demoBlock>
  </div>
</template>

<script setup>
import demoBlock from '../../../demo/demo-block.vue'
import { uvSideBar } from 'uv-ui'
import { ref } from 'vue'

const activeIndex = ref(0)
const list = ['手机1', '手机2', '手机3', '手机4', '手机5']
</script>

<style lang="scss" scoped>

</style>
