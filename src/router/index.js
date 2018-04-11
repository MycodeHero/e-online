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
      },
      children: [
        {
          path: '/view',
          component (resolve) {
            console.log('11111')
            require(['@/pages/nav-pages/natural-view/view.vue'], resolve)
          }
        }
      ]
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
