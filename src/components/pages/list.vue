<template>
  <div>
    <div>
      这是列表啊
    </div>
    <refresh
      :on-refresh="onRefresh"
      :on-infinite="onInfinite"
      :dataList="scrollData"
    >
      <div class="content">
        <div v-for="(item,index) in scrollData" :key="item.goodsId+index">
          {{item.goodsName}}
          <img :src="item.image" alt="">
        </div>
      </div>
    </refresh>
  </div>
</template>

<script>
import { Http } from '../../severAPI'
import refresh from '../component/refresh'
export default {
  components: {
    refresh
  },
  data () {
    return {
      scrollData: []
    }
  },
  mounted () {
    this.initDom()
  },
  methods: {
    initDom () {
      Http('http://localhost:8082/static/data.json', 'get').then((res) => {
        console.log(res)
        this.scrollData = res.data.recommend
      })
    },
    addDom () {
      Http('http://localhost:8082/static/data.json', 'get').then((res) => {
        console.log(res)
        this.scrollData = this.scrollData.concat(res.data.recommend)
      })
    },
    onRefresh (done) {
      // 执行刷新方法
      console.log('刷新')
      this.initDom()
      done() // call done
    },
    // 加载更多方法
    onInfinite () {
      const that = this
      // let more = that.$el.querySelector('.load-more')
      console.log('加载更多')
      that.addDom()
    }
  }
}
</script>

<style scoped lang="scss">
  .content{
    padding:0 15px;
    .text{
      font-size: 14px;
      color: rgba(69,90,100,.6);
    }
  }
</style>
