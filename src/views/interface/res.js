import Http from '@/views/aixo/http';

const getNavBar = function() {
    return Http({
        url: '/api/home/navBar',
        method: 'get',
    });
};
const uLogin = function({ loginname, password }) {
    return Http({
        url: '/api/user/login',
        method: 'post',
    });
};
export { uLogin, getNavBar };