// 插件机制
// vue2 Vue.use(对象|函数)
// 对象:install方法
import SealSkeleton from './skeleton/index.vue'
import { App } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'
import defaultImg from '@/assets/images/200.png'
import SealCarousel from './carousel/index.vue'
import SealMore from './more/index.vue'
import Bread from './bread/index.vue'
import BreadItem from './bread/item.vue'
import SealCity from './city/index.vue'
import SealNumbox from './numbox/index.vue'
import SealButton from './button/index.vue'
import SealCheckbox from '@/components/checkbox/index.vue'
// import SealMessage from './message/index.vue'
export default {
	// 声明全局组件
	install(app: App) {
		app.component('SealSkeleton', SealSkeleton)
		app.component('SealCarousel', SealCarousel)
		app.component('SealMore', SealMore)
		app.component('SealBread', Bread)
		app.component('SealBreadItem', BreadItem)
		app.component('SealCity', SealCity)
		app.component('SealNumbox', SealNumbox)
		app.component('SealButton', SealButton)
		app.component('SealCheckbox', SealCheckbox)
		// app.component('SealMessage', SealMessage)
		// 在图片上使用自定义指令实现图片懒加载
		// 声明全局的自定义指令
		// vue2:Vue.directive()
		// vue3:app.directive()
		// 封装一个全局的图片懒加载的指定 v-lazy
		// <img v-lazy='图片地址'>
		app.directive('lazy', {
			mounted(el, binding) {
				const { stop } = useIntersectionObserver(el, ([{ isIntersecting }]) => {
					if (isIntersecting) {
						el.src = binding.value
						stop()

						// 图片加载失败的情况
						el.onerror = function () {
							el.src = defaultImg
						}
					}
				})
			},
		})
	},
}
