<template>
  <div class="product" :style="{width: productWidth}">
    <div class="product-main">
      <img :src="productData.imgurl" alt="商品图标" :class="columnStyle">
      <div class="main-title">{{productData.title}}</div>
      <div class="main-summary">{{productData.summary}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'one',
  props: {
    // 商品数据
    productData: {
      type: Object,
      required: true
    },
    // 类型
    columnType: {
      type: String,
      default: '1'
    }
  },
  data () {
    return {
      productWidth: '50%',
      columnStyle: 'product-img-2'
    }
  },
  mounted() {
    if (this.columnType === '4') {
      this.productWidth = '23%'
      this.columnStyle = 'product-img-4'
    }
  }
}
</script>

<style scoped lang="scss">
  .product {
    .product-main {
      text-align: center;
      padding: 10px;
      .product-img-2 {
        width: 100%;
        height: 125px;
      }
      .product-img-4 {
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
