// import { authApi } from './basic';
/*
 * @Author: Dylight
 * @Date: 2021-06-24 19:35:39
 * @LastEditors: Dylight
 * @LastEditTime: 2021-08-30 17:54:23
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
}

enum authorBasic {
    AuthLogin = "user/login",
    AuthLogOut = "userDomain/admin/v1/user/AuthLogOut",

}
class authApiClass extends Abstract {
    authLogin(data: AuthLoginType) {
        return this.postReq({ url: authorBasic.AuthLogin, data });
    }
    authLogOut(data: AuthLoginType) {
        return this.postReq({ url: 'authorBasic.AuthLogin', data });
    }
}
export default authApiClass

