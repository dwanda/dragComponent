<template>
  <div>
    <div class="mainContainer">
      <div class="mainTitleText">项目统计</div>
      <cardComponent 
        :data="componentData"
      >
        <template v-slot:header="slotProps">
          <div class="topMenuBox" >
            <div class="menuTitle" v-if="slotProps.item.name">{{slotProps.item.name}}</div>
            <div class="menuTitle" v-else> 默认标题 </div>
            <div>
              <Icon type="ios-more" />
            </div>
          </div>
        </template>
      </cardComponent> 
    </div>
  </div>
</template>

<script>
import { cardComponent } from 'carddragger'

import missionOverview from "./echart/missionOverview"
import missionGrowing from "./echart/missionGrowing"
import missionIdealSituation from "./echart/missionIdealSituation"
import distributionOverview from "./echart/distributionOverview"
import processOverview from "./echart/processOverview"

export default {
  components: {
    cardComponent,
    missionOverview,
    missionGrowing,
    missionIdealSituation,
    distributionOverview,
    processOverview
  },
  name: "flowAnalysis",
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
  data: () => ({
    componentData: [
      {
        positionNum: 1,
        name: "任务状态分布图",
        id: "card1",
        componentData:processOverview,
      },
      {
        positionNum: 2,
        name: "任务数量图",
        id: "card2",
        componentData:missionOverview,
      },
      {
        positionNum: 3,
        name: "任务走势图",
        id: "card3",
        componentData:missionGrowing,
      },
      {
        positionNum: 4,
        name: "完成情况对比图",
        id: "card4",
        componentData:missionIdealSituation,
      },
      {
        positionNum: 5,
        name: "任务分配图",
        id: "card5",
        componentData:distributionOverview,
      },
      {
        positionNum: 6,
        name: "任务分配图2",
        id: "card6",
      },
      {
        positionNum: 7,
        name: "任务分配图3",
        id: "card7",
      }
    ],
  }),
  mounted() {
    console.log(cardComponent)
  },
};
</script>
<style scoped>
.mainContainer {
  padding-top: 40px;
  padding-bottom: 50px;
  width: 1200px;
  margin: auto;
  position: relative;
}
.mainTitleText {
  width: 100%;
  font-size: 18px;
  margin-bottom: 30px;
}
.insideData{
  width: 100%;
  height: 100%;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.topMenuBox {
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  color: #979797;
  padding: 0px 15px;
}
.topMenuBox i {
  font-size: 20px;
  cursor: pointer;
}
</style>
