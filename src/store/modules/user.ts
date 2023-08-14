import { defineStore } from 'pinia'
import request from '@/utils/request'
import { Profile } from '@/types/user'
import { ApiRes } from '@/types/data'
import { setProfile, getProfile, removeProfile } from '@/utils/storage'

const useUserStore = defineStore('user', {
	state() {
		return {
			// 用户信息
			profile: getProfile() as Profile,
		}
	},
	actions: {
		// 账号登录
		async login(account: string, password: number | string) {
			const res = await request.post<ApiRes<Profile>>('/login', {
				account,
				password,
			})
			this.profile = res.data.result
			setProfile(res.data.result)
		},
		// 手机号登录
		async mobileLogin(mobile: string, code: string) {
			const res = await request.post<ApiRes<Profile>>('/login/code', {
				mobile,
				code,
			})
			// 1. 保存用户信息到 state 中
			this.profile = res.data.result
			setProfile(res.data.result)
		},
		// 获取手机验证码
		async getMobileMsg(mobile: string) {
			await request.get('/login/code', { params: { mobile } })
		},
		// 退出
		logout() {
			this.profile = {} as Profile
			removeProfile()
		},
	},
	getters: {},
})

export default useUserStore
