<template>
<div class="Edit">
  <div class="bar">
    <img class="logo" src="../assets/img/logo.png">
    <span class="save-time">{{saveTime}}</span>
    <h4 v-show="titleState" @click="titleInputOpen">{{title}}</h4>
    <el-input class="title-input" maxlength="15" @blur="titleInputClose" size="mini" :autofocus="true" v-show="!titleState" v-model="title" placeholder="请输入简历标题"></el-input>
  </div>
  <div class="nav">
    <div class="top-block">
      <span class="save">保存</span>
      <span class="derive" @click="downloadPage">导出</span>
    </div>
    <div class="bottom-block">
      <div class="row" @click="moduleState = true"><img class="block-icon" src="../assets/img/table.png"><span>模块管理</span></div>
      <div class="row" @click="changeState = true"><img class="block-icon" src="../assets/img/nested.png"><span>更换模板</span></div>
      <div class="row" @click="styleState = true"><img class="block-icon" src="../assets/img/size.png"><span>风格设置</span></div>
    </div>
  </div>
  <div class="resume">
    <module1 :blockState="blockState"></module1>
  </div>
  <div class="module" v-show="moduleState">
    <div class="module-back" @click="moduleState = false"><img src="../assets/img/back-block.png"><span>缩起</span></div>
    <!-- <div class="module-row" style="margin-top:15px;">
      <span>基本信息</span>
      <el-switch v-model="value2" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
    </div> -->
    <div class="module-row" style="margin-top:15px;">
      <span>求职意向</span>
      <el-switch v-model="blockState.jobIntention" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
    </div>
    <div class="module-row">
      <span>教育背景</span>
      <el-switch v-model="blockState.workExperience" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
    </div>
    <div class="module-row">
      <span>工作经验</span>
      <el-switch v-model="blockState.workExperience" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
    </div>
    <div class="module-row">
      <span>志愿者经历</span>
      <el-switch v-model="blockState.volunteerExperience" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
    </div>
    <div class="module-row">
      <span>项目经验</span>
      <el-switch v-model="blockState.projectExperience" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
    </div>
    <div class="module-row">
      <span>自我评价</span>
      <el-switch v-model="blockState.selfAssessment" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
    </div>
    <div class="module-row">
      <span>奖项荣誉</span>
      <el-switch v-model="blockState.awardHonor" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
    </div>
    <!-- <div class="module-row">
      <span>封面</span>
      <el-switch v-model="value2" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
    </div> -->
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
    <span class="">简历小贴士</span>
    <el-collapse v-model="activeName" accordion>
      <el-collapse-item title="● 简历上需要放照片吗？" name="1">
        <p>此为非必选项，但如果放上去的话请务必让它成为加分项，毕竟这个看脸的世界越来越没有道理可言了，如果翻遍电脑和手机都没有找到一张可以称得上有气质的照片，那还是别放了。</p>
      </el-collapse-item>
      <el-collapse-item title="● 照片有什么标准规范？" name="2">
        <p>建议使用1-6个月的近期免冠照片，男性请至少干净整洁，不要显得油腻，女生可化淡妆，正常的生活/工作照也可，表情动作大方自然，背景清新简洁的正脸半身照为佳</p>
      </el-collapse-item>
      <el-collapse-item title="● 简历必填的基本信息" name="3">
        <p>姓名/所在城市/电话号码/联系邮箱</p>
      </el-collapse-item>
      <el-collapse-item title="● 求职意向要注意哪些规范？" name="4">
        <p>如四大、国有银行等在招聘信息中不分具体职能部门的话，可以不写求职意向。如需要填写求职意向，则建议一份简历只针对一个意向岗位。</p>
      </el-collapse-item>
    </el-collapse>
  </div>
</div>
</template>

<script>
import $ from "jquery";
import API from "../fetch/api.js";
import module1 from "./module/module1";
import html2canvas from 'html2canvas';
import Canvas2Image from 'canvas2image';
import JsPDF from 'jspdf';

