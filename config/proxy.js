/**
 * 在生产环境 代理是无法生效的，所以这里没有生产环境的配置
 * The agent cannot take effect in the production environment
 * so there is no configuration of the production environment
 * For details, please see
 * https://pro.ant.design/docs/deploy
 */
// todo 需要修改一下 后台代理
export default {
    dev: {
        "/api/user_auth": {
            target: 'http://server.aiknown.cn:32024',
            changeOrigin: true,
            pathRewrite: { "^/api/user_auth": "" },
        },
        '/api': {
            target: 'https://preview.pro.ant.design',
            changeOrigin: true,
            pathRewrite: { "^/api": "" }
        },
    },
    test: {
        '/api/': {
            target: 'https://preview.pro.ant.design',
            changeOrigin: true,
            pathRewrite: {
                '^': '',
            },
        },
    },
    pre: {
        '/api/': {
            target: 'your pre url',
            changeOrigin: true,
            pathRewrite: {
                '^': '',
            },
        },
    },
};