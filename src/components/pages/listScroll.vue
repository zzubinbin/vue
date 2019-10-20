<template>
    <div>
      <ScrollComponents :on-infinite="loadData" ref="infinite">
        <ul slot="list">
          <li v-for="n in NumberList" :key="n">{{n}}</li>
        </ul>
      </ScrollComponents>
    </div>
</template>

<script>
import ScrollComponents from '../component/scrollComponents'
export default {
  components: {
    ScrollComponents
  },
  data () {
    return {
      Number: 10,
      NumberList: []
    }
  },
  // mounted () {
  //   this.loadData()
  // },
  methods: {
    loadData () {
      setTimeout(() => {
        for (let i = 0;i<this.Number;i++) {
          this.NumberList.push(i)
        }
        this.Number = 20
        this.$refs.infinite.$emit('loadDone')
      }, 1000)
    }
  }
}
</script>

<style scoped lang="scss">

</style>
