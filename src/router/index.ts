import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '@/view/layout/index.vue'
import Home from '@/view/home/index.vue'
const router = createRouter({
	history: createWebHashHistory(),
	routes: [
		{
			path: '/',
			component: Layout,
			children: [
				{
					path: '',
					component: Home,
				},
				{
					path: '/category/:id',
					component: () => import('@/view/category/index.vue'),
				},
				{
					path: 'category/sub/:id',
					component: () => import('@/view/category/sub.vue'),
				},
				{
					path: '/goods/:id',
					component: () => import('@/view/goods/index.vue'),
				},
			],
		},
		{ path: '/login', component: () => import('@/view/login/index.vue') },
		{
			path: '/playground',
			component: () => import('@/view/playground/index.vue'),
		},
	],
	scrollBehavior: () => {
		// return 期望滚动到哪个的位置
		// 始终滚动到顶部
		return { top: 0 }
	},
})

export default router
