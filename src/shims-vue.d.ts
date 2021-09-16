/*
 * @Author: Dylight
 * @Date: 2021-06-24 19:35:39
 * @LastEditors: Dylight
 * @LastEditTime: 2021-09-15 14:38:56
 * @FilePath: /my-vite-app/src/shims-vue.d.ts
 * @Description:
 */
declare module '*.vue' {
    import { DefineComponent } from 'vue';
    const component: DefineComponent<{}, {}, any>;
    export default component;
}
