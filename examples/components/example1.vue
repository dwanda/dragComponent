<template>
  <div class="main">
    <cardDragger :data="componentData">
      <template v-slot:content="slotProps">
        <div class="insideData">
          {{slotProps.item.name}}
        </div>
      </template>
    </cardDragger>
  </div>
</template>

<script>


export default {
  name: 'example1',

  data() {
    return {
      componentData: [
        {
          positionNum: 1,
          name: "任务状态分布图",
          id: "card1",
        },
        {
          positionNum: 2,
          name: "任务数量图",
          id: "card2",
        },
        // {
        //   positionNum: 3,
        //   name: "任务走势图",
        //   id: "card3",
        // },
        // {
        //   positionNum: 4,
        //   name: "完成情况对比图",
        //   id: "card4",
        // },
        // {
        //   positionNum: 5,
        //   name: "任务分配图",
        //   id: "card5",
        // },
        // {
        //   positionNum: 6,
        //   name: "任务分配图2",
        //   id: "card6",
        // },
        // {
        //   positionNum: 7,
        //   name: "任务分配图3",
        //   id: "card7",
        // }
      ],
    }
  },
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
  background-color: rgb(244, 255, 255);
}
</style>
