/*
 * @Author: Dylight
 * @Date: 2021-08-26 15:25:20
 * @LastEditors: Dylight
 * @LastEditTime: 2021-08-26 15:52:21
 * @FilePath: /my-vite-app/src/store/index.ts
 * @Description:
 */

import { defineStore } from 'pinia'
import { Item } from "@/store/models/item.model";

export type RootState = {
    items: Item[];
};
export const useMainStore = defineStore({
    id: "mainStore",
    state: () =>
    ({
        items: [],
    } as RootState),

    actions: {
        createNewItem(item: Item) {
            if (!item) return;

            this.items.push(item);
        },

        updateItem(id: string, payload: Item) {
            if (!id || !payload) return;

            const index = this.findIndexById(id);

            if (index !== -1) {
                this.items[index] = payload
            }
        },

        deleteItem(id: string) {
            const index = this.findIndexById(id);

            if (index === -1) return;

            this.items.splice(index, 1);
        },

        findIndexById(id: string) {
            return this.items.findIndex((item) => item.id === id);
        },
    },
});