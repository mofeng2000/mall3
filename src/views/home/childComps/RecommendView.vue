<template>
  <div class="recommends">
    <div v-for="item in recommends" class="items">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'App',
    props: {
      recommends: {
        type: Array,
        default() {
          return []
        }
      }
    },
    components: {}
  }
</script>

<style scoped>
.recommends{
  display: flex;
  font-size: 12px;
  text-align: center;
  padding: 8px 0 24px;
  background-color: #fff;
  border-bottom: 8px solid #eee;
}
.recommends .items{
  flex:1;


}
.recommends .items img{
  width: 75px;
  height: 75px;
  margin-bottom: 5px;
}
</style>
