import { defineStore } from 'pinia'
import request from '@/utils/request.ts'
import { ApiRes, categoryItem, TopCategory, SubCategory } from '@/types/data'
import { topCategory } from '@/store/constant'

// 防止
const defaultCategory = topCategory.map((item) => {
	return {
		name: item,
	}
})

const useCategoryStore = defineStore('category', {
	state() {
		return {
			list: defaultCategory as categoryItem[],
			topCategory: {} as TopCategory,
			subCategory: {} as SubCategory,
		}
	},
	actions: {
		// 获取所有分类
		async getAllCategoryList() {
			const res = await request.get<ApiRes<categoryItem[]>>(
				'/home/category/head'
			)
			this.list = res.data.result
		},
		//获取一级类目
		async getTopCategory(id: string) {
			const res = await request.get<ApiRes<TopCategory>>('/category', {
				params: { id },
			})
			this.topCategory = res.data.result
		},
		//二级分类的数据
		async getSubFilter(id: string) {
			const res = await request.get<ApiRes<SubCategory>>(
				'/category/sub/filter',
				{
					params: { id },
				}
			)
			this.subCategory = res.data.result
		},
	},
	getters: {},
})

export default useCategoryStore
