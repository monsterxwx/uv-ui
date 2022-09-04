<template>
  <div>
    <uv-divider>标题</uv-divider>
    <div class="title">
      使用 0.5px 线
    </div>
    <div class="tip">
      通过<span class="code">hairline</span> 设置
    </div>
    <uv-divider
      hairline
    >
      标题
    </uv-divider>
    <div class="title">
      开启虚线
    </div>
    <div class="tip">
      通过<span class="code">dashed</span> 设置
    </div>
    <uv-divider
      dashed
    >
      标题
    </uv-divider>

    <div class="title">
      内容位置
    </div>
    <div class="tip">
      通过<span class="code">position</span> 设置left或者right值
    </div>
    <uv-divider
      position="left"
    >
      标题
    </uv-divider>
    <uv-divider
      position="right"
    >
      标题
    </uv-divider>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>
