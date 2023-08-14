src/view/playground/index.vue
<script lang="ts" setup>
	defineProps({
		money: {
			type: Number,
			default: 0,
		},
	})

	const emit = defineEmits(['update:money'])
</script>

<template>
	<h3>子组件-{{ money }}</h3>
	<button @click="emit('update:money', money+1)">+1</button>
</template>

<style scoped lang="less"></style>

