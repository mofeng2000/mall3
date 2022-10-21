<template>
    <div class="goods" >
        <goods-item v-for="(item, index) in goods" :key="index" :goods-item="item" class="goods-item">
        </goods-item>
    </div>
</template>

<script>
    import GoodsItem from './GoodsItem'
    export default {
        name: 'GoodsList',
      props:{
        goods:{
          type:Array,
          default(){
            return []
          }
        }
      },
        components: {
          GoodsItem
        }
    }
</script>

<style>
  .goods{
    display: flex;
    flex-wrap: wrap;
    justify-content:space-around;
    padding: 0 5px;
    margin-top: 10px;
  }
  .goods-item{
    flex: 49%;
  }



</style>
