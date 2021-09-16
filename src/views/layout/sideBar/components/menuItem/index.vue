<!--
 * @Author: Dylight
 * @Date: 2021-09-06 18:40:15
 * @LastEditors: Dylight
 * @LastEditTime: 2021-09-16 17:11:05
 * @FilePath: /my-vite-app/src/views/layout/sideBar/components/menuItem/index.vue
 * @Description: 
-->
<template>
    <el-menu-item v-if="!menu.hidden" :index="menu.path">
        <span slot="title">{{ menu.pathName || '未命名菜单' }}</span>
    </el-menu-item>
</template>

<script lang="ts" setup>
import { RoutesDataItem } from '@/views/layout/sideBar/model';
const { menu } = defineProps<{
    menu: RoutesDataItem;
}>();
</script>
