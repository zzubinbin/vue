<template>
    <div>
      <slot name="list"></slot>
      <div class="list-donetip" v-show="!isLoading && isDone">
        <slot>没有更多数据了</slot>
      </div>
      <div class="list-loading" v-show="isLoading">
        <slot>加载中</slot>
      </div>
    </div>
</template>

<script>
export default {
  name: "scrollComponents",
  data () {
    return {
      isLoading: false, // false 代表正在执行下拉加载获取更多数据的标识，true代表数据加载完毕
      isDone: false, // false 代表数据没有全完加载完毕，true 代表数据已经全部加载完毕
      scrollview: {}
    }
  },
  props: {
    // 父组件向子组件传入当滚动到底部时执行加载数据的函数
    onInfinite: {
      type: Function,
      required: true
    },
    // 距离滚动到底部的设定值
    distance: {
      type: Number,
      default: 100
    }
  },
  mounted () {
    this.scrollview = window
    this.scrollview.addEventListener('scroll', this.scrollHandler, false)
    this.$nextTick(this.init)
  },
  methods: {
    init () {
      this.$on('loadedDone', () => {
        this.isLoading = false
        this.isDone = false
      })
      this.$on('finishLoad', () => {
        this.isLoading = false
      })
    },
    scrollHandler () {
      if (this.isLoading || this.isDone) return
      let baseHeight = this.scrollview == window ? document.body.offsetHeight : this.scrollview.offsetHeight
      let moreHeight = this.scrollview == window ? document.body.scrollHeight : this.scrollview.scrollHeight;
      let scrollTop = this.scrollview == window ? document.body.scrollTop : this.scrollview.scrollTop
      // 当在window对象上监听scroll事件时，当滚动到底部的时候执行
      if (baseHeight + scrollTop + this.distance > moreHeight) {
        this.isLoading = true;
        this.onInfinite()
      }
    }
  }
}
</script>

<style scoped lang="scss">

</style>
