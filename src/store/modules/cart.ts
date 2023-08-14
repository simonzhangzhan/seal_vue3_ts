import request from '@/utils/request'
import { defineStore } from 'pinia'
import { CartItem } from '@/types/cart'
import { ApiRes } from '@/types/data'
const useCartStore = defineStore('cart', {
	// 状态
	state: () => ({
		// 状态
		id: 'cart',
		// 购物车列表
		list: [] as CartItem[],
	}),
	// 方法
	actions: {
		// 加入购物车
		async addCart(data: { skuId: string; count: number }) {
			await request.post('/member/cart', data)
			this.getCartList()
		},
		// 获取购物车列表
		async getCartList() {
			const res = await request.get<ApiRes<CartItem[]>>('/member/cart')
			this.list = res.data.result
		},
		// 删除购物数据
		async deleteCart(ids: string[]) {
			await request.delete('/member/cart', {
				data: { ids },
			})
			this.getCartList()
		},
	},
	// 计算
	getters: {
		// 计算有效商品列表 isEffective = true  filter
		effectiveList(): CartItem[] {
			return this.list.filter((item) => item.stock > 0 && item.isEffective)
		},
		effectiveListCounts(): number {
			return this.effectiveList.reduce(
				(acc: number, item: CartItem) => acc + item.count,
				0
			)
		},
		effectiveListPrice(): string {
			return this.effectiveList
				.reduce(
					(acc: number, item: CartItem) => acc + +item.nowPrice * item.count,
					0
				)
				.toFixed(2)
		},
	},
})

export default useCartStore
