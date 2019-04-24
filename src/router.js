import Vue from 'vue';
import Router from 'vue-router';
import Layout from '@/views/layout/layout'
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
                path: '/edit',
                name: 'edit',
                component: () =>
                    import ('@/components/markdown/edit'),
            }, {
                path: '/toast',
                name: 'toast',
                component: () =>
                    import ('@/views/layout/test/toast'),
            }, {
                path: '/',
                name: 'home',
                component: () =>
                    import ('@/views/layout/home/home'),
            }, {
                path: '/home',
                name: 'home',
                redirect: '/',
            }, {
                path: '/archives',
                name: 'archives',
                component: () =>
                    import ('@/views/layout/home/archives'),
            }, {
                path: '/categories',
                name: 'categories',
                component: () =>
                    import ('@/views/layout/home/categories'),
            }, {
                path: '/collections',
                name: 'collections',
                component: () =>
                    import ('@/views/layout/home/collections'),
            }, {
                path: '/tag',
                name: 'tag',
                component: () =>
                    import ('@/views/layout/home/tag'),
            }, {
                path: '/demo',
                name: 'demo',
                component: () =>
                    import ('@/views/layout/home/demo'),
            }, {
                path: '/about',
                name: 'about',
                component: () =>
                    import ('@/views/layout/home/about'),
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