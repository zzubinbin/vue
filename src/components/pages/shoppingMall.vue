<template>
  <div class="pr-wrap">
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
    <div class="wrap-part first">
      <vue-scroll
        ref="vs"
        :ops="ops"
        @refresh-start="handleRS"
        @load-before-deactivate="handleLBD"
        @refresh-before-deactivate="handleRBD"
        @load-start="handleLoadStart"
      >
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
        <!--//这里是商城-->
        <div class="floor-list">
          <FloorCompoent
            :floorData="floor1"
            :title="floor_names.floor1"
          >
          </FloorCompoent>
          <FloorCompoent
            :floorData="floor2"
            :title="floor_names.floor2"
          >
          </FloorCompoent>
          <FloorCompoent
            :floorData="floor3"
            :title="floor_names.floor3"
          >
          </FloorCompoent>
        </div>
        <div class="hot-area">
          <div class="hot-title">热卖商品</div>
          <div class="hot-list">
            <van-list>
              <van-row gutter="20">
                <van-col span="12" v-for="(item,index) in hotGoods" :key="index">
                  <goodsInfo :goodsImage="item.image" :goodsName="item.name" :goodsPrice="item.price"></goodsInfo>
                </van-col>
              </van-row>
            </van-list>
          </div>
        </div>
        <div
          slot="load-beforeDeactive"
          v-if="noData"
        >
          <svg
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="8056"
          >
            <path
              d="M469.333333 384h85.333334v213.333333h-85.333334z m0 298.666667h85.333334v85.333333h-85.333334z"
              fill=""
              p-id="8057"
            ></path>
            <path
              d="M549.717333 108.032c-14.762667-27.904-60.672-27.904-75.434666 0l-384 725.333333A42.624 42.624 0 0 0 128 896h768a42.581333 42.581333 0 0 0 37.674667-62.592L549.717333 108.032zM198.869333 810.666667L512 219.221333 825.130667 810.666667H198.869333z"
              fill=""
              p-id="8058"
            ></path>
          </svg>
          {{lang == 'zh' ? '暂无更多': 'No More Data'}}
        </div>
      </vue-scroll>
    </div>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import {swiper, swiperSlide} from 'vue-awesome-swiper'
