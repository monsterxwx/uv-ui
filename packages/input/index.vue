<template>
  <div>
    <input
      type="text"
      :value="modelValue"
      @input="input"
    >
  </div>
</template>

<script setup>
const emit = defineEmits(['update:modelValue'])
defineProps({
  modelValue: {
    type: String || Number,
    default: ''
  }
})
const input = (e) => {
  emit('update:modelValue', e.target.value)
}
</script>
<script>
export default {
  name: 'UvInput'
}
</script>

<style lang="scss" scoped>

</style>
