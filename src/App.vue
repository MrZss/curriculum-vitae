<template>
  <div id="app">
      <router-view ></router-view>
  </div>
</template>

<script>
import Login from './view/login/Login.vue'
export default {
  name: 'app',
  components: {
  }
}
</script>

<style>
body{
	margin:0;
}
#app {
    height: 100%;
}
</style>
