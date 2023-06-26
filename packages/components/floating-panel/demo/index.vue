<template>
  <div>
    <uvTab :list="['基本使用','内容区可拖拽']" :acitve-index="acitveIndex" @change="change" />
    <uvFloatingPanel v-show="acitveIndex===0">
      <div v-for="item in 100" :key="item" style="margin: 0 auto 10px;padding: 10px;width: 95%;border-radius: 4px;color: #333333;background-color: #eeeeee;">
        {{ item }}
      </div>
    </uvFloatingPanel>
    <uvFloatingPanel v-show="acitveIndex===1" content-draggable>
      <div>
        我是内容
      </div>
    </uvFloatingPanel>
  </div>
</template>

<script setup>
import { uvFloatingPanel, uvTab } from 'uv-ui'
import { ref } from 'vue'

const acitveIndex = ref(0)
const change = (idx) => {
  acitveIndex.value = idx
}
</script>

<style lang="scss" scoped>

</style>
