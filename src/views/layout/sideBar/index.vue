<!--
 * @Author: Dylight
 * @Date: 2021-08-30 16:08:44
 * @LastEditors: Dylight
 * @LastEditTime: 2021-09-08 17:28:25
 * @FilePath: /my-vite-app/src/views/layout/sideBar/index.vue
 * @Description: 
-->
<template>
<el-menu
     mode="vertical"
      background-color="#00142a"
      text-color="hsla(0, 0%, 100%, .65)"
      active-text-color="#409EFF"
      unique-opened
      @open="handleOpen"
      @close="handleClose"
      router
>
      <template v-for="(menu) in aside">
        <menuItem v-if="menu.children?.length===0" :menu="menu" />
        <menuSub  v-else :menu="menu" />
      </template>
</el-menu>
</template>
<script lang="ts" setup>
import  menuItem from '@/views/layout/sideBar/components/menuItem/index.vue';
import  menuSub from '@/views/layout/sideBar/components/submenu/index.vue';
import {reactive} from 'vue';
import {RoutesDataItem} from '@/views/layout/sideBar/model';

import {useRouteStore} from '@/stores/route';
const useRoute = useRouteStore()
const aside = useRoute.getDynamicMenus
console.log(aside)
for(let item of aside){
  console.log(item);
}
  // const aside = reactive({})
      const handleOpen = (key:any, keyPath:any) => {
        console.log(key, keyPath);
      };
      const handleClose = (key:any, keyPath:any) => {
        console.log(key, keyPath);
      };
</script>
<style>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>