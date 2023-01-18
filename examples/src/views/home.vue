<template>
  <div>
    <!-- <uvButton
      type="primary"
      loading
    >
      按钮
    </uvButton> -->
    <uvTable :columns="[
  {
    title: 'Date',
    prop: 'date',
  }, {
    title: 'Name',
    prop: 'name'
  }, {
    title: 'State',
    prop: 'state'
  }, {
    title: 'Zip',
    prop: 'zip'
  }
]" :data="[{date:'111'}]"></uvTable>
  </div>
</template>

<script setup>

import {uvTable} from 'uv-ui'
</script>

<style lang="scss" scoped>

</style>
