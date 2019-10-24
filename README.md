## 一个**用vue实现的拖拽排列卡片组件**
[测试一下](https://github.com/dwanda/dragComponent/blob/master/examples/assets/logo.png)

流畅的拖动和交换位置效果，并实时更新数据
![效果演示1](https://user-gold-cdn.xitu.io/2019/10/15/16dcd7b34e2e88bb?w=1556&h=917&f=gif&s=1221410)


支持组件的样式和内容自定义
![效果演示2](https://user-gold-cdn.xitu.io/2019/10/15/16dcd7db2b2c8923?w=1556&h=917&f=gif&s=1085201)


**这是vue实现的拖动卡片组件，主要实现了**：
- 拖动卡片与其他卡片的位置更换，并且其他卡片根据拖动的位置自动顺移，位置数据实时更新
- 拖动的时候可使用鼠标滚动
- 卡片根据数据生成，所有参数和内容都是可以自定义的，方便应用于不同场景
- 不同操作的事件都可获取到，拖动后的位置数据会实时更新
- 可以全局安装和按需加载

#### 更多详情请见:
- [x] [第一篇为组件封装后的使用文档及介绍](https://juejin.im/post/5da53e29e51d457822796ed8)  
- [ ] 第二篇为组件的实现思路以及细节 
- [ ] 第三篇为将组件打包并上传至npm，如何实现按需加载和下载后使用的问题

## 如何使用？
#### 下载carddragger

```
npm install carddragger
```

```
当前稳定版本：0.3.6，更新于10月24日早上11点
```
#### 全局安装
在你vue项目的入口js文件中使用，vue-cli生成的项目一般为main.js文件

```
import {installCardDragger} from 'carddragger'
Vue.use(installCardDragger)
```

#### 按需加载
在组件中直接import

```
import { cardDragger } from 'carddragger'

export default {
  components:{
    cardDragger,
  }
}
```
#### 使用示例
**1.基础使用：**
```
<template>
  <cardDragger :data="cardList">
  </cardDragger>
</template>
<script>
export default {
  data() {
    return {
      cardList: [{
        positionNum: i,
        name: "演示卡片"+i,
        id: "card"+i,
      }],
    }
  }
}
</script>
```

**2.完整示例:**  
参照[**源码仓库**](https://github.com/dwanda/dragComponent)中的examples  
将整个项目clone下来，npm install+npm run serve即可看到完整示例

## Props（参数）
属性 | 说明| 类型| 默认值
---|---|---|---
data | 必填，需要传入的卡片数据，具体格式请看下方解释| Array| -
colNum | 卡片排列的列数| Number| 2
cardOutsideWidth| 卡片外部需要占据的宽度（包括无内容部分）| Number| 590
cardOutsideHeight| 卡片外部需要占据的高度（包括无内容部分）| Number| 380
cardInsideWidth| 卡片的宽度| Number| 560
cardInsideHeight| 卡片的高度| Number| 320

![](https://user-gold-cdn.xitu.io/2019/10/21/16dec11bdf2c725c?w=1479&h=702&f=png&s=31102)
#### data格式示例：
卡片的内容根据data数据生成或自定义

```
<template>
    <div>
        <cardDragger 
        :data="cardList"
        :colNum="4"
        :cardOutsideWidth="300"
        :cardInsideWidth="260"
        :cardOutsideHeight="310"
        :cardInsideHeight="240"
        />
        <!-- 上面的属性都可自定义 -->
    </div>
</template>

<script>
export default {
    data(){
        return{
            cardList: [
                {
                    positionNum: 2,
                    name: "测试卡片2",
                    id: "card2",
                }
            ]
        }
    }
}
</script>
```

属性 | 说明| 类型| 默认值
---|---|---|---
id | 必填，设置卡片的id作为唯一识别| String| -
positionNum | 必填，设置卡片位置，从1开始依次递增| Number| -
name | 选填，设置卡片的标题名称| String| '默认标题'
componentData | 选填，设置卡片的内容为组件数据，如果此参数具有数据的话，则slot传入的数据失效| 组件| -

## Slot（插槽）
首先先介绍一下，卡片内容分为上下两部分：
- 上部分为卡片的**标题栏**，并且拖拽事件只有点击上部分才触发
- 下部分为卡片的**内容**  

两个部分都是可以进行自定义内容及样式的。若不添加的自定义内容的话，标题栏和内容都是默认背景为白色，显示data中的name。**若添加了自定义内容则背景需要自己设置。**

#### 标题栏插槽

```
<cardDragger :data="cardList" >
  <!-- 在组件中间插入template并设置 v-slot:header="slotProps"
       header为标题栏的插槽名字，在里面的内容会渲染到你每一个卡片标题栏上
       slotProps为从子组件返回的数据，及data数组里面的每一个对象数据-->
  <template v-slot:header="slotProps">
    <!-- 自定义内容 -->
    <div class="topMenuBox" >
      <div class="menuTitle" v-if="slotProps.item.name">{{slotProps.item.name}}</div>
      <div class="menuTitle" v-else> 默认标题 </div>
    </div>
  </template>
</cardDragger>
```

#### 内容插槽
```
<cardDragger :data="cardList">
  <!-- 与标题栏插槽一致，但需要注意v-slot:content-->
  <template v-slot:content="slotProps">
    <div class="insideData">
      {{slotProps.item.name}}
    </div>
  </template>
</cardDragger>
```
你也可以

```
<cardDragger :data="cardList">
  <!-- 与标题栏插槽一致，但需要注意v-slot:content-->
  <template v-slot:content="slotProps">
     <component :is="slotProps.item.OtherData"></component>
     <!--这里用到的是vue的动态组件功能动态渲染组件，可传入更多属性至子组件 -->
  </template>
</cardDragger>

//省略部分代码,加载你的组件
import exampleChild1 from "./childComponent/exampleChild1"

cardList: [
    {
      positionNum: 1,
      name: "演示卡片1",
      id: "card1",
      OtherData:exampleChild1  
      //OtherData这个是你自己定义的属性，注意不可与componentData属性名字重复 
    }
]

```

关于内容我做了另外一个判断，你可以将需要的组件放在data的componentData属性里面，内容会自动读取componentData的数据。当然你直接都使用slot就可以忽略这个属性。

```
import exampleChild1 from "./childComponent/exampleChild1"
//省略部分代码
cardList: [
    {
      positionNum: 1,
      name: "演示卡片1",
      id: "card1",
      componentData:exampleChild1   //直接设置即可使用 
    }
]
//使用componnetData属性传入的组件，可使用Props获取到单个卡片数据
//在子组件中使用props即可使用
props:{
    itemData:{
      type:Object
    }
}
```

**渲染优先级**：data的componentData > slot > 默认内容

## Events（事件）

### startDrag  
> **作用**：  
> 在点击卡片顶部标题栏的时候，触发此函数  

> **参数**：  
> startDrag(event,id)  
>
> 第一个参数event，是点击事件的原生event  
> 第二个参数id，是选中的卡片的id  


### swicthPosition  
> **作用**：  
> 在拖动一个卡片到另外一个卡片的位置的时候，触发此事件

> **参数**：  
> swicthPosition(oldPositon,newPositon,originItem)  
>
> 第一个参数oldPositon，是卡片原来的位置号码  
> 第二个参数newPositon，是卡片需要交换的位置号码  
> 第三个参数originItem，是卡片交换完成后的数据

### finishDrag  
> **作用**：  
> 拖拽完成松开鼠标后，触发此事件

> **参数**：  
> swicthPosition(oldPositon,newPositon,originItem)  
>
> 第一个参数oldPositon，是卡片原来的位置号码  
> 第二个参数newPositon，是卡片需要交换的位置号码  
> 第三个参数originItem，是卡片交换完成后的数据


## 考虑修复的问题
1.data的positionNum出现空缺则会报错，必须从1依次递增。但好像这种场景也不常用，考虑修复ing。


## 未来计划
- [ ] 如果有需要的话我再封装个react版本
- [ ] 修改其他需要的参数和进行扩展  

**觉得这个系列有点意思的话，点个星星支持一下呗！**
