<template>
  <swiper class="banner">
    <swiper-item v-for="item in banners" :key="index">
      <a :href="item.link"><img :src="item.image" alt=""></a>
    </swiper-item>
  </swiper>
</template>

<script>
  import {Swiper, SwiperItem} from 'components/common/swiper'
    export default {
        name: 'App',
      props:{
        banners:{
          type:Array,
          default(){
            return []
          }
        }
      },
        components: {
          Swiper,
          SwiperItem
        }
    }
</script>

<style scoped>
  .banner a img{
    width: 100%;
  }
</style>
