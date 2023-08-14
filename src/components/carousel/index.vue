<script lang="ts" setup name="SealCarousel">
	import { ref, onMounted, onUnmounted } from 'vue'
	import { bannerItem } from '@/types/data'

	const props = withDefaults(
		defineProps<{
			slides: bannerItem[]
			duration?: number
			autoplay?: boolean
		}>(),
		{
			duration: 2000,
			autoplay: false,
		}
	)

	// 初始化下标
	const active = ref(0)
	// 上一场下一张
	const prev = () => {
		active.value--
		if (active.value < 0) {
			active.value = props.slides.length - 1
		}
	}
	const next = () => {
		active.value++
		if (active.value > props.slides.length - 1) {
			active.value = 0
		}
	}

	// 自动轮播
	let timer = -1
	onMounted(() => {
		startTimer()
	})
	onUnmounted(() => {
		stopTimer()
	})

	const startTimer = () => {
		if (!props.autoplay) return
		timer = window.setInterval(() => {
			next()
		}, props.duration)
	}
	const stopTimer = () => {
		window.clearInterval(timer)
	}
</script>

<template>
	<div class="seal-carousel" @mouseenter="stopTimer" @mouseleave="startTimer">
		<ul class="carousel-body">
			<li
				class="carousel-item"
				v-for="(item, index) in slides"
				:key="item.id"
				:class="{ fade: index === active }"
			>
				<RouterLink :to="item.hrefUrl">
					<img :src="item.imgUrl" alt="" />
				</RouterLink>
			</li>
		</ul>
		<!-- 上一张 -->
		<a @click="prev" href="javascript:;" class="carousel-btn prev"
			><i class="iconfont icon-angle-left"></i
		></a>

		<!-- 下一张 -->
		<a @click="next" href="javascript:;" class="carousel-btn next"
			><i class="iconfont icon-angle-right"></i
		></a>
		<div class="carousel-indicator">
			<span
				v-for="(sub, index) in slides.length"
				:key="sub"
				:class="{ active: active === index }"
				@click="active = index"
			></span>
		</div>
	</div>
</template>

<style scoped lang="less">
	.seal-carousel {
		width: 100%;
		height: 100%;
		min-width: 300px;
		min-height: 150px;
		position: relative;
		.carousel {
			&-body {
				width: 100%;
				height: 100%;
			}
			&-item {
				width: 100%;
				height: 100%;
				position: absolute;
				left: 0;
				top: 0;
				opacity: 0;
				transition: opacity 0.5s linear;
				&.fade {
					opacity: 1;
					z-index: 1;
				}
				img {
					width: 100%;
					height: 100%;
				}
			}
			&-indicator {
				position: absolute;
				left: 0;
				bottom: 20px;
				z-index: 2;
				width: 100%;
				text-align: center;
				span {
					display: inline-block;
					width: 12px;
					height: 12px;
					background: rgba(0, 0, 0, 0.2);
					border-radius: 50%;
					cursor: pointer;
					~ span {
						margin-left: 12px;
					}
					&.active {
						background: #fff;
					}
				}
			}
			&-btn {
				width: 44px;
				height: 44px;
				background: rgba(0, 0, 0, 0.2);
				color: #fff;
				border-radius: 50%;
				position: absolute;
				top: 228px;
				z-index: 2;
				text-align: center;
				line-height: 44px;
				opacity: 0;
				transition: all 0.5s;
				&.prev {
					left: 20px;
				}
				&.next {
					right: 20px;
				}
			}
		}
		&:hover {
			.carousel-btn {
				opacity: 1;
			}
		}
	}
</style>
