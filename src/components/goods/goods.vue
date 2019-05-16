<template>
  <div class="goods">
    <div class="menu-wrapper">
      <ul>
        <li v-for="(item, index) in goods" :key="index">
          <span class="icon" v-show="item.type>0" :class="classMap[item.type]"></span>
          <span class="text" >{{ item.name }}</span>
        </li>
      </ul>
    </div>
    <div class="foods-wrapper">
      <ul class="wrapper-list" v-for="(item, index) in goods" :key="index">
        <p class="title">{{ item.name }}</p>
        <li class="list-item" v-for="(item, index) in goods[index].foods" :key="index">
          <div class="left-img">
            <img :src="item.icon" alt="">
          </div>
          <div class="right-main">
            <p class="main-name">{{ item.name }}</p>
            <p class="main-description">{{ item.description }}</p>
            <p class="main-sell">月售{{ item.sellCount }}份  好评率{{ item.rating }}%</p>
            <p class="main-price"><span class="price">￥{{ item.price }}</span><span class="old-price" v-show="item.oldPrice>0">￥{{ item.oldPrice }}</span></p>
            <p class="main-operating">
              <span>-</span>
              <span>1</span>
              <span>+</span>
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { goodsUrl } from '../../severAPI'
export default {
  name: 'goods',
  props: {
    seller: {
      type: Object
    }

  },
  data () {
    return {
      goods: []
    }
  },
  created () {
    goodsUrl.get('/goods').then((res) => {
      this.goods = res.data
      console.log(this.goods)
    })
    this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
  }
}
</script>

<style scoped lang="scss">
@import "../../common/css/base.css";
.goods {
  display: flex;
  position: absolute;
  top: 175px;
  bottom: 46px;
  width: 100%;
  overflow: hidden;
  .menu-wrapper {
    flex: 0 0 80px;
    width: 80px;
    background: #f3f5f7;
    overflow: auto;
    ul {
      li{
        display: block;
        overflow: hidden;
        padding: 20px 0;
        margin: 0 12px;
        border-bottom: 1px solid rgba(7,17,27,0.1);
        .icon {
          display: inline-block;
          width: 12px;
          height: 12px;
          line-height: 12px;
          margin: 0 auto;
          background-repeat: no-repeat;
          background-size: 12px 12px;
          vertical-align: middle;
        }
        .text {
          font-size: 12px;
          color: rgb(7,17,27);
          line-height: 14px;
        }
      }
    }
  }
  .foods-wrapper {
    flex: 1;
    overflow: auto;
    .wrapper-list {
      .title {
        display: block;
        width: 100%;
        height: 26px;
        background: #f3f5f7;
        font-size: 12px;
        color: rgb(147,153,159);
        line-height: 26px;
        padding-left: 14px;
      }
      .list-item {
        position: relative;
        margin: 18px 18px 0 18px;
        border-bottom: 1px solid rgba(7,17,27,0.1);
        .left-img {
          img{
          }
        }
        .right-main {
          .main-name {
          }
          .main-description {}
          .main-sell {}
          .main-price {}
          .main-operating{
            position: absolute;
            bottom: 18px;
            right: 18px;
          }
        }
      }
    }
  }
}
.decrease {
  background-image: url("../../assets/img/decrease_3@2x.png");
}
.discount {
  background-image: url("../../assets/img/discount_3@2x.png");
}
.special {
  background-image: url("../../assets/img/special_3@2x.png");
}
.invoice {
  background-image: url("../../assets/img/invoice_3@2x.png");
}
.guarantee {
  background-image: url("../../assets/img/guarantee_3@2x.png");
}

</style>
