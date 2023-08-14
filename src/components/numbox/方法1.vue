<script lang="ts" setup name="SealNumbox">
	// import { defineModel } from 'vue'

	const modelValue = defineModel<any>()
	const add = () => {
		if (modelValue.value >= 20) return
		modelValue.value++
	}

	const sub = () => {
		if (modelValue.value === 1) return
		modelValue.value--
	}
</script>
<template>
	<div class="seal-numbox">
		<div class="label">数量</div>
		<div class="numbox">
			<a href="javascript:;" @click="sub">-</a>
			<input type="text" readonly :value="modelValue" />
			<a href="javascript:;" @click="add">+</a>
		</div>
	</div>
</template>

<style scoped lang="less">
	.seal-numbox {
		display: flex;
		align-items: center;
		.label {
			width: 60px;
			color: #999;
			padding-left: 10px;
		}
		.numbox {
			width: 120px;
			height: 30px;
			border: 1px solid #e4e4e4;
			display: flex;
			> a {
				width: 29px;
				line-height: 28px;
				text-align: center;
				background: #f8f8f8;
				font-size: 16px;
				color: #666;
				&:first-of-type {
					border-right: 1px solid #e4e4e4;
				}
				&:last-of-type {
					border-left: 1px solid #e4e4e4;
				}
			}
			> input {
				width: 60px;
				padding: 0 5px;
				text-align: center;
				color: #666;
			}
		}
	}
</style>
