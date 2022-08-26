<template>
  <div>
    <headerBlock />
    <div>
      <uv-button
        type="success"
        loading
      >
        test
      </uv-button>
      <uv-switch class="diy" />
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.diy {
  --uv-switch-size: 36px;
}
</style>
