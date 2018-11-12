<template>
  <div class="Edit">
    <div class="bar">
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
.Edit{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  min-width: 1280px;
  .bar{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    min-width: 1280px;
    height: 50px;
    background: red;

  }
}
</style>
