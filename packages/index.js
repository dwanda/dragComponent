// 导入颜色选择器组件
import cardComponent from './card-dragger'

export const cardDragger = cardComponent

// 存储组件列表
const components = [
  cardDragger
]

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
export const installCardDragger = function (Vue) {
  // 判断是否安装
  if (installCardDragger.installed) return
  // 遍历注册全局组件
  components.map(component => Vue.component(component.name, component))
}