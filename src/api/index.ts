/*
 * @Author: Dylight
 * @Date: 2021-06-24 19:35:39
 * @LastEditors: Dylight
 * @LastEditTime: 2021-08-26 11:35:50
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
let instance: apiClassType = {};
(() => {
    for (let [key, value] of Object.entries(apiInterface)) {
        if (instance[key]) return;
        instance[key] = new value()
    }
    return instance
})()
export { instance }

// export default instance;