import SealSkeleton from '@/components/skeleton/index.vue'
import SealCarousel from '@/components/carousel/index.vue'
import SealMore from '@/components/more/index.vue'
import SealBread from '@/components/bread/index.vue'
import SealBreadItem from '@/components/bread/item.vue'
import SealCity from '@/components/city/index.vue'
import SealNumbox from '@/components/numbox/index.vue'
import SealButton from '@/components/button/index.vue'
import SealCheckbox from '@/components/checkbox/index.vue'
// import SealMessage from '@/components/message/index.vue'
// 参考：
declare module 'vue' {
	export interface GlobalComponents {
		SealSkeleton: typeof SealSkeleton
		SealCarousel: typeof SealCarousel
		SealMore: typeof SealMore
		SealBread: typeof SealBread
		SealBreadItem: typeof SealBreadItem
		SealCity: typeof SealCity
		SealNumbox: typeof SealNumbox
		SealButton: typeof SealButton
		SealCheckbox: typeof SealCheckbox
		// SealMessage: typeof SealMessage
	}
}
export {}
