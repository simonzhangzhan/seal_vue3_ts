import {categoryItem} from '@/types/data'
import {type} from 'os'

export type ApiRes<T> = {
  code: string
  msg: string
  result: T
}
export type CategoryGoods = {
  desc: string
  id: string
  name: string
  orderNum: null | number
  picture: string
  price: string
}

export type categoryItem = {
  id: string
  name: string
  picture: string
  children: categoryItem[]
  goods: CategoryGoods[]
}

export type bannerItem = {
  id: string
  type: string
  hrefUrl: string
  imgUrl: string
}
// 新鲜好物
export type GoodsItem = {
  desc: string
  id: string
  name: string
  picture: string
  price: string
}
// 人气推荐
export type HotGoods = {
  id: string
  picture: string
  title: string
  alt: string
}
// 热门品牌
export type Brand = {
  id: string
  name: string
  nameEn: string
  logo: string
  picture: string
  type?: any
  desc: string
  place: string
}
// 顶级分类类型
export type TopCategory = {
  id: string
  name: string
  picture: string
  children: categoryItem[]
}

// category sub
export type SaleProperty = {
  id: string
  name: string
  properties: {
    id: string
    name: string
  }[]
}

export type SubCategory = {
  id: string
  name: string
  picture?: any
  parentId: string
  parentName: string
  brands: {
    id: string
    name: string
    nameEn: string
    logo: string
    picture: string
    type?: any
    desc: string
    place: string
  }[]
  saleProperties: SaleProperty[]
  goods: GoodsItem[]
}

// 城市列表类型
export type AreaList = {
  code: string
  level: number
  name: string
  areaList: AreaList[]
}

// 选择的城市结果类型
export type CityResult = {
  provinceCode: string
  provinceName: string
  cityCode: string
  cityName: string
  countyCode: string
  countyName: string
}

// Sku类型, 最小库存单元 => 决定是否启用禁用
export type Sku = {
  id: string
  inventory: number
  oldPrice: string
  price: string
  skuCode: string
  // 当前存货单元(sku)的相关属性
  // iphoneX SPU
  // iphoneX 红色 64G 港版  SKU   5999
  specs: {
    name: string
    valueName: string
  }[]
}

// 规格按钮
export type SpecValue = {
  desc: string // 描述
  name: string // 黑色   白色   绿色   墨绿色
  picture: string // 图片
  selected: boolean // 控制选中还是没选中
  disabled: boolean // 控制禁用与否
}

// 规格的类型
export type Spec = {
  name: string // 颜色
  values: SpecValue[]
}
export type GoodsDetail = {
  pictures: string[]
  properties: {
    name: string
    value: string
  }[]
}
// 商品模块的类型声明
export type GoodsInfo = {
  id: string
  name: string
  spuCode: string
  desc: string
  price: string
  oldPrice: string
  discount: number
  inventory: number
  salesCount: number
  commentCount: number
  collectCount: number
  mainVideos: any[]
  videoScale: number
  mainPictures: string[]
  isPreSale: boolean
  isCollect?: any
  recommends?: any
  userAddresses?: any
  evaluationInfo?: any
  categories: {
    id: string
    name: string
  }[]
  specs: Spec[]
  skus: Sku[]
  details: GoodsDetail
}
