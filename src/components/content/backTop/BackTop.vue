<template>
  <div class="back-top" >
    <img src="~assets/img/common/top.png" alt="">
  </div>
</template>

<script>
export default {
  name: "BackTop",
  mounted() {
  },
  methods:{
    // backClick() {
    // //回到顶部
    //   console.log('回到顶部');
    //   this.$emit('backClick')
    // }
  }

}
</script>

<style scoped>
.back-top{
  position: fixed;
  bottom: 50px;
  right: 10px;

}
.back-top img{
  width: 43px;
  height: 43px;
}
</style>
