<script lang="ts" setup>
	import useStore from '@/store'
	import HomePanel from './home-panel.vue'
	const { home } = useStore()
	import { useLazyData } from '@/utils/hooks'
	import HomeSealSkeleton from './home-SealSkeleton.vue'

	// const target = ref(null)
	// const { stop } = useIntersectionObserver(target, ([{ isIntersecting }]) => {
	// 	if (isIntersecting) {
	// 		home.getHotGoodsList()
	// 		stop()
	// 	}
	// })
	const target = useLazyData(() => {
		home.getHotGoodsList()
	})
</script>
<template>
	<HomePanel title="人气推荐" sub-title="人气爆款 不容错过" ref="target">
		<template #right>
			<SealMore path="/">查看其他</SealMore>
		</template>
		<Transition name="fade">
			<ul ref="pannel" class="goods-list" v-if="home.hotGoodsList.length > 0">
				<li v-for="item in home.hotGoodsList" :key="item.id">
					<RouterLink to="/">
						<!-- <img :src="item.picture" alt="" /> -->
						<img v-lazy="item.picture" alt="" />
						<p class="name">{{ item.title }}</p>
						<p class="desc">{{ item.alt }}</p>
					</RouterLink>
				</li>
			</ul>
			<HomeSealSkeleton v-else></HomeSealSkeleton>
		</Transition>
	</HomePanel>
</template>

<style scoped lang="less">
	.goods-list {
		display: flex;
		justify-content: space-between;
		height: 426px;
		li {
			width: 306px;
			height: 406px;
			.hoverShadow();
			img {
				width: 306px;
				height: 306px;
			}
			p {
				font-size: 22px;
				padding-top: 12px;
				text-align: center;
			}
			.desc {
				color: #999;
				font-size: 18px;
			}
		}
	}
</style>
