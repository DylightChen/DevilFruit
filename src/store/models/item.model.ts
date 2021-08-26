/*
 * @Author: Dylight
 * @Date: 2021-08-26 15:41:14
 * @LastEditors: Dylight
 * @LastEditTime: 2021-08-26 15:41:15
 * @FilePath: /my-vite-app/src/store/models/item.model.ts
 * @Description:
 */

export interface Item {
    id: string;
    name: string;
    description?: string;
    quantity: number;
    createdAt: Date;
    deletedAt?: Date;
}