<template>
  <div class="contentBox">
    <div id="missionOverview" class="chartBox">
      <div class="mainBox" v-for="(item,index) in listData" :key="index+'listData'">
        <div class="titleBox">
          {{item.name}}
          <div class="percentBar" ></div> 
        </div>
        <div class="numberBox">
          <div v-for="numItem in item.number.toString().length" :key="'numData'+index+numItem">
            <numberOne class="numberComponent" :selectNumber="item.number.toString()[numItem-1]"></numberOne>   
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import numberOne from '../numberStyle/number'

export default {
  name: 'missionOverview',
  components:{
    numberOne
  },
  data() {
    return {
      listData:[
        {name:'任务总数',number:180,percent:60},
        {name:'已完成',number:8,percent:90},
        {name:'未完成',number:12,percent:90},
        {name:'正在执行',number:36,percent:90},
        {name:'未分配',number:8,percent:90},
      ]
    }
  },
  props:{
    animationState:{
      type:Boolean,
      default:true
    }
  },
  mounted(){
    if(this.animationState){
      for(let item of document.querySelectorAll('.percentBar')){
        item.style.cssText = "width:70px;transition: all 0.5s;"
      }
      for(let item of document.querySelectorAll('.numberComponent')){
        item.style.cssText = "fill-opacity: 1;transition: all 0.5s;"
      }
    }
    else{
      for(let item of document.querySelectorAll('.percentBar')){
        item.style.cssText = "width:70px;"
      }   
      for(let item of document.querySelectorAll('.numberComponent')){
        item.style.cssText = "fill-opacity: 1;"
      }   
    }
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
  margin:auto;
  width: 550px;
  height: 250px;
  padding: 0 30px;
  display: flex;
  flex-wrap: wrap;
}
.mainBox{
  width: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.numberBox{
  display: flex;
}
.numberComponent{
  width: 20px;
  fill-opacity: 0;
}
.titleBox{
  font-size: 14px;
  margin-bottom: 10px;
}
.percentBar{
  width: 0px;
  height: 3px;
  background: #b0d2ff;
  border-radius: 5px;
}
</style>
