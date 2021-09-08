<!--
 * @Author: Dylight
 * @Date: 2021-08-30 16:08:44
 * @LastEditors: Dylight
 * @LastEditTime: 2021-09-08 18:19:07
 * @FilePath: /my-vite-app/src/views/layout/sideBar/index.vue
 * @Description:  
-->
//TODO 模版传参类型报错
<template>
    <el-menu
        mode="vertical"
        class="el-menu-vertical-demo"
        background-color="#00142a"
        text-color="hsla(0, 0%, 100%, .65)"
        active-text-color="#409EFF"
        unique-opened
        @open="handleOpen"
        @close="handleClose"
        router
    >
        <template v-for="menu in aside">
            <menuItem v-if="menu.children?.length === 0" :menu="menu" />
            <menuSub v-else :menu="menu" />
        </template>
    </el-menu>
</template>
<script lang="ts" setup>
import menuItem from '@/views/layout/sideBar/components/menuItem/index.vue';
import menuSub from '@/views/layout/sideBar/components/submenu/index.vue';
import { reactive } from 'vue';
import { RoutesDataItem } from '@/views/layout/sideBar/model';

import { useRouteStore } from '@/stores/route';
const useRoute = useRouteStore();
const aside = useRoute.getDynamicMenus;

const handleOpen = (key: any, keyPath: any) => {
    console.log(key, keyPath);
};
const handleClose = (key: any, keyPath: any) => {
    console.log(key, keyPath);
};
</script>
<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}
</style>
