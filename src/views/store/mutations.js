import auth from '@/views/utils/auth'
const mutations = {
    SET_LOGIN(state, flag) {
        state.login = flag;
    },
    SET_TOKEN(state, data) {
        state.token = data;
    },
    SIGN_OUT(state) {
        state.login = false;
        state.token = "";
        auth.removeToken();
    }
}
export default mutations;