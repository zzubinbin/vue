<template>
  <div class="main">
    我是main
    <first></first>
    <second></second>
  </div>
</template>

<script>
import first from '../first'
import second from '../second'
export default {
  name: 'main',
  components: {
    first,
    second
  }
}
</script>

<style scoped>
  .main {
    width: 100%;
    height: 500px;
    background: red;
  }
</style>
