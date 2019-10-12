
这是一个基于vue实现的卡片拖动组件。可以拖动卡片，并且根据数据自动修改位置的组件，文档还没完成，计划这两天修改完成，及编写相关示例


## Props：

属性 | 说明| 类型| 默认值
---|---|---|---
data | 必填，需要传入的卡片数据，具体格式请看下方解释| Array| -
colNum | 卡片排列的列数| Number| 2
cardOutsideWidth| 卡片外部需要占据的宽度（包括无内容部分）| Number| 590
cardOutsideHeight| 卡片外部需要占据的高度（包括无内容部分）| Number| 380
cardInsideWidth| 卡片的宽度| Number| 560
cardInsideHeight| 卡片的高度| Number| 320
detectDistance| 卡片拖动的时候，会触发交换位置的最小距离| Number| 50

#### data格式示例：
卡片的内容根据data

```
<template>
    <div>
        <cardDragger 
        :data="componentData"
        />
    </div>
</template>

<script>
//这里的Overview只是一个示例，引入一个组件作为卡片内容
import Overview from "./Overview"

export default {
    components: {
        Overview
    },
    data(){
        return{
            data: [
                {
                    id: "card1",
                    name: "测试卡片1",
                    positionNum: 1,
                    componentData:Overview,
                },
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
positionNum | 必填，设置卡片位置，从1开始依次递增| String| -
name | 选填，设置卡片的id作为唯一识别| String| '默认标题'
componentData | 选填，设置卡片的内容为组件数据| String| -

## Events：

### startDrag  
> **事件作用**：  
> 在点击卡片顶部标题栏的时候，触发此函数  

> **事件参数**：  
> startDrag(event,id)  
>
> 第一个参数event，是点击事件的原生event  
> 第二个参数id，是选中的卡片的id  


### swicthPosition  
> **作用**：  
> 在拖动一个卡片到另外一个卡片的位置的时候，触发此事件

> **事件参数**：  
> swicthPosition(oldPositon,newPositon,originItem)  
>
> 第一个参数oldPositon，是卡片原来的位置号码  
> 第二个参数newPositon，是卡片需要交换的位置号码  
> 第三个参数originItem，是卡片交换完成后的数据


### swicthPosition  
> **作用**：  
> 在拖动一个卡片到另外一个卡片的位置的时候，触发此事件

> **事件参数**：  
> swicthPosition(oldPositon,newPositon,originItem)  
>
> 第一个参数oldPositon，是卡片原来的位置号码    
> 第二个参数newPositon，是卡片需要交换的位置号码  
> 第三个参数originItem，是卡片交换完成后的数据  


### finishDrag  
> **事件作用**：  
> 拖拽完成松开鼠标后，触发此事件

> **事件参数**：  
无


## 考虑是否需要解决的问题：
- [ ] 位置数据出现空缺则会报错
- [ ] 快速拖动两个不同的卡片会有时间间隔

## 其他计划：  
- [ ] 如果有很多人需要的话我可以再封装个react版本的
- [ ] 修改其他人需要的更多参数和扩展
- [ ] 如果大家觉得我写得菜的话还得慢慢进修一下自己