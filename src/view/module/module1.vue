<template>
<div class="wrap" id="wrap">
  <div class="left" :style="{'background': color}">
    <el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
      <img v-if="imageUrl" :src="imageUrl" class="avatar">
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
    <div class="base-option">
      <i class="el-icon-edit-outline edit-icon"></i>
    </div>
    <div class="interest">
      <i class="el-icon-star-on title-icon"></i>
      <span class="title">兴趣爱好</span>
      <div class="interest-content">
        <el-tag :key="tag" v-for="tag in dynamicTags" closable :disable-transitions="false" @close="handleClose(tag)">
          {{tag}}
        </el-tag>
        <el-input class="input-new-tag" v-if="inputVisible" v-model="inputValue" ref="saveTagInput" size="small" @keyup.enter.native="handleInputConfirm" @blur="handleInputConfirm">
        </el-input>
        <el-button v-else class="button-new-tag" size="small" @click="showInput">+ 添加标签</el-button>
      </div>
    </div>
  </div>
  <div class="right" id="resume-details">
    <div class="user-base">
      <span class="name">{{name}}</span>
      <span class="introduce" :style="{'fontSize': fontSize}">{{introduce}}</span>
    </div>
    <div class="intention" :style="{'fontSize': fontSize}">
      <span class="row"><img :style="{'height': fontSize}" src="../../assets/img/icons_card.png"><span>意向岗位：{{post}}</span></span>
      <span class="row"><img :style="{'height': fontSize}" src="../../assets/img/icons_pin.png"><span>{{place}}</span></span>
      <span class="row"><img :style="{'height': fontSize}" src="../../assets/img/icons_time.png"><span>{{arrivalTime}}</span></span>
      <span class="row"><img :style="{'height': fontSize}" src="../../assets/img/icons_dashboard.png"><span>薪资要求：{{money}}</span></span>
    </div>
    <div class="repeat-block">
      <img>
      <div class="top">
        <img :style="{'background': color}" src="../../assets/img/education.png">
        <span :style="{'color': color,'border-color': color}">教育背景</span>
      </div>
      <div class="list">
        <div class="time-school">
          <el-date-picker v-model="value6" prefix-icon="icon-none" class="data" :style="{'fontSize': fontSize}" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
          </el-date-picker>
          <input class="school" :style="{'font-size': fontSize}" v-model="school" placeholder="请填写学校名称"></input>
        </div>
        <input class="major" :style="{'font-size': fontSize}" v-model="major" placeholder="请填写专业名称"></input>
        <el-input style="border: none" class="detail" type="textarea" autosize placeholder="尽量简洁，突出重点，成绩优异的话建议写上GPA及排名等信息，如：GPA：3.72/4（专业前10%）                      GRE：324" v-model="textarea2">
        </el-input>
      </div>
    </div>
    <div class="repeat-block">
      <img>
      <div class="top">
        <img :style="{'background': color}" src="../../assets/img/work.png">
        <span :style="{'color': color,'border-color': color}">工作经验</span>
      </div>
      <div class="list">
        <div class="time-school">
          <el-date-picker v-model="value6" prefix-icon="icon-none" class="data" :style="{'fontSize': fontSize}" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
          </el-date-picker>
          <input class="school" :style="{'font-size': fontSize}" v-model="school" placeholder="请填写公司名称"></input>
        </div>
        <input class="major" :style="{'font-size': fontSize}" v-model="major" placeholder="请填写职位名称"></input>
        <el-input style="border: none" class="detail" type="textarea" autosize placeholder="详细描述你的职责范围、工作任务及取得的成绩，工作经验的时间采取倒叙形式，最近经历写在前面，描述尽量具体简洁，工作经验的描述与目标岗位的招聘要求尽量匹配，用词精准。" v-model="textarea2">
        </el-input>
      </div>
    </div>
    <div class="repeat-block">
      <img>
      <div class="top">
        <img :style="{'background': color}" src="../../assets/img/volunteer.png">
        <span :style="{'color': color,'border-color': color}">志愿者经历</span>
      </div>
      <div class="list">
        <div class="time-school">
          <el-date-picker v-model="value6" prefix-icon="icon-none" class="data" :style="{'fontSize': fontSize}" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
          </el-date-picker>
          <input class="school" :style="{'font-size': fontSize}" v-model="school" placeholder="请填写公司名称"></input>
        </div>
        <input class="major" :style="{'font-size': fontSize}" v-model="major" placeholder="请填写职位名称"></input>
        <el-input style="border: none" class="detail" type="textarea" autosize placeholder="详细描述你的职责范围、工作任务及取得的成绩，工作经验的时间采取倒叙形式，最近经历写在前面，描述尽量具体简洁，工作经验的描述与目标岗位的招聘要求尽量匹配，用词精准。" v-model="textarea2">
        </el-input>
      </div>
    </div>
    <div class="repeat-block">
      <img>
      <div class="top">
        <img :style="{'background': color}" src="../../assets/img/internship.png">
        <span :style="{'color': color,'border-color': color}">实习经验</span>
      </div>
      <div class="list">
        <div class="time-school">
          <el-date-picker v-model="value6" prefix-icon="icon-none" class="data" :style="{'fontSize': fontSize}" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
          </el-date-picker>
          <input class="school" :style="{'font-size': fontSize}" v-model="school" placeholder="请填写公司名称"></input>
        </div>
        <input class="major" :style="{'font-size': fontSize}" v-model="major" placeholder="请填写职位名称"></input>
        <el-input style="border: none" class="detail" type="textarea" autosize placeholder="详细描述你的职责范围、工作任务及取得的成绩，工作经验的时间采取倒叙形式，最近经历写在前面，描述尽量具体简洁，工作经验的描述与目标岗位的招聘要求尽量匹配，用词精准。" v-model="textarea2">
        </el-input>
      </div>
    </div>
    <div class="repeat-block">
      <img>
      <div class="top">
        <img :style="{'background': color}" src="../../assets/img/self.png">
        <span :style="{'color': color,'border-color': color}">自我评价</span>
      </div>
      <div class="list">
        <el-input style="border: none" class="detail" type="textarea" autosize placeholder="篇幅不要太长，注意结合简历整体的美观度，如果真的有很多话要说，建议以求职信的形式附上。自我评价应做到突出自身符合目标岗位要求的“卖点”，避免过多使用形容词，而应该通过数据及实例来对自身价值进行深化。" v-model="textarea2">
        </el-input>
      </div>
    </div>
    <div class="repeat-block">
      <img>
      <div class="top">
        <img :style="{'background': color}" src="../../assets/img/prize.png">
        <span :style="{'color': color,'border-color': color}">奖项荣誉</span>
      </div>
      <div class="list">
        <el-input style="border: none" class="detail" @blur="getElementHeight" type="textarea" autosize placeholder="详细描述你所获得的奖项荣誉，时间倒叙，与目标岗位相关性强的写在前面，只写有代表性的奖项即可，同年或同类别的奖项可进行适当合并。" v-model="textarea2">
        </el-input>
      </div>
    </div>
  </div>
  <!-- 基础信息弹窗 -->
  <div v-if="basePopup">
    <div class="mask"></div>
    <div class="base-popup">
      <div class="bar">
        <span>基本信息</span>
        <i @click="cancelBasePopup" class="el-icon-close"></i>
      </div>
      <div class="content">
        <div class="row">
          <span>你的名字</span>
          <input></input>
        </div>
        <div class="row">
          <span>出生日期</span>
          <input></input>
        </div>
        <div class="row">
          <span>工作年限</span>
          <input></input>
        </div>
        <div class="row">
          <span>电话号码</span>
          <input></input>
        </div>
        <div class="row">
          <span>电子邮箱</span>
          <input></input>
        </div>
        <div class="long-row">
          <span>一句话描述自己:</span>
          <input></input>
        </div>
      </div>
      <el-button class="save" @click="saveBasePopup" type="success">保存内容</el-button>
      <el-button class="cancel" @click="cancelBasePopup" type="info">取消编辑</el-button>
    </div>
  </div>
  <!-- 求职意向弹窗 -->
  <div v-if="intentionPopup">
    <div class="mask"></div>
    <div class="intention-popup">
      <div class="bar">
        <span>求职意向</span>
        <i @click="cancelIntentionPopup" class="el-icon-close"></i>
      </div>
      <div class="content">
        <div class="row">
          <span>意向岗位</span>
          <input></input>
        </div>
        <div class="row">
          <span>意向城市</span>
          <input></input>
        </div>
        <div class="row">
          <span>入职时间</span>
          <input></input>
        </div>
        <div class="row">
          <span>薪资要求</span>
          <input></input>
        </div>
        <el-button class="save" @click="saveIntentionPopup" type="success">保存内容</el-button>
        <el-button class="cancel" @click="cancelIntentionPopup" type="info">取消编辑</el-button>
      </div>
    </div>

  </div>
