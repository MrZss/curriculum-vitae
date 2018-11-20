<template>
  <div class="header">
      <img id = "logo" src = "../../assets/images/login/diamond.png" />
      <div class="login-btn">
        <span>登录</span>/
        <span>注册</span>
      </div>
  </div>  
</template>

<script>
  
  import LogoImg from '@/assets/images/login/diamond.png'

  export default {
    data() {
      return {
         logoImg: LogoImg,
      }
    },
    created() {
    },
    methods: {
    }
  }
</script>

<style lang="scss" scoped>
   div{
       margin: 0;
       padding:0;
   }  
   a{
    text-decoration: none;
   }
  .header{
      width:100%;
      height:100px;
      background-color: rgba(171,186,195,0.5);
      border-bottom: 1px solid #979797;
      overflow: hidden;
    }
  #logo{     
     width:50px;
     height:50px;
     margin-left:5%;
     margin-top:20px;
     float:left;
  }
  .header .login-btn{
    float:right;
    margin-right: 5%;
    font-size: 1.2rem;
    border:1px solid #979797;
    border-radius: 20px;
    margin-top:20px;
    line-height: 30px;
    padding:10px 20px;
    letter-spacing: 0.2rem;
  }
</style>
