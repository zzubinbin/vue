<template>
  <div class="shop" v-if="componentData[10]">
    <tabOne :tabData="componentData[10]"></tabOne>
    <!--<First :listData="one"></First>-->
    <!--<First :listData="two"></First>-->
    <!--<First :listData="three"></First>-->
  </div>
</template>

<script>
import { Http } from '../../severAPI'
import First from '../shop/first'
import tabOne from '../shop/tabOne'

export default {
  data () {
    return {
      componentData: {},
      one: {},
      two: {},
      three: {},
      four: {}
    }
  },
  components: {
    First,
    tabOne
  },
  mounted () {
    this.getShopData()
  },
  methods: {
    getShopData () {
      Http('/componentData', 'get', {}).then((res) => {
        console.log(res)
        this.componentData = res.component
        this.one = res.component[3]
        this.two = res.component[4]
        this.three = res.component[5]
        this.four = res.component[6]
      })
    }
  }
}
</script>

<style scoped lang="scss">
.shop {
  background: #F6F6F6;
}
</style>
