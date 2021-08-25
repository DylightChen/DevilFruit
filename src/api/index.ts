/*
 * @Author: Dylight
 * @Date: 2021-06-24 19:35:39
 * @LastEditors: Dylight
 * @LastEditTime: 2021-08-25 21:36:54
 * @FilePath: /my-vite-app/src/api/index.ts
 * @Description: 
 */
import basicApi from './modules/basic';
import oopcApi from './modules/oop';
const apiInterface = {
    basicApi,
    oopcApi
}
interface apiClassType<T = any> {
    [key: string]: T
}
const instance: apiClassType = {}
for (let [key, value] of Object.entries(apiInterface)) {
    if (instance[key]) break;
    instance[key] = new value()
}

export default instance;