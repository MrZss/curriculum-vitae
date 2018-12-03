<template>
<div class="wrap" :style="{backgroundImage: 'url(' + bgImg + ')' }">
  <div class="header">
    <img id="logo" src="../assets/images/login/diamond.png" />
    <div class="login-btn">
      <span ref="loginText" @click="displayLoginForm()">登录</span>/
      <span ref="registerText" @click="displayRegisterForm()">注册</span>
    </div>
  </div>
 <span class="title" v-if="entranceDisplay">智能简历</span>
  <!--entrance-->
  <div class="entrance" v-if="entranceDisplay">
    <img src="../assets/images/login/Go2x.png" @click="displayLoginForm()">
  </div>
  <!--login-->
  <div class="form-wrap login" v-if="loginDisplay">
    <form class="login-form">
      <img id="close-btn" src="../assets/images/login/close-btn.png" @click="loginDisplay = false;entranceDisplay=true" />
      <h2 class="form-title">登录</h2>
      <div class="note-div" v-if="loginNoteFlag">
        <img class="note-img" src="../assets/images/login/note.png">
        <span class="note-span" id="login1">{{loginNote}}</span>
      </div>
      <p class="input-p">
        <img id="account-img" src="../assets/images/login/avatar.png" />
        <input type="text" name="username" v-model="username" @focus="loginNoteHidden($event)" />
      </p>
      <p class="input-p">
        <img id="password-img" src="../assets/images/login/key.png" />
        <input type="password" name="password" v-model="password" @focus="loginNoteHidden1($event)" />
      </p>

      <p id="but-p">
        <button class="commit-btn login-btn" type="button" @click=" login()">
            <!-- <img src = "../assets/images/login/tractor.png" /> -->
            <img src = "../assets/images/login/register.png" />
          </button>
      </p>
      <p id="forget-psw-note" @click="displayFindForm()">忘记密码？</p>
    </form>
  </div>

  <!--register-->
  <div class=" form-wrap register-div" v-if="registerDisplay">
    <form class="register-form">
      <h2 class="form-title">注册</h2>
      <div class="note-div" v-if="registerNoteFlag">
        <img class="note-img" src="../assets/images/login/note.png">
        <span class="note-span">{{registerNote}}</span>
      </div>
      <input type="text" name="usernamereg" placeholder="账号" v-model="usernamereg" @focus="registerNoteHidden()">
      <input type="password" name="password" placeholder="密码（至少6位）" v-model="passwordreg">
      <p class="form-text-p ">为了避免遗忘，请您填写真实信息，这将帮助您以后通过回答问题快速找回密码。</p>
      <select id="code-question" v-model="questionreg">
            <option v-for = "question in questions" :key ="question.value" :value = "question.value">{{question.content}}</option>
        </select>
      <input type="text" name="answer" placeholder="问题答案" v-model="answerreg">

      <button class="commit-btn register-btn" type="button" @click="register()">
            <img src = "../assets/images/login/register.png" />
        </button>
    </form>
  </div>

  <!-- 找回密码 -->
  <div class=" form-wrap find-psw-div" v-if="findPswDisplay">
    <form class="find-psw-form">
      <h2 class="form-title">找回密码</h2>
      <div class="note-div" v-if="findPswNoteFlag">
        <img class="note-img" src="../assets/images/login/note.png">
        <span class="note-span">消息提示</span>
      </div>
      <input type="text" name="nickname" placeholder="账号">
      <p class="form-text-p find-psw-p">您设置的密保问题为：</p>
      <p class="form-text-p find-psw-p">您母亲的姓名是？</p>
      <input type="text" name="answer" placeholder="问题答案">
      <button class="commit-btn find-psw-btn" type="button" @click="findPassword()">
            <img src = "../assets/images/login/register.png" />
        </button>
    </form>
  </div>

  <!-- 设置密码 -->
  <div class=" form-wrap set-psw-div" v-if="setPswDisplay">
    <form class="set-psw-form">
      <h2 class="form-title">设置密码</h2>
      <div class="note-div" v-if="setPswNoteFlag">
        <img class="note-img" src="../assets/images/login/note.png">
        <span class="note-span">消息提示</span>
      </div>
      <input type="text" name="new-password" placeholder="输入新密码">
      <input type="text" name="new-password" placeholder="再次输入新密码">
      <button class="commit-btn set-psw-btn" type="button">
            <img src = "../assets/images/login/register.png" />
        </button>
    </form>
  </div>

</div>
</template>

<script>
import BgImg from '@/assets/images/login/background.png'
import $ from "jquery";
import API from "../fetch/api.js";

