<template>
  <div>
    <div class="search-bar">
      <!--这里是搜索-->
      <van-row>
        <van-col span="3">
          <img :src="locationIcon" width="100%" alt="" class="location-img">
        </van-col>
        <van-col span="16">
          <input type="text" class="search-input">
        </van-col>
        <van-col span="5">
          <van-button size="mini" class="search-button">
            查找
          </van-button>
        </van-col>
      </van-row>
    </div>
    <div class="swiper-body">
      <!--//这里是轮播图-->
      <van-swipe :autoplay="2000" :show-indicators="false" class="swipe-list">
        <van-swipe-item v-for="(banner,index) in bannerPicArray" :key="index">
          <img :src="banner.imageUrl" width="100%" alt="">
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="partition-list">
      <!--//这里是类型分区-->
    </div>
    <div class="advertising">
      <!--//这里是广告-->
    </div>
    <div class="recommend">
      <!--//这里是推荐-->
    </div>
    <div class="flow-list">
      <!--//这里是商城-->
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Shopping Mall',
      locationIcon: require('../../assets/img/setmap.png'),
      bannerPicArray: [
        {imageUrl: 'http://activity.cmcc-cs.cn/chop/res/newretail/activity/activity/e9a432ee0ae647f79befaa959d00542c.jpg'},
        {imageUrl: 'http://activity.cmcc-cs.cn/chop/res/newretail/activity/activity/d88e31146be945b39f821ef8b4e537e9.png'},
        {imageUrl: 'http://activity.cmcc-cs.cn/chop/res/newretail/activity/activity/973b264d818c40a99351cdad4233900b.jpg'}
      ]
    }
  }
}
</script>
<style scoped lang="sass">
.search-bar
  display: block
  height: 2.2rem
  background-color: #e5017d
  line-height: 2.2rem
  .search-input
    width: 100%
    height: 1.3rem
    border-top: 0px
    border-left: 0px
    border-right: 0px
    border-bottom: 1px solid #fff
    background-color: #e5017d
    color: #fff
  .location-img
    padding: .5rem 0 0 .5rem
    width: 50%
  .search-button
    margin-left: 0.5rem
    border-radius: 0.3rem
.swiper-body
  display: block
  width: 100%
  .swipe-list
    display: block
    width: 100%
    height: 5rem
</style>
