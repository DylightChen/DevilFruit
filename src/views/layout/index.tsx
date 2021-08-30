/*
 * @Author: Dylight
 * @Date: 2021-06-25 16:38:22
 * @LastEditors: Dylight
 * @LastEditTime: 2021-08-30 00:28:53
 * @FilePath: /my-vite-app/src/views/layout/index.tsx
 * @Description: 
 */

import { defineComponent } from "vue";

// 子组件
const Child = defineComponent({
    setup(props, { slots }) {
        return () => (
            <>
                默认插槽: {slots.default && slots.default()}
                <br />
                具名插槽: {slots.prefix && slots.prefix()}
                <br />
                作用域插槽:{slots.suffix && slots.suffix({ name: "这是作用域插槽的示范" })}
            </>
        );
    },
});
