<template>
  <div class="container">
    <div class="tip">
      设置<span class="code">disabled</span>将按钮该为禁用状态
    </div>
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
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  .flex {
    display: flex;
    gap: 4px;
    flex-wrap: wrap;
  }
  .tip {
    margin-bottom: 10px;
    font-size: 13px;
    color: #34495e;
    .code {
      display: inline-block;
      margin: 2px 5px;
      padding: 5px;
      font-weight: 700;
      border-radius: 4px;
      color: #58727e;
      background-color: #f8f8f8;
    }
  }
}
</style>
