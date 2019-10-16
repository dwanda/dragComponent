<template>
  <div class="main">
    <cardDragger 
      :data="componentData"
      :colNum="3"
      :cardOutsideWidth="400"
      :cardInsideWidth="360"
      :cardOutsideHeight="300"
      :cardInsideHeight="240"
      @startDrag="startDrag"
      @swicthPosition="swicthPosition"
      @finishDrag="finishDrag"
    >
      <template v-slot:header="slotProps">
        <div class="topMenuBox" >
          <div class="menuTitle" v-if="slotProps.item.name">{{slotProps.item.name}}</div>
          <div class="menuTitle" v-else> 默认标题 </div>
        </div>
      </template>

      <template v-slot:content="slotProps">
        <div class="insideData">
          {{slotProps.item.name}}
        </div>
      </template>
    </cardDragger>
  </div>
</template>

<script>
import { cardDragger } from '../../packages/index'

export default {
  name: 'example2',
  components:{
    cardDragger,
  },
  data() {
    return {
      componentData: [],
    }
  },
  methods: {
    startDrag(event,id){
      console.log(event,id)
    },
    swicthPosition(OldPositon,NewPositon,originItem){
      console.log(OldPositon,NewPositon,originItem)
    },
    finishDrag(){
      console.log('完成拖拽')
    }
  },
  created(){
    for(let i = 1; i<20; i++){
      let data = {
        positionNum: i,
        name: "演示卡片"+i,
        id: "card"+i,
      }
      this.componentData.push(data)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main{
  width: 1200px;
  margin: auto;
}
.insideData{
  width: 100%;
  height: 100%;
  font-size: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(34, 54, 110);
  background-color: rgb(255, 255, 255);
}
.topMenuBox{
  background-color: rgb(160, 147, 129);
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  color: #ffffff;
  padding: 0px 15px;
}
.dotBox{
  display: flex;
}
.circleDot{
  width: 3px;
  height: 3px;
  margin: 0 1.5px;
  background-color: #c4c4c4;
  border-radius: 50%;
}
</style>
