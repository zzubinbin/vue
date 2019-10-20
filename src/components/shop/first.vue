<template>
  <div class="first">
    <One :productData="item" :columnType="listData.column" v-for="(item,index) in listData.appmsgs" :key="item+index"></One>
  </div>
</template>

<script>
import One from './one'
export default {
  components: {
    One
  },
  props: {
    listData: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
.first {
  display: flex;
  flex-wrap: wrap;
  background: #FFFFFF;
}
</style>
