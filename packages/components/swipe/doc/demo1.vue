<template>
  <div>
    <uv-swipe>
      <uv-swipe-item>
        <div class="test color1">
          1
        </div>
      </uv-swipe-item>
      <uv-swipe-item>
        <div class="test color2">
          2
        </div>
      </uv-swipe-item>
      <uv-swipe-item>
        <div class="test color3">
          3
        </div>
      </uv-swipe-item>
    </uv-swipe>
    <div class="title">
      标题
    </div>
    <div class="tip">
      通过<span class="code">shape</span> 设置
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.test {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
}
.color1 {
  background-color: #ffbbaa;
}
.color2 {
  background-color: green;
}
.color3 {
  background-color: orange;
}
</style>
