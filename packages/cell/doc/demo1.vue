<template>
  <div>
    <uv-cell
      title="test"
      value="内容"
    />
    <uv-cell

      title="test"
      value="内容"
    />
    <div class="title">
      不要底部边框
    </div>
    <div class="tip">
      通过<span class="code">no-border</span>  设置
    </div>

    <uv-cell
      no-border
      title="test"
      value="内容"
    />
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

    <uv-cell
      card
      size="16"
      title="test"
      value="内容"
    />
    <div class="title">
      添加图标
    </div>
    <div class="tip">
      通过<span class="code">icon</span>  设置
    </div>
    <uv-cell
      card
      icon="add"
      icon-color="#4fc0a7"
      size="16"
      title="test"
      value="内容"
    />
    <div class="title">
      显示箭头
    </div>
    <div class="tip">
      通过<span class="code">arrow</span>  设置,默认右边，通过<span class="code">down</span>设置为下边
    </div>
    <uv-cell
      card
      arrow
      title="test"
      value="内容"
    />
    <uv-cell
      card
      arrow
      arrow-direction="down"
      title="test"
      value="内容"
    />
    <div class="title">
      使用插槽
    </div>
    <div class="tip">
      <span class="code">title</span>设置左边的标题插槽，<span class="code">value</span>设置右边内容插槽
    </div>
    <uv-cell>
      <template #title>
        自定义title
      </template>
      <template #value>
        自定义value
      </template>
    </uv-cell>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>
