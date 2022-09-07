<template>
  <div>
    <uv-nav-bar
      title="标题"
    />
    <div class="title">
      返回上级
    </div>
    <div class="tip">
      通过<span class="code">leftArrow</span> 开启返回按钮
    </div>
    <uv-nav-bar
      title="标题"
      left-title="返回"
      left-arrow
    />
    <div class="title">
      右侧插槽
    </div>
    <uv-nav-bar
      title="标题"
      left-title="返回"
      left-arrow
    >
      <template #right>
        <uv-icon
          size="18"
          name="search"
          color="#419dfb"
        />
      </template>
    </uv-nav-bar>
    <div class="title">
      fixed定位
    </div>
    <div class="tip">
      通过<span class="code">fixed</span> 开启,通过<span class="code">placeholder</span>生成等高占位元素
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>
