<template>
  <div class="uv-progress" :style="{height:height}">
    <div class="uv-progress-content" :style="{backgroundColor:trackColor}">
      <div class="uv-progress-content-length" :style="{width:percent+'%',backgroundColor:progressColor}" />
      <div v-if="insetPercent && showPercent" class="uv-progress-inset-num" :style="{width:percent+'%'}">
        {{ percent }}%
      </div>
    </div>
    <div v-if="!insetPercent && showPercent" class="uv-progress-out-num">
      {{ percent }}%
    </div>
  </div>
</template>

<script setup>
defineProps({
  percent: {
    type: Number,
    default: 0
  },
  showPercent: {
    type: Boolean,
    default: true
  },
  insetPercent: {
    type: Boolean,
    default: true
  },
  trackColor: {
    type: String,
    default: ''
  },
  progressColor: {
    type: String,
    default: ''
  },
  height: {
    type: String,
    default: ''
  }
})
</script>
<script>
export default {
  name: 'UvProgress'
}
</script>

<style lang="scss">
:root {
  --uv-progress-height: 12px;
  --uv-progress-content-border-radius: 100px;
  --uv-progress-content-length-bg-color: #19be6b;
  --uv-progress-transition-time: 0.3s;
  --uv-progress-inset-num-color: #ffffff;
  --uv-progress-inset-num-padding-right: 5px;
  --uv-progress-inset-num-font-size: 12px;
  --uv-progress-out-num-font-size: 14px;
  --uv-progress-out-num-width: 40px;
  --uv-progress-out-num-padding: 0 10px;
  --uv-progress-out-num-color: #c8c9cc;
}
.uv-progress {
  display: flex;
  align-items: center;
  height: var(--uv-progress-height);
  .uv-progress-content {
    position: relative;
    min-width: 0;
    height: 100%;
    border-radius: var(--uv-progress-content-border-radius);
    background-color: #ececec;
    flex: 1 0;
    .uv-progress-content-length {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      border-radius: var(--uv-progress-content-border-radius);
      background-color: var(--uv-progress-content-length-bg-color);
      transition: width var(--uv-progress-transition-time);
    }
    .uv-progress-inset-num {
      position: absolute;
      top: 0;
      bottom: 0;
      padding-right: var(--uv-progress-inset-num-padding-right);
      font-size: var(--uv-progress-inset-num-font-size);
      text-align: right;
      color: var(--uv-progress-inset-num-color);
      transition: width var(--uv-progress-transition-time);
    }
  }
  .uv-progress-out-num {
    padding: var(--uv-progress-out-num-padding);
    width: var(--uv-progress-out-num-width);
    font-size: var(--uv-progress-out-num-font-size);
    white-space: nowrap;
    color: var(--uv-progress-out-num-color);
  }
}

</style>
