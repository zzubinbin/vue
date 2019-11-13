<template>
  <div class="second">
    我是second
    <button @click="handleClick">second点击</button>
    <secondInner></secondInner>
  </div>
</template>

<script>
import Bus from '../common/js/bus'
import secondInner from './secondInner'
export default {
  name: 'second',
  components: {
    secondInner
  },
  methods: {
    handleClick () {
      Bus.$emit('formSecond', '来自 second组件')
    }
  }
}
</script>

<style scoped>
.second {
  margin-top: 100px;
  width: 100%;
  height: 100px;
  background-color: #0088cc;
}
</style>
