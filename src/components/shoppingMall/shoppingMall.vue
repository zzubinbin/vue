<template>
  <div class="test">
    <span class="hello">{{ msg }}</span>
    <van-button type="default">默认按钮</van-button>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="info">信息按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
    <van-row>
      <van-col span="8">span: 8</van-col>
      <van-col span="8">span: 8</van-col>
      <van-col span="8">span: 8</van-col>
    </van-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Shopping Mall'
    }
  }
}
</script>
<style scoped lang="sass">
  .test
    width: 100%
    height: 10rem
    background-color: bisque
    text-align: center
  .hello
    font-size: 1rem
    color: red
</style>
