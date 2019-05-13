<template>
  <div class="header">
    <div class="content">
      <div class="content-avatar">
        <img width="64" height="64" :src="seller.avatar">
      </div>
      <div class="content-text">
        <div class="text-title">
          <div class="title-img"><img src="../../assets/img/brand@2x.png"></div>
          <span>{{ seller.name }}</span>
        </div>
        <div class="text-time">{{ seller.description }}/{{ seller.deliveryTime }}分钟送达</div>
        <div v-if="seller.supports" class="text-cut">
          <img src="../../assets/img/decrease_1@2x.png">
          <span>{{ seller.supports[0].description }}</span>
          <span class="cut-more">{{ seller.supports.length }}个<img width="15" height="15" src="../../assets/img/right.png" class="right"></span>
        </div>
      </div>
    </div>
    <div class="tips">
      <img width="22" height="12" src="../../assets/img/bulletin@2x.png" class="tips-brand">
      <span>{{ seller.bulletin }}</span>
      <img width="15" height="15" src="../../assets/img/right.png" class="right">
    </div>
    <div class="background">
      <img :src="seller.avatar" width="100%" height="100%">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    seller: {
      type: Object
    }
  }
}
</script>

<style scoped>
.header {
  position: relative;
  overflow: hidden;
  width: 100%;
  color: #fff;
  background: rgba(7,17,27,0.5);
}
.background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  filter: blur(10px);
}
.content {
  display: flex;
  width: 100%;
  blur: 5px;
}
.content .content-avatar {
  display: inline-block;
  padding: 24px 16px 18px 24px;
}
.content-text {
  display: inline-block;
  padding-top: 24px;
  width: 70%;
}
.text-title{
  height: 20px;
  padding-top: 2px;
  padding-bottom: 8px;
  line-height: 20px;
  font-size: 16px;
}
.text-title img{
  vertical-align: middle;
}
.text-title span{
  font-weight: bold;
}
.title-img {
  display: inline-block;
}
.title-img img {
  width: 30px;
  height: 18px;
}
.text-time{
  font-size: 12px;
  font-weight: 200;
}
.text-cut {
  padding-top: 10px;
  height: 12px;
  line-height: 12px;
}
.text-cut img{
  width: 12px;
  height: 12px;
  vertical-align: middle;
}
.text-cut span{
  padding-left: 4px;
  font-size: 10px;
  font-weight: 200;
}
.text-cut .cut-more{
  float: right;
  text-align: center;
  font-size: 10px;
  background-color: rgba(0,0,0,0.2);
  padding: 7px 8px;
  border-radius: 14px;
}
.text-cut .cut-more span{
  padding-right: 2px;
}
.text-cut .cut-more img{
  width: 15px;
  height: 15px;
}
.tips {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 28px;
  font-size: 10px;
  font-weight: 200;
  line-height: 28px;
  background-color: rgba(7,17,27,0.1);
}
.tips .tips-brand {
  margin: 0px 4px 0px 12px;
}
.tips .right {
  margin: 0px 12px 0px 4px;
}
.tips span{
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
  -o-text-overflow:ellipsis;
}

</style>
