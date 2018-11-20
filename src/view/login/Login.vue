<template>
  <div id = "outer">
    <h1>极简智能简历</h1>
    <form id = "login-form" :style = "{backgroundImage: 'url(' + formImg + ')'}" > 
        <h2>登录</h2>  
        <input type="text" name="account" :style = "{backgroundImage: 'url(' + loginBtnImg + ')' }" />
        <input type="text" name="account" /> 
        <p>
          <button id = "login-btn" :style = "{backgroundImage: 'url(' + loginBtnImg + ')' }"></button>
          <button id = "register-btn" :style = "{backgroundImage: 'url(' + registerBtnImg + ')' }"></button>
        </p>  
    </form>
  </div>
  
</template>

<script>
  
  import LoginBtnImg from '@/assets/images/login/tractor.png'
  import RegisterBtnImg from '@/assets/images/login/register.png'
  import FormImg from '@/assets/images/login/close-btn.png'

  export default {
    data() {
        return {
           loginBtnImg: LoginBtnImg,
           registerBtnImg: RegisterBtnImg,
           formImg : FormImg
        }
    },
    created() {
    },
    methods: {
    },
    components:{
      
    },
    mounted:function(){
    }

  }
</script>

<style lang="scss" scoped>
  h1{
      font-size: 3.5rem;
      font-weight: lighter;
      margin-left:10%;
      color:#666;
      font-family: 'Chinese Quote',-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,'PingFang SC','Hiragino Sans GB','Microsoft YaHei','Helvetica Neue',Helvetica,Arial,sans-serif;
    }
    form{
      max-width: 800px;
      min-width: 350px;
      background-color: white;
      background-color: rgba(255,255,255,0.6);
      border-radius: 5px;
      border:1px solid #979797;
      padding: 10%;

      background-repeat:no-repeat;
      background-position: right top;
      background-size: 30%;
    }
    form h2{
      font-weight:lighter;
      font-size: 32px;
      color:#666;
      margin-top:0px;
      overflow:hidden;
    }
    form input{
      line-height: 50px;
      font-size: 28px;
      border-radius:5px;
      display:block;
      margin-bottom: 30px;
      margin-left:10%;
      width:85%;
      color:#444;
      border-style: none;
      border:1px solid #979797;

      background-repeat:no-repeat;
      
      background-size: 50px;
      background-position:10px;

      text-indent: 70px;

    }
    form p{
      width:60%;
      margin:0 auto;
    }
    form button{
      border-style: none;
      width:40%;
      height:40px;
      margin-left:10%;
      background-size: 60% 40px;
      background-color: rgba(255,255,255,0);
      background-repeat: no-repeat;
    }

</style>
