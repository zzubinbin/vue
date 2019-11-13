<template>
<div class="firstInner">
    我是firstInner
    <button @click="handleClick">firstInner点击</button>
  </div>
</template>

<script>
import Bus from '../common/js/bus'
export default {
  name: 'firstInner',
  methods: {
    handleClick () {
      Bus.$emit('fromFirstInner', '来自firstInner组件')
    }
  }
}
</script>

<style scoped>
.firstInner {
  height: 40px;
  background-color: #7e8c8d;
}
</style>
