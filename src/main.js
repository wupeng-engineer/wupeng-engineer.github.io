import Vue from 'vue'
import axios from 'axios'
import vuescroll from 'vuescroll'
import store from './store'
import App from './App.vue'
import router from './router'
import './assets/styles/reset.css'
import 'vuescroll/dist/vuescroll.css'
import '@/mock';

Vue.prototype.$http = axios
Vue.use(vuescroll);
Vue.config.productionTip = false
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')