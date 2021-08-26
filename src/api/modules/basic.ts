// import { authApi } from './basic';
/*
 * @Author: Dylight
 * @Date: 2021-06-24 19:35:39
 * @LastEditors: Dylight
 * @LastEditTime: 2021-08-26 14:29:25
 * @FilePath: /my-vite-app/src/api/modules/basic.ts
 * @Description:
 */
/**
 * 集成Abstract
 * @date 2021-6-29
 */

import Abstract from '../abstract';
import { AuthLoginType } from '../types/basic';

interface authusBasic {
    /**
     * 登录
     * @param {string} account 用户
     * @param {string} password 密码
     * @param {string} captchaCode 图形码
     * @param {string} captchaCodeToken 图形码token
     */
    AuthLogin: 'userDomain/admin/v1/user/login'
    //  authLogin: (data: AuthLoginType) => {
    //      console.log(this);
    //     return this.postReq({ url: 'Basic.AuthLogin', data });

    // }
}

enum authorBasic {
    AuthLogin = "user/login",
    AuthLogOut = "userDomain/admin/v1/user/AuthLogOut",

}


// const authApi = {
//     AuthLogin: (data: AuthLoginType) => {
//         return this.postReq({ url: authorBasic.AuthLogin, data })
//     },
//     AuthLogOut: (data: AuthLoginType) => {
//         return this.postReq({ url: authorBasic.AuthLogOut, data })
//     }
// }

class authApiClass extends Abstract {
    authLogin(data: AuthLoginType) {
        return this.postReq({ url: authorBasic.AuthLogin, data });
    }
    AuthLogOut(data: AuthLoginType) {
        return this.postReq({ url: 'authorBasic.AuthLogin', data });
    }
}
export default authApiClass
// 单列模式返回对象
// let instance;
// export default (() => {
//     if (instance) return instance;
//     instance = new Basic();
//     return instance;
// })();
