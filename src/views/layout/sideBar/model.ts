import { RouteRecordRaw } from 'vue-router';

/*
 * @Author: Dylight
 * @Date: 2021-09-07 14:14:55
 * @LastEditors: Dylight
 * @LastEditTime: 2021-09-08 18:07:18
 * @FilePath: /my-vite-app/src/views/layout/sideBar/model.ts
 * @Description:
 */
export interface RoutesDataItem {
    // 菜单中是否隐藏
    hidden?: boolean;
    // 图标的名称，显示在菜单标题前
    icon?: string;
    //父亲id
    parentId?: number;
    id?: String;
    path?: String;
    // 权限控制，页面角色(您可以设置多个角色)
    roles?: string[];
    // 标题，路由在菜单、浏览器title 或 面包屑中展示的文字，目前可以使用locales
    name?: string;
    // 跳转地址
    pageUrl?: string;

    redirect?: Object;
    // 组件页面
    component?: Object;
    // 子集
    children: RoutesDataItem[] & RouteRecordRaw[];
    /**
     * 面包屑自定义内容：
     *     1、默认不配置按照路由自动读取；
     *     2、设置为 false , 按照路由自动读取并不读当前自己；
     *     3、配置对应的面包屑格式如下：
     */
    breadcrumb?: RoutesDataItem[] | false;
    /**
     * 左侧菜单选中，如果设置路径，侧栏将突出显示你设置的路径对应的侧栏导航
     *   1、（默认 route.path），此参数是为了满足特殊页面特殊需求，
     *   2、如：详情页等选中侧栏导航或在模块A下面的页面，想选模块B为导航选中状态
     */
    selectLeftMenu?: string;
    /**
     * 所属顶级菜单,当顶级菜单存在时，用于选中顶部菜单，与侧栏菜单切换
     *   1、三级路由此参数的作用是选中顶级菜单
     *   2、二级路由此参数的作用是所属某个顶级菜单的下面，两个层级的必须同时填写一致，如果path设置的是外链，此参数必填
     *   3、(默认不设置 path.split('/')[0])，此参数是为了满足特殊页面特殊需求
     */
    belongTopMenu?: string;
}
