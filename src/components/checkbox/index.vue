<script lang="ts" setup name="SealCheckbox">
	const props = withDefaults(
		defineProps<{
			modelValue?: boolean
		}>(),
		{
			modelValue: false,
		}
	)
	const emits = defineEmits<{
		'update:modelValue': [data: boolean]
		change: [data: boolean]
	}>()
	const change = () => {
		emits('update:modelValue', !props.modelValue)
		emits('change', !props.modelValue)
	}
</script>

<template>
	<div class="seal-checkbox" @click="change">
		<i class="iconfont icon-checked" v-if="modelValue"></i>
		<i class="iconfont icon-unchecked" v-else></i>
		<span>
			<slot></slot>
		</span>
	</div>
</template>

<style scoped lang="less">
	.seal-checkbox {
		display: inline-block;
		margin-right: 2px;
		.icon-checked {
			color: @sealColor;
			~ span {
				color: @sealColor;
			}
		}
		i {
			position: relative;
			top: 1px;
		}
		span {
			margin-left: 2px;
		}
	}
</style>
