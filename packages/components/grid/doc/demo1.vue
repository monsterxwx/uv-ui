<template>
  <div>
    <div class="tip">
      点击反馈通过<span class="code">clickable</span> 设置
    </div>
    <uv-grid
      clickable
    >
      <uv-grid-item
        v-for="item in 8"
        :key="item"
        :text="'文字'+item"
        icon-name="picture"
      />
    </uv-grid>

    <div class="title">
      自定义列数
    </div>
    <div class="tip">
      通过<span class="code">columnNum</span> 设置
    </div>
    <uv-grid
      column-num="3"
    >
      <uv-grid-item
        v-for="item in 9"
        :key="item"
        :text="'文字'+item"
        icon-name="picture"
      />
    </uv-grid>
    <div class="title">
      格子间距
    </div>
    <div class="tip">
      通过<span class="code">gutter</span> 设置
    </div>
    <uv-grid
      gutter="10"
    >
      <uv-grid-item
        v-for="item in 8"
        :key="item"
        :text="'文字'+item"
        icon-name="picture"
      />
    </uv-grid>
    <div class="title">
      内容横排
    </div>
    <div class="tip">
      <div> 通过<span class="code">direction</span> 设置，默认为<span class="code">column</span>，可设置为<span class="code">row</span></div>
      通过传入<span class="code">reverse</span> 可以将文字和图标反转
    </div>
    <uv-grid
      direction="row"
      reverse
    >
      <uv-grid-item
        v-for="item in 8"
        :key="item"
        :text="'文字'+item"
        icon-name="picture"
        @click="handleClick(item)"
      />
    </uv-grid>
  </div>
</template>

<script setup>
const handleClick = (item) => {
  console.log(item)
}
</script>

<style lang="scss" scoped>

</style>
