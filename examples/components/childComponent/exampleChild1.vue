<template>
  <div class="contentBox">
      {{itemData.name}}
  </div>
</template>

<script>

export default {
  name: 'exampleChild1',
  props:{
    animationState:{
      type:Boolean,
      default:true
    },
    itemData:{
      type:Object
    }
  }
}

</script>
<style scoped>
.contentBox{
  width: 100%;
  height:100%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
