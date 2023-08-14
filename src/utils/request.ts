import Message from '@/components/message'
import axios from 'axios'
import useStore from '@/store'

// 备用接口地址: http://pcapi-xiaotuxian-front-devtest.itheima.net/
const instance = axios.create({
	baseURL: 'http://apipc-xiaotuxian-front.itheima.net/',
	timeout: 5000,
})

// 添加请求拦截器
instance.interceptors.request.use(
	(config) => {
		const { user } = useStore()
		if (user.profile.token) {
			config.headers!.Authorization = `Bearer ${user.profile.token}`
		}
		// 在发送请求之前做些什么
		return config
	},
	(error) => {
		// 对请求错误做些什么
		return Promise.reject(error)
	}
)

// 添加响应拦截器
instance.interceptors.response.use(
	(response) => {
		return response
	},
	(error) => {
		// 4xx 5xx错误
		// Message.error(error.response.data.message)
		if (!error.response) {
			Message.error('网络异常，请稍后重置')
		} else {
			Message.error(error.response.data.message)
		}
		// 对响应错误做点什么
		return Promise.reject(error)
	}
)

export default instance
