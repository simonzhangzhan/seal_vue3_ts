src/view/playground/index.vue
<script lang="ts" setup>
// import confirm from '@/components/confirm/confirm.vue'
import Confirm from '@/components/confirm'
const del = () => {
	Confirm({ title: '大标题', text: '独自莫凭栏' })
}
</script>

<template>
	<button @click="del">删除</button>
</template>

<style scoped lang="less"></style>
