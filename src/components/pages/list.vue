<template>
  <div>
    <div class="title">
      这是列表啊
    </div>
    <div class="body">
      <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
          :offset="offset"
          class="content"
        >
          <van-cell
            v-for="(item,index) in saleDataList"
            :key="item.normNumber+index"
            class="list-item"
            :title="index"
          >
            {{item.orderName}}
          </van-cell>
        </van-list>
      </van-pull-refresh>
    </div>
  </div>
</template>

<script>
import { Http } from '../../severAPI'
import Vue from 'vue'
import { PullRefresh, Toast, List, Cell } from 'vant'
Vue.use(PullRefresh).use(Toast).use(List).use(Cell)
export default {
  data () {
    return {
      saleDataList: [],
      list: [],
      isLoading: false,
      loading: false,
      finished: false,
      offset: 15
    }
  },
  mounted () {
  },
  methods: {
    onRefresh () {
      setTimeout(() => {
        Toast.success('刷新成功')
        this.isLoading = false
      }, 500)
    },
    onLoad () {
      this.getList()
      console.log(this.saleDataList.length, '------------------------------')
      // 数据全部加载完成
      if (this.saleDataList.length >= 40) {
        this.finished = true
      }
    },
    getList () {
      Http('http://120.27.243.49:7300/mock/5da12f308c14ee0f50d37e46/cmeb/sale', 'get', {}).then((res) => {
        console.log(res)
        this.list = res.bean.orders
        this.saleDataList = this.saleDataList.concat(this.list)
        // 加载状态结束
        this.loading = false
      })
    }
  }
}
</script>

<style scoped lang="scss">
  .title {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9;
    background: yellow;
  }
  .body {
    margin-top: 20px;
  }
  .content{
    .text{
      font-size: 14px;
      color: rgba(69,90,100,.6);
    }
    .list-item {
      padding: 30px;
      text-align: center;
      background: #0088cc;
      border-bottom: 1px solid red;
    }
  }
</style>
