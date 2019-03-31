import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import './assets/styles/reset.css'
import vuescroll from 'vuescroll';
import 'vuescroll/dist/vuescroll.css';


Vue.prototype.$http = axios
Vue.use(vuescroll)
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')