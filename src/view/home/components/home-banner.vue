<script lang="ts" setup>
	import useStore from '@/store'
	const { home } = useStore()
	home.getBannerList()
</script>
<template>
	<div class="home-banner">
		<!-- 轮播图 -->
		<SealCarousel :slides="home.bannerList" autoplay :duration="3000">
		</SealCarousel>
	</div>
</template>

<style scoped lang="less">
	.home-banner {
		width: 1240px;
		height: 500px;
		position: absolute;
		left: 0;
		top: 0;
		z-index: 98;
		background-color: pink;
		//知识点: vue3中的样式穿透的语法  :deep()
	}
	:deep(.carousel-btn.prev) {
		left: 270px !important;
	}
	:deep(.carousel-indicator) {
		padding-left: 250px;
	}
</style>
