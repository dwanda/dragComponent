<template>
  <div class="contentBox">
      {{itemData.name}}+1
      <img src="../../assets/logo.png">
  </div>
</template>

<script>

export default {
  name: 'exampleChild1',
  props:{
    itemData:{
      type:Object
    }
  },
  mounted() {
    console.log(this.itemData)
  },
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
