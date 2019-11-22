<template>
  <div id="app">
    <button @click="changeExample">切换案例</button>
    <example1 v-if="exampleSelect===1" />
    <example2 v-else-if="exampleSelect===2" />
    <example3 v-else-if="exampleSelect===3"/>
  </div>
</template>

<script>
import example1 from './components/example1.vue'
import example2 from './components/example2.vue'
import example3 from './components/example3.vue'


export default {
  name: 'app',
  data() {
    return {
      exampleSelect:1
    }
  },
  components: {
    example1,example2,example3
  },
  methods: {
    changeExample(){
      if(this.exampleSelect===3){
        this.exampleSelect=1
      }
      else{
        this.exampleSelect++
      }
    }
  },
}
</script>

<style>
body {
  padding: 60px;
  background-color: rgb(240, 240, 240);
}
</style>
