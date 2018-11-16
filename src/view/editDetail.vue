<template>
<div class="Edit">
  <div class="bar">
    <img class="logo" src="../assets/img/logo.png">
    <span class="save-time">{{saveTime}}</span>
    <h4 v-show="titleState" @click="titleInputOpen">{{title}}</h4>
    <el-input class="title-input" maxlength="15" @blur="titleInputClose" size="mini" :autofocus="true" v-show="!titleState" :autocomplete="false" v-model="title" placeholder="请输入简历标题"></el-input>
  </div>
  <div class="nav">
    <div class="top-block">
      <span class="save">保存</span>
      <span class="derive">导出</span>
    </div>
    <div class="bottom-block">
      <div class="row" @click="moduleState = true"><img class="block-icon" src="../assets/img/table.png"><span>模块管理</span></div>
      <div class="row" @click="changeState = true"><img class="block-icon" src="../assets/img/nested.png"><span>更换模板</span></div>
      <div class="row" @click="styleState = true"><img class="block-icon" src="../assets/img/size.png"><span>风格设置</span></div>
    </div>
  </div>
  <div class="resume"></div>
  <div class="module" v-show="moduleState">
    <div class="module-back" @click="moduleState = false"><img src="../assets/img/back-block.png"><span>缩起</span></div>
    <div class="module-row" style="margin-top:15px;">
      <span>基本信息</span>
      <el-switch v-model="value2" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
    </div>
    <div class="module-row">
      <span>求职意向</span>
      <el-switch v-model="value2" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
    </div>
    <div class="module-row">
      <span>工作经验</span>
      <el-switch v-model="value2" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
    </div>
    <div class="module-row">
      <span>志愿者经历</span>
      <el-switch v-model="value2" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
    </div>
    <div class="module-row">
      <span>项目经验</span>
      <el-switch v-model="value2" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
    </div>
    <div class="module-row">
      <span>自我评价</span>
      <el-switch v-model="value2" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
    </div>
    <div class="module-row">
      <span>奖项荣誉</span>
      <el-switch v-model="value2" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
    </div>
    <div class="module-row">
      <span>封面</span>
      <el-switch v-model="value2" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
    </div>
  </div>
  <div class="change" v-show="changeState">
    <div class="change-back" @click="changeState = false"><img src="../assets/img/back-block.png"><span>缩起</span></div>
  </div>
  <div class="style-select" v-show="styleState">
    <div class="style-select-back" @click="styleState = false"><img src="../assets/img/back-block.png"><span>缩起</span></div>
    <span class="color">颜色：</span>
    <el-color-picker v-model="colorSelect" :predefine="predefineColors">
    </el-color-picker>
    <span class="color">字体大小：{{fontSize}}</span>
    <el-select v-model="fontSize" placeholder="请选择">
      <el-option v-for="item in fontSizeArr" :key="item.value" :value="item.value">
      </el-option>
    </el-select>
  </div>
  <div class="grade">
    <span class="grade-evaluating">简历评测</span>
  </div>
  <div class="tip">
  </div>
</div>
</template>

<script>
import $ from "jquery";

export default {
  data() {
    return {
      saveTime: "2018-11-12 13:00:00 已保存",
      title: "查辰昊的简历",
      titleState: true,
      moduleState: false,
      changeState: false,
      styleState: true,
      fontSize: "12",
      fontSizeArr: [{
        value: '12',
      }, {
        value: '13',
      }, {
        value: '14',
      }, {
        value: '15',
      }, {
        value: '16',
      }],
      predefineColors: [
        '#254665',
        '#ff4500',
        '#ff8c00',
        '#ffd700',
        '#90ee90',
        '#00ced1',
        '#1e90ff',
        '#c71585',
        'rgba(255, 69, 0, 0.68)',
        'rgb(255, 120, 0)',
        'hsv(51, 100, 98)',
        'hsva(120, 40, 94, 0.5)',
        'hsl(181, 100%, 37%)',
        'hsla(209, 100%, 56%, 0.73)',
        '#c7158577'
      ],
      colorSelect: '#254665'

    }
  },
  created() {},
  methods: {
    titleInputOpen() {
      var self = this
      self.titleState = false
    },
    titleInputClose() {
      var self = this
      self.titleState = true
    }
  }
}
</script>