</div>
</template>

<script>
import {
  mapState
} from 'vuex'
import $ from "jquery";
import html2canvas from 'html2canvas';
import Canvas2Image from 'canvas2image';

export default {
  data() {
    return {

      observer: null,
      firedNum: 0,
      recordOldValue: { // 记录下旧的宽高数据，避免重复触发回调函数
        width: '0',
        height: '0'
      },
      basePopup: false,
      imageUrl: '',
      dynamicTags: ['标签一', '标签二', '标签三'],
      inputVisible: false,
      intentionPopup: false,
      inputValue: '',
      name: "查辰昊",
      introduce: "一句话介绍",
      fontSize: "13px",
      post: "前端开发实习",
      place: "北京",
      arrivalTime: "一周内到岗",
      money: "13k-15k",
      value6: "",
      school: "北京工业大学耿丹学院",
      major: "计算机科学与技术"
    }
  },
  computed: {
    ...mapState({
      color: state => state.com.color
    })
  },
  created() {
  },
  mounted() {
  },
  methods: {
    //获取dom高度是否添加新也签
    getElementHeight(){
      var self = this
      console.log(111)
      console.log($('#resume-details').height())
      console.log($('#wrap').height())
      if($('#resume-details').height() > $('#wrap').height()){
        $('#wrap').height($('#wrap').height()+1160)
        console.log(11)
      }
    },
    saveIntentionPopup() {
      var self = this
      self.intentionPopup = false
    },
    cancelIntentionPopup() {
      var self = this
      self.intentionPopup = false
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      alert(file.type)
      const isJPG = file.type === 'image/jpeg' || file.type === 'image/png';
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      return isJPG && isLt2M;
    },
    saveBasePopup() {
      var self = this
      self.basePopup = false
    },
    cancelBasePopup() {
      var self = this
      self.basePopup = false
    },
    handleClose(tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
    },

    showInput() {
      this.inputVisible = true;
      this.$nextTick(_ => {
        this.$refs.saveTagInput.$refs.input.focus();
      });
    },
    handleInputConfirm() {
      let inputValue = this.inputValue;
      if (inputValue) {
        this.dynamicTags.push(inputValue);
      }
      this.inputVisible = false;
      this.inputValue = '';
    },
    cancelIntentionPopup() {
      var self = this
      self.intentionPopup = false
    }
  }
}
</script>
<style lang="scss">
.avatar-uploader .el-upload {
    border: 1px dashed #00c091;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
}

