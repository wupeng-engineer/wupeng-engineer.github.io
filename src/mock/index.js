
const Mock = require('mockjs');

const Random = Mock.Random;

const login = Mock.mock('/api/user/login', 'post', function () {
    return {
        code: 200,
        message: "登录成功！"
    }
});
const contents = Mock.mock('/api/home/content', 'get', function () {
    return {
        code: 200,
        message: "获取文章列表",
        items: [{
            id: "0",
            title: "",
            contents: "",
            time: "2019-04-01 13:54:02",
            info: {
                comment: '100',
                collect: '20',
                glance: '150'
            }
        }, {
            id: "1",
            title: "",
            contents: "",
            time: "2019-04-01 13:54:02",
            info: {
                comment: '100',
                collect: '20',
                glance: '150'
            }
        }, {
            id: "2",
            title: "",
            contents: "",
            time: "2019-04-01 13:54:02",
            info: {
                comment: '100',
                collect: '20',
                glance: '150'
            }
        }, {
            id: "3",
            title: "",
            contents: "",
            time: "2019-04-01 13:54:02",
            info: {
                comment: '100',
                collect: '20',
                glance: '150'
            }
        }, {
            id: "4",
            title: "",
            contents: "",
            time: "2019-04-01 13:54:02",
            info: {
                comment: '100',
                collect: '20',
                glance: '150'
            }
        }]
    }
});
module.exports = { login, contents };