/*
 * @Author: Dylight
 * @Date: 2021-06-24 19:35:39
 * @LastEditors: Dylight
 * @LastEditTime: 2021-08-25 18:52:00
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
    oopServe = "userDomain/admin/v1/user/login",
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
    oopServe(data: OopType) {
        return this.postReq({ url: authorBasic.oopServe, data });
    }
    oopServe2(data: OopType) {
        return this.postReq({ url: authorBasic.oopServe, data });
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
