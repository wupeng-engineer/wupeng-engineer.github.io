import Http from '@/views/aixo/http';

const navBar = function() {
    return Http({
        url: '/api/home/navBar',
        method: 'get',
    });
};
export default navBar;