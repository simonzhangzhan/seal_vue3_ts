<script lang="ts" setup name="SealButton">
	// const { size = 'middle', type = 'default' } = defineProps<{
	// 	size?: 'large' | 'middle' | 'small' | 'mini'
	// 	type?: 'default' | 'primary' | 'plain' | 'gray'
	// }>()

	const props = withDefaults(
		defineProps<{
			size?: 'large' | 'middle' | 'small' | 'mini'
			type?: 'default' | 'primary' | 'plain' | 'gray'
		}>(),
		{
			size: 'large',
			type: 'default',
		}
	)
</script>
<template>
	<button class="seal-button ellipsis" :class="[props.size, props.type]">
		<slot />
	</button>
</template>

<style scoped lang="less">
	.seal-button {
		appearance: none;
		border: none;
		outline: none;
		background: #fff;
		text-align: center;
		border: 1px solid transparent;
		border-radius: 4px;
		cursor: pointer;
	}
	.large {
		width: 240px;
		height: 50px;
		font-size: 16px;
	}
	.middle {
		width: 180px;
		height: 50px;
		font-size: 16px;
	}
	.small {
		width: 100px;
		height: 32px;
	}
	.mini {
		width: 60px;
		height: 32px;
	}
	.default {
		border-color: #e4e4e4;
		color: #666;
	}
	.primary {
		border-color: @sealColor;
		background: @sealColor;
		color: #fff;
	}
	.plain {
		border-color: @sealColor;
		color: @sealColor;
		background: lighten(@sealColor, 50%);
	}
	.gray {
		border-color: #ccc;
		background: #ccc;
		color: #fff;
	}
</style>
