/*
 * @Author: Dylight
 * @Date: 2021-09-08 15:31:37
 * @LastEditors: Dylight
 * @LastEditTime: 2021-09-09 13:08:34
 * @FilePath: /my-vite-app/src/stores/route.ts
 * @Description:
 */

import { defineStore } from 'pinia';
import { RoutesDataItem } from '@/views/layout/sideBar/model';
export type routeState = {
    dynamicRoute: RoutesDataItem[];
};
export const useRouteStore = defineStore({
    id: 'routeStore',
    state: () => ({ dynamicRoute: [] } as routeState),
    getters: {
        getDynamicMenus(state) {
            return state.dynamicRoute;
        }
    },
    actions: {
        updateMenu(route: RoutesDataItem[]) {
            this.dynamicRoute = route;
        }
    }
});
