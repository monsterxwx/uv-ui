<template>
  <div class="container">
    <div class="tip">
      设置<span class="code">type</span>类型修改按钮状态,可选值有
      <span class="code">primary</span>
      <span class="code">success</span>
      <span class="code">primary</span>
      <span class="code">error</span>
      <span class="code">info</span>
      <span class="code">warning</span>
    </div>
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
