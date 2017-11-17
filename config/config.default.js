// config/config.default.js
exports.keys = '_1510811258037_7722'; //<此处改为你自己的 Cookie 安全字符串>
// 添加 view 配置
exports.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
        '.tpl': 'nunjucks',
    },
};
// 添加 news 的配置项
exports.news = {
    pageSize: 5,
    serverUrl: 'http://172.18.18.194:3333/chongqingCenterPro/btoa/portal/marketing/operation',
};
exports.robot = {
    ua: [
        /curl/i,
        /Baiduspider/i,
    ],
};