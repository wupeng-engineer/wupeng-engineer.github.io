import Vue from 'vue';
import Router from 'vue-router';
import Layout from '@/views/layout/layout.vue'
Vue.use(Router);
export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            redirect: '/home',
        },
        {
            path: '/login',
            name: 'login',
            component: () =>
                import ('@/views/login/login.vue'),
        },
        {
            path: '/home',
            name: 'home',
            component: Layout
        },
        {
            path: '/haveNot',
            name: 'haveNot',
            component: () =>
                import ('@/views/haveNot/haveNot.vue'),
        },
        { path: '*', redirect: '/haveNot' },
    ],
});