const Mock = require('mockjs');
const Result = {
    success: ({ msg, data, token }) => {
        return {
            code: 200,
            message: "请求成功" || msg,
            items: data,
            systoken: token
        }
    },
    error: ({ msg }) => {
        return {
            code: 400,
            message: "请求失败" || msg
        }
    }
}
const Random = Mock.Random;

const login = Mock.mock('/api/user/login', 'post', function(data) {
    if (!data) return Result.error({});
    if (data.loginname && data.password) {
        return Result.success({ systoken: 123 });
    } else {
        return Result.error({});
    }

});
const navBar = Mock.mock('/api/home/navBar', 'get', function() {
    let data = [{ title: "首页", id: "home", tabblank: "/home" },
        { title: "代码", id: "code", tabblank: "/code" },
        { title: "论坛", id: "forum", tabblank: "/forum" },
        { title: "社区", id: "community", tabblank: "/community" }
    ]
    return Result.success({ systoken: 123, data: data });
});
const contents = Mock.mock('/api/home/content', 'get', function() {
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
module.exports = { login, contents, navBar };