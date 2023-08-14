src/view/playground/index.vue
<script lang="ts" setup>
	import { h, render, onMounted } from 'vue'

	// 虚拟dom创建与挂载
	// vue中 createElement() / h()函数船舰虚拟dom
	// vue中挂载:render()

	// createElement()  / h()语法
	// 参数1:dom类型|组件 div p input
	// 参数2:元素的属性
	// 参数3:元素的内容

	// render() 
	// 参数1:虚拟dom
	// 参数2:document.querySelector('挂载元素') 

	// <div id='one' class='box'>我是一个div</div>

	const vNode = h(
		'div',
		{
			id: 'one',
			class: 'box',
		},
		'我是一个div'
	)
	// console.log(vNode)
	onMounted(() => {
		render(vNode, document.querySelector('.container-box')!)
	})
</script>

<template>
	<div class="container-box"></div>
</template>

<style scoped lang="less"></style>
