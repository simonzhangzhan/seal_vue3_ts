// 封装函数动态创建组件
// this.$message){type:success,text:'xxxx}

import { h, render } from 'vue'
import SealMessage from './message.vue'

type Props = {
	type: 'success' | 'error' | 'warning'
	text: string
	duration?: number
}
const div = document.createElement('div')
div.setAttribute('class', 'container-box')
document.body.appendChild(div)

function Message({ type, text, duration = 2000 }: Props) {
	const vNode = h(SealMessage, { type }, text)
	render(vNode, div)

	// 延迟销毁
	setTimeout(() => {
		render(null, div)
	}, duration)

	// Message({ type: 'success', text: '登录成功' })
}
Message.success = (text: string, duration = 2000) => {
	Message({
		type: 'success',
		text,
		duration,
	})
}
Message.error = (text: string, duration = 2000) => {
	Message({
		type: 'error',
		text,
		duration,
	})
}
Message.warning = (text: string, duration = 2000) => {
	Message({
		type: 'warning',
		text,
		duration,
	})
}
export default Message
