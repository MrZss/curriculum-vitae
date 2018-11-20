<template>
  <div class="outer" ref = "outer" :style = "{backgroundImage: 'url(' + bgImg + ')' }">
     <my-header></my-header>
     <p>注册</p>
  </div>
  
</template>

<script>
  import BgImg from '@/assets/images/login/background.jpg'
  import MyHeader from  './MyHeader.vue'
  export default {
    data() {
      return {
        bgImg: BgImg,
      }
    },
    created() {
    },
    methods: {
    },
    components:{
      MyHeader
    },
    mounted:function(){
    }

  }
</script>

<style lang="scss" scoped>
.outer{
  background-size:cover;
  background-attachment: fixed;
  width: 100%;
  height: 100%;
  position: fixed;
  top:0;
  left:0;
  right:0;
  bottom:0;
}

</style>
