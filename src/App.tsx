/*
 * @Author: Dylight
 * @Date: 2021-06-24 19:35:39
 * @LastEditors: Dylight
 * @LastEditTime: 2021-08-30 15:25:40
 * @FilePath: /my-vite-app/src/App.tsx
 * @Description: 
 */
import { defineComponent } from "vue";
import { RouterView } from "vue-router";

export default defineComponent({
  setup() {
    return () => <RouterView />;
  },
});

