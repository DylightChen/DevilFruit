<!--
 * @Author: Dylight
 * @Date: 2021-09-10 18:07:31
 * @LastEditors: Dylight
 * @LastEditTime: 2021-09-10 18:13:05
 * @FilePath: /my-vite-app/src/views/layout/contanair/index.vue
 * @Description: 
-->
<template>
    <section id="app-main">
        <transition name="fade-transverse">
            <router-view> 111 </router-view>
        </transition>
    </section>
</template>
<style lang="scss" scope>
#app-main {
    margin: 24px 24px 0;
    .fade-transverse-leave-active,
    .fade-transverse-enter-active {
        transition: all 0.5s;
    }
    .fade-transverse-enter {
        opacity: 0;
        transform: translateX(-30px);
    }
    .fade-transverse-leave-to {
        opacity: 0;
        transform: translateX(30px);
    }
}
</style>
