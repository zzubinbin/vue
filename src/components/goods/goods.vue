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
        <li class="list-item" v-for="(value, index) in item.foods" :key="index">
          <div class="left-img">
            <img :src="value.icon" alt="">
          </div>
          <div class="right-main">
            <p class="main-name">{{ value.name }}</p>
            <p class="main-description" v-show="value.description!==''">{{ value.description }}</p>
            <p class="main-sell">月售{{ value.sellCount }}份<span class="w-20"></span>好评率{{ value.rating }}%</p>
            <p class="main-price"><span class="price">￥{{ value.price }}</span><span class="old-price" v-show="value.oldPrice!=''">￥{{ value.oldPrice }}</span></p>
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
        padding: 18px 18px 0 18px;
        border-bottom: 1px solid rgba(7,17,27,0.1);
        .left-img {
          display: inline-block;
          padding-right: 10px;
          vertical-align: top;
          img{
            width: 57px;
            height: 57px;
          }
        }
        .right-main {
          width: 70%;
          display: inline-block;
          padding-bottom: 18px;
          .main-name {
            font-size: 14px;
            color: rgb(7,17,27);
            line-height: 14px;
          }
          .main-description {
            font-size: 10px;
            color: rgb(147,153,159);
            line-height: 10px;
            padding-top: 8px;
          }
          .main-sell {
            font-size: 10px;
            color: rgb(147,153,159);
            line-height: 10px;
            padding: 8px 0;
          }
          .main-price {
            .price {
              font-size: 14px;
              color: rgb(240,20,20);
              font-weight: 700;
              padding-right: 8px;
            }
            .old-price{
              font-size: 10px;
              color: rgb(147,153,159);
              font-weight: 700;
              text-decoration:line-through
            }
          }
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
.w-20 {
 width: 20px;
}
</style>
