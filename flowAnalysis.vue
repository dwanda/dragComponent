<template>
  <div>
      <div class="mainContainer">
        <div class="mainTitleText">项目统计</div>
        <div :style="{
          position:'relative',
          height:computeTop(componentData.length)+380+'px',
          width:590*2+'px'}">
          <div 
            class="cardOutsideBox"
            v-for="item of componentData" 
            :key="item.id"
            :id="item.id"
            :style="{ 
              top:computeTop(item.positionNum)+'px',
              left:computeLeft(item.positionNum)+'px'}">    
            <div class="cardBox" v-if="item.selectState==false">
              <div class="topMenuBar"
                @mousedown="touchStart($event,item.id)">
                <div class="menuTitle">{{item.name}}</div>
                <div><Icon type="ios-more" /></div>
              </div>
              <div class="insideContent">
                {{item.id}}
              </div>
            </div>
          </div>

          <div class="cardOutsideBox moveBox" v-if="selectMenuData!=null">
              <div class="cardBox">
                <div class="topMenuBar">
                  <div class="menuTitle">{{selectMenuData.name}}</div>
                  <div><Icon type="ios-more" /></div>
                </div>
                <div class="insideContent">
                  {{selectMenuData.id}}
                </div>
              </div>
          </div>        
        </div>
      </div>
  </div>
</template>

<script>

