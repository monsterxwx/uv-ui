<template>
  <div class="container">
    <div>
      <div class="title">
        加载状态
      </div>
      <div class="tip">
        通过 <span class="code">loading</span>  设置加载状态
      </div>
      <uv-button
        loading
        type="success"
      >
        加载中
      </uv-button>
    </div>
    <div>
      <div class="title">
        使用图标
      </div>
      <div class="tip">
        通过 <span class="code">icon</span>  选择图标,通过<span class="code">icon-color</span>修改图标颜色
        通过<span class="code">icon-size</span>修改图标大小, 通过<span class="code">icon-position</span>修改图标左右位置，可选值为<span class="code">left</span><span class="code">right</span>
      </div>
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
    </div>
    <div>
      <div class="title">
        修改背景颜色和字体颜色
      </div>
      <div class="tip">
        通过 <span class="code">bgColor</span>  设置背景色，通过 <span class="code">color</span> 修改文字颜色。
      </div>
      <uv-button
        bg-color="#f79055"
        color="#fff"
      >
        自定义按钮
      </uv-button>
    </div>
    <div>
      <div class="title">
        按钮类型
      </div>
      <div class="tip">
        通过<span class="code">square</span>  设置方形按钮，通过<span class="code">round</span>  设置圆形按钮。
      </div>
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
    </div>
    <div>
      <div class="title">
        按钮尺寸
      </div>
      <div class="tip">
        通过属性<span class="code">size</span>属性设置，<span class="code">normal</span> 为默认，<span class="code">small</span> 为小型,<span class="code">mini</span> 为迷你
      </div>
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
    </div>
    <div>
      <div class="title">
        块级元素
      </div>
      <div class="tip">
        通过 <span class="code">block</span>  设置为块级按钮
      </div>
      <uv-button
        block
        type="success"
      >
        块级按钮
      </uv-button>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>

</style>