export default {
  data() {
    return {
      bgImg: BgImg,
      questions: [{
          value: "1",
          content: "您母亲的姓名是？"
        },
        {
          value: "2",
          content: "您父亲的姓名是？"
        },
        {
          value: "3",
          content: "您配偶的姓名是？"
        },
        {
          value: "4",
          content: "您的出生地是？"
        },
        {
          value: "5",
          content: "您高中班主任的名字是？"
        },
        {
          value: "6",
          content: "您初中班主任的名字是？"
        },
        {
          value: "7",
          content: "您小学班主任的名字是？"
        },
        {
          value: "8",
          content: "您的小学校名是？您的学号（或工号）是？"
        },
        {
          value: "9",
          content: "您父亲的生日是？"
        },
        {
          value: "10",
          content: "您母亲的生日是？"
        },
        {
          value: "11",
          content: "您配偶的生日是？"
        }
      ],

      //显示面板
      entranceDisplay: true,
      loginDisplay: false,
      registerDisplay: false,
      findPswDisplay: false,
      setPswDisplay: false,

      //是否显示提示信息
      setPswNoteFlag: false,
      findPswNoteFlag: false,
      registerNoteFlag: false,
      loginNoteFlag: false,

      //提示信息
      loginNote: '',
      registerNote: '',

      //login
      username: '',
      password: '',

      //register
      usernamereg: '',
      passwordreg: '',
      questionreg: '',
      answerreg: '',

      //findpassword
      usernamefind: '',
    }
  },
  created() {},
  methods: {
    displayLoginForm: function() {
      this.entranceDisplay = false;
      this.loginDisplay = true;
      this.registerDisplay = false;
      this.findPswDisplay = false;
      this.setPswDisplay = false;
      this.$refs.loginText.style.color = "#666";
      this.$refs.registerText.style.color = "black";
    },
    displayRegisterForm: function() {
      this.entranceDisplay = false;
      this.loginDisplay = false;
      this.registerDisplay = true;
      this.findPswDisplay = false;
      this.setPswDisplay = false;
      this.$refs.loginText.style.color = "black";
      this.$refs.registerText.style.color = "#666";
    },
    displayFindForm: function() {
      this.entranceDisplay = false;
      this.loginDisplay = false;
      this.registerDisplay = false;
      this.findPswDisplay = true;
      this.setPswDisplay = false;
      this.$refs.loginText.style.color = "black";
      this.$refs.registerText.style.color = "black";
    },

    /*****login**********/
    login: function() {
      var name = this.username;
      var psw = this.password;
      if (name == '' || psw == '') {
        this.loginNoteFlag = true;
        this.loginNote = '请填写完整的账号和密码';
      } else {
        var self = this;
        API.loglet({
          username: name,
          password: psw,
        }).then(res => {
          if (res.success == true) {
            self.$router.push('editDetail');
          } else {
            this.loginNote = '用户名或密码不正确';
            this.loginNoteFlag = true;
          }
        })
      }
    },

    loginNoteHidden: function(event) {
      this.loginNoteFlag = false;
      this.username = '';
      this.password = '';
    },

    loginNoteHidden1: function(event) {
      this.loginNoteFlag = false;
      this.password = '';
    },

    /*******register*************/
    register: function() {
      var name = this.usernamereg;
      var psw = this.passwordreg;
      var que = this.questionreg;
      var answer = this.answerreg;
      if (name == '' || psw == '' || que == '' || answer == '') {
        this.registerNoteFlag = true;
        this.registerNote = '请将信息被充完整后再注册';
      } else {
        API.reglet({
          username: name,
          password: psw,
          question: que,
          answer: answer
        }).then(res => {
          if (res.success == true) {
            this.$router.push('editDetail');
          } else {
            this.registerNote = res.msg;
            this.registerNoteFlag = true;
          }
        })
      }
    },

    registerNoteHidden: function(event) {
      this.registerNoteFlag = false;
      this.usernamereg = '';
      this.passwordreg = '';
      this.questionreg = '';
      this.answerreg = '';
    },

    /********findPassword***********/
    findPassword: function() {
      if (name == '') {
        // this.registerNoteFlag = true;
        // this.registerNote = '请将信息被充完整后再注册';
      } else {
        API.findQuestion({
          username: name,
        }).then(res => {
          if (res.success == true) {
            alert(res);
            // this.$router.push('editDetail');
          } else {
            alert("wrong");
            // this.registerNote =res.msg;
            // this.registerNoteFlag = true;
          }
        })
      }
    },

    /************************************/
  }
}
</script>

<style lang="scss" scoped>
div {
    margin: 0;
    padding: 0;
}
a {
    text-decoration: none;
}

/*******common**********/

.form-wrap {
    width: 600px;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%,-50%);
}

form {
    max-width: 800px;
    min-width: 350px;
    background-color: white;
    background-color: rgba(255,255,255,0.6);
    border-radius: 5px;
    border: 1px solid #979797;
    padding: 8%;
    background-repeat: no-repeat;
    background-position: right top;
    background-size: 30%;
    padding-top: 0;
    position: relative;
    margin-top: 160px;
    padding-bottom: 30px;
}

