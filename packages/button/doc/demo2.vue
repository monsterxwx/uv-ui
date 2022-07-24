<template>
  <div class="container">
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
</template>

<script setup>

</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
}
</style>
