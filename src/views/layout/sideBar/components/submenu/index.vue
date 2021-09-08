<!--
 * @Author: Dylight
 * @Date: 2021-09-06 18:30:16
 * @LastEditors: Dylight
 * @LastEditTime: 2021-09-08 18:09:09
 * @FilePath: /my-vite-app/src/views/layout/sideBar/components/submenu/index.vue
 * @Description: 
-->
<template>
  <el-sub-menu :index="menu?.id">
    <template #title>
      <i slot="icon" class="el-icon-location"></i>
      <span>{{menu?.name}}</span>
    </template>
    <template v-for="(child, childIndex) in menu?.children">
      <layoutMenuItem v-if="child.children.length ==0" :menu="child"  :key="childIndex"/>
      <layoutMenuSub v-else  :menu="child" />
    </template>
  </el-sub-menu>
</template>
<script lang="ts" setup>
import layoutMenuItem from '@/views/layout/sideBar/components/menuItem/index.vue';
import {defineProps} from 'vue'
import {RoutesDataItem} from '@/views/layout/sideBar/model';
const {menu} =defineProps<{
    menu:RoutesDataItem,
}>()
</script>
//组件调用自己为自己命名
<script lang="ts">
import {
  defineComponent
} from 'vue'

export default defineComponent({
  name: 'layoutMenuSub'
})
</script>