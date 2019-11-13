<template>
  <div class="first">
    <span>firstMsg{{firstMsg}}</span>
    <button>点击</button>
    <firstInner></firstInner>
  </div>
</template>
<script>
import Bus from '../common/js/bus'
import firstInner from './firstInner'
export default {
  name: 'first',
  components: {
    firstInner
  },
  data () {
    return {
      firstMsg: ''
    }
  },
  created () {
    Bus.$on('formSecond', (msg) => {
      this.firstMsg = msg
      console.log('second发来的消息', msg)
    })
  },
  beforeDestroy () {
    Bus.$off('formSecond')
  }
}
</script>

<style scoped>
.first {
  width: 100%;
  height: 100px;
  background-color: #333333;
}
</style>
