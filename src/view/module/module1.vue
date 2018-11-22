<template>
<div class="wrap">
  <div class="left" :style="{'background': color}">
    <el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
      <img v-if="imageUrl" :src="imageUrl" class="avatar">
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
    <div class="base-option">
      <i class="el-icon-edit-outline edit-icon"></i>
    </div>
  </div>
  <div v-if="basePopup">
    <div class="mask"></div>
    <div class="base-popup">

    </div>
  </div>
</div>
</template>

<script>
import {
  mapState
} from 'vuex'

export default {
  data() {
    return {
      basePopup: true,
      imageUrl: ''
    }
  },
  computed: {
    ...mapState({
      color: state => state.com.color
    })
  },
  created() {

  },
  methods: {
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
    }
  }
}
</script>
<style>
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
</style>
<style lang="scss" scoped>
.wrap {
    width: 820px;
    height: 1160px;
    position: relative;
    box-shadow: 0 0 8px 0 rgba(0,0,0,0.2);
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
            .edit-icon{
              display: none;
              float: right;
              font-size: 25px;
              color: #00c091

            }
        }
        .base-option:hover {
          .edit-icon{
            display: block;
          }
        }
    }
    .base-popup{

    }
}

</style>
