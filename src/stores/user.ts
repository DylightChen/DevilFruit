/*
 * @Author: Dylight
 * @Date: 2021-08-26 15:25:20
 * @LastEditors: Dylight
 * @LastEditTime: 2021-08-27 19:05:52
 * @FilePath: /my-vite-app/src/stores/user.ts
 * @Description:
 */

import { defineStore } from 'pinia'
import { Item } from "@/stores/models/item.model";
import { instance } from "../api/index";
export type RootState = {
    items: Item[];
};
export const useUserStore = defineStore({
    id: "mainStore",
    state: () =>
    ({
        items: [],
    } as RootState),

    actions: {
        async login(form: any) {
            console.log(instance)
            let userData = await instance['basicApi'].authLogin(form)
            if (!userData.status) return userData.status
            this.$patch(userData)
            return userData
        }
    },
});