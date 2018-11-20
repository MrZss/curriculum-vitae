
<template>
  <div id = "outer">
    <h1>极简智能简历</h1>
    <div id = "icon">      
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
      }
    },
    created() {
    },
    methods: {
    }
  }
</script>

<style lang="scss" scoped>

    h1{
      font-size: 60px;
      font-weight: lighter;
      color:#555;
      font-family: 'Chinese Quote',-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,'PingFang SC','Hiragino Sans GB','Microsoft YaHei','Helvetica Neue',Helvetica,Arial,sans-serif;
    }
    #icon{
      width:200px;
      height: 200px;
      border-radius: 50%;
      background-color: white;
      margin:0 auto;
    }
</style>
