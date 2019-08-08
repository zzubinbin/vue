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
          <img v-lazy="banner.image" width="100%" alt="">
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
      <img :src="slides" width="100%" alt="">
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
    </div>
    <div class="floor-list">
      <!--//这里是商城-->
      <div class="floor-one">
        <img :src="floor1_0.image" alt="" width="100%">
      </div>
      <div>
        <div class="floor-two">
          <img :src="floor1_1.image" width="100%" alt="">
        </div>
        <div>
          <img :src="floor1_2.image" width="100%" alt="">
        </div>
      </div>
    </div>
    <div class="floor-rule">
      <div v-for="(item,index) in floor1.slice(3)" :key="index">
        <img :src="item.image" width="100%" alt="">
      </div>
    </div>
    <FloorCompoent></FloorCompoent>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import {swiper, swiperSlide} from 'vue-awesome-swiper'
import {Http} from '../../severAPI'
import swiperComponent from '../swiper/swiper'
import FloorCompoent from '../component/floor'

export default {
  components: {
    swiper: swiper,
    swiperSlide: swiperSlide,
    swiperComponent: swiperComponent,
    FloorCompoent: FloorCompoent
  },
  created () {
    Http('/swiper', 'get').then((res) => {
      // swiper数据
      this.bannerPicArray = res.data.slides
      // 商品分类数据
      this.category = res.data.category
      // 广告数据
      this.slides = res.data.advertesPicture.PICTURE_ADDRESS
      // 推荐数据
      this.recommend = res.data.recommend
      this.floor_names = res.data.floorName
      // 第一层
      this.floor1 = res.data.floor1
      this.floor1_0 = this.floor1[0]
      this.floor1_1 = this.floor1[1]
      this.floor1_2 = this.floor1[2]
      console.log(res.data)
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
      slides: '',
      // 推荐数据
      recommend: [],
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      floor_names: {},
      // 第一层
      floor1: [],
      floor1_0: [],
      floor1_1: [],
      floor1_2: []
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
  height: 8.5rem
  .swipe-list
    display: block
    width: 100%
.partition-list
  display: flex
  flex-direction: row
  flex-wrap: nowrap
  height: 4.5rem
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
  height: 1.7rem
.recommend
  display: block
  width: 100%
  border-bottom: 1px solid #eee
  .recommend-title
    display: block
    overflow: hidden
    height: 1.5rem
    line-height: 1.5rem
    font-size: 14px
    padding-left: .5rem
    color: #e5017d
  .recommend-list
    display: block
    .list-item
      width: 99%
      padding: 0 1rem
      border-right: 1px solid #eee
      font-size: 12px
      line-height: 15px
      text-align: center
      .item-img
        width: 80%
.floor-list
  display: flex
  flex-direction: row
  background: #fff
  border-bottom: 1px solid #ddd
  div
    width: 10rem
    box-sizing: border-box
  .floor-one
    border-right: 1px solid #ddd
  .floor-two
    border-bottom: 1px solid #ddd
.floor-rule
  display: flex
  flex-direction: row
  flex-wrap: wrap
  background-color: #fff
  div
    box-sizing: border-box
    -webkit-box-sizing: border-box
    width: 10rem
    border-bottom: 1px solid #ddd
  div:nth-child(odd)
    border-right: 1px solid #ddd
</style>
