// 引入mockjs
const Mock = require('mockjs');
// 获取 mock.Random 对象
const Random = Mock.Random;

const login = Mock.mock('/api/user/login', 'post', function() {
    return {
        code: 200,
        message: "登录成功！"
    }
});
const contents = Mock.mock('/api/home/content', 'get', function() {
    return {
        code: 200,
        message: "获取文章列表",
        items: [{
                title: "第一篇文章",
                contents: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
                time: "2019-04-01 13:54:02",
                info: {
                    comment: '100',
                    collect: '20',
                    glance: '150'
                }
            },
            {
                title: "第二篇文章",
                contents: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
                time: "2019-04-01 13:54:02",
                info: {
                    comment: '100',
                    collect: '20',
                    glance: '150'
                }
            },
            {
                title: "第三篇文章",
                contents: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
                time: "2019-04-01 13:54:02",
                info: {
                    comment: '100',
                    collect: '20',
                    glance: '150'
                }
            },
            {
                title: "第四篇文章",
                contents: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
                time: "2019-04-01 13:54:02",
                info: {
                    comment: '100',
                    collect: '20',
                    glance: '150'
                }
            }
        ]
    }
});
module.exports = { login, contents };