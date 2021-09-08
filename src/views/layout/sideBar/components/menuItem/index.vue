<!--
 * @Author: Dylight
 * @Date: 2021-09-06 18:40:15
 * @LastEditors: Dylight
 * @LastEditTime: 2021-09-08 17:35:33
 * @FilePath: /my-vite-app/src/views/layout/sideBar/components/menuItem/index.vue
 * @Description: 
-->
<template>
  <el-menu-item v-if="!menu?.hidden" :index="menu?.id">
    <span slot="title">{{menu?.name || '未命名菜单'}}</span>
  </el-menu-item>
</template>

<script lang="ts" setup>
import {RoutesDataItem} from '@/views/layout/sideBar/model';
import {defineProps} from 'vue';
// const props = defineProps({
//     menu:Object,
//     path:String,
//     name:String
// })
const {menu} =defineProps<{
    menu:RoutesDataItem,
}>()
</script>