/*
 * @Author: Dylight
 * @Date: 2021-06-24 19:35:39
 * @LastEditors: Dylight
 * @LastEditTime: 2021-08-26 18:44:19
 * @FilePath: /my-vite-app/vite.config.ts
 * @Description: 
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
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
      script: {
        refSugar: true
      }
    }
    )]
})
