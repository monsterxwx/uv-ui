<template>
  <div>
    <demoBlock title="不同类型">
      <div class="flex">
        <uv-button>默认按钮</uv-button>
        <uv-button type="primary">
          主要按钮
        </uv-button>
        <uv-button type="success">
          成功按钮
        </uv-button>
        <uv-button type="error">
          失败按钮
        </uv-button>
        <uv-button type="info">
          信息按钮
        </uv-button>
        <uv-button type="warning">
          警告按钮
        </uv-button>
      </div>
    </demoBlock>
    <demoBlock title="禁用状态">
      <div class="flex">
        <uv-button disabled>
          默认按钮
        </uv-button>
        <uv-button
          disabled
          type="primary"
        >
          主要按钮
        </uv-button>
        <uv-button
          disabled
          type="success"
        >
          成功按钮
        </uv-button>
        <uv-button
          disabled
          type="error"
        >
          失败按钮
        </uv-button>
        <uv-button
          disabled
          type="info"
        >
          信息按钮
        </uv-button>
        <uv-button
          disabled
          type="warning"
        >
          警告按钮
        </uv-button>
      </div>
    </demoBlock>
    <demoBlock title="加载状态">
      <uv-button
        loading
        type="success"
      >
        加载中
      </uv-button>
    </demoBlock>
    <demoBlock title="使用图标">
      <div class="flex">
        <uv-button
          icon="add"
          icon-color="#f56c6c"
          :icon-size="18"
          type="success"
        >
          添加
        </uv-button>
        <uv-button
          icon="add"
          icon-position="right"
          type="success"
        >
          添加
        </uv-button>
      </div>
    </demoBlock>
    <demoBlock title="修改背景颜色和字体颜色">
      <uv-button
        bg-color="#f79055"
        color="#fff"
      >
        自定义按钮
      </uv-button>
    </demoBlock>
    <demoBlock title="按钮类型">
      <div class="flex">
        <uv-button
          square
          type="success"
        >
          方形按钮
        </uv-button>
        <uv-button
          round
          type="success"
        >
          圆角按钮
        </uv-button>
      </div>
    </demoBlock>
    <demoBlock title="按钮尺寸">
      <div class="flex">
        <uv-button
          size="normal"
          type="success"
        >
          普通按钮
        </uv-button>
        <uv-button
          size="small"
          type="success"
        >
          小型按钮
        </uv-button>
        <uv-button
          size="mini"
          type="success"
        >
          迷你按钮
        </uv-button>
      </div>
    </demoBlock>
    <demoBlock title="块级元素">
      <uv-button
        block
        type="success"
      >
        块级按钮
      </uv-button>
    </demoBlock>
  </div>
</template>

<script setup>
import demoBlock from '../../../demo/demo-block.vue'
import uvButton from '../button.vue'
</script>

<style lang="scss" scoped>
.flex {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}
</style>
