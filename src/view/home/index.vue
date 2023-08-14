<script lang="ts" setup>
	import HomeBanner from './components/home-banner.vue'
	import HomeCategory from './components/home-category.vue'
	// import HomePanel from './components/home-panel.vue'
	import HomeNew from './components/home-new.vue'
	import HomeHot from './components/home-hot.vue'
	import HomeBrand from './components/home-brand.vue'
</script>

<template>
	<div class="page-home">
		<div class="home-entry">
			<div class="container">
				<!-- 左侧分类 -->
				<HomeCategory />
				<!-- banner轮播图 -->
				<HomeBanner />
			</div>
			<!-- 新鲜好物 -->
			<!-- <HomePanel title="新鲜好物" subTitle="新鲜出炉 品质靠谱">
				<template #right>
					<SealMore to="/"></SealMore>
				</template>
				<div>我是内容主体</div>
			</HomePanel> -->
			<!-- 新鲜好物 -->
			<HomeNew></HomeNew>
			<!-- 人气推荐 -->
			<HomeHot></HomeHot>
			<!--热门品牌  -->
			<HomeBrand></HomeBrand>
		</div>
	</div>
</template>

<style lang="less" scoped></style>
