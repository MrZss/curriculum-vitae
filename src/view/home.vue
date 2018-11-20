<template>
<div class="wrap" :style = "{backgroundImage: 'url(' + bgImg + ')' }"> 
  <div class="header">
      <img id = "logo" src = "../assets/images/login/diamond.png" />
      <div class="login-btn">
        <span ref = "loginText" @click = "displayLoginForm()">登录</span>/
        <span ref = "registerText" @click = "displayRegisterForm()">注册</span>
      </div>
  </div> 
  <h1 class= "title">极简智能简历</h1>
  <!--entrance-->
  <div class = "entrance" v-if = "entranceDisplay">
    <img src="../assets/images/login/Go2x.png"  @click = "displayLoginForm()">   
  </div> 
  <!--login-->
  <div class="form-wrap login" v-if = "loginDisplay">
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
          <button class = "commit-btn login-btn">
            <img src = "../assets/images/login/tractor.png" />
            <img src = "../assets/images/login/register.png" />
          </button>
        </p>  
        <p id = "forget-psw-note" @click = "displayFindForm()">忘记密码？</p>
    </form>
  </div>


  <!--register-->
  <div class=" form-wrap register-div" v-if = "registerDisplay">
      <form class = "register-form" > 
        <input type="text" name="nickname" placeholder="昵称">
        <input type="password" name="password" placeholder="密码（至少6位）">
        <input type="text" name="e-mail" placeholder="邮箱，可选">
        <p id = "form-text-p code-note-p">为了避免遗忘，请您填写真实信息，这将帮助您以后通过回答问题快速找回QQ密码。</p>

        <select id = "code-question">
            <option v-for = "question in questions" :key ="question.value" :value = "question.value">{{question.content}}</option>
        </select>
        <input type="text" name="answer" placeholder="问题答案">

        <button class = "commit-btn register-btn">
            <img src = "../assets/images/login/register.png" />
        </button>        
      </form>
  </div>

  <!-- 找回密码 -->
  <div class=" form-wrap find-psw-div" v-if = "findPswDisplay">
      <form class = "find-psw-form" > 
        <p class = "form-text-p fine-psw-p">您设置的密保问题为：</p>
        <p class = "form-text-p fine-psw-p">您母亲的姓名是？</p>
        
        <input type="text" name="answer" placeholder="问题答案">

        <button class = "commit-btn find-psw-btn">
            <img src = "../assets/images/login/register.png" />
        </button>        
      </form>
  </div>

  <!-- 设置密码 -->
  <div class=" form-wrap set-psw-div" v-if = "setPswDisplay">
      <form class = "set-psw-form" >        
        <input type="text" name="new-password" placeholder="输入新密码">
        <input type="text" name="new-password" placeholder="再次输入新密码">
        <button class = "commit-btn set-psw-btn">
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
         entranceDisplay:true,
         loginDisplay:false,
         registerDisplay:false,
         findPswDisplay:false,
         setPswDisplay:false,         
      }
    },
    created() {
    },
    methods: {
      displayLoginForm:function(){
         this.entranceDisplay = false;
         this.loginDisplay = true;
         this.registerDisplay = false;
         this.findPswDisplay = false;
         this.setPswDisplay = false;
         console.log(this.$refs);
         this.$refs.loginText.style.color = "#666";
         this.$refs.registerText.style.color = "black";
      },
      displayRegisterForm:function(){
         this.entranceDisplay = false;
         this.loginDisplay = false;
         this.registerDisplay = true;
         this.findPswDisplay = false;
         this.setPswDisplay = false;
         this.$refs.loginText.style.color = "black";
         this.$refs.registerText.style.color = "#666";
      },
      displayFindForm:function(){
         this.entranceDisplay = false;
         this.loginDisplay = false;
         this.registerDisplay = false;
         this.findPswDisplay = true;
         this.setPswDisplay = false;
         this.$refs.loginText.style.color = "black";
         this.$refs.registerText.style.color = "black";
      }

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

  .form-wrap{
    margin:0 auto;
    width:600px;
    top:-10px;
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

  input{
    display:block;
    border-style: none;
    font-size: 20px;
    color:#555;
    line-height:48px;
    width:334px;
    margin-left:10px;
    border:1px #979797 solid;
    padding-left:5px;
    border-radius:5px 5px;
    margin-bottom:20px;
    text-indent:1rem;
    width:95%;
  }

  .commit-btn{
    border-style: none;
    width:70%;
    height:50px;
    margin-left:10%;
    background-size: 60% 40px;
    background-color: rgba(255,255,255,0);
    background-repeat: no-repeat;
    overflow:hidden;
    margin-top:30px;
  }

  .commit-btn img{
    width:50px;
  }

 .form-text-p{
   color: #333;
    font-size: 1.2rem;
    padding-left: 10px;
    line-height: 2rem;
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
    cursor: pointer;
  }

  .title{
      font-size: 50px;
      font-weight: lighter;
      max-width: 400px;
      margin:100px auto;
      color:#666;
      font-family: 'Chinese Quote',-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,'PingFang SC','Hiragino Sans GB','Microsoft YaHei','Helvetica Neue',Helvetica,Arial,sans-serif; 
     padding-left:100px;
  }

  /******entrance*******/
  .entrance{
    margin:160px auto;
    width:200px;
  }
  .entrance img{ 
    width:200px;
    cursor:pointer;
  }

  /******login*******/

  #close-btn{
    display:block;
    width:15%;
    height:20%;
    position:absolute;
    right:0px;
    top:0px;
    margin-top:0px;
  }

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

  .login form .input-p img{
    margin-right:10px;
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
  .login form button img{
    width:50px;
   }

   .login form #forget-psw-note{
      margin-right: 0px;
      width: 20%;
      font-size: 1.2rem;
      cursor: pointer;
   }

/*******register*********/
 .register-form{
   position:relative;
   top:-60px;
 }
  .register-form #register-title{
    font-size: 50px;
    margin: 50px auto;
    padding-left: 20%;
  }
  .register-form input{
    border:1px solid #979797;
    border-radius:5px;
    width:93%;
    margin-top:30px;
    text-indent: 1rem;

    font-size: 20px;
    color: #555;
    line-height: 48px;
  }

  .register-form #code-question{
    border-style:none;
    border: 1px solid #979797;
    border-radius: 5px;
    width: 93%;    
    text-indent: 1rem;
    font-size: 20px;
    color: #555;
    line-height: 48px;
    margin:0 auto;
    margin-left:10px;
    height:50px;
    text-indent:1rem;
  }

  .register-form .register-btn{
    margin-top:30px;
  }

  .register-form .register-btn img{
    width:80px;
  }

/*****find-psw-form*******/

.find-psw-form{
  padding-top:30px;
}
.find-psw-form p{
  line-height:1.3rem;
}

.find-psw-form p:nth-child(2){
  text-indent:2.5rem;
  margin-bottom:30px;
}

/*****set-psw-form*****/
.set-psw-form{
  padding-top:50px;
}
</style>
