<template>
  <div class="tabControl">
    <div class="tabControl-items" v-for="(item, index) in titles" :class="{active:index===clectIndex}"  @click="btnControl(index)">
     <span>{{item}}</span>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'tabControl',
    props: {
      titles: {
        type: Array,
        default() {
          return []
        }
      }

    },
    data(){
      return {
        clectIndex:0
      }
    },
    components: {},

    methods:{
      btnControl(index){
        console.log(index);
        this.clectIndex=index;
        this.$emit('tabControlClick',index)
      }
    }
  }
</script>

<style>
  .tabControl{
    position:sticky;
    top: 44px;
    display: flex;
    text-align: center;
    height: 40px;
    line-height:40px;
    background-color: #fff;
    z-index:9;
  }
  .tabControl .tabControl-items{
    flex: 1;

  }
  .tabControl .tabControl-items span{
    /*display: inline-block;*/
    /*width: 40px;*/
    /*height: 20px;*/
    font-size: 15px;
    padding: 5px;
  }
  .active{
    color: var(--color-high-text);

  }
  .active span{
    border-bottom: 3px solid  var(--color-tint);
  }

</style>
