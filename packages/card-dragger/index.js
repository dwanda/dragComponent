
// 导入组件，组件必须声明 name
import cardDragger from './src/card-dragger.vue'

// 为组件提供 install 安装方法，供按需引入
cardDragger.install = function (Vue) {
  Vue.component(cardDragger.name, cardDragger)
}

// 默认导出组件
export default cardDragger
