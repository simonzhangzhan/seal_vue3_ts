import useCategoryStore from './modules/category.ts'
import useHomeStore from './modules/home.ts'
import useGoodsStore from './modules/goods.ts'
import useUserStore from './modules/user.ts'
import useCartStore from './modules/cart'
export default function useStore() {
	return {
		category: useCategoryStore(),
		home: useHomeStore(),
		goods: useGoodsStore(),
		user: useUserStore(),
		cart: useCartStore(),
	}
}
