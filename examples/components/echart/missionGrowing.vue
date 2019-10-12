<template>
  <div class="contentBox">
    <div id="missionGrowing" class="chartBox">
    </div>
  </div>
</template>

<script>
let echarts = require('echarts/lib/echarts')
require('echarts/lib/chart/line')
require('echarts/lib/component/tooltip')
require("echarts/lib/component/legendScroll")

export default {
  name: 'missionGrowing',
  props:{
    animationState:{
      type:Boolean,
      default:true
    }
  },
  mounted(){
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(document.getElementById('missionGrowing'),'light')

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
                          data:['任务总数','实际完成数']
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
                              name:'任务总数',
                              type:'line',
                              data:[2, 11, 15, 13, 15, 13, 12],
                              itemStyle:{
                                color:'#f5ba08'
                              }
                          },
                          {
                              name:'实际完成数',
                              type:'line',
                              data:[2,8, 10, 6, 12, 4, 10],
                              itemStyle:{
                                color:'#5fc196'
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
