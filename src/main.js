import Vue from 'vue'
import axios from 'axios'
import vuescroll from 'vuescroll';
import App from './App.vue'
import router from './router'
// import store from './store/index.js'
import './assets/styles/reset.css'

import 'vuescroll/dist/vuescroll.css';
// 引入mockjs
require('./mock/index.js');

Vue.prototype.$http = axios
Vue.use(vuescroll)

//粒子背景
import VueParticles from 'vue-particles'
Vue.use(VueParticles)


Vue.config.productionTip = false

new Vue({
    router,
    // store,
    render: h => h(App)
}).$mount('#app')

Vue.filter('getYMD', function(input) {
    return input.split(' ')[0];
})