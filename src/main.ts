/*
 * @Author: Dylight
 * @Date: 2021-06-24 19:35:39
 * @LastEditors: Dylight
 * @LastEditTime: 2021-06-25 17:45:40
 * @FilePath: /my-vite-app/src/main.ts
 * @Description:
 */
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import ElementPlus from 'element-plus';
import '@/assets/sass/index.scss'

const app =createApp(App)
    app
    .use(router)
    .use(ElementPlus)
    .mount('#app');
