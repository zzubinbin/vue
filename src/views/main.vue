<template>
  <div class="main">
    我是main
    <First></First>
    <Second></Second>
  </div>
</template>

<script>
import First from '../components/first'
import Second from '../components/second'
export default {
  name: 'main',
  components: {
    First,
    Second
  }
}
</script>

<style scoped>
.main {
  width: 100%;
  height: 500px;
  background: #cccccc;
}
</style>
