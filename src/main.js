import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from '@/views/store/store';
import './mock/index.js';
import Toast from '@/components/Toast/index';
import MessageBox from '@/components/MessageBox/index';
Vue.use(MessageBox);
Vue.use(Toast);
Vue.config.productionTip = false;
new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');