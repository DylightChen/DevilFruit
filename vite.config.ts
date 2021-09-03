/*
 * @Author: Dylight
 * @Date: 2021-06-24 19:35:39
 * @LastEditors: Dylight
 * @LastEditTime: 2021-09-03 17:48:27
 * @FilePath: /my-vite-app/vite.config.ts
 * @Description: 
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from "@vitejs/plugin-vue-jsx";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  resolve: {
    alias: [
      { find: '@', replacement: '/src' },
      { find: 'Sass', replacement: '/src/assets/sass' },
      { find: 'Img', replacement: '/src/assets/image' }
    ],
  },
  server: {
    port: 3000,
    open: true,
    proxy: {
      '/user': {
        target: 'http://localhost:7300/mock/6117f3ad784d2b00236ca69d/DevilFruit/',
        changeOrigin: true,
      }
    },
    cors: true
  },
  plugins: [
    vue({
      refTransform: /^((?!node_modules).)*$/    }
    ), vueJsx()]
})