import {Http} from '../../severAPI'
import swiperComponent from '../swiper/swiper'
import FloorCompoent from '../component/floor'
import {toMoney} from '../../common/js/index'
import goodsInfo from '../component/goodsInfo'
export default {
  components: {
    swiper,
    swiperSlide,
    swiperComponent,
    FloorCompoent,
    goodsInfo
  },
  props: {
    lang: {
      default: 'en'
    }
  },
  mounted () {
    console.log(this.$refs.op)
    this.initDom()
  },
  data () {
    const config = {}
    const ops = {
      vuescroll: {
        mode: 'slide',
        pullRefresh: {
          enable: true
        },
        pushLoad: {
          enable: true,
          auto: true,
          autoLoadDistance: 10
        }
      }
    }
    if (this.lang === 'zh') {
      ops.vuescroll.pullRefresh.tips = {
        deactive: '下拉刷新',
        active: '释放刷新',
        start: '刷新中...',
        beforeDeactive: '刷新成功!'
      }
      ops.vuescroll.pushLoad.tips = {
        deactive: '上拉加载',
        active: '释放加载',
        start: '加载中...',
        beforeDeactive: '加载成功!'
      }
      config.animateTip = '您也可以通过slot来自定义不同的刷新/加载动画。'
      config.animateAddr =
          'https://vuescrolljs.yvescoding.org/zh/guide/slot.html#用法-2'
    } else {
      config.animateTip =
          'You can also customize different refreh/load animations via slot.'
      config.animateAddr =
          'https://vuescrolljs.yvescoding.org/guide/slot.html#usage-2'
    }
    return {
      ops,
      config,
      width: '',
      itemAmount: 3,
      refresh: 1,
      noData: false,
      triggerType: 'load',
      isShow: false,
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
      // 楼层名字
      floor_names: {},
      // 楼层内容
      floor1: [],
      floor2: [],
      floor3: [],
      // 热卖商品
      hotGoods: []
    }
  },
  computed: {
    amount () {
      function getRandom () {
        let str = '#'
        for (let i = 0; i < 6; i++) {
          str += Math.floor(Math.random() * 16).toString(16)
        }
        return str
      }
      return (
        this.refresh &&
          Array.apply(null, {
            length: this.itemAmount
          }).map(item => {
            return getRandom()
          })
      )
    }
  },
  methods: {
    initDom () {
      Http('http://localhost:8082/static/data.json', 'get').then((res) => {
        console.log(res)
        this.isShow = true
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
        this.floor2 = res.data.floor2
        this.floor3 = res.data.floor3
        this.hotGoods = res.data.hotGoods
        console.log(res.data)
        console.log('hotGoods' + res.data.hotGoods)
      })
    },
    getClass (index) {
      return ['child' + ((index % 7) + 1)]
    },
    handleRS (vsInstance, refreshDom, done) {
      // const vm = this
      setTimeout(() => {
        this.refresh++
        done()
      }, 1500)
    },
    handleLoadStart (vm, dom, done) {
      setTimeout(() => {
        const random = Math.floor(Math.random() * 2) + 1
        if (random === 1) {
          this.noData = true
        } else {
          this.noData = false
        }
        done()
      }, 600)
    },
    handleLBD (vm, loadDom, done) {
      setTimeout(() => {
        if (!this.noData) {
          this.itemAmount += 2
        }
        done()
      }, 500)
    },
    handleRBD (vm, loadDom, done) {
      setTimeout(() => {
        done()
      }, 500)
    },
    getBg () {
      let str = '#'
      let i = 6
      while (i--) {
        str += Math.floor(Math.random() * 16).toString(16)
      }
      return {
        backgroundColor: str
      }
    },
    trigger () {
      this.$refs['vs'].triggerRefreshOrLoad(this.triggerType)
    }
  },
  filter: {
    moneyFilter (money) {
      return toMoney(money)
    }
  }
}
</script>

<style lang="scss" scoped>
  @media (max-width: 719px) {
    .pr-wrap {
      flex-wrap: wrap;
      .wrap-part {
        width: 100% !important;
        &.first {
          height: 60%;
        }
        &.second {
          height: 40%;
        }
      }
    }
  }
  .pr-wrap {
    display: flex;
    height: 100%;
    justify-content: center;
    table {
      margin: 0;
    }
    .rl-child {
      width: 100%;
      height: 200px;
    }
    .wrap-part {
      height: 100%;
      &.first {
        width: 40%;
      }
      &.second {
        width: 30%;
      }
      .parent {
        .rl-child {
        }
      }
      table {
        display: table;
        width: 100%;
      }
    }
  }
  .child1 {
    background-color: #43d2c6;
  }
  .child2 {
    background-color: #589be5;
  }
  .child3 {
    background-color: #f3b500;
  }
  .child4 {
    background-color: #ff705a;
  }
  .child5 {
    background-color: #fe7a9c;
  }
  .child6 {
    background-color: #7a85ee;
  }
  .child7 {
    background-color: #57cc71;
  }
  .animate-tip {
    text-align: center;
  }

</style>
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
    margin: .3rem .3rem 0 .3rem
    font-size: .14rem
    .list-item
      padding: .3rem
      font-size: .12rem
      text-align: center
      width: 20%
      .item-img
        width: 80%
        padding-bottom: .3rem
  .advertising
    display: block
    overflow: hidden
    width: 100%
    height: 1.7rem
  .recommend
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
        border-right: 1px solid #eee
        font-size: 12px
        line-height: 15px
        text-align: center
        .item-img
          width: 80%
  .floor-list
    display: block
    width: 100%
    background: #fff
  .hot-area
    text-align: center
    font-size: 14px
    .hot-title
      height: 1.8rem
      line-height: 1.8rem
      font-size: .8rem
      border-bottom: 1px solid #ddd
</style>
