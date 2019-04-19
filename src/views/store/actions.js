import { uLogin } from "@/views/interface/res.js";
import auth from '@/views/utils/auth';
const actions = {
    async SignIn({ commit }, userInfo) {
        return new Promise((resolve, reject) => {
            uLogin(userInfo).then((res) => {
                if (res.code == 200) {
                    auth.setToken(res.systoken);
                    commit('SET_TOKEN', res.systoken);
                    commit('SET_LOGIN', false);
                }
                if (res.data) {
                    resolve(res);
                } else {
                    resolve(res.message);
                }

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