import { GoodsInfo, ApiRes } from '@/types/data'
import request from '@/utils/request'
import { defineStore } from 'pinia'

const useGoodsStore = defineStore('goods', {
	state() {
		return {
			info: {} as GoodsInfo,
		}
	},
	actions: {
		async getGoodsInfo(id: string) {
			const res = await request.get<ApiRes<GoodsInfo>>('/goods', {
				params: { id },
			})
			this.info = res.data.result
		},
	},
	getters: {},
})
export default useGoodsStore
