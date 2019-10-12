<template>
    <div class="contentBox">
        <div id="missionIdealSituation" class="chartBox">
        </div>
    </div>
</template>

<script>
let echarts = require('echarts/lib/echarts')
require('echarts/lib/chart/line')
require('echarts/lib/component/tooltip')
require("echarts/lib/component/legendScroll")

export default {
//任务燃尽图
name: 'missionIdealSituation',
props:{
    animationState:{
        type:Boolean,
        default:true
    }
},
mounted(){
    let myChart = echarts.init(document.getElementById('missionIdealSituation'),'light')

    // 指定图表的配置项和数据
    let option = {
                    tooltip: {
                        trigger: 'axis',
                        confine:true,
                        backgroundColor:'#f7f7f7',
                        padding:[5,10],
                        textStyle:{
                        color:'#2b3158'
                        },
                        extraCssText: 'box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);'
                    },
                    legend: {
                        data:['理想完成数','实际完成数']
                    },
                    xAxis:  {
                        type: 'category',
                        data: ['5-22','5-23','5-24','5-25','5-26','5-27','5-28'],
                        axisLine:{
                        show:false
                        },
                        axisTick:{
                        show:false
                        },
                        axisLabel:{
                        color:'#c4c4c4'
                        }
                    },
                    yAxis: {
                        type: 'value',
                        axisLabel: {
                            formatter: '{value}',
                            color:'#c4c4c4'
                        },
                        axisTick:{
                        show:false
                        },
                        axisLine:{
                        show:false
                        },
                        nameTextStyle:{
                        color:'#c4c4c4'
                        }
                    },
                    series: [
                        {
                            name:'理想完成数',
                            type:'line',
                            data:[2, 11, 15, 13, 12, 13, 10],
                            itemStyle:{
                                color:'#62bc75'
                            }
                        },
                        {
                            name:'实际完成数',
                            type:'line',
                            data:[11,5, 15, 6, 12, 4, 10],
                            itemStyle:{
                                color:'#eb8181'
                            }
                        }
                    ],
                    animation:this.animationState
                };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}
}

</script>
<style scoped>
.contentBox{
  width: 100%;
  height:100%;
  background-color: white;
}
.chartBox{
  width: 500px;
  height: 250px;
  margin:auto;

}
</style>
