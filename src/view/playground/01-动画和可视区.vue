<script setup lang="ts">
	import { ref } from 'vue'
	// import { useIntersectionObserver } from '@vueuse/core'
	// vue/core useIntersectionObserver
	// 1.绑定监听的元素是否出现在可视区
	// 2.使用useIntersectionObserver方法
	// 	第一个参数是监听的元素
	// 	第二个参数是回调函数,:该回调函数中有两个参数
	//  1.第一个参数是一个数组
	//  2.第二个还是监听的元素
	// const target = ref<null | HTMLImageElement>(null)
	// const target1 = ref<null | HTMLImageElement>(null)
	// const { stop } = useIntersectionObserver(target, ([{ isIntersecting }]) => {
	// 	// console.log(isIntersecting)
	// 	if (isIntersecting) {
	// 		console.log('执行了')
	// 		target.value!.src =
	// 			'https://img1.baidu.com/it/u=2278717026,2923133725&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=665'
	// 		target1.value!.src =
	// 			'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F52bfd348-fe07-4da5-9902-9827765ccccf%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1693812996&t=ca80a1a311e6a32e082d6cf17d8151eb'
	// 		stop()
	// 	}
	// })

	// ----------------------------------------------
	const flag = ref(false)
	// vue3动画
	// 1.元素或组件要实现动画,在元素或组件的外层套vue的内置组件Transition
	// 2.Transition组件只能有唯一的根元素
	// 3.Transition动画组件有6个内置的类名
	//  进入(创建/显示)
	//  v-enter-from   进入前
	//  v-enter-active 进入中
	//  v-enter-to     进入后

	//  离开(销毁/隐藏)
	//  v-leave-form   离开前
	//  v-leave-active 离开中
	//  v-leave-to     离开后
</script>

<template>
	<!-- <div>我去</div>
	<img ref="target" src="" alt="" />
	<img ref="target1" src="" alt="" /> -->

	<button @click="flag = !false">切换</button>
	<Transition>
		<div class="box" v-if="flag"></div>
	</Transition>

	<Transition name="box1">
		<div class="box1" v-if="flag"></div>
	</Transition>
</template>

<style lang="less" scoped>
	div {
		height: 1200px;
	}
	img {
		width: 300px;
		height: 300px;
	}
	.box {
		width: 300px;
		height: 300px;
		background-color: skyblue;
	}
	.box1 {
		width: 300px;
		height: 300px;
		background-color: gray;
	}
	.v-enter-from {
		opacity: 0;
	}
	.v-enter-active {
		transition: all 2s linear;
	}
	.v-enter-to {
		opacity: 1;
	}

	.v-leave-from {
		opacity: 0;
	}
	.v-leave-active {
		transition: all 2s linear;
	}
	.v-leave-to {
		opacity: 1;
	}

	.box1-enter-from {
		width: 0;
		height: 0;
	}
	.box1-enter-active {
		transition: all 2s linear;
	}
	.box1-enter-to {
		width: 300px;
		height: 300px;
	}

	.box1-leave-from {
		width: 0;
		height: 0;
	}
	.box1-leave-active {
		transition: all 2s linear;
	}
	.box1-leave-to {
		width: 300px;
		height: 300px;
	}
</style>
