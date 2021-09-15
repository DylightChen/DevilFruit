<!--
 * @Author: Dylight
 * @Date: 2021-06-25 16:38:22
 * @LastEditors: Dylight
 * @LastEditTime: 2021-09-10 18:16:01
 * @FilePath: /my-vite-app/src/views/layout/index.vue
 * @Description: 
-->
<template>
    <div class="app-wrapper">
        <navBar></navBar>
        <div class="main-container">
            <myHeader></myHeader>
            <mainContanair></mainContanair>
        </div>
    </div>
</template>

<script lang="ts" setup>
import myHeader from '@/views/layout/header/index.vue';
import navBar from '@/views/layout/sideBar/index.vue';
import mainContanair from '@/views/layout/contanair/index.vue';
</script>

<style lang="scss" scoped>
.app-wrapper {
    position: relative;
    height: 100vh;
    width: 100%;
    &:after {
        content: '';
        display: table;
        clear: both;
    }
}

.main-container {
    min-height: 100vh;
    transition: margin-left 0.28s;
    margin-left: 256px;
    background-color: #f0f2f5;
}
</style>
