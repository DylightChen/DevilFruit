<!--
 * @Author: Dylight
 * @Date: 2021-08-30 16:08:44
 * @LastEditors: Dylight
 * @LastEditTime: 2021-09-09 13:07:34
 * @FilePath: /my-vite-app/src/views/layout/sideBar/index.vue
 * @Description:  
-->
<template>
    <el-menu mode="vertical" class="el-menu-vertical-demo" background-color="#00142a" text-color="hsla(0, 0%, 100%, .65)" active-text-color="#409EFF" unique-opened>
        <template v-for="menu in aside">
            <layoutMenuItem v-if="menu.children?.length === 0" :menu="menu" />
            <layoutMenuSub v-else :menu="menu" />
        </template>
    </el-menu>
</template>
<script lang="ts" setup>
import layoutMenuItem from '@/views/layout/sideBar/components/menuItem/index.vue';
import layoutMenuSub from '@/views/layout/sideBar/components/submenu/index.vue';
import { RoutesDataItem } from '@/views/layout/sideBar/model';
import { useRouteStore } from '@/stores/route';
const useRoute = useRouteStore();
const aside: RoutesDataItem[] = useRoute.getDynamicMenus;
</script>
<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}
</style>
