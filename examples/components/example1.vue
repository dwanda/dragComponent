<template>
  <div class="main">
    <cardDragger :data="componentData" @finishDrag="finishDrag">
      <template v-slot:header="slotProps">
        <div class="topMenuBox" >
          <div class="menuTitle" v-if="slotProps.item.name">{{slotProps.item.name}}</div>
          <div class="menuTitle" v-else> 默认标题 </div>
          <div class="dotBox">
             <div class="circleDot"></div>
             <div class="circleDot"></div>
             <div class="circleDot"></div>
          </div>
        </div>
      </template>
    </cardDragger>
  </div>
</template>

<script>
import { cardDragger } from '../../packages/index'
import exampleChild1 from "./childComponent/exampleChild1"

export default {
  name: 'example1',
  components:{
    cardDragger,
    exampleChild1
  },
  data() {
    return {
      componentData: [
        {
          positionNum: 1,
          name: "演示卡片1",
          id: "card1",
          componentData:exampleChild1,
        },
        {
          positionNum: 2,
          name: "演示卡片2",
          id: "card2",
          componentData:exampleChild1,
        },
        {
          positionNum: 3,
          name: "演示卡片3",
          id: "card3",
          componentData:exampleChild1,
        },
        {
          positionNum: 4,
          name: "演示卡片4",
          id: "card4",
          componentData:exampleChild1
        },
      ],
    }
  },
  methods:{
    finishDrag(old,newVal,item){
      // console.log(old,newVal,item)
    }
  },
  mounted(){

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
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(34, 54, 110);
  background-color: rgb(255, 255, 255);
}
.topMenuBox{
  background-color: rgb(255, 255, 255);
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  color: #818181;
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
