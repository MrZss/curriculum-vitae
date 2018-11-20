<template>
  <div class="outer" ref = "outer" :style = "{backgroundImage: 'url(' + bgImg + ')' }">
     <my-header></my-header>
     <div class="wrap">
      <!--  <entrance></entrance> -->
      <login></login>
     </div>
     
  </div>
  
</template>

<script>
  import BgImg from '@/assets/images/login/background.png'
  import MyHeader from  './MyHeader.vue'
  import Entrance from './Entrance.vue'
  import Login from './Login.vue'
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
      MyHeader,Entrance,Login
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
.wrap{
  max-width: 400px;
  margin:100px auto;
}

</style>
