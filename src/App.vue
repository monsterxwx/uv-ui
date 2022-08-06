<script setup>

</script>

<template>
  <router-view />
</template>

<style>
html,
body,
#app {
  width: 100%;
  height: 100%;
}
* {
  box-sizing: border-box;
}
.container {
  display: flex;
  flex-direction: column;
}
.flex {
  display: flex;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
}
.title {
  margin: 10px 0;
  font-size: 14px;
  color: #9eaaab;
}
.tip {
  margin-bottom: 10px;
  font-size: 13px;
  color: #34495e;
}
.code {
  display: inline-block;
  margin: 2px 5px;
  padding: 5px;
  font-weight: 700;
  border-radius: 4px;
  color: #58727e;
  background-color: #ffffff;
}

</style>
