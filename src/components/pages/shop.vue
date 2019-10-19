<template>
  <div>
    <First :data="one"></First>
    <div @click="emitMethod">{{msg}}</div>
    <div @click="otherEmitMethod">{{msgs}}</div>
    <div class="one">
      <div class="product">
        <div class="product-main">
          <img src="http://activity.cmcc-cs.cn/chop/res/newretail/activity/activity/5ea416071fc74d90a9a1bdf77a354073.jpg" alt="">
          <div class="main-title">华为荣耀20（牙妹）</div>
          <!--<div class="main-summary">双卡双待，A13仿生芯片双卡双待，A13仿生芯片双卡双待，A13仿生芯片</div>-->
        </div>
      </div>
      <div class="product">
        <div class="product-main">
          <img src="http://activity.cmcc-cs.cn/chop/res/newretail/activity/activity/5ea416071fc74d90a9a1bdf77a354073.jpg" alt="">
          <div class="main-title">华为荣耀20（牙妹）</div>
          <!--<div class="main-summary">双卡双待，A13仿生芯片双卡双待，A13仿生芯片双卡双待，A13仿生芯片</div>-->
        </div>
      </div>
      <div class="product">
        <div class="product-main">
        <img src="http://activity.cmcc-cs.cn/chop/res/newretail/activity/activity/5ea416071fc74d90a9a1bdf77a354073.jpg" alt="">
        <div class="main-title">华为荣耀20（牙妹）</div>
        <!--<div class="main-summary">双卡双待，A13仿生芯片双卡双待，A13仿生芯片双卡双待，A13仿生芯片</div>-->
      </div>
      </div>
      <div class="product">
        <div class="product-main">
        <img src="http://activity.cmcc-cs.cn/chop/res/newretail/activity/activity/5ea416071fc74d90a9a1bdf77a354073.jpg" alt="">
        <div class="main-title">华为荣耀20（牙妹）</div>
        <!--<div class="main-summary">双卡双待，A13仿生芯片双卡双待，A13仿生芯片双卡双待，A13仿生芯片</div>-->
      </div>
      </div>
      <div class="product">
        <div class="product-main">
        <img src="http://activity.cmcc-cs.cn/chop/res/newretail/activity/activity/5ea416071fc74d90a9a1bdf77a354073.jpg" alt="">
        <div class="main-title">华为荣耀20（牙妹）</div>
        <!--<div class="main-summary">双卡双待，A13仿生芯片双卡双待，A13仿生芯片双卡双待，A13仿生芯片</div>-->
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Http } from '../../severAPI'
import First from '../shop/first'
export default {
  data () {
    return {
      componentData: {},
      one: [],
      two: [],
      twos: [],
      three: [],
      four: [],
      msg: '点击后女人派发事件',
      msgs: '点击后女人派发其他事件'
    }
  },
  components: {
    First
  },
  mounted () {
    this.getShopData()
  },
  created () {
    // vm.$on( event, callback ) event {string | Array<string>} 数组2.20+表示可以多个事件对应一个回调函数
    // callback 回调函数
    this.$on('wash_goods', arg => {
      console.log(arg)
    })
    this.$on('drive_car', (...arg) => {
      console.log(arg)
    })
    this.$on(['wash_goods', 'drive_car'], arg => {
      console.log('事真多！')
    })
  },
  methods: {
    emitMethod () {
      // vm.$emit( event, […args] ) event必须是字符串类型
      this.$emit('wash_goods', ['fish', true, {name: 'vue', version: '2.4'}])
    },
    otherEmitMethod () {
      this.$emit('drive_car', ['BMW', 'Audio'])
    },
    getShopData () {
      Http('/componentData', 'get', {}).then((res) => {
        console.log(res)
        this.componentData = res.component
        this.one = res.component[3]
        this.two = res.component[4]
        this.twos = res.component[4]
        this.three = res.component[3]
        this.four = res.component[5]
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
