import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// 配置@
import path from 'path'
// 配置name
import vueSetupExtend from 'vite-plugin-vue-setup-extend'
export default defineConfig({
	plugins: [
		vue({
			// script: {
			// 	defineModel: true,
			// },
		}),
		vueSetupExtend(),
	],
	server: {
		open: true,
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
	css: {
		preprocessorOptions: {
			less: {
				additionalData: `
          @import "@/assets/styles/variables.less";
          @import "@/assets/styles/mixins.less";
        `,
			},
		},
	},
})
