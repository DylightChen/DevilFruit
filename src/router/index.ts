/*
 * @Author: Dylight
 * @Date: 2021-06-24 19:35:39
 * @LastEditors: Dylight
 * @LastEditTime: 2021-09-14 18:05:35
 * @FilePath: /my-vite-app/src/router/index.ts
 * @Description:
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import { useUserStore } from '@/stores/user';
import { useRouteStore } from '@/stores/route';
import { RoutesDataItem } from '@/views/layout/sideBar/model';
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
            component: () => import('@/views/layout/index.vue'),
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
// let file = (file: string) => import(`@/views/${file}`);
let file = (file: string) => `@/views${file}`;
const asyncRoute = (routeArr: any, menu: any): Array<RouteRecordRaw> => {
    menu.forEach((item: RoutesDataItem) => {
        const menuSub = Object.assign({}, item);
        menuSub.path = menuSub.pageUrl;
        menuSub.redirect = { name: menuSub.pageUrl };
        if ((menuSub.parentId as number) > 0) {
            menuSub.component = file(menuSub.pageUrl as string);
        } else {
            menuSub.component = file(menuSub.pageUrl as string);
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
});
export default router;
