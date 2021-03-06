/*
 * @Author: Dylight
 * @Date: 2021-06-24 19:35:39
 * @LastEditors: Dylight
 * @LastEditTime: 2021-09-09 18:15:21
 * @FilePath: /my-vite-app/src/api/abstract.ts
 * @Description:
 */

import instance from './intercept';
import { AxiosRequest, CustomResponse } from './types';
import { ElMessage } from 'element-plus';
// import storage from '@/utils/storage';

class Abstract {
    protected baseURL: string = './';

    protected headers: object = {
        ContentType: 'application/json;charset=UTF-8'
    };

    private apiAxios({ baseURL = this.baseURL, headers = this.headers, method, url, data, params, responseType }: AxiosRequest): Promise<CustomResponse> {
        Object.assign(headers, {
            // token: storage().get('token') || storage('localstorage').get('token'),
            // 'x-language': storage('localstorage').get('i18n')
        });
        return new Promise((resolve, reject) => {
            instance({
                baseURL,
                headers,
                method,
                url,
                params,
                data,
                responseType
            })
                .then((res) => {
                    // 200:服务端业务处理正常结束
                    if (res.status === 200) {
                        if (res.data.success) {
                            resolve({
                                status: true,
                                message: 'success',
                                data: res.data?.data,
                                origin: res.data
                            });
                        } else {
                            ElMessage({ showClose: true, message: res.data?.errorMessage || url + '请求失败', type: 'error' });
                            resolve({
                                status: false,
                                message: res.data?.errorMessage || url + '请求失败',
                                data: res.data?.data,
                                origin: res.data
                            });
                        }
                    } else {
                        ElMessage({ showClose: true, message: res.data?.errorMessage || url + '请求失败' });
                        resolve({
                            status: false,
                            message: res.data?.errorMessage || url + '请求失败',
                            data: null
                        });
                    }
                })
                .catch((err) => {
                    const message = err?.data?.errorMessage || err?.message || url + '请求失败';
                    ElMessage({ showClose: true, message: message });
                    reject({ status: false, message, data: null });
                });
        });
    }

    /**
     * GET类型的网络请求
     */
    protected getReq({ baseURL, headers, url, data, params, responseType }: AxiosRequest) {
        return this.apiAxios({ baseURL, headers, method: 'GET', url, data, params, responseType });
    }

    /**
     * POST类型的网络请求
     */
    protected postReq({ baseURL, headers, url, data, params, responseType }: AxiosRequest) {
        return this.apiAxios({ baseURL, headers, method: 'POST', url, data, params, responseType });
    }

    /**
     * PUT类型的网络请求
     */
    protected putReq({ baseURL, headers, url, data, params, responseType }: AxiosRequest) {
        return this.apiAxios({ baseURL, headers, method: 'PUT', url, data, params, responseType });
    }

    /**
     * DELETE类型的网络请求
     */
    protected deleteReq({ baseURL, headers, url, data, params, responseType }: AxiosRequest) {
        return this.apiAxios({
            baseURL,
            headers,
            method: 'DELETE',
            url,
            data,
            params,
            responseType
        });
    }
}

export default Abstract;
