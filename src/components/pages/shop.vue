<template>
  <div class="shop">
    <onePlus></onePlus>
    <First :listData="one"></First>
    <First :listData="two"></First>
    <First :listData="three"></First>
  </div>
</template>

<script>
import { Http } from '../../severAPI'
import First from '../shop/first'
import onePlus from '../shop/onePlus'

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
    onePlus
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
