<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:nav-c>
        <div>购物街</div>
      </template>
    </nav-bar>
    <scroll
      class="content"
      ref="scroll"
      @isback="isback"
      :probe-type="3" :pull-up-load="true" @pullingUp="loadMore">
      <home-swiper :banners="banners" class="banners"></home-swiper>
      <recommend-view :recommends='recommends'></recommend-view>
      <feature-view :feature="feature"></feature-view>
      <tab-control @tabControlClick="tabClick" :titles="['流行','新款','精选']"></tab-control>
      <goods-list :goods="goods[on].list"></goods-list>
    </scroll>
    <back-top class="back-top" v-show="isShowbacktop" @click.native="backClick"></back-top>
  </div>

</template>

<script>
//导入组件
import NavBar from 'components/common/navbar/NavBar'
import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'
import FeatureView from './childComps/FeatureView'
import GoodsList from 'components/content/goods/GoodsList'
import Scroll from "components/common/scroll/Scroll";
import BackTop from "components/content/backTop/BackTop";
import TabControl from 'components/content/tabControl/TabControl'

import mitt from 'mitt'
const emitter = mitt()


//网络请求封装
import {getHomeMultidata, getGoods} from 'network/home'

export default {
  name: 'home',
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        'pop': {page: 0, list: []},
        'new': {page: 0, list: []},
        'sell': {page: 0, list: []}
      },
      on: 'pop',
      isShowbacktop: false
    }
  },
  created() {
    this.getHomeMultidata();
    this.getGoods('pop');
    this.getGoods('new');
    this.getGoods('sell')

    // this.emitter.on('itemImgLoad',()=>{
    //     this.$refs.scroll.refresh()
    // })
    //监听图片加载完成事件
    // console.log(emitter);
    // console.log(emitter.on);
    // console.log(emitter.emit);

    // emitter.on('itemImgLoad', e => console.log('itemImgLoad', e+123) )
    // emitter.on('itemImgLoad',()=>{
    //   console.log(789);
    // })

  },
  mounted() {
  },
  methods: {
    /*
  *业务请求相关方法
  * */
    tabClick(index) {
//        console.log(index)
//        if (index === 0) {
//          this.on='pop'
//        }
//        else if (index === 1) {
//          this.on='new'
//        }
//        else if (index === 2) {
//          this.on='sell'
//        }
//        console.log(this.on);
      switch (index) {
        case 0:
          this.on = 'pop';
          break;
        case 1:
          this.on = 'new';
          break;
        case 2:
          this.on = 'sell';
          break;
      }
    },
    backClick() {
      this.$refs.scroll.scroll.scrollTo(0, 0, 1000)
    },
    isback(position) {
      // console.log(position);
      // console.log(position.y);
      this.isShowbacktop = -position.y > 1000
    },
    loadMore() {
      this.getGoods(this.on)
    },
    /*
    * 网络请求相关方法
    * */
    getHomeMultidata() {
      getHomeMultidata().then(
        res => {
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        }
      )
    },
    getGoods(type) {
      const page = this.goods[type].page + 1;
      getGoods(type, page).then(
        res => {
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page += 1
          this.$refs.scroll.finishPullUp()
        }
      )
    }
  }
}
</script>

<style scoped>
#home {
  height: 100vh;
}

.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}

.banners {

}

/*.content {*/
/*  height: calc(100% - 93px);*/
/*  overflow: hidden;*/
/*  margin-top: 44px;*/
/*}*/
.content {
  overflow: hidden;
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 50px;

}

.isbacktop {
  display: block;
}

</style>
