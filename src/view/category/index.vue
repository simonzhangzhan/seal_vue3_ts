<script lang="ts" name="TopCategory" setup>
	import useStore from '@/store'
	import { storeToRefs } from 'pinia'
	import { watchEffect } from 'vue'
	import { useRoute } from 'vue-router'
	import GoodsItem from './components/goods-item.vue'

	const { category, home } = useStore()
	const route = useRoute()
	home.getBannerList()
	const { topCategory } = storeToRefs(category)
	// category.getTopCategory(route.params.id as string)
	// watch(
	// 	() => route.params.id,
	// 	() => {
	// 		if (route.fullPath === `/category/${route.params.id}`)
	// 			category.getTopCategory(route.params.id as string)
	// 	},
	// 	{
	// 		immediate: true,
	// 	}
	// )

	watchEffect(() => {
		if (route.fullPath === `/category/${route.params.id}`)
			category.getTopCategory(route.params.id as string)
	})

	// watchEffect(() => {
	// 	// 只有是一级分类的情况下，才发送这个请求
	// 	// console.log(route.fullPath)
	// 	const id = route.params.id as string
	// 	// console.log(route.fullPath, '=====', `/category/${id}`)
	// 	if (route.fullPath === `/category/${id}`) {
	// 		category.getTopCategory(id)
	// 	}
	// })
</script>

<template>
	<div class="top-category">
		<div class="container">
			<!-- 渲染面包屑导航 -->
			<SealBread>
				<SealBreadItem to="/">首页</SealBreadItem>
				<SealBreadItem>{{ category.topCategory.name }}</SealBreadItem>
			</SealBread>

			<!-- 轮播图 -->
			<SealCarousel
				:slides="home.bannerList"
				style="height: 500px"
				autoplay
			></SealCarousel>

			<!-- 所有二级分类 -->
			<div class="sub-list">
				<h3>全部分类</h3>
				<ul>
					<li v-for="item in topCategory.children" :key="item.id">
						<RouterLink :to="`/category/sub/${item.id}`">
							<img v-lazy="item.picture" />
							<p>{{ item.name }}</p>
						</RouterLink>
					</li>
				</ul>
			</div>

			<!-- 分类关联商品 -->
			<div
				class="ref-goods"
				v-for="item in category.topCategory.children"
				:key="item.id"
			>
				<div class="head">
					<h3>- {{ item.name }} -</h3>
					<p class="tag">温暖柔软，品质之选</p>
					<SealMore />
				</div>
				<div class="body">
					<GoodsItem
						v-for="goods in item.goods"
						:key="goods.id"
						:goods="goods"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped lang="less">
	.top-category {
		h3 {
			font-size: 28px;
			color: #666;
			font-weight: normal;
			text-align: center;
			line-height: 100px;
		}
		.sub-list {
			margin-top: 20px;
			background-color: #fff;
			ul {
				display: flex;
				padding: 0 32px;
				flex-wrap: wrap;
				li {
					width: 168px;
					height: 160px;
					a {
						text-align: center;
						display: block;
						font-size: 16px;
						img {
							width: 100px;
							height: 100px;
						}
						p {
							line-height: 40px;
						}
						&:hover {
							color: @sealColor;
						}
					}
				}
			}
		}
	}
	.ref-goods {
		background-color: #fff;
		margin-top: 20px;
		position: relative;
		.head {
			.seal-more {
				position: absolute;
				top: 20px;
				right: 20px;
			}
			.tag {
				text-align: center;
				color: #999;
				font-size: 20px;
				position: relative;
				top: -20px;
			}
		}
		.body {
			display: flex;
			justify-content: flex-start;
			flex-wrap: wrap;
			padding: 0 65px 30px;
		}
	}
</style>
