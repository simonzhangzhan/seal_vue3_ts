<script lang="ts" setup name="AppHeaderNav">
	// pinia
	import { useRoute } from 'vue-router'
	import { watchEffect } from 'vue'
	import useStore from '@/store'
	const { category } = useStore()
	const route = useRoute()
	category.getAllCategoryList()

	watchEffect(() => {
		if (route.fullPath === `/category/${route.params.id}`)
			category.getTopCategory(route.params.id as string)
	})
</script>

<template>
	<ul class="app-header-nav">
		<li class="home">
			<RouterLink to="/">首页</RouterLink>
		</li>
		<li v-for="(item, index) in category.list" :key="index">
			<RouterLink :to="`/category/${item.id}`">{{ item.name }}</RouterLink>
			<!-- 二级分类 -->
			<div class="layer" v-if="item.children">
				<ul>
					<!-- 
            vue2 中v-for的优先级大于v-if
            vue3 中v-if的优先级大于v-for
           -->
					<!-- <li v-if="item.children" v-for="sub in item.children" :key="sub.id">
            <a href="#">
              <img :src="sub.picture" alt="" />
              <p>{{ sub.name }}</p>
            </a>
          </li> -->
					<li v-for="sub in item.children" :key="sub.id">
						<RouterLink :to="`/category/sub/${sub.id}`">
							<img :src="sub.picture" alt="" />
							<p>{{ sub.name }}</p>
						</RouterLink>
					</li>
				</ul>
			</div>
			<!-- 二级分类 -->
		</li>
	</ul>
</template>

<style scoped lang="less">
	.app-header-nav {
		width: 820px;
		display: flex;
		padding-left: 40px;
		position: relative;
		z-index: 998;

		> li {
			margin-right: 40px;
			width: 38px;
			text-align: center;

			> a {
				font-size: 16px;
				line-height: 32px;
				height: 32px;
				display: inline-block;

				&:hover {
					color: @sealColor;
					border-bottom: 1px solid @sealColor;
				}
			}

			// 新增样式
			&:hover {
				> a {
					color: @sealColor;
					border-bottom: 1px solid @sealColor;
				}

				> .layer {
					height: 132px;
					opacity: 1;
				}
			}
		}
	}

	// 新增样式
	.layer {
		width: 1240px;
		background-color: #fff;
		position: absolute;
		left: -200px;
		top: 56px;
		height: 0;
		overflow: hidden;
		opacity: 0;
		box-shadow: 0 0 5px #ccc;
		transition: all 0.2s 0.1s;

		ul {
			display: flex;
			flex-wrap: wrap;
			padding: 0 70px;
			align-items: center;
			height: 132px;

			li {
				width: 110px;
				text-align: center;

				img {
					width: 60px;
					height: 60px;
				}

				p {
					padding-top: 10px;
				}

				&:hover {
					p {
						color: @sealColor;
					}
				}
			}
		}
	}
</style>
