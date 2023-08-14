src/view/playground/index.vue
<script lang="ts" setup>
	import { ref } from 'vue'
	const flag = ref(false)
</script>

<template>
	<SealMessage>登录成功</SealMessage>
	<button @click="flag = true">true</button>
	<button @click="flag = false">false</button>
	<!-- 点击按钮时动态的创建组件 -->
</template>

<style scoped lang="less"></style>
