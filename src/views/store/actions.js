import { uLogin } from "@/views/interface/res.js";
import auth from '@/views/utils/auth';
import vm from 'vue';
const actions = {
    async SignIn({ commit }, userInfo) {
        return new Promise((resolve, reject) => {
            uLogin(userInfo).then((res) => {
                auth.setToken(res.systoken);
                commit('SET_TOKEN', res.systoken);
                commit('SET_LOGIN', false);
                vm.$toast({ message: res.message })
                resolve(res);
            }).catch((error) => {
                reject(error);
            });
        });
    },
    async SignOut({ commit }) {
        commit('SIGN_OUT')
    },
}
export default actions;