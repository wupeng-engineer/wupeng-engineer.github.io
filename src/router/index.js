import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/Home.vue'
Vue.use(Router)
export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
        path: '/',
        name: 'home',
        component: index,
        children: [{
            path: '/',
            name: 'contents',
            component: () =>
                import( /* webpackChunkName: "contents" */ '@/views/Home/contents.vue')
        },
        {
            path: '/code',
            name: 'code',
            component: () =>
                import( /* webpackChunkName: "code" */ '@/views/Home/code.vue')
        },
        {
            path: '/forum',
            name: 'forum',
            component: () =>
                import( /* webpackChunkName: "forum" */ '@/views/Home/forum.vue')
        },
        {
            path: '/community',
            name: 'community',
            component: () =>
                import( /* webpackChunkName: "community" */ '@/views/Home/community.vue')
        }
        ]
    }, {
        path: '/login',
        name: 'login',
        component: () =>
            import( /* webpackChunkName: "login" */ '@/views/Login.vue')
    }]
})