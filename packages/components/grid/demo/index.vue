<template>
  <div>
    <demoBlock title="点击反馈">
      <uv-grid
        clickable
      >
        <uv-grid-item
          v-for="item in 8"
          :key="item"
          :text="'文字'+item"
          icon-name="modular"
        />
      </uv-grid>
    </demoBlock>
    <demoBlock title="自定义列数">
      <uv-grid
        column-num="3"
      >
        <uv-grid-item
          v-for="item in 9"
          :key="item"
          :text="'文字'+item"
          icon-name="modular"
        />
      </uv-grid>
    </demoBlock>
    <demoBlock title="格子间距">
      <uv-grid
        gutter="10"
      >
        <uv-grid-item
          v-for="item in 8"
          :key="item"
          :text="'文字'+item"
          icon-name="modular"
        />
      </uv-grid>
    </demoBlock>
    <demoBlock title="内容横排">
      <uv-grid
        direction="row"
        reverse
      >
        <uv-grid-item
          v-for="item in 8"
          :key="item"
          :text="'文字'+item"
          icon-name="modular"
          @click="handleClick(item)"
        />
      </uv-grid>
    </demoBlock>
  </div>
</template>

<script setup>
import demoBlock from '../../../demo/demo-block.vue'
import { uvGrid, uvGridItem } from 'uv-ui'
const handleClick = (item) => {
  console.log(item)
}
</script>

<style lang="scss" scoped>

</style>
