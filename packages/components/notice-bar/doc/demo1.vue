<template>
  <div>
    <uv-notice-bar text="无论我们能活多久，我们能够享受的只有无法分割的此刻，此外别无其他。" />
    <div class="title">
      是否滚动
    </div>
    <div class="tip">
      通过<span class="code">scrollable</span> 设置
    </div>
    <uv-notice-bar
      text="无论我们能活多久，我们能够享受的只有无法分割的此刻，此外别无其他。"
      :scrollable="false"
    />
    <uv-notice-bar
      text="米袋虽空——樱花开哉！"
      :scrollable="false"
    />
    <div class="title">
      插槽
    </div>
    <div class="tip">
      <div>自定义左侧图标插槽名<span class="code">icon</span> </div>
      <div>自定义内容，默认插槽</div>
    </div>
    <uv-notice-bar
      :scrollable="false"
    >
      test
    </uv-notice-bar>
    <div class="title">
      通知栏模式
    </div>
    <div class="tip">
      通过<span class="code">mode</span> 设置,可选值为<span class="code">close</span>和<span class="code">link</span>
    </div>
    <uv-notice-bar
      mode="close"
      speed="90"
      :show-left-icon="false"
      text="无论我们能活多久，我们能够享受的只有无法分割的此刻，此外别无其他。"
      @close="close"
    />
    <uv-notice-bar
      mode="link"
      text="米袋虽空——樱花开哉！"
      @click="test"
    />
  </div>
</template>

<script setup>
const test = () => {
  console.log('点击了')
}
const close = () => {
  console.log('关闭了')
}
</script>

<style lang="scss" scoped>

</style>
