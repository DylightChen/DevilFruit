/*
 * @Author: Dylight
 * @Date: 2021-06-24 19:35:39
 * @LastEditors: Dylight
 * @LastEditTime: 2021-08-30 00:39:49
 * @FilePath: /my-vite-app/src/App.tsx
 * @Description: 
 */
import "@/assets/base.less"
import { defineComponent } from "vue";
import { RouterView } from "vue-router"; //从vue router中引入RouterView组件 实际上也可以不用引入直接使用

export default defineComponent({
  setup() {
    return () => <RouterView />;
  },
});

