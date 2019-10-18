<template>
  <div
    v-if="data"
    :style="{
        position:'relative',
        height:computeTop(data.length)+cardOutsideHeight+'px',
        width:cardOutsideWidth*colNum+'px'}"
  >
    <div
      class="d_cardBorderBox"
      v-for="item of data"
      :key="item.id"
      :id="item.id"
      :style="{ 
          top:computeTop(item.positionNum)+'px',
          left:computeLeft(item.positionNum)+'px'}"
    >
      <div 
        class="d_cardInsideBox" 
        :style="{ 
            width:cardInsideWidth+'px',
            height:cardInsideHeight+'px'}"
        v-if="item.selectState===false"
      >
        <div @mousedown="touchStart($event,item.id)" class="d_topWrapBox">
          <slot name="header" v-bind:item="item">
            <div class="d_topMenuBox" >
              <div class="d_menuTitle" v-if="item.name">{{item.name}}</div>
              <div class="d_menuTitle" v-else> 默认标题 </div>
            </div>
          </slot>
        </div>
        <component :is="item.componentData" :animationState='animationState' :itemData="item" v-if="item.componentData"></component>
        <slot name="content" v-bind:item="item" v-else>
          <div class="d_emptyContent">
            卡片暂无内容
          </div>
        </slot>
      </div>
    </div>

    <div class="d_cardBorderBox d_moveBox" v-if="selectMenuData!==null">
      <div 
        class="d_cardInsideBox"
        :style="{ 
            width:cardInsideWidth+'px',
            height:cardInsideHeight+'px'}"
      >
        <div class="d_topWrapBox">
          <slot name="header" v-bind:item="selectMenuData">
            <div class="d_topMenuBox" >
              <div class="d_menuTitle" v-if="selectMenuData.name">{{selectMenuData.name}}</div>
              <div class="d_menuTitle" v-else> 默认标题 </div>
            </div>
          </slot>
        </div>
        <component :is="selectMenuData.componentData" :animationState='animationState' :itemData="selectMenuData" v-if="selectMenuData.componentData"></component>
        <slot name="content" v-bind:item="selectMenuData" v-else>
          <div class="d_emptyContent">
            卡片暂无内容
          </div>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "cardDragger",
  props:{
    data:{
      type:Array
    },
    colNum:{
      type:Number,
      default:2
    },
    cardOutsideWidth:{
      type:Number,
      default:590      
    },
    cardOutsideHeight:{
      type:Number,
      default:380      
    },
    cardInsideWidth:{
      type:Number,
      default:560      
    },
    cardInsideHeight:{
      type:Number,
      default:320      
    },
    detectDistance:{
      type:Number,
      default:50      
    }
  },
  data: () => ({
    animationState:true,
    selectMenuData: null,
    mousedownTimer: null
  }),
  methods: {
    touchStart(event, selectId) {
      if (this.mousedownTimer) {
        return false;
      }
      //若触发了点击事件，则返回一个暴露出一个方法
      this.$emit('startDrag',event,selectId)

      const that = this;
      let DectetTimer = null;

      let originTop = document.body.scrollTop === 0 ? document.documentElement.scrollTop : document.body.scrollTop;
      let scrolTop = originTop;
      //记录鼠标移动的距离
      let moveTop = 0;
      let moveLeft = 0;
      //起始组件位置
      let OriginObjPosition = {
        left: 0,
        top: 0,
        originNum: -1
      };
      // 起始鼠标信息
      let OriginMousePosition = {
        x: 0,
        y: 0
      };
      // 记录交换位置的号码
      let OldPositon = null;
      let NewPositon = null;
      // 选中的卡片的dom
      const selectDom = document.getElementById(selectId);

      OriginMousePosition.x = event.screenX;
      OriginMousePosition.y = event.screenY;
      this.selectMenuData = this.data.find(item => {
        return item.id === selectId;
      });

      //选中之后，先将原来的进行隐藏，然后创建一个一模一样的显示出来
      this.$set(this.selectMenuData, "selectState", true);

      moveLeft = OriginObjPosition.left = parseInt(
        selectDom.style.left.slice(0, selectDom.style.left.length - 2)
      );
      moveTop = OriginObjPosition.top = parseInt(
        selectDom.style.top.slice(0, selectDom.style.top.length - 2)
      );
      
      this.$nextTick(() => {
        let moveBoxDom = document.querySelector(".d_moveBox")
        if(moveBoxDom){
          moveBoxDom.style.left = OriginObjPosition.left + "px";
          moveBoxDom.style.top = OriginObjPosition.top + "px";

          document.addEventListener("mousemove", mouseMoveListener);
          document.addEventListener("mouseup", mouseUpListener);
          document.addEventListener("scroll", mouseScroll);
        }
      });

      function throttle (func, delay) {
        return function() {
          if (!DectetTimer) {
            DectetTimer = setTimeout(()=>{
                func.apply(this, arguments);
                DectetTimer = null;
            }, delay);
          }
        }
      }

      function mouseMoveListener(event) {
        moveTop = OriginObjPosition.top + ( event.screenY - OriginMousePosition.y );
        moveLeft = OriginObjPosition.left + ( event.screenX - OriginMousePosition.x );

        document.querySelector(".d_moveBox").style.left = moveLeft + "px";
        document.querySelector(".d_moveBox").style.top = moveTop + (scrolTop - originTop) + "px";  //这里要加上滚动的高度

        throttle(throttleDetect,100)(moveTop + (scrolTop - originTop),moveLeft)         
      }

      function mouseScroll(event) {
        scrolTop =
          document.body.scrollTop === 0
            ? document.documentElement.scrollTop
            : document.body.scrollTop;

        document.querySelector(".d_moveBox").style.top = moveTop + scrolTop - originTop + "px";
      }

      function throttleDetect(moveItemTop, moveItemLeft){
        //测试直接计算位置交换
        const newWidthNum = Math.round(((moveItemLeft - ( that.cardOutsideWidth - that.cardInsideWidth)/2)/that.cardOutsideWidth))
        const newHeightNum = Math.round(((moveItemTop - ( that.cardOutsideHeight - that.cardInsideHeight)/2)/that.cardOutsideHeight))
        const newPositionNum = (newWidthNum+1) + newHeightNum * that.colNum

        if(newPositionNum>0 && newPositionNum!==that.selectMenuData.positionNum){
          let newItem = that.data.find(item=>{
            return item.positionNum === newPositionNum
          })
          if( newItem ){
            swicthPosition(newItem, that.selectMenuData);
          }
        }      
      }

      function swicthPosition(newItem, originItem) {
        OldPositon = originItem.positionNum;
        NewPositon = newItem.positionNum;

        that.$emit('swicthPosition',OldPositon,NewPositon,originItem)

        //位置号码从小移动到大
        if (NewPositon > OldPositon) {
          let changeArray = [];
          // 找出当前需要往前移动一个位置的组件
          for (let i = OldPositon + 1; i <= NewPositon; i++) {
            let pushData = that.data.find(item => {
              return item.positionNum === i;
            });
            changeArray.push(pushData);
          }

          for (let item of changeArray) {
            that.$set(item, "positionNum", item.positionNum - 1);
          }
          that.$set(originItem, "positionNum", NewPositon);
        }

        //位置号码从大移动到小
        if (NewPositon < OldPositon) {
          let changeArray = [];
          for (let i = OldPositon - 1; i >= NewPositon; i--) {
            let pushData = that.data.find(item => {
              return item.positionNum === i;
            });
            changeArray.push(pushData);
          }

          for (let item of changeArray) {
            that.$set(item, "positionNum", item.positionNum + 1);
          }
          that.$set(originItem, "positionNum", NewPositon);

        }
      }

      function mouseUpListener() {
        //取消位于交换队列的检测事件、对位置进行最后一次检测
        clearTimeout(DectetTimer)
        DectetTimer = null
        throttleDetect(moveTop + (scrolTop - originTop),moveLeft)

        document.querySelector(".d_moveBox").style.transition = "all 0.3s";
        document.querySelector(".d_moveBox").style.top = that.computeTop(that.selectMenuData.positionNum) + "px";
        document.querySelector(".d_moveBox").style.left = that.computeLeft(that.selectMenuData.positionNum) + "px";
        that.$emit('finishDrag',OldPositon,NewPositon,that.selectMenuData)


        that.mousedownTimer = setTimeout(() => {
          /*用0.3秒来过渡
            时间到了的话就先隐藏拖动组件，再显示原来的组件
            mousedownTimer在一开始对点击事件进行了判断，若还在过渡则不能进行下一次点击
          */
          that.$set(that.selectMenuData, "selectState", false);
          that.selectMenuData = null;
          clearTimeout(that.mousedownTimer);
          that.mousedownTimer = null;
        }, 300);
    

        document.removeEventListener("mousemove", mouseMoveListener);
        document.removeEventListener("mouseup", mouseUpListener);
        document.removeEventListener("scroll", mouseScroll);
      }
    },
    computeLeft(num) {
      return (num-1) % this.colNum * this.cardOutsideWidth;
    },
    computeTop(num) {
      return (Math.ceil(num / this.colNum) - 1) * this.cardOutsideHeight;
    }
  },
  beforeMount() {
    this.data.forEach(item=>{
      item.selectState=false
    })
  },
  mounted() {
    this.$nextTick(()=>{
      this.animationState = false
    })
  },
};
</script>
<style scoped>
.d_cardBorderBox {  
  user-select: none;
  position: absolute;
  transition: all 0.3s;
}
.d_cardInsideBox {
  border-radius: 5px;
  box-shadow: 0 0 5px #cacaca;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.d_menuTitle {
  pointer-events: none;
}
.d_topMenuBox {
  height: 50px;
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #838383;
  background-color: white;
  padding: 0px 15px;
}
.d_moveBox {
  top:20px;
  left: 20px;
  z-index: 300;
  transition: none;
}
.d_topWrapBox {
  cursor: move;
  border-bottom: 1px solid #e0e0e0;
}
.d_emptyContent{
  width: 100%;
  height: 100%;
  font-size: 16px;
  color: #979797;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
