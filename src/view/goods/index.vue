<script lang="ts" setup name="GoodsInfo">
import useStore from '@/store'
import { storeToRefs } from 'pinia'
import { watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import { ref } from 'vue'

import GoodsImage from './components/goods-image.vue'
import GoodsSales from './components/goods-sales.vue'
import GoodsName from './components/goods-name.vue'
import GoodsSku from './components/goods-sku.vue'
import GoodsDetail from './components/goods-detail.vue'
import GoodsHot from './components/goods-hot.vue'
import Message from '@/components/message'

const route = useRoute()
const { goods, cart } = useStore()
// goods.getGoodsInfo(route.params.id as string)
watchEffect(() => {
	if (route.fullPath === `/goods/${route.params.id}`) {
		goods.getGoodsInfo(route.params.id as string)
	}
})
const { info } = storeToRefs(goods)

// sku选择
const currentSkuId = ref('')
const changeSku = (skuId: string) => {
	// 1. 根据接收到的skuId找到对应的sku
	// 2. 修改商品的价钱库存
	currentSkuId.value = skuId
	const sku = info.value.skus.find((item) => item.id === skuId)
	if (sku) {
		info.value.inventory = sku.inventory
		info.value.price = sku.price
		info.value.oldPrice = sku.oldPrice
	}
}
const count = ref(1)

// 添加购物车
const addCart = async () => {
	// 判断是否选中规则
	if (currentSkuId.value === '') {
		return Message.warning('请选择完成的信息')
	}
	await cart.addCart({ skuId: currentSkuId.value, count: count.value })
	Message.success('添加成功')
}
</script>

<template>
	<div class="seal-goods-page" v-if="info.categories">
		<div class="container">
			<!-- 面包屑 -->
			<SealBread>
				<SealBreadItem to="/">首页</SealBreadItem>
				<SealBreadItem :to="`/category/${info.categories[1].id}`">
					{{ info.categories[1].name }}
				</SealBreadItem>
				<SealBreadItem :to="`/category/sub/${info.categories[0].id}`">
					{{ info.categories[0].name }}
				</SealBreadItem>
				<SealBreadItem>{{ info.name }}</SealBreadItem>
			</SealBread>

			<!-- 商品信息 -->
			<div class="goods-info">
				<div class="media">
					<GoodsImage :images="info.mainPictures"></GoodsImage>
					<GoodsSales></GoodsSales>
				</div>
				<div class="spec">
					<GoodsName :goods="info"></GoodsName>
					<!-- 规则组件 -->
					<GoodsSku
						:goods="info"
						@changeSku="changeSku"
						skuId="1369155864430120962"
					></GoodsSku>
					<!-- 数字选择框 -->
					<SealNumbox v-model="count"></SealNumbox>
					<SealButton
						type="primary"
						style="margin-top: 20px"
						size="large"
						@click="addCart"
					>
						加入购物车
					</SealButton>
				</div>
			</div>

			<!-- 商品详情 -->
			<div class="goods-footer">
				<div class="goods-article">
					<!-- 商品+评价 -->
					<div class="goods-tabs">
						<GoodsDetail :goods="info"></GoodsDetail>
					</div>
				</div>
				<!-- 24热榜+专题推荐 -->
				<div class="goods-aside">
					<GoodsHot :type="1"></GoodsHot>
					<GoodsHot :type="2"></GoodsHot>
					<GoodsHot :type="3"></GoodsHot>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped lang="less">
.goods-info {
	min-height: 600px;
	background: #fff;
	display: flex;
	.media {
		width: 580px;
		height: 600px;
		padding: 30px 50px;
	}
	.spec {
		flex: 1;
		padding: 30px 30px 30px 0;
	}
}
.goods-footer {
	display: flex;
	margin-top: 20px;
	.goods-article {
		width: 940px;
		margin-right: 20px;
	}
	.goods-aside {
		width: 280px;
		min-height: 1000px;
	}
}
.goods-tabs {
	min-height: 600px;
	background: #fff;
}
.goods-warn {
	min-height: 600px;
	background: #fff;
	margin-top: 20px;
}
</style>
