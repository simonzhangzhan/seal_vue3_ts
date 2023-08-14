<script lang="ts" setup name="SealNumbox">
	const props = withDefaults(
		defineProps<{
			modelValue?: number
			min?: 1
			max?: 20
		}>(),
		{
			modelValue: 1,
			min: 1,
			max: 20,
		}
	)

	const emits = defineEmits<{
		'update:modelValue': [data: number]
	}>()

	const add = () => {
		if (props.modelValue + 1 > props.max) return
		emits('update:modelValue', props.modelValue + 1)
	}

	const sub = () => {
		if (props.modelValue - 1 < props.min) return
		emits('update:modelValue', props.modelValue - 1)
	}
</script>
<template>
	<div class="seal-numbox">
		<div class="label">数量</div>
		<div class="numbox">
			<a href="javascript:;" @click="sub">-</a>
			<input type="text" readonly :value="props.modelValue" />
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
