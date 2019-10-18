<template>
  <div id="app">
    <example></example>
  </div>
</template>

<script>
// import example from './components/example1.vue'
import example from './components/example2.vue'

export default {
  name: 'app',
  components: {
    example
  }
}
</script>

<style>
body {
  padding: 60px;
  background-color: rgb(240, 240, 240);
}
</style>
