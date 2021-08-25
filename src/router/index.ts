/*
 * @Author: Dylight
 * @Date: 2021-06-24 19:35:39
 * @LastEditors: Dylight
 * @LastEditTime: 2021-06-27 17:11:14
 * @FilePath: /my-vite-app/src/router/index.ts
 * @Description: 
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";


const a: Array<RouteRecordRaw> = [
  { path: '/', redirect: { name: 'login' }, meta: { title_cn: '重定向', title_en: 'Redirect' } },
  { path: '/login', name: 'login', component: () => import('@/views/login.vue'), meta: { title_cn: '登录', title_en: 'Login' } },
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
    },
  ]
}

const routes: Array<RouteRecordRaw> =[main,...a]
const router = createRouter({
  history: createWebHashHistory(),
  routes
});
export default router;