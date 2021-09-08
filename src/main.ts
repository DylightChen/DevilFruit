/*
 * @Author: Dylight
 * @Date: 2021-06-24 19:35:39
 * @LastEditors: Dylight
 * @LastEditTime: 2021-09-07 15:38:20
 * @FilePath: /my-vite-app/src/main.ts
 * @Description:
 */
import { createApp } from 'vue';
import App from './App';
import router from './router';
import ElementPlus from 'element-plus';
import '@/assets/sass/index.scss'
import { createPinia } from 'pinia'
const pinia = createPinia()
const app = createApp(App)
app.use(pinia)
    .use(router)
    .use(ElementPlus)
    .mount('#app');
