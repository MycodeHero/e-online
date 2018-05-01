// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import router from './router'
import axios from 'axios'

let CSRF_TOKEN = null
axios.defaults.baseURL = 'http://127.0.0.1:8000'
document.cookie.replace(/csrftoken=(\w*)/, function ($1, $2) {
  CSRF_TOKEN = $2
})
axios.defaults.headers.common['Authorization'] = ' Token ' + CSRF_TOKEN
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

Vue.config.productionTip = false
Vue.use(Vuex)

/* eslint-disable no-new */

const store = new Vuex.Store({
  state: {
    adminData: []
  },
  mutations: {
    fetchAdmin (state, preload) {
      state.adminData = preload.adminData
    }
  }
})

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
