<template>
  <div
    class="uv-divider"
    :class="[hairline?'uv-divider-hairline':'',dashed?'uv-divider-dashed':'',position==='left'?'uv-divider-left':'',position==='right'?'uv-divider-right':'']"
  >
    <slot />
  </div>
</template>

<script setup>

defineProps({
  // 0.5px线
  hairline: {
    type: Boolean,
    default: false
  },
  // 虚线
  dashed: {
    type: Boolean,
    default: false
  },
  // 位置left和right可选
  position: {
    type: String
  }
})
</script>
<script>
export default {
  name: 'UvDivider'
}
</script>

<style lang="scss">
:root {
  --uv-divider-margin: 16px 0;
  --uv-divider-font-size: 14px;
  --uv-divider-border-color: #ebedf0;
  --uv-divider-color: #969799;
  --uv-divider-line-height: 1px;
  --uv-divider-content-distance: 10px;
  --uv-divider-left-line-max-width: 10%;
  --uv-divider-right-line-max-width: 10%;
}
.uv-divider {
  display: flex;
  align-items: center;
  margin: var(--uv-divider-margin);
  font-size: var(--uv-divider-font-size);
  border-style: solid;
  border-width: 0;
  border-color: var(--uv-divider-border-color);
  color: var(--uv-divider-color);
  &::before,
  &::after {
    box-sizing: border-box;
    display: block;
    height: var(--uv-divider-line-height);
    border-style: inherit;
    border-width: var(--uv-divider-line-height) 0 0;
    border-color: inherit;
    content: "";
    flex: 1;
  }
  &::before {
    margin-right: var(--uv-divider-content-distance);
  }
  &::after {
    margin-left: var(--uv-divider-content-distance);
  }
}
.uv-divider-hairline {
  &::before,
  &::after {
    transform: scaleY(0.5);
  }
}
.uv-divider-dashed {
  border-style: dashed;
}
.uv-divider-left {
  &::before {
    max-width: var(--uv-divider-left-line-max-width);
  }
}
.uv-divider-right {
  &::after {
    max-width: var(--uv-divider-right-line-max-width);
  }
}
</style>
