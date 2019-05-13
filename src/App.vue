<template>
  <div id="app">
    <Header :seller="seller"></Header>
    <div class="tab">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评价</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Header from './components/header/header'
const ERR_OK = 0

export default {
  name: 'App',
  data () {
    return {
      seller: {}
    }
  },
  created () {
    this.$http.get('https://www.easy-mock.com/mock/5cd52a04c385bc03ca2648f1/seller').then((res) => {
      res = res.body
      if (res.errno === ERR_OK) {
        this.seller = res.data
        console.log(this.seller)
      };
    })
  },
  components: { Header }
}
</script>

<style>
.tab{
  display: flex;
  width: 100%;
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  color: rgb(77,85,93);
  border-bottom: 1px solid rgba(7,17,27,0.1);
}
.tab .tab-item{
  flex: 1;
  text-align: center;
}
.tab .tab-item a{
  display: block;
}
.tab .tab-item .router-link-active{
  color: rgb(240,20,20);
}
</style>
