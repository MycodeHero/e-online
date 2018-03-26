<template>
  <div id="app">
    <!-- <div class="login">
      <Logo/>
      <Login/>
    </div>   -->
    <router-view></router-view>
    <FootNav></FootNav>
  </div>
</template>

<script>
import Login from '@/pages/Login.vue'
import Logo from '@/pages/Logo.vue'
import FootNav from '@/pages/FootNav.vue'
export default {
  name: 'App',
  components: {
    Logo,
    Login,
    FootNav
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
  overflow:hidden;
}
a {
  text-decoration: none;
}

input{
    background:none;
    outline:none;
    border:0px;
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