input {
    display: block;
    border-style: none;
    font-size: 20px;
    color: #555;
    line-height: 48px;
    width: 334px;
    margin-left: 10px;
    border: 1px #979797 solid;
    padding-left: 5px;
    border-radius: 5px 5px;
    margin-bottom: 20px;
    text-indent: 1rem;
    width: 95%;
}

.commit-btn {
    border-style: none;
    width: 70%;
    height: 50px;
    margin-left: 15%;
    background-size: 60% 40px;
    background-color: rgba(255,255,255,0);
    background-repeat: no-repeat;
    overflow: hidden;

}

.commit-btn img {
    width: 50px;
}

.form-text-p {
    color: #333;
    font-size: 1.2rem;
    padding-left: 10px;
    line-height: 2rem;
}
.note-div {
    text-align: right;
    margin-right: 50px;
    margin-bottom: 18px;
}
form .note-img {
    width: 20px;
    height: 20px;
    margin-right: 5px;
}
.note-span {
    font-size: 20px;
    color: red;
}
/*************************/
.wrap {
    background-size: cover;
    position: absolute;
    /* background-attachment: fixed; */
    width: 100%;
    height: 100%;
    overflow: auto;
    min-height: 720px;
    position: absolute;
    top: 0;
    left: 0;
    /* right: 0; */
    /* bottom: 0; */
}

.header {
    width: 100%;
    height: 55px;
    background-color: rgba(171,186,195,0.6);
    border-bottom: 1px solid #979797;
    overflow: hidden;
}
#logo {
    width: 40px;
    height: 40px;
    margin-top: 7px;
    margin-left: 3%;
    float: left;
}
.header .login-btn {
    float: right;
    margin-right: 4%;
    font-size: 1.2rem;
    border: 1px solid #979797;
    border-radius: 20px;
    margin-top: 10px;
    line-height: 16px;
    padding: 8px 19px;
    letter-spacing: 0.2rem;
    cursor: pointer;
}

.title {
  font-size: 78px;
  position: absolute;
  left: 50%;
  top: 18%;
  -webkit-transform: translate(-50%, 0);
  transform: translate(-50%, 0);
  font-weight: 300;
  /* max-width: 400px; */
  /* line-height: 100px; */
  /* margin-left: 10px; */
  color: #555;
  /* float: left; */
  font-family: 'PingFang SC';
}

/******entrance*******/
.entrance {
    margin: 230px auto;
    width: 200px;
}
.entrance img {
    width: 200px;
    cursor: pointer;
}

/******login*******/

#close-btn {
    display: block;
    width: 20%;
    height: 27%;
    position: absolute;
    right: -2px;
    top: -1px;
    margin-top: 0;
}

form h2 {
    font-weight: lighter;
    font-size: 32px;
    color: #666;
    margin-top: 8%;
    overflow: hidden;
    margin-bottom: 30px;
}

.login form .input-p {
    height: 50px;
    border-radius: 5px;
    margin-bottom: 40px;
    margin-left: 10%;
    width: 400px;
    border-style: none;
    border: 1px solid #979797;
    background-color: white;
}

.login form .input-p img {
    margin-right: 10px;
}
.login form img {
    width: 35px;
    float: left;
    height: 35px;
    margin-top: 6px;
    margin-left: 10px;
}
.login form input {
    border-style: none;
    font-size: 28px;
    color: #555;
    line-height: 48px;
    width: 338px;
    margin-left: 10px;
    border-left: 1px #979797 solid;
    padding-left: 5px;
    border-radius: 0 5px 5px 0;
}
.login form p {
    width: 40%;
    margin: 0 auto;
}
.login form button img {
    width: 50px;
}

.login form #forget-psw-note {
    margin-right: 0;
    width: 20%;
    font-size: 1.2rem;
    cursor: pointer;
}

.login form .note-img {
    width: 20px;
    height: 20px;
    margin-right: 5px;
    float: none;
}

/*******register*********/
.register-form {
    position: relative;
    top: -60px;
}
.register-form #register-title {
    font-size: 50px;
    margin: 50px auto;
    padding-left: 20%;
}
.register-form input {
    border: 1px solid #979797;
    border-radius: 5px;
    width: 93%;
    margin-top: 30px;
    text-indent: 1rem;
    font-size: 20px;
    color: #555;
    line-height: 48px;
}

.register-form #code-question {
    border-style: none;
    border: 1px solid #979797;
    border-radius: 5px;
    width: 93%;
    text-indent: 1rem;
    font-size: 20px;
    color: #555;
    line-height: 48px;
    margin: 0 auto 0 10px;
    height: 50px;
    text-indent: 1rem;
}

.register-form .register-btn {
    margin-top: 30px;
}

.register-form .register-btn img {
    width: 80px;
}

.register-form .form-text-p {
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 15px;
}
/*****find-psw-form*******/

.find-psw-form p {
    line-height: 1.8rem;
    margin-bottom: 10px;
    color: black;
}

/*****set-psw-form*****/
.set-psw-form {
    padding-top: 50px;
}
.register-div {
    top: 50%;
}
</style>
