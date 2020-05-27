let BASE_PATH = process.env.BASE_PATH;
if (!BASE_PATH) {
    BASE_PATH = '';
}

export default {
    navTheme: 'dark',

    // 拂晓蓝
    primaryColor: '#1890ff',
    layout: 'topmenu',
    contentWidth: 'Fluid',
    fixedHeader: false,
    autoHideHeader: false,
    fixSiderbar: false,
    colorWeak: false,
    menu: {
        locale: true,
    },
    pwa: false,
    iconfontUrl: '',

    // basic info
    copyright: 'wuhanchu', // 版本信息
    title: 'antd pro starter',

    // oauth config
    product_key: 'antd_design_pro_starter',
    apiVersion: BASE_PATH + '/api/',
    
    oauth: {

        // todo 需要增加 oauth 认证

    },

    // others
    DATE_FORMAT: 'YYYY-MM-DD',
    DATE_TIME_FORMAT: 'YYYY-MM-DD HH:mm:ss',
    BASE_PATH,
};
