<template>
  <div class="first">
    <One :data="product"></One>
  </div>
</template>

<script>
import One from './one'
export default {
  components: {
    One
  },
  data () {
    return {
      product: {
        type: 1
      }
    }
  }
}
</script>

<style scoped lang="scss">
.first {
  display: flex;
  flex-wrap: wrap;
}
</style>
