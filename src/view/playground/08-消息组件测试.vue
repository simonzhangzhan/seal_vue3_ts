src/view/playground/index.vue
<script lang="ts" setup>
	import Message from '@/components/message'
	const show = () => {
		Message({ type: 'success', text: '登录成功', duration: 3000 })
	}
	const err = () => {
		// Message({ type: 'error', text: '登录失败' })
		Message.error('登录失败')
	}
</script>

<template>
	<button @click="show">显示</button>
	<button @click="err">失败</button>
</template>

<style scoped lang="less"></style>
