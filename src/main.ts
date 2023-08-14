import { createApp } from 'vue'
import App from './App.vue'
// 导入normalize.css
import 'normalize.css'
// 导入项目通用样式
import '@/assets/styles/common.less'
// 导入路由
import router from './router'
// 导入pinia
import { createPinia } from 'pinia'
// 导入全局组件
// 自定义组件名称
import SealUi from '@/components/index.ts'
const app = createApp(App)
app.use(SealUi)
app.use(createPinia())
app.use(router)
app.mount('#app')
