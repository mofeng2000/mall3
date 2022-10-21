<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BetterScroll from 'better-scroll'
import BScroll from '@better-scroll/core'
import PullUp from '@better-scroll/pull-up'
import PullDown from '@better-scroll/pull-down'

BScroll.use(PullUp, PullDown)

export default {
  name: "Scroll",
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      scroll: null,

    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      movable: true,
      zoom: true,
      probeType: this.probeType,
      click: true,
      pullUpLoad: this.pullUpLoad,
      // pullDownRefresh: true  //下拉刷新
    })

    // this.scroll.refresh();刷新高度
    this.scroll.on('scroll', (position) => {
      this.$emit('isback', position)
    })
    // this.scroll= new BScroll(this.$refs.wrapper, {
    //   // pullUpLoad: true
    // })
    //上拉加载更多pullingUp
      this.scroll.on('pullingUp', () => {
        console.log('上拉加载更多');
        this.$emit('pullingUp')
      })
  },
  methods: {
    //返回顶部
    scrollTo(x, y, time = 500) {
      this.scroll.scrollTo(x, y, time);
    },
    finishPullUp(){
      this.scroll.finishPullUp()
    },
    refresh(){
      this.scroll.refresh()
    }

  }

}
</script>

<style scoped>

</style>
