// const target = ref(null)
// const { stop } = useIntersectionObserver(target, ([{ isIntersecting }]) => {
//   if (isIntersecting) {
//     home.getGoodsList()
//     stop()
//   }
// })
import { ref } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'

// hooks钩子函数
// 资源懒加载!!!
export function useLazyData(callback: () => void) {
	const target = ref(null)
	const { stop } = useIntersectionObserver(
		target,
		([{ isIntersecting }]) => {
			if (isIntersecting) {
				callback()
				stop()
			}
		},
		{
			threshold: 0,
		}
	)
	return target
}

// const useLazyDataList = (calllback: () => void) => {
// 	const target = ref(null)
// 	const { stop } = useIntersectionObserver(target, ([{ isIntersecting }]) => {
// 		if (isIntersecting) {
// 			calllback()
// 			stop()
// 		}
// 	})
// }
