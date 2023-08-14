<script lang="ts" setup name="SealCity">
	import { ref, watch } from 'vue'
	import { onClickOutside } from '@vueuse/core'
	import { AreaList, CityResult } from '@/types/data'
	import axios from 'axios'

	const active = ref(false)
	const toggle = () => {
		active.value = !active.value
	}

	const target = ref(null)
	onClickOutside(target, () => {
		// console.log(e)
		active.value = false
	})

	const cityList = ref<AreaList[]>([])
	const cacheList = ref<AreaList[]>([])
	const getCityList = async () => {
		const res = await axios.get(
			'https://yjy-oss-files.oss-cn-zhangjiakou.aliyuncs.com/tuxian/area.json'
		)
		cityList.value = res.data
		cacheList.value = res.data
	}
	getCityList()

	// 选择城市
	const changeResult = ref({
		provinceCode: '',
		provinceName: '',
		cityCode: '',
		cityName: '',
		countyCode: '',
		countyName: '',
	})
	const selectCity = (city: AreaList) => {
		if (city.level === 0) {
			// 省
			changeResult.value.provinceName = city.name
			changeResult.value.provinceCode = city.code
			cityList.value = city.areaList
		}

		if (city.level === 1) {
			// 市
			changeResult.value.cityName = city.name
			changeResult.value.cityCode = city.code
			cityList.value = city.areaList
		}

		if (city.level === 2) {
			// 县（区）
			changeResult.value.countyName = city.name
			changeResult.value.countyCode = city.code
			cityList.value = city.areaList
			active.value = false
			// 子传父
			emits('changeCity', changeResult.value)
		}
	}

	// 监听关闭弹窗的处理，恢复数据
	watch(active, (val) => {
		// if (active.value === false) {
		// 	cityList.value = cacheList.value
		// }
		if (!val) {
			cityList.value = cacheList.value
		}
	})

	// 地址
	defineProps<{
		userAddress?: string
	}>()

	// 选择完城市要传递数据给父组件
	const emits = defineEmits<{
		// (e: 'changeCity', value: CityResult): void
		changeCity: [value: CityResult]
	}>()
</script>

<template>
	<div class="seal-city" ref="target">
		<div class="select" @click="toggle" :class="{ active: active }">
			<span class="value" v-if="userAddress">{{ userAddress }}</span>
			<span class="placeholder" v-else>请选择配送地址</span>
			<i class="iconfont icon-angle-down"></i>
		</div>

		<div class="option" v-show="active">
			<span
				class="ellipsis"
				v-for="item in cityList"
				:key="item.code"
				@click="selectCity(item)"
			>
				{{ item.name }}
			</span>
		</div>
	</div>
</template>

<style scoped lang="less">
	.seal-city {
		display: inline-block;
		position: relative;
		z-index: 400;
		.select {
			border: 1px solid #e4e4e4;
			height: 30px;
			padding: 0 5px;
			line-height: 28px;
			cursor: pointer;
			&.active {
				background: #fff;
			}
			.placeholder {
				color: #999;
			}
			.value {
				color: #666;
				font-size: 12px;
			}
			i {
				font-size: 12px;
				margin-left: 5px;
			}
		}
		.option {
			width: 542px;
			border: 1px solid #e4e4e4;
			position: absolute;
			left: 0;
			top: 29px;
			background: #fff;
			min-height: 30px;
			line-height: 30px;
			display: flex;
			flex-wrap: wrap;
			padding: 10px;
			> span {
				width: 130px;
				text-align: center;
				cursor: pointer;
				border-radius: 4px;
				padding: 0 3px;
				&:hover {
					background: #f5f5f5;
				}
			}
		}
	}
</style>
