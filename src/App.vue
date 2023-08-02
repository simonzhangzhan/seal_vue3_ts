<script setup lang="ts">
import request from '@/utils/request'

const test = async () => {
  const res = await request.get('/home/index')
  console.log(res)
}
test()

</script>

<template>
  <h1>根文件</h1>
  <ul>
    <li>3</li>
    <li>2</li>
    <li>1</li>
  </ul>
</template>

<style scoped lang="less">
// @import '@/assets/styles/variables.less';
// @import '@/assets/styles/mixins.less';

h1 {
  background-color: @sealColor;
  .hoverShadow();
}
</style>