export default {
  data: () => ({
    missionList:[0,1,2],
    selectDom:'',
    selectMenuData:null,
    firstLoaded:true,
    componentData:[
      {
        type:'processOverview',
        positionNum:1,
        name:'卡片名称-1',
        selectState:false,
        id:'card1'
      },
      {
        type:'missionOverview',
        positionNum:2,
        name:'卡片名称-2',
        selectState:false,
        id:'card2'
      },
      {
        type:'missionGrowing',
        positionNum:3,
        name:'卡片名称-3',
        selectState:false,
        id:'card3'
      },
      {
        type:'missionIdealSituation',
        positionNum:4,
        name:'卡片名称-4',
        selectState:false,
        id:'card4'
      },
      {
        type:'distributionOverview',
        positionNum:5,
        name:'卡片名称-5',
        selectState:false,
        id:'card5'
      },
    ],

    // 物体信息
    originPosition:{
      left: 0,
      top: 0,
      originNum:-1   
    },
    // 鼠标信息
    MousePosition:{
      start: { x: 0, y: 0 },
      end: { x: 0, y: 0 },
      swipping: false // 是否在拖动交换过程中
    },
    mousedownTimer:null
  }),
  methods:{
    testDarg(event){
      return false
    },
    touchStart(event,selectId){ 
      if(this.mousedownTimer){
        return false
      }
      
      let swipeTimer = null
      let that = this
      let displacement={x: 0,y: 0}
      let selectPosition = null
      let originTop = document.body.scrollTop==0?document.documentElement.scrollTop:document.body.scrollTop;
      let scrolTop = originTop 
      let moveTop = 0
      let moveLeft = 0


      this.MousePosition.start.x = event.screenX
      this.MousePosition.start.y = event.screenY
      this.selectDom = document.getElementById(selectId)

      let originItem = that.componentData.find((item)=>{
        return item.id == selectId
      })

      this.selectMenuData = JSON.parse(JSON.stringify(originItem))
      this.$set(originItem,'selectState',true)


      this.originPosition.left = parseInt(this.selectDom.style.left.slice(0,this.selectDom.style.left.length-2))
      this.originPosition.top = parseInt(this.selectDom.style.top.slice(0,this.selectDom.style.top.length-2))

      this.$nextTick(()=>{
        document.querySelector('.moveBox').style.left = this.originPosition.left+'px'
        document.querySelector('.moveBox').style.top = this.originPosition.top+'px'
      })

      document.addEventListener('mousemove',mouseMoveListener)
      document.addEventListener('mouseup',mouseUpListener)
      document.addEventListener('scroll',mouseScroll)


      function mouseMoveListener(event){
      //位移数据
          displacement.x = event.screenX - that.MousePosition.start.x
          displacement.y = event.screenY - that.MousePosition.start.y      

          moveTop = that.originPosition.top + displacement.y 
          moveLeft = that.originPosition.left + displacement.x 

          that.selectDom.style.top = moveTop + (scrolTop - originTop) +'px'
          that.selectDom.style.left = moveLeft + 'px'
          document.querySelector('.moveBox').style.left = moveLeft+'px'
          document.querySelector('.moveBox').style.top = moveTop + (scrolTop - originTop) +'px'

          for(let item of that.componentData){
            if(item.id != that.selectDom.id){
              caculateTransition (item,moveTop+ (scrolTop - originTop),moveLeft,that.selectDom.id)
            }
          }
      }
      
      function caculateTransition (item,move_top,move_left,originId){
        console.log('有在检测')
        let itemTop = that.computeTop(item.positionNum)
        let itemleft = that.computeLeft(item.positionNum)

        if(move_top>itemTop-50&&move_top<itemTop+50){
            if(move_left>itemleft&&move_left<itemleft+590/2||
               move_left+590>itemleft+590/2&&move_left+590<itemleft+590){
                swicthPosition(item.id,originId)
                // console.log('左右方向')
            }
        }

        else if(move_left>=itemleft-50&&move_left<=itemleft+50){
            if(move_top+380>itemTop+380/2&&move_top+380<itemTop+380||
               move_top>itemTop&&move_top<itemTop+380/2){
                swicthPosition(item.id,originId)
                // console.log('上下方向')
            }
        }

      }

      function swicthPosition(newId,originId){
          that.MousePosition.swipping = true
          
          if(swipeTimer==null){
            beginSwip()
          }
          else{
            clearTimeout(swipeTimer)
            swipeTimer = setTimeout(swipFinish,300)
          }

          function beginSwip(){
            // console.log('进行交换')
            swippingFuntion()
            swipeTimer = setTimeout(swipFinish,300)
          }

          function swipFinish(){
            // console.log('完成交换')
            swipeTimer = null
          }

          function swippingFuntion(){
            let newItem = that.componentData.find((item)=>{
              return item.id == newId
            })

            let originItem = that.componentData.find((item)=>{
              return item.id == originId
            })

            let OldPositon = originItem.positionNum
            let NewPositon = newItem.positionNum
            
            //小到大
            if(NewPositon>OldPositon){
              let changeArray = []
              for(let i=OldPositon+1;i<=NewPositon;i++){
                  let pushData = that.componentData.find(item=>{
                    return item.positionNum == i
                  })
                  changeArray.push(pushData)
              }

              for(let item of changeArray){
                that.$set(item,'positionNum',item.positionNum-1)
              }
              selectPosition = NewPositon
              originItem.positionNum = NewPositon

            }

            //大到小
            if(NewPositon<OldPositon){
              let changeArray = []
              for(let i=OldPositon-1;i>=NewPositon;i--){
                  let pushData = that.componentData.find(item=>{
                    return item.positionNum == i
                  })
                  changeArray.push(pushData)
              }

              for(let item of changeArray){
                that.$set(item,'positionNum',item.positionNum+1)
              }


              selectPosition = NewPositon
              originItem.positionNum = NewPositon
            }
            that.$nextTick(()=>{
                console.log('更新完成')
            })
          }
      }   

      function mouseUpListener(){
          that.selectDom.style.transition = "all 0.3s"
 
          let originItem = that.componentData.find((item)=>{
            return item.id == that.selectDom.id
          })

          if(selectPosition == null){
            selectPosition = originItem.positionNum
          }
          
          that.selectDom.style.top = that.computeTop(selectPosition) +'px'
          that.selectDom.style.left = that.computeLeft(selectPosition) + 'px'
          document.querySelector('.moveBox').style.transition = 'all 0.3s'
          document.querySelector('.moveBox').style.top = that.computeTop(selectPosition) +'px'
          document.querySelector('.moveBox').style.left = that.computeLeft(selectPosition) + 'px'


          that.$nextTick(()=>{
              console.log('恢复完成')
              that.mousedownTimer = setTimeout(()=>{
                that.selectMenuData = null
                that.$set(originItem,'selectState',false)
                clearTimeout(that.mousedownTimer)
                that.mousedownTimer = null
              },300)
          })
          
          that.MousePosition.swipping = false

          document.removeEventListener('mousemove',mouseMoveListener)
          document.removeEventListener('mouseup',mouseUpListener)
          document.removeEventListener('scroll',mouseScroll)
      }

      function mouseScroll(event){

          scrolTop=document.body.scrollTop==0?document.documentElement.scrollTop:document.body.scrollTop

          that.selectDom.style.top = moveTop + (scrolTop - originTop) + 'px'
          document.querySelector('.moveBox').style.top = moveTop + scrolTop - originTop + 'px'

      }
    },
    computeLeft(num){
        return (num%2==1?0:590) 
    },
    computeTop(num){
        return (Math.ceil(num/2)-1)*380
    }
  },
  mounted(){
    this.firstLoaded = false
  }
}

</script>
<style scoped>
.mainContainer{
  padding-top: 40px;
  padding-bottom: 50px;
  width: 1200px;
  margin:auto;
  position: relative;
}
.cardOutsideBox{
  top: 0px;
  left:0px;
  width: 590px;
  height: 380px;
  user-select: none;
  position: absolute;
  transition: all 0.3s;
}
.cardBox{
  width:  560px;
  height:  320px;
  border-radius: 5px;
  box-shadow: 0 0 5px #dbdbdb;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.mainTitleText{
  width: 100%;
  font-size: 18px;
  margin-bottom: 30px;
}
.menuTitle{
  pointer-events: none;
}
.topMenuBar{
  height: 50px;
  border-bottom: 1px solid #e0e0e0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  color: #979797;
  padding: 0px 15px;
  cursor: move;
}
.topMenuBar i{
  font-size: 20px;
  cursor: pointer;
}
.moveBox{
  z-index:50;
  transition: none;
}
.insideContent{
  font-size: 35px;
  font-weight: bold;
  color: #979797;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
