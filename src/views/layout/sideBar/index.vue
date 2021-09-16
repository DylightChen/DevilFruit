<!--
 * @Author: Dylight
 * @Date: 2021-08-30 16:08:44
 * @LastEditors: Dylight
 * @LastEditTime: 2021-09-15 15:07:53
 * @FilePath: /my-vite-app/src/views/layout/sideBar/index.vue
 * @Description:  
-->
<template>
    <scrollBar>
        <el-menu
            mode="vertical"
            class="sidebar-container"
            background-color="#00142a"
            text-color="hsla(0, 0%, 100%, .65)"
            active-text-color="#409EFF"
            unique-opened
            router
        >
            <div class="logo">
                <img src="https://img.alicdn.com/tfs/TB1ONhloamWBuNjy1XaXXXCbXXa-200-200.png" width="40" />
                <span class="site-name"></span>
            </div>
            <template v-for="menu in aside">
                <layoutMenuItem v-if="menu.children?.length === 0" :menu="menu" />
                <layoutMenuSub v-else :menu="menu" />
            </template>
        </el-menu>
    </scrollBar>
</template>
<script lang="ts" setup>
import layoutMenuItem from '@/views/layout/sideBar/components/menuItem/index.vue';
import layoutMenuSub from '@/views/layout/sideBar/components/submenu/index.vue';
import scrollBar from '@/views/layout/sideBar/components/scrollBar/index.vue';
import { RoutesDataItem } from '@/views/layout/sideBar/model';
import { useRouteStore } from '@/stores/route';
const useRoute = useRouteStore();
const aside: RoutesDataItem[] = useRoute.getDynamicMenus;
</script>
<style lang="scss" scoped>
.logo {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 64px;
    line-height: 64px;
    background: #002140;
    color: #fff;
    text-align: center;
    font-size: 20px;
    font-weight: 600;
    overflow: hidden;
    .site-name {
        margin-left: 10px;
    }
}
.sidebar-container {
    box-shadow: 2px 0 6px rgba(0, 21, 41, 0.35);
    transition: width 0.28s;
    width: 256px !important;
    height: 100%;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 1001;
    overflow: hidden;
    a {
        display: inline-block;
        width: 100%;
    }
}
</style>
