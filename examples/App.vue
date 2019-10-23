<template>
  <div id="app">
    <button @click="changeExample">切换案例</button>
    <example1 v-if="exampleSelect"></example1>
    <example2 v-if="!exampleSelect"></example2>

  </div>
</template>

<script>
import example1 from './components/example1.vue'
import example2 from './components/example2.vue'

export default {
  name: 'app',
  data() {
    return {
      exampleSelect:true
    }
  },
  components: {
    example1,example2
  },
  methods: {
    changeExample(){
      this.exampleSelect = !this.exampleSelect
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
