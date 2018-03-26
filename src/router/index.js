// import Vue from 'vue'
// import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// Vue.use(Router)

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'Login',
//       component: Login
//     }
//   ]
// })

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'hash',
  bash: '/',
  routes: [
    {
      path: '/',
      redirect: '/natural'
    },
    {
      path: '/natural',
      component (resolve) {
        require(['@/pages/nav-pages/natural.vue'], resolve)
      }
    },
    {
      path: '/refer',
      component (resolve) {
        require(['@/pages/nav-pages/refer.vue'], resolve)
      }
    },
    {
      path: '/talk',
      component (resolve) {
        require(['@/pages/nav-pages/talk.vue'], resolve)
      }
    },
    {
      path: '/admin',
      component (resolve) {
        require(['@/pages/nav-pages/admin.vue'], resolve)
      }
    }
  ]
})

export default router
