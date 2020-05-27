export default [
    {
        path: '/user',
        component: '../outter/fr-schema-antd-utils/src/layouts/UserLayout',
        routes: [
            {
                name: 'login',
                path: '/user/login',
                component: './authority/user/Login',
            },
        ],
    },
    {
        path: '/',
        component: '../outter/fr-schema-antd-utils/src/layouts/SecurityLayout',
        routes: [
            {
                path: '/',
                component: '../outter/fr-schema-antd-utils/src/layouts/BasicLayout',
                routes: [
                    {
                        path: '/',
                        redirect: '/welcome',
                    },
                    {
                        name: 'welcome',
                        path: '/welcome',
                        component: './Welcome',
                    },
                ],
            },
        ],
    },
    {
        component: './404',
    },
];
