<template>
  <div class="tabOne">
    <div class="tabs">
      <span v-for="(item,index) in tabData.productlist" :key="item+index" :class="{'active':isActive === index}">{{item.tabname}}</span>
    </div>
    <div class="product-list">
      <div class="product">
        <div class="product-img">
          <img src="http://activity.cmcc-cs.cn/chop/res/newretail/product/product/0a27099a93824f42897a82d850b80e17.png" alt="商品缩略图">
        </div>
        <div class="product-main">
          <p class="main-title">
            头条抖音6.6元流量包
          </p>
          <p class="main-Summary">
            15G定向流量仅需6.6元/月！
          </p>
          <div class="main-bottom">
            <span class="bottom-price">
              ￥ 6.6
            </span>
            <van-button round color="#f20c00" plain class="bottom-button">去办理</van-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'onePlus',
  props: {
    tabData: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      isActive: 0
    }
  },
  mounted () {
    console.log(this.tabData)
  }
}
</script>

<style scoped lang="scss">
.tabOne {
  .tabs {
    height: 45px;
    line-height: 45px;
    padding:  0 10px;
    span {
      font-weight: 300;
      color: #48546b;
      font-size: 14px;
      padding: 0 12px;
    }
    .active {
      color: #333;
      font-size: 16px;
      font-weight: 600;
    }
    .active:after {

    }
  }
  .product {
    display: flex;
    align-items: center;
    background: #f6f6f6;
    margin: 0 10px;
    padding: 10px;
    .product-img {
      img {
        width: 60px;
        height: 60px;
      }
    }
    .product-main {
      flex: 1;
      padding-left: 10px;
      .main-title {
        font-size: 14px;
        color: #333333;
        font-weight: bold;
        line-height: 20px;
      }
      .main-Summary {
        font-size: 12px;
        line-height: 17px;
        color: #666666;
        font-weight: normal;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
      .main-bottom {
        font-size: 15px;
        line-height: 20px;
        color: #F20C00;
        margin-top: 10px;
        height: 20px;
        font-weight: normal;
        .bottom-price {

        }
        .bottom-button {
          background: #298DFE;
        }
      }
    }
  }

}
</style>
