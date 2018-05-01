<template>
  <div id="app">
    <Login v-if="!status"/>
    <!-- <div class="enter-pages" v-else>
      <router-view></router-view>
      <FootNav></FootNav>
    </div> -->
  </div>
</template>

<script>
import Login from '@/pages/Login.vue'
import FootNav from '@/pages/FootNav.vue'
export default {
  name: 'App',
  data () {
    return {
      status: false
    }
  },
  components: {
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
  color: black
}

input{
    background:none;
    outline:none;
    border:0px;
}

li {
  list-style: none;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height:100%;
  background: url('../static/image/bg.jpg') no-repeat 50% 50%;
  background-size: 100% 100%;
}

.enter-pages, .login{
  width: 100%;
  height: 100%;
}
</style>
