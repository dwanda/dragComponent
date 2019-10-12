<template>
  <div class="contentBox">
    <div id="distributionOverview" class="chartBox"></div>
  </div>
</template>

<script>
let echarts = require('echarts/lib/echarts')
require('echarts/lib/chart/pie')
require('echarts/lib/component/tooltip')

export default {
  name: 'distributionOverview',
  props:{
    animationState:{
      type:Boolean,
      default:true
    }
  },
  data: () => ({
  
  }),
  mounted(){
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(document.getElementById('distributionOverview'),'light')

      let  option = {
          tooltip: {
              trigger: 'item',
              formatter: "共有任务:{c}个<br>占总比:{d}%",
              confine:true,
              backgroundColor:'#f7f7f7',
              padding:[5,10],
              textStyle:{
                color:'#2b3158'
              },
              extraCssText: 'box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);'
          },
          label: {
            show: true,
            formatter: '{b}:{d}%'
          },
          series: [
              {
                  color: ['#dd6b66','#759aa0','#e69d87','#8dc1a9','#ea7e53','#eedd78','#73a373','#73b9bc','#7289ab', '#91ca8c','#f49f42'],
                  type:'pie',
                  radius: ['50%', '70%'],
                  avoidLabelOverlap: true,
                  data:[
                      {value:20, name:'小东'},
                      {value:10, name:'小明'},
                      {value:5, name:'小红'},
                      {value:3, name:'小兰'},
                      {value:30, name:'未分配'}
                  ]
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
