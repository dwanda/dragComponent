<template>
  <div class="contentBox">
    <div id="processOverview" class="chartBox">
    </div>
  </div>
</template>

<script>

let echarts = require('echarts/lib/echarts')
require('echarts/lib/chart/bar')
require('echarts/lib/component/tooltip')

export default {
  name: 'processOverview',
  props:{
    animationState:{
      type:Boolean,
      default:true
    }
  },
  mounted(){
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(document.getElementById('processOverview'),'light')

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
                    xAxis:  {
                        type: 'category',
                        data: ['未分配','未开始','正在执行','已完成'],
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
                            type:'bar',
                            data:[2, 11, 15, 13],
                            barWidth:'20px',
                            itemStyle:{
                              color:'#f5ba08'
                            }
                        },
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
