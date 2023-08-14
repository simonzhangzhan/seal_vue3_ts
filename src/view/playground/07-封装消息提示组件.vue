src/view/playground/index.vue
<script lang="ts" setup>
	import Message from '@/components/message'
	const show = () => {
		Message({ type: 'success', text: '登录成功' })
	}
</script>

<template>
	<button @click="show">显示</button>
</template>

<style scoped lang="less"></style>