export default {
  data() {
    return {
      saveTime: "2018-11-12 13:00:00 已保存",
      blockState: {
        jobIntention: true,
        workExperience: true,
        volunteerExperience: true,
        projectExperience: true,
        selfAssessment: true,
        awardHonor: true,
      },
      title: "查辰昊的简历",
      titleState: true,
      moduleState: false,
      changeState: false,
      styleState: false,
      activeName: 1,
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
  components: {
    module1
  },
  created() {
    API.getdata({
      moduleid: "3"
    }).then(res => {
      console.log(res)
    })
  },
  methods: {
    downloadPage() {
      var self = this
      var cntElem = $('#wrap')[0];

      var shareContent = cntElem; //需要截图的包裹的（原生的）DOM 对象
      var width = shareContent.offsetWidth; //获取dom 宽度
      var height = shareContent.offsetHeight; //获取dom 高度

      var canvas = document.createElement("canvas"); //创建一个canvas节点
      var scale = 2; //定义任意放大倍数 支持小数
      canvas.width = width * scale; //定义canvas 宽度 * 缩放
      canvas.height = height * scale; //定义canvas高度 *缩放
      //放大后再缩小提高清晰度
      canvas.getContext("2d").scale(scale, scale);

      console.log(width)
      console.log(height)
      // 设置html2canvas方法的配置
      var opts = {
        scale: scale, // 添加的scale 参数
        canvas: canvas, //自定义 canvas
        // allowTaint: true, //允许画布上有跨域图片 不建议使用 后面详细补充
        // logging: true, //日志开关，便于查看html2canvas的内部执行流程
        width: width, //dom 原始宽度
        height: height,
        useCORS: true // 【重要】开启跨域配置
      };
      // 开始转化为canvs对象
      html2canvas(shareContent, opts).then(function(canvas) {
        var context = canvas.getContext('2d');
        // 【重要】关闭抗锯齿
        context.mozImageSmoothingEnabled = false;
        context.webkitImageSmoothingEnabled = false;
        context.msImageSmoothingEnabled = false;
        context.imageSmoothingEnabled = false;
        var contentWidth = canvas.width;
        var contentHeight = canvas.height;
        //一页pdf显示html页面生成的canvas高度;
        var pageHeight = contentWidth / 592.28 * 841.89;
        //未生成pdf的html页面高度
        var leftHeight = contentHeight;
        var imgWidth = 595.28;
        var imgHeight = 592.28 / contentWidth * contentHeight;
        //pdf页面偏移
        var position = 0;
        //var img = Canvas2Image.convertToJPEG(canvas, canvas.width, canvas.height);
        var pageData = canvas.toDataURL('image/jpeg', 1.0);
        var pdf = new JsPDF('', 'pt', 'a4');
        if (leftHeight < pageHeight) {
          pdf.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight);
        } else {
          while (leftHeight > 0) {
            pdf.addImage(pageData, 'JPEG', 0, position, imgWidth, imgHeight)
            leftHeight -= pageHeight;
            position -= 841.89;
            //避免添加空白页
            if (leftHeight > 0) {
              pdf.addPage();
            }
          }
        }
        pdf.save('content.pdf');
        // 【重要】默认转化的格式为png,也可设置为其他格式
        // var img = Canvas2Image.convertToJPEG(canvas, canvas.width, canvas.height);
        // //转化后放哪 最好放在与 .wrap 父级下
        // // var detail = document.getElementById("wrap");
        // // detail.appendChild(img);
        // // 最后设置img标签为正常高度宽度 提高清晰度
        // $(img).css({
        //   "width": canvas.width / 2 + "px",
        //   "height": canvas.height / 2 + "px",
        // }).addClass('f-full');
        // var pdf = new jsPDF('', 'pt', 'a4');

      });
    },
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
<style>
.el-collapse-item__header {
  color: #5c6876;
  border: none;
}
</style>
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
        position: relative;
        top: 0;
        left: 0;
        top: 72px;
        margin-left: 256px;
        box-shadow: 0 0 8px 0 rgba(0,0,0,0.2);
    }
    .grade {
        width: 250px;
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
        width: 250px;
        height: auto;
        position: absolute;
        top: 180px;
        left: 1088px;
        background: white;
        padding: 15px;
        span {
            border-bottom: 1px dashed #e4e3e3;
            font-size: 16px;
            font-weight: bold;
            color: #3e3e3e;
        }
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
