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
          <img v-lazy="banner.imageUrl" width="100%" alt="">
        </van-swipe-item>
      </van-swipe>
    </div>
    <ul class="partition-list">
      <!--//这里是类型分区-->
      <li class="list-item" v-for="(item,index) in category" :key="index">
        <img :src="item.image" alt="" class="item-img">
        <span class="item-title">{{ item.mallCategoryName }}</span>
      </li>
    </ul>
    <div class="advertising">
      <!--广告-->
      <van-swipe :autoplay="2000" :show-indicators="false" class="swipe-list">
        <van-swipe-item v-for="(banner,index) in slides" :key="index">
          <img v-lazy="banner.image" width="100%" alt="">
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="recommend">
      <!--//这里是推荐-->
      <div class="recommend-title">热门推荐</div>
      <swiper :options="swiperOption" class="recommend-list">
        <swiperSlide v-for="(item,index) in recommend" :key="index">
          <div class="list-item">
            <img :src="item.image" alt="" class="item-img">
            <p>{{item.goodsName}}</p>
            <p>￥{{item.mallPrice}}<span>(￥</span>{{item.price}}<span>)</span></p>
          </div>
        </swiperSlide>
      </swiper>
      <div class="list-item">
        <img src="" alt="" class="item-img">
        <span class="item-text"></span>
      </div>
    </div>
    <div class="flow-list">
      <!--//这里是商城-->
    </div>
    <swiperComponent></swiperComponent>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import {swiper, swiperSlide} from 'vue-awesome-swiper'
import {Http} from '../../severAPI'
import swiperComponent from '../swiper/swiper'

export default {
  components: {
    swiper,
    swiperSlide,
    swiperComponent
  },
  created () {
    Http('/swiper', 'get').then((res) => {
      // swiper数据
      this.bannerPicArray = res.data.bannerPicArray
      // 商品分类数据
      this.category = res.data.category
      // 广告数据
      this.slides = res.data.slides
      // 推荐数据
      this.recommend = res.data.recommend
    })
  },
  data () {
    return {
      msg: 'Shopping Mall',
      locationIcon: require('../../assets/img/setmap.png'),
      // swiper数据
      bannerPicArray: [],
      // 商品分类数据
      category: [],
      // 广告数据
      slides: [],
      // 推荐数据
      recommend: [],
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 30
      }
    }
  }
}
</script>
<style scoped lang="sass">
.search-bar
  display: block
  height: 2.2rem
  width: 100%
  background-color: #e5017d
  line-height: 2.2rem
  .search-input
    width: 100%
    height: 1.3rem
    border-top: 0
    border-left: 0
    border-right: 0
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
  clear: both
  overflow: hidden
  .swipe-list
    display: block
    width: 100%
    height: 5rem
.partition-list
  display: flex
  flex-direction: row
  flex-wrap: nowrap
  display: -webkit-flex
  background: #fff
  margin: 0 .3rem 0 .3rem
  font-size: .14rem
  .list-item
    padding: .3rem
    font-size: .12rem
    text-align: center
    width: 20%
    .item-img
      width: 100%
      padding-bottom: .3rem
.advertising
  display: block
  overflow: hidden
  width: 100%
  height: 9rem
.recommend
  display: block
  width: 100%
  border-bottom: 1px solid #eee
  .recommend-title
    display: block
    overflow: hidden
    height: 1.5rem
    line-height: 1.5rem
    font-size: 1rem
    padding-left: .5rem
  .recommend-list
    display: block
    .list-item
      width: 99%
      border-right: 1px solid #eee
      font-size: 12px
      text-align: center
      .item-img
        width: 100%
</style>
