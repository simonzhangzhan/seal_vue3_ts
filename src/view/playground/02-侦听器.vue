<script setup lang="ts">
	import { ref, watch, watchEffect } from 'vue'
	const count = ref(0)
	const money = ref(10000)
	// 侦听器
	watch([count, money], (newVal) => {
		console.log(newVal)
	})

	// watchEffect
	// 1.会自动追踪其同步执行过程中访问到的所有响应式属性
	// 2.立即执行
	watchEffect(() => {
		console.log(count.value, money.value)
	})
</script>

<template>
	<div>值:{{ count }}</div>
	<div>值:{{ money }}</div>
	<button @click="count++">自增</button>
	<button @click="money--">自减</button>
</template>

<style lang="less" scoped></style>
