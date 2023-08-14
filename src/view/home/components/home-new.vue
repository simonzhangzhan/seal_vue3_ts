<script lang="ts" setup>
	import HomePanel from './home-panel.vue'
	import { useLazyData } from '@/utils/hooks'
	import useStore from '@/store'
	import HomeSealSkeleton from './home-SealSkeleton.vue'
	const { home } = useStore()

	const target = useLazyData(() => {
		home.getGoodsList()
	})
</script>
<template>
	<div class="home-new">
		<HomePanel ref="target" title="新鲜好物" sub-title="新鲜出炉 品质靠谱">
			<template #right><SealMore path="/" /></template>
			<!-- 面板内容 -->
			<Transition name="fade">
				<ul class="goods-list" v-if="home.newGoodsList.length > 0">
					<li v-for="item in home.newGoodsList" :key="item.id">
						<RouterLink to="/">
							<!-- <img :src="item.picture" alt="" /> -->
							<img v-lazy="item.picture" alt="" />
							<p class="name ellipsis">{{ item.name }}</p>
							<p class="price">&yen;{{ item.price }}</p>
						</RouterLink>
					</li>
				</ul>
				<HomeSealSkeleton v-else></HomeSealSkeleton>
			</Transition>
		</HomePanel>
	</div>
</template>

<style scoped lang="less">
	.goods-list {
		display: flex;
		justify-content: space-between;
		height: 406px;
		li {
			width: 306px;
			height: 406px;
			background: #f0f9f4;
			.hoverShadow();
			img {
				width: 306px;
				height: 306px;
			}
			p {
				font-size: 22px;
				padding: 12px 30px 0 30px;
				text-align: center;
			}
			.price {
				color: @priceColor;
			}
		}
	}
</style>
