<template>
  <div>
    <grid :rows="2">
      <grid-item :label="'下单'" link="/OrderList">
        <img slot="icon" src="../../assets/grid_icon.png">
      </grid-item>
      <grid-item :label="'门店维护'" link="/StoreList">
        <img slot="icon" src="../../assets/grid_icon.png">
      </grid-item>
    </grid>
    <grid :rows="3">
      <grid-item :label="'测试'">
        <img slot="icon" src="../../assets/grid_icon.png" v-on:click="doTest">
      </grid-item>
    </grid>
  </div>
</template>


<script>
  import {Grid, GridItem, GroupTitle} from 'vux'
  import {Http} from '../../http-commons'

  export default {
    components: {
      Grid,
      GridItem,
      GroupTitle
    },
    created () {
      this.fetchData()
    },
    methods: {
      fetchData () {

      },
      onItemClick () {
        console.log('on item click')
      },
      doTest () {
        console.log('run doTest')
        Http.get('/test/foo/5/6')
          .then(response => {
            console.log(response.data)
          }).catch(e => {
          console.log('error: ' + e)
        })
      }
    }
  }
</script>

<style scoped>
  .grid-center {
    display: block;
    text-align: center;
    color: #666;
  }
</style>
