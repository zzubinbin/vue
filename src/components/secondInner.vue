<template>
  <div class="secondInner">
    我是secondInner
    <span>{{msg}}</span>
    <button>secondInner点击</button>
  </div>
</template>

<script>
import Bus from '../common/js/bus'
export default {
  name: 'secondInner',
  data () {
    return {
      msg: '默认'
    }
  },
  created () {
    Bus.$on('fromFirstInner', (msg) => {
      this.msg = msg
    })
  },
  // 最好在组件销毁前
  // 清除事件监听
  beforeDestroy () {
    Bus.$off('fromFirstInner')
  }
}
</script>

<style scoped>
  .second {
    width: 100%;
    height: 100px;
    background-color: #ffff00;
  }
</style>
