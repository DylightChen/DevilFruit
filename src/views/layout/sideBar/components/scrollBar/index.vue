<!--
 * @Author: Dylight
 * @Date: 2021-09-15 10:09:40
 * @LastEditors: Dylight
 * @LastEditTime: 2021-09-15 10:56:06
 * @FilePath: /my-vite-app/src/views/layout/sideBar/components/scrollBar/index.vue
 * @Description: 
-->
<template>
    <div class="scroll-container" ref="scrollContainer" @wheel.prevent="handleScroll">
        <div class="scroll-wrapper" ref="scrollWrapper" :style="{ top: top + 'px' }">
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const delta = 15;
let top = ref(0);
const scrollContainer = ref();
const scrollWrapper = ref();
const handleScroll = (e: any) => {
    const eventDelta = e.wheelDelta || -e.deltaY * 3;
    const $container = scrollContainer.value;
    const $containerHeight = $container.offsetHeight;
    const $wrapper = scrollWrapper.value;
    const $wrapperHeight = $wrapper.offsetHeight;
    if (eventDelta > 0) {
        top.value = Math.min(0, top + eventDelta);
    } else if ($containerHeight - delta < $wrapperHeight) {
        if (top.value < -($wrapperHeight - $containerHeight + delta)) {
            top.value = top.value;
        } else {
            top.value = Math.max(top.value + eventDelta, $containerHeight - $wrapperHeight - delta);
        }
    } else {
        top.value = 0;
    }
};
</script>

<style lang="scss" scoped>
.scroll-container {
    // width: 100%;
    // height: 100%;
    background-color: #00142a;
    .scroll-wrapper {
        position: absolute;
        width: 100%;
    }
}
</style>
