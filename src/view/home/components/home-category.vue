<script lang="ts" setup name="HomeCategory">
	import useStore from '@/store'
	const { category } = useStore()
	// import SealSkeleton from '@/components/skeleton/index.vue'
</script>

<template>
	<div class="home-category">
		<ul class="menu">
			<li v-for="item in category.list" :key="item.id">
				<RouterLink :to="`/category/${item.id}`">{{ item.name }}</RouterLink>

				<!-- 一级分类保留两 -->
				<template v-if="item.children">
					<RouterLink
						:to="`/category/sub/${sub.id}`"
						v-for="sub in item.children.slice(0, 2)"
						:key="sub.id"
					>
						{{ sub.name }}
					</RouterLink>
				</template>

				<template v-else>
					<SealSkeleton
						:width="60"
						:height="18"
						style="margin-right: 5px"
						bg="rgba(255,255,255,0.2)"
						animated
					/>
					<SealSkeleton
						:width="50"
						:height="18"
						bg="rgba(255,255,255,0.2)"
						animated
					/>
				</template>

				<!-- 弹层 -->
				<div class="layer">
					<h4>分类推荐 <small>根据您的购买或浏览记录推荐</small></h4>
					<ul>
						<!-- 内层循环 -->
						<li v-for="sub in item.goods" :key="sub.id">
							<RouterLink to="/">
								<img :src="sub.picture" alt="" />
								<div class="info">
									<p class="name ellipsis-2">{{ sub.name }}</p>
									<p class="desc ellipsis">{{ sub.desc }}</p>
									<p class="price"><i>¥</i>{{ sub.price }}</p>
								</div>
							</RouterLink>
						</li>
					</ul>
				</div>
			</li>
		</ul>
	</div>
</template>

<style scoped lang="less">
	.home-category {
		width: 250px;
		height: 500px;
		background: rgba(0, 0, 0, 0.8);
		position: relative;
		z-index: 99;
		.menu > li {
			padding-left: 40px;
			height: 55px;
			line-height: 50px;
			&:hover {
				background: @sealColor;
			}
			&:hover {
				.layer {
					display: block;
				}
			}
			a {
				margin-right: 4px;
				color: #fff;
				&:first-child {
					font-size: 16px;
				}
			}
		}

		.layer {
			width: 990px;
			height: 500px;
			background: rgba(255, 255, 255, 0.8);
			position: absolute;
			left: 250px;
			top: 0;
			display: none;
			padding: 0 15px;
			h4 {
				font-size: 20px;
				font-weight: normal;
				line-height: 50px;
				small {
					font-size: 16px;
					color: #666;
				}
			}
			ul {
				display: flex;
				flex-wrap: wrap;
				li {
					width: 310px;
					height: 120px;
					margin-right: 15px;
					margin-bottom: 15px;
					border: 1px solid #eee;
					border-radius: 4px;
					background: #fff;
					&:nth-child(3n) {
						margin-right: 0;
					}
					a {
						display: flex;
						width: 100%;
						height: 100%;
						align-items: center;
						padding: 10px;
						&:hover {
							background: #e3f9f4;
						}
						img {
							width: 95px;
							height: 95px;
						}
						.info {
							padding-left: 10px;
							line-height: 24px;
							width: 190px;
							.name {
								font-size: 16px;
								color: #666;
							}
							.desc {
								color: #999;
							}
							.price {
								font-size: 22px;
								color: @priceColor;
								i {
									font-size: 16px;
								}
							}
						}
					}
				}
			}
		}
	}
</style>
