<template>
  <div id="app">
    <MaskLayer/>
    <div class="login">
      <Login/>
      <LoginRegist/>
    </div>
  </div>
</template>

<script>
import Login from '@/pages/Login.vue'
import MaskLayer from '@/components/MaskLayer.vue'
import LoginRegist from '@/components/LoginRegist.vue'
export default {
  name: 'App',
  components: {
    Login,
    MaskLayer,
    LoginRegist
  }
}
</script>

<style>
*{
  margin: 0px;
  padding: 0px;
}
html, body {
  width: 100%;
  height: 100%;
  font-size: 14px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height:100%;
}

.login {
  width: 100%;
  height: 100%;
}
</style>
