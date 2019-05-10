<template>
  <div id="app">
    <Header></Header>
    <router-link to="/header">header</router-link>
    <div class="tab"></div>
    <div class="content"></div>
    <router-view/>
  </div>
</template>

<script>
import Header from '../components/header/header'
export default {
  name: 'App',
  components: { Header }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
