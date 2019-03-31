import Vue from 'vue'
import Router from 'vue-router'
import index from './views/index.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'index',
      component: index,
    },
    {
      path: '/home',
      name: 'home',
      component: () => import( /* webpackChunkName: "home" */ './views/Home/index.vue'),
      children: [{
          path: '/',
          name: 'content',
          component: () =>
            import( /* webpackChunkName: "index" */ './views/Home/Children/index.vue')
        },
        {
          path: '/code',
          name: 'code',
          component: () =>
            import( /* webpackChunkName: "code" */ './views/Home/Children/code.vue')
        },
        {
          path: '/forum',
          name: 'forum',
          component: () =>
            import( /* webpackChunkName: "forum" */ './views/Home/Children/forum.vue')
        },
        {
          path: '/community',
          name: 'community',
          component: () =>
            import( /* webpackChunkName: "community" */ './views/Home/Children/community.vue')
        }
      ]
    }
  ]
})