<style lang="scss" scoped>
.Edit {
    // position: absolute;
    // top: 0;
    // left: 0;
    // right: 0;
    // bottom: 0;
    // min-width: 1280px;
    background: #00c091;
    position: relative;
    min-height: 800px;
    .bar {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        min-width: 1280px;
        height: 38px;
        background: rgb(186,193,199);
        z-index: 21;
        border-bottom: 1px solid #2bd8ae;
        .logo {
            position: absolute;
            top: 3px;
            left: 20px;
            height: 30px;
            width: 30px;
        }
        .save-time {
            position: absolute;
            left: 80px;
            top: 10px;
            font-size: 12px;
            color: white;
        }
        h4 {
            position: absolute;
            margin: auto;
            left: 46%;
            color: white;
            top: 7px;
        }
        .title-input {
            position: absolute;
            width: 200px;
            top: 5px;
            left: 45%;
            text-align: left;
        }
    }
    .nav {
        position: fixed;
        top: 0;
        left: 0;
        width: 200px;
        bottom: 0;
        z-index: 20;
        margin-top: 39px;
        background: #00c091;
        border-right: 1px solid #2bd8ae;
        .top-block {
            position: relative;
            top: 0;
            left: 0;
            right: 0;
            height: 200px;
            border-bottom: 1px solid #2bd8ae;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            span {
                display: block;
                height: 36px;
                width: 100px;
                background: white;
                border-radius: 18px;
                text-align: center;
                line-height: 36px;
                color: #00c091;
            }
            .derive {
                margin-top: 30px;
            }
        }
        .bottom-block {
            position: relative;
            width: 200px;
            display: flex;
            flex-direction: column;
            align-items: center;
            .row {
                margin-top: 30px;
                height: 20px;
                display: flex;
                flex-direction: row;
                align-items: center;
                cursor: pointer;
                .block-icon {
                    height: 14px;
                    width: 14px;
                }
                span {
                    display: inline-block;
                    margin-left: 10px;
                    line-height: 14px;
                    color: white;
                }
            }
        }
    }
    .resume {
        width: 820px;
        height: 1160px;
        min-height: 1160px;
        background: white;
        position: absolute;
        top: 0;
        left: 0;
        margin-top: 72px;
        margin-left: 256px;
        box-shadow: 0 0 8px 0 rgba(0,0,0,0.2);
    }
    .grade {
        width: 200px;
        height: 100px;
        position: absolute;
        top: 72px;
        left: 1088px;
        background: white;
        box-shadow: 0 0 8px 0 rgba(0,0,0,0.2);
        display: flex;
        justify-content: center;
        align-items: center;
        .grade-evaluating {
            display: block;
            height: 36px;
            width: 100px;
            background: white;
            border-radius: 18px;
            text-align: center;
            line-height: 36px;
            background: #00c091;
            color: white;
        }
    }
    .tip {
        width: 200px;
        height: auto;
        position: absolute;
        top: 180px;
        left: 1088px;
        background: white;
    }
    .style-select {
        position: fixed;
        top: 85px;
        left: 0;
        height: 560px;
        width: 238px;
        background: white;
        z-index: 30;
        display: flex;
        flex-direction: column;
        align-items: center;
        .style-select-back {
            width: 238px;
            height: 60px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-bottom: 0.5px solid #515151;
            cursor: pointer;
            img {
                height: 22px;
                width: 22px;
            }
            span {
                margin-left: 5px;
                font-size: 25px;
                color: #8a8a8a;
            }
        }
        .color {
            display: block;
            width: 200px;
            margin-top: 10px;
            margin-bottom: 10px;
        }
    }
    .change {
        position: fixed;
        top: 85px;
        left: 0;
        height: 560px;
        width: 438px;
        background: white;
        z-index: 30;
        display: flex;
        flex-direction: column;
        align-items: center;
        .change-back {
            width: 438px;
            height: 60px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-bottom: 0.5px solid #515151;
            cursor: pointer;
            img {
                height: 22px;
                width: 22px;
            }
            span {
                margin-left: 5px;
                font-size: 25px;
                color: #8a8a8a;
            }
        }
    }
    .module {
        position: fixed;
        top: 85px;
        left: 0;
        height: 560px;
        width: 238px;
        background: white;
        z-index: 30;
        display: flex;
        flex-direction: column;
        align-items: center;
        .module-back {
            width: 238px;
            height: 60px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-bottom: 0.5px solid #515151;
            cursor: pointer;
            img {
                height: 22px;
                width: 22px;
            }
            span {
                margin-left: 5px;
                font-size: 25px;
                color: #8a8a8a;
            }
        }
        .module-row {
            width: 150px;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            span {
                color: #515151;
            }
        }
    }
}
</style>
