<template>
  <div class="goods-info">
    <div class="goods-image">
      <img v-lazy="goodsImage" width="90%" alt="">
    </div>
    <div class="goods-name">{{goodsName}}</div>
    <div class="goods-price">￥{{goodsPrice | moneyFilter}}</div>
  </div>
</template>

<script>
import {toMoney} from '../../common/js/index'
export default {
  name: 'goodsInfo',
  props: {
    goodsImage: String,
    goodsName: String,
    goodsPrice: Number
  },
  filters: {
    moneyFilter (money) {
      return toMoney(money)
    }
  }
}
</script>

<style scoped lang="scss">
.goods-name{
  padding: 0 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
