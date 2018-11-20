<template>
<div class="wrap" :style = "{backgroundImage: 'url(' + bgImg + ')' }"> 
  <div class="header">
      <img id = "logo" src = "../assets/images/login/diamond.png" />
      <div class="login-btn">
        <span>登录</span>/
        <span>注册</span>
      </div>
  </div> 
  <h1 id= "title">极简智能简历</h1>
  <!--entrance-->
<!--   <div class = "entrance">
    <img src="../assets/images/login/Go2x.png" >    
  </div> --> 

  <!--login-->
  <!-- <div class="login">
      <form class = "login-form" > 
        <img id="close-btn" src = "../assets/images/login/close-btn.png"  /> 
        <h2>登录</h2>  
        <p class = "input-p"> 
           <img id = "account-img" src= "../assets/images/login/avatar.png"/>
           <input type="text" name="account" >
        </p>
        <p class = "input-p"> 
            <img id = "password-img" src= "../assets/images/login/key.png"/>
            <input type="text" name="password" /> 
        </p>
        <p id = "but-p">
          <button id = "login-btn">
            <img src = "../assets/images/login/tractor.png" />
            <img src = "../assets/images/login/register.png" />
          </button>
        </p>  
    </form>
  </div> -->


  <!--register-->
  <div class="register">
      <form class = "register-form" > 
        <input type="text" name="nickname" placeholder="昵称">
        <input type="password" name="password" placeholder="密码（至少6位）">
        <input type="password" name="e-mail" placeholder="邮箱，可选">
        <p>为了避免遗忘，请您填写真实信息，这将帮助您以后通过回答问题快速找回QQ密码</p>

        <select id = "code-question">
            <option v-for = "question in questions" :key ="question.value" :value = "question.value">{{question.content}}</option>
        </select>
        <input type="text" name="answer" placeholder="问题答案">

        <button id = "register-btn">
            <img src = "../assets/images/login/register.png" />
        </button>        
      </form>
  </div>

</div>
</template>

<script>
  import BgImg from '@/assets/images/login/background.png'
  

  export default {
    data() {
      return {
         bgImg: BgImg,
         questions:[
             {value:"1",content:"您母亲的姓名是？"},
             {value:"2",content:"您父亲的姓名是？"},
             {value:"3",content:"您配偶的姓名是？"},
             {value:"4",content:"您的出生地是？"},
             {value:"5",content:"您高中班主任的名字是？"},
             {value:"6",content:"您初中班主任的名字是？"},
             {value:"7",content:"您小学班主任的名字是？"},
             {value:"8",content:"您的小学校名是？您的学号（或工号）是？"},
             {value:"9",content:"您父亲的生日是？"},
             {value:"10",content:"您母亲的生日是？"},
             {value:"11",content:"您配偶的生日是？"}
         ],
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

   /*******common**********/
   input{
    display:block;
    border-style: none;
    font-size: 28px;
    color:#555;
    line-height:48px;
    width:334px;
    margin-left:10px;
    border-left:1px #979797 solid;
    padding-left:5px;
    border-radius:0 5px 5px 0;
  }

  form{
      max-width: 800px;
      min-width: 350px;
      background-color: white;
      background-color: rgba(255,255,255,0.6);
      border-radius: 5px;
      border:1px solid #979797;
      padding: 8%;
      background-repeat:no-repeat;
      background-position: right top;
      background-size: 30%;
      padding-top:0;
      position: relative;
    }


  /*************************/
  .wrap{
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

  #title{
      font-size: 60px;
      font-weight: lighter;
      max-width: 400px;
      margin:120px auto;
      margin-bottom:70px;
      color:#666;
      font-family: 'Chinese Quote',-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,'PingFang SC','Hiragino Sans GB','Microsoft YaHei','Helvetica Neue',Helvetica,Arial,sans-serif; 
     overflow:hidden;
  }

  /******entrance*******/
  .entrance{
    margin:160px auto;
    width:200px;
  }
  .entrance img{ 
    width:200px;
  }

  /******login*******/
  .login{
    margin:0 auto;
    width:600px;
    top:-10px;
  }
  #close-btn{
    display:block;
    width:15%;
    height:20%;
    position:absolute;
    right:0px;
    top:0px;
    margin-top:0px;
  }

  /*.login form{
      max-width: 800px;
      min-width: 350px;
      background-color: white;
      background-color: rgba(255,255,255,0.6);
      border-radius: 5px;
      border:1px solid #979797;
      padding: 8%;
      background-repeat:no-repeat;
      background-position: right top;
      background-size: 30%;
      padding-top:0;
      position: relative;
    }*/
  form h2{
      font-weight:lighter;
      font-size: 32px;
      color:#666;
      margin-top:8%;
      overflow:hidden;
    }

  .login form .input-p{
    height: 50px;    
    border-radius:5px;
    margin-bottom: 40px;
    margin-left:10%;
    width:400px;    
    border-style: none;
    border:1px solid #979797;
    background-color:white;
  }
  .login form img{
    width:40px;
    float:left;
    height:40px;
    margin-top:5px;
    margin-left:10px;
  }
  .login form input{
    border-style: none;
    font-size: 28px;
    color:#555;
    line-height:48px;
    width:334px;
    margin-left:10px;
    border-left:1px #979797 solid;
    padding-left:5px;
    border-radius:0 5px 5px 0;
  }
  .login form p{
    width:40%;
    margin:0 auto;
  }
  .login form button{
    border-style: none;
    width:70%;
    height:50px;
    margin-left:10%;
    background-size: 60% 40px;
    background-color: rgba(255,255,255,0);
    background-repeat: no-repeat;
    overflow:hidden;
  }
   .login form button img{
    width:50px;
   }





</style>
