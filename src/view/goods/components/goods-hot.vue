<script setup lang="ts">
	import GoodsItem from '@/view/category/components/goods-item.vue'
	import { ApiRes } from '@/types/data'
	import request from '@/utils/request'
	import { onMounted, ref } from 'vue'
	import { useRoute } from 'vue-router'

	// const { type = 1 } = defineProps<{
	// 	type: 1 | 2 | 3
	// }>()
	const props = withDefaults(
		defineProps<{
			type: 1 | 2 | 3
		}>(),
		{
			type: 1,
		}
	)
	const route = useRoute()
	const id = route.params.id as string
	type GoodsInfo = {
		id: string
		picture: string
		name: string
		price: string
		desc: string
	}
	const list = ref<GoodsInfo[]>([])

	onMounted(async () => {
		const res = await request.get<ApiRes<GoodsInfo[]>>('/goods/hot', {
			params: {
				id: id,
				type: props.type,
			},
		})
		list.value = res.data.result
	})

	// 标题对象
	const titleObj = {
		1: '24小时热销榜',
		2: '周热销榜',
		3: '总热销榜',
	}
</script>

<template>
	<div class="goods-hot">
		<h3>{{ titleObj[props.type] }}</h3>
		<div class="goods-list">
			<!-- 商品区块 -->
			<GoodsItem v-for="item in list" :key="item.id" :goods="item" />
		</div>
	</div>
</template>

<style scoped lang="less">
	.goods-hot {
		background-color: #fff;
		margin-bottom: 20px;
		h3 {
			height: 70px;
			background: @helpColor;
			color: #fff;
			font-size: 18px;
			line-height: 70px;
			padding-left: 25px;
			margin-bottom: 10px;
			font-weight: normal;
		}
		.goods-list {
			display: flex;
			flex-direction: column;
			align-items: center;
		}
	}
</style>
