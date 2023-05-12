<template>
  <div>
    <demoBlock title="点击反馈">
      <uv-cell
        clickable
        title="test"
        value="内容"
      />
    </demoBlock>
    <demoBlock title="卡片式">
      <uv-cell-group
        card
        gap
      >
        <uv-cell
          title="test"
          value="内容"
        />
        <uv-cell
          title="test"
          value="内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容"
        />
      </uv-cell-group>
    </demoBlock>
    <demoBlock title="字体大小">
      <uv-cell
        size="16"
        title="test"
        value="内容"
      />
    </demoBlock>
    <demoBlock title="添加图标">
      <uv-cell
        icon="add"
        icon-color="#4fc0a7"
        size="16"
        title="test"
        value="内容"
      />
    </demoBlock>
    <demoBlock title="显示箭头">
      <uv-cell-group card>
        <uv-cell
          arrow
          title="test"
          value="内容"
        />
        <uv-cell
          arrow
          arrow-direction="down"
          title="test"
          value="内容"
        />
      </uv-cell-group>
    </demoBlock>
    <demoBlock title="使用插槽">
      <uv-cell>
        <template #title>
          自定义title
        </template>
        <template #value>
          自定义value
        </template>
      </uv-cell>
    </demoBlock>
  </div>
</template>

<script setup>
import demoBlock from '../../../demo/demo-block.vue'
import { uvCell, uvCellGroup } from 'uv-ui'

</script>

<style lang="scss" scoped>
.flex {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}
</style>
