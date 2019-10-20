<template>
  <div>
    <First :listData="one"></First>
    <First :listData="two"></First>
    <First :listData="three"></First>
  </div>
</template>

<script>
import { Http } from '../../severAPI'
import First from '../shop/first'

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
    First
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
.one {
  display: flex;
  flex-wrap: wrap;
  .product {
    width: 25%;
    .product-main {
      text-align: center;
      padding: 10px;
      img {
        width: 79px;
        height: 79px;
      }
      .main-title {
        font-size: 15px;
        line-height: 21px;
        color: #666;
        margin: 9px 0 5px 0;
      }
      .main-summary {
        font-size: 12px;
        text-align: center;
        line-height: 16px;
        color: #999;
      }

    }
  }
}
</style>
