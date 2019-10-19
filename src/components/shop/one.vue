<template>
  <div class="product">
    <div class="product-main">
      <img src="http://activity.cmcc-cs.cn/chop/res/newretail/activity/activity/5ea416071fc74d90a9a1bdf77a354073.jpg" alt="">
      <div class="main-title">华为荣耀20（牙妹）</div>
      <!--<div class="main-summary">双卡双待，A13仿生芯片双卡双待，A13仿生芯片双卡双待，A13仿生芯片</div>-->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: Number,
      default: 1
    }
  }
}
</script>

<style scoped lang="scss">
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
</style>
