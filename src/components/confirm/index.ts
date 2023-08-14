import confirm from './confirm.vue'
import { h, render } from 'vue'

const div = document.createElement('div')
div.setAttribute('class', 'seal-confirm-container')
document.body.appendChild(div)

type Props = {
	title?: string
	text: string
}

function Confirm({ title, text }: Props) {
	const confirmCallback = () => {}

	const cancelCallback = () => {}

	const vNode = h(confirm, { title, text, confirmCallback, cancelCallback })
	render(vNode, div)
}

export default Confirm
