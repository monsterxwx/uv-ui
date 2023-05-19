<template>
  <div>
    <demoBlock title="基本使用">
      <div style="width: 100%;height: 160px;">
        <uvEmpty label="无数据" />
      </div>
    </demoBlock>
    <demoBlock title="自定义大小">
      <div style="width: 100%;height: 160px;">
        <uvEmpty image-size="80" label="无数据" />
      </div>
    </demoBlock>
    <demoBlock title="自定义图片">
      <div style="width: 100%;height: 160px;">
        <uvEmpty image-size="80" image="https://fastly.jsdelivr.net/npm/@vant/assets/custom-empty-image.png" label="无数据" />
      </div>
    </demoBlock>
    <demoBlock title="图片插槽">
      <div style="width: 100%;height: 160px;">
        <uvEmpty label="无数据">
          <template #image>
            iamge
          </template>
        </uvEmpty>
      </div>
    </demoBlock>
    <demoBlock title="自定义底部内容">
      <div style="width: 100%;height: 160px;">
        <uvEmpty>
          我是自定义内容
          <div style="margin-top: 10px;">
            <uv-button>按钮</uv-button>
          </div>
        </uvEmpty>
      </div>
    </demoBlock>
  </div>
</template>

<script setup>
import demoBlock from '../../../demo/demo-block.vue'
import { uvEmpty, uvButton } from 'uv-ui'

</script>

<style lang="scss" scoped>

</style>
