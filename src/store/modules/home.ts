import { defineStore } from 'pinia'
import request from '@/utils/request'
import { ApiRes, bannerItem, GoodsItem, HotGoods, Brand } from '@/types/data'

const useHomeStore = defineStore('home', {
	state() {
		return {
			bannerList: [] as bannerItem[],
			// 新鲜好物
			newGoodsList: [] as GoodsItem[],
			// 人气推荐
			hotGoodsList: [] as HotGoods[],
			// 品牌数据
			brandList: [] as Brand[],
		}
	},
	actions: {
		async getBannerList() {
			const res = await request.get<ApiRes<bannerItem[]>>('/home/banner')
			this.bannerList = res.data.result
			// console.log(this.bannerList.length)
		},
		// 新鲜好物
		async getGoodsList() {
			setTimeout(async () => {
				const res = await request.get<ApiRes<GoodsItem[]>>('/home/new')
				this.newGoodsList = res.data.result
			}, 2000)
		},
		// 人气推荐
		async getHotGoodsList() {
			setTimeout(async () => {
				const res = await request.get<ApiRes<HotGoods[]>>('/home/hot')
				this.hotGoodsList = res.data.result
			}, 2000)
		},
		// 热门品牌
		async getBrandList() {
			const res = await request.get<ApiRes<Brand[]>>('/home/brand')
			this.brandList = res.data.result
		},
	},
	getters: {},
})

export default useHomeStore
