/*
 * @Author: Dylight
 * @Date: 2021-06-24 19:35:39
 * @LastEditors: Dylight
 * @LastEditTime: 2021-09-07 15:15:31
 * @FilePath: /my-vite-app/src/api/modules/oop.ts
 * @Description:
 */
/**
 * 集成Abstract
 * @date 2021-6-29
 */

import Abstract from '../abstract';
import { OopType } from '../types/oop';


enum authorBasic {
    getMenu = "user/getMenu",
    oopServe2 = "userDomain/admin/v1/user/AuthLogOut",

}


// const authApi = {
//     AuthLogin: (data: AuthLoginType) => {
//         return this.postReq({ url: authorBasic.AuthLogin, data })
//     },
//     AuthLogOut: (data: AuthLoginType) => {
//         return this.postReq({ url: authorBasic.AuthLogOut, data })
//     }
// }

class oopApiClass extends Abstract {
    getMenu(data: OopType) {
        return this.postReq({ url: authorBasic.getMenu, data });
    }
    oopServe2(data: OopType) {
        return this.postReq({ url: authorBasic.getMenu, data });
    }
}
export default oopApiClass
 // 单列模式返回对象
 // let instance;
 // export default (() => {
 //     if (instance) return instance;
 //     instance = new Basic();
 //     return instance;
 // })();
