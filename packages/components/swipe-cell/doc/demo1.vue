<template>
  <div>
    <uv-swipe-cell @cancle="cancleHandle" />
    <div class="title">
      左右操作按钮
    </div>
    <uv-swipe-cell left />
    <div class="title">
      自定义插槽
    </div>
    <div class="tip">
      左右插槽通过插槽名<span class="code">left</span>和<span class="code">right</span> 设置
    </div>
    <uv-swipe-cell>
      <template #right>
        <div class="deleteBtn">
          删除
        </div>
      </template>
    </uv-swipe-cell>
    <div
      class="tip"
      style="margin-top: 10px;"
    >
      内容插槽为默认
    </div>
    <uv-swipe-cell>
      <div class="content">
        <div class="iamge">
          <uv-icon
            size="40"
            name="electronics"
          />
        </div>
        <div class="desc">
          <div>
            <div>商品标题</div>
            <div class="desc-tips">
              描述信息
            </div>
          </div>
          <div class="price">
            ￥20.99
          </div>
        </div>
      </div>
    </uv-swipe-cell>
  </div>
</template>

<script setup>
function cancleHandle () {
  console.log('点击删除')
}
</script>

<style lang="scss" scoped>
.deleteBtn {
  display: flex;
  align-items: center;
  padding: 5px 20px;
  font-size: 14px;
  color: #ffffff;
  background:
    linear-gradient(
      90deg,
      rgb(8 152 227 / 100%) 0%,
      rgb(15 167 217 / 100%) 35%,
      rgb(33 203 191 / 100%) 62%,
      rgb(37 216 180 / 100%) 80%,
      rgb(42 224 175 / 100%) 100%
    );
}
.content {
  display: flex;
  padding: 10px 16px;
  gap: 10px;
  .iamge {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .desc {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: #323233;
    .desc-tips {
      margin-top: 5px;
      font-size: 12px;
      color: #969799;
    }
    .price {
      margin-top: 10px;
      font-weight: 700;
      color: #323233;
    }
  }
}
</style>
