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
            path: '/home',
            name: 'home',
            component: Layout,
            children: [{
                path: '/',
                name: 'toast',
                component: () =>
                    import ('@/views/layout/content/toast.vue'),
            }]
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