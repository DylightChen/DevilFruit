/*
 * @Author: Dylight
 * @Date: 2021-06-24 19:35:39
 * @LastEditors: Dylight
 * @LastEditTime: 2021-09-16 17:34:22
 * @FilePath: /my-vite-app/src/router/index.ts
 * @Description:
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import { useUserStore } from '@/stores/user';
import { useRouteStore } from '@/stores/route';
import { RoutesDataItem } from '@/views/layout/sideBar/model';

//需要在tsconfig文件下添加类型定义vite/client
const modules = import.meta.glob('../views/**/**.vue');
const defalutMenu: Array<RouteRecordRaw> = [
    { path: '/', redirect: { name: 'login' }, meta: { title_cn: '重定向', title_en: 'Redirect' } },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/login.vue'),
        meta: { title_cn: '登录', title_en: 'Login' }
    }
];
const main: RouteRecordRaw = {
    path: '/layout',
    name: 'layout',
    component: () => import('@/views/layout/index.vue'),
    meta: { title_cn: '主入口整体布局', title_en: 'Overall layout of main entrance' },
    children: [
        {
            path: '/home',
            name: 'home',
            component: () => import('@/views/home/index.vue'),
            meta: {
                id: 'home',
                isTab: true,
                type: 1,
                isDynamic: false,
                keepAlive: true,
                multiple: false
            }
        }
    ]
};

const routes: Array<RouteRecordRaw> = [main, ...defalutMenu];
const router = createRouter({
    history: createWebHashHistory(),
    routes
});
///* @vite-ignore */
// let file = (file: string | undefined) => import(`@/views${file}/index.vue`);
// let file = (file: string) => `@/views${file}`;
const asyncRoute = (routeArr: any, menu: any): Array<RouteRecordRaw> => {
    menu.forEach((item: RoutesDataItem) => {
        const menuSub = Object.assign({}, item);
        if ((menuSub.parentId as number) > 0) {
            menuSub.component = modules[`../views${menuSub.path}/index.vue`];
        } else {
            menuSub.component = modules[`../views/layout/index.vue`];
            menuSub.redirect = { name: menuSub.children[0].name };
        }
        if ((item.children?.length as number) !== 0) {
            menuSub.children = [];
            asyncRoute(menuSub.children, item.children);
        }
        routeArr.push(menuSub as RouteRecordRaw);
    });
    return routeArr;
};

router.beforeEach(async (to, from) => {
    const user = useUserStore();
    let res = await user.getmenu();
    let data: Array<object>;
    let routeArr: Array<object>;
    data = res.data;
    routeArr = [];
    let result = asyncRoute(routeArr, data);
    const useRoute = useRouteStore();
    useRoute.updateMenu(result as RoutesDataItem[]);
    result.forEach((item) => {
        router.addRoute(item);
    });
    console.log(router.getRoutes());
});
export default router;
