<!--
 * @Author: Dylight
 * @Date: 2021-08-30 16:21:27
 * @LastEditors: Dylight
 * @LastEditTime: 2021-09-15 15:31:55
 * @FilePath: /my-vite-app/src/views/layout/header/index.vue
 * @Description: 
-->
<template>
    <div class="navbar">
        <div class="user-profile-container" trigger="click">
            <div class="user-profile-content">
                <div class="menu-icons">
                    <span class="menu-icon"><i class="el-icon-search icon"></i></span>
                    <span class="menu-icon"><i class="el-icon-message icon"></i></span>
                    <span class="menu-icon">
                        <el-badge is-dot class="item">
                            <i class="el-icon-bell icon"></i>
                        </el-badge>
                    </span>
                </div>
                <el-dropdown>
                    <div class="user-profile-body">
                        <img class="user-avatar" src="https://img.alicdn.com/tfs/TB1ONhloamWBuNjy1XaXXXCbXXa-200-200.png" />
                        <span class="user-name">{{ companyName }}</span>
                    </div>
                    <template #dropdown>
                        <el-dropdown-menu class="user-dropdown" slot="dropdown">
                            <router-link to="/app">
                                <el-dropdown-item> 我的主页 </el-dropdown-item>
                            </router-link>
                            <el-dropdown-item>
                                <span @click="logOff">退出</span>
                            </el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
const logOff = () => '';
const companyName = ref();
</script>
<style lang="scss" scoped>
.navbar {
    height: 64px;
    box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
    .user-profile-container {
        position: absolute;
        right: 20px;
        cursor: pointer;
        .user-profile-content {
            display: flex;
            padding: 20px 0;
        }
        .menu-icons {
            display: flex;
            align-items: center;
            .menu-icon {
                padding: 0 12px;
                .icon {
                    display: inline-block;
                    font-size: 18px;
                    text-align: center;
                }
            }
        }
        .user-profile-body {
            position: relative;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            text-align: center;
            padding-right: 14px;
        }
        .user-avatar {
            width: 24px;
            height: 24px;
            margin: 0 8px 0 12px;
            border-radius: 4px;
        }
        .user-name {
            color: rgba(0, 0, 0, 0.65);
        }
        .user-department {
            font-size: 12px;
            color: rgba(102, 102, 102, 0.65);
        }
        .el-icon-caret-bottom {
            position: absolute;
            right: 0;
            top: 13px;
            font-size: 12px;
        }
    }
}
</style>