.avatar-uploader .el-upload:hover {
    border-color: #00c091;
}

.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 170px;
    height: 200px;
    line-height: 200px;
    text-align: center;
}

.avatar {
    width: 170px;
    height: 200px;
    display: block;
}

.el-tag+.el-tag {
    margin-left: 10px;
}
.el-tag {
    margin-top: 10px;
    border: 1px solid white;
    color: white;
    i {
        color: white;
    }
}
.el-tag .el-icon-close {
    color: white;
}

.button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
    margin-top: 10px;
}

.input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
    margin-top: 10px;
}
.el-textarea__inner {
    border: 1px solid white;
    width: 90%;
    margin-top: 5px;
    margin-left: 25px;
    padding: 0;
    resize: none;
}
.el-textarea__inner:focus {
    border: 1px dashed #00c091;
}
// 时间选择器
.el-input__icon el-range__icon el-icon-date {
    display: none;
}
.el-range-separator {
    line-height: 20px !important;
    padding: 0 !important;
    width: 6%!important;

}
.el-date-editor .el-range__icon {
    display: none !important;
}
.el-date-editor .el-range__close-icon {
    line-height: 20px !important;
}
</style>
<style lang="scss" scoped>
.icon-none {
    display: none !important;
    width: 0 !important;
}
.wrap {
    width: 820px;
    height: 1160px;
    position: relative;
    box-shadow: 0 0 8px 0 rgba(0,0,0,0.2);
    background: white;
    .left {
        float: left;
        width: 270px;
        height: inherit;
        padding: 20px 30px 40px;
        display: flex;
        flex-direction: column;
        align-items: center;
        .base-option {
            border: 1px dashed #00c091;
            width: 200px;
            height: 200px;
            margin-top: 20px;
            border-radius: 6px;
            .edit-icon {
                display: none;
                float: right;
                font-size: 25px;
                color: #00c091;
            }
        }
        .base-option:hover {
            .edit-icon {
                display: block;
            }
        }
        .interest {
            border: 1px dashed #00c091;
            width: 200px;
            height: auto;
            margin-top: 20px;
            border-radius: 6px;
            padding-bottom: 20px;
            .title-icon {
                float: left;
                /* top: 10px; */
                /* left: 10px; */
                margin-top: 11px;
                margin-left: 5px;
                font-size: 25px;
                color: white;
            }
            .title {
                float: left;
                /* top: 10px; */
                /* left: 10px; */
                margin-top: 14px;
                margin-left: 5px;
                font-size: 16px;
                color: white;
            }
            .interest-content {
                width: 100%;
                margin-top: 49px;
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
            }
        }
        .interest:hover {
            .edit-icon {
                display: block;
            }
        }
    }
    .right {
        margin-left: 270px;
        display: flex;
        flex-direction: column;
        align-items: center;
        background: white;
        .user-base {
            min-height: 140px;
            width: 90%;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            -ms-flex-direction: column;
            flex-direction: column;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            border: 1px dashed #00c091;
            margin-top: 15px;
            .name {
                height: 30px;
                line-height: 29px;
                padding-right: 10px;
                font-size: 30px;
                color: #414141;
            }
            .introduce {
                margin-top: 18px;
                color: rgb(109,109,109);

            }
        }
        .intention {
            width: 90%;
            border: 1px dashed #00c091;
            height: auto;
            padding-bottom: 10px;
            margin-top: 10px;
            display: flex;
            flex-wrap: wrap;
            .row {
                height: 15px;
                line-height: 15px;
                display: inline-block;
                display: flex;
                align-items: center;
                margin-right: 35px;
                margin-top: 10px;
                color: rgb(109,109,109);
                span {
                    margin-left: 6px;
                }

            }
        }
        .repeat-block {
            width: 90%;
            position: relative;
            margin-top: 10px;
            border: 1px dashed #00c091;
            .top {
                height: 26px;
                width: 100%;
                display: flex;
                align-items: center;
                img {
                    width: 26px;
                    height: 26px;
                    padding: 3px;
                    border-radius: 13px;
                }
                span {
                    font-size: 20px;
                    width: 100%;
                    word-break: break-all;
                    font-weight: bold;
                    margin-left: 10px;
                    border-bottom: 1px solid;
                }
            }
            .list {
                display: flex;
                flex-direction: column;
                padding-bottom: 10px;
                .detail {
                    border: none !important;
                    textarea {
                        border: none !important;
                    }

                }
                .major {
                    border: none;
                    width: 50%;
                    height: 25px;
                    line-height: 25px;
                    text-align: left;
                    margin-top: 3px;
                    margin-left: 26px;
                }
                .time-school {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .data {
                    margin-top: 5px;
                    height: 25px !important;
                    line-height: 25px !important;
                    border: none !important;
                    width: 250px !important;
                }
                .school {
                    border: none;
                    width: 50%;
                    height: 25px;
                    line-height: 25px;
                    text-align: right;

                }
            }
        }
    }
    .base-popup {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        height: 540px;
        width: 740px;
        background: white;
        z-index: 100;
        .bar {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            background: #00c091;
            span {
                font-size: 16px;
                color: white;
                margin-left: 15px;
            }
            i {
                font-size: 20px;
                font-weight: bolder;
                color: white;
                margin-right: 15px;
                cursor: pointer;
            }
        }
        .content {
            margin: 70px auto;
            width: 90%;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: space-between;
            .row {
                height: 70px;
                width: 304px;
                span {
                    display: inline-block;
                    width: 84px;
                    height: 34px;
                    line-height: 34px;
                    padding-right: 10px;
                    font-size: 14px;
                    color: #566875;
                    text-align: left;
                    text-indent: 1px;
                }
                input {
                    width: 220px;
                    height: 34px;
                    border-radius: 2px;
                    border: 1px solid #d4dbe0;
                    text-indent: 0.5em;
                    font-size: 12px;
                    color: #566875;
                }
            }
            .long-row {
                position: absolute;
                top: 300px;
                left: 38px;
                width: 90%;
                span {
                    display: flex;
                    height: 34px;
                    line-height: 34px;
                    padding-right: 10px;
                    font-size: 14px;
                    color: #566875;
                    text-align: left;
                    text-indent: 1px;
                    flex-direction: column;
                }
                input {
                    width: 100%;
                    height: 34px;
                    border-radius: 2px;
                    border: 1px solid #d4dbe0;
                    text-indent: 0.5em;
                    font-size: 12px;
                    margin-top: 10px;
                    color: #566875;
                }
            }
        }
        .save {
            position: absolute;
            top: 450px;
            left: 250px;
        }

        .cancel {
            position: absolute;
            top: 450px;
            left: 390px;
        }
    }
    .intention-popup {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        height: 340px;
        width: 740px;
        background: white;
        z-index: 100;
        .bar {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            background: #00c091;
            span {
                font-size: 16px;
                color: white;
                margin-left: 15px;
            }
            i {
                font-size: 20px;
                font-weight: bolder;
                color: white;
                margin-right: 15px;
                cursor: pointer;
            }
        }
        .content {
            height: 240px;
            width: 100%;
            margin-top: 50px;
            margin-left: 20px;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            padding: 30px;
            .row {
                display: flex;
                width: 50%;
                flex-direction: column;
                height: 90px;
                span {
                    color: rgb(109,109,109);
                }
                input {
                    width: 80%;
                    margin-top: 10px;
                    height: 34px;
                    border-radius: 2px;
                    border: 1px solid #d4dbe0;
                    text-indent: 0.5em;
                    font-size: 12px;
                    color: #566875;
                }
            }
            .save {
                position: absolute;
                top: 270px;
                left: 250px;
            }

            .cancel {
                position: absolute;
                top: 270px;
                left: 390px;
            }
        }
    }
}
</style>
