<template>
  <div>
    <div class="title">
      点击反馈
    </div>
    <div class="tip">
      通过<span class="code">clickable</span> 属性开启
    </div>
    <div>
      <uv-cell
        clickable
        title="test"
        value="内容"
      />
    </div>

    <div class="title">
      卡片式
    </div>
    <div class="tip">
      通过使用<span class="code">uv-cell-group</span> 组件包裹，并传入<span class="code">card</span>属性即可,两边需要间隙可以开启<span class="code">gap</span>属性
    </div>
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
    <div class="title">
      字体大小
    </div>
    <div class="tip">
      通过<span class="code">size</span>  设置
    </div>
    <div>
      <uv-cell
        size="16"
        title="test"
        value="内容"
      />
    </div>

    <div class="title">
      添加图标
    </div>
    <div class="tip">
      通过<span class="code">icon</span>  设置
    </div>
    <div>
      <uv-cell
        icon="add"
        icon-color="#4fc0a7"
        size="16"
        title="test"
        value="内容"
      />
    </div>

    <div class="title">
      显示箭头
    </div>
    <div class="tip">
      通过<span class="code">arrow</span>  设置,默认右边，通过<span class="code">down</span>设置为下边
    </div>
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
    <div class="title">
      使用插槽
    </div>
    <div class="tip">
      <span class="code">title</span>设置左边的标题插槽，<span class="code">value</span>设置右边内容插槽
    </div>
    <div>
      <uv-cell>
        <template #title>
          自定义title
        </template>
        <template #value>
          自定义value
        </template>
      </uv-cell>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>
