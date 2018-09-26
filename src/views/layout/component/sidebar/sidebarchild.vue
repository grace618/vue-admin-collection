<template>
      <!-- Menu Attribute router为true时启用路由 -->
      <li  v-if="!item.hidden&&item.children">
              <!-- 有一个子菜单，直接显示,没有下拉 -->             
          <el-menu-item :index='item.path+"/"+item.children[0].path' v-if='hasOneShowingChildren(item.children)&&!item.children[0].children&&!item.alwaysShow'>
              <svg-icon v-if="item.children[0].meta&&item.children[0].meta.icon" :icon-class='item.children[0].meta.icon'></svg-icon>
              <span slot="title" v-if="item.children[0].meta&&item.children[0].meta.title">
                  {{generateTitle( item.children[0].meta.title ) }}
              </span>
          </el-menu-item>  
          <!-- 有多个子菜单 -->

          <!-- 当路由alwayshow时，也显示，例如下拉菜单只有一个子组件的 -->
          <el-submenu :index="item.path" v-else >
              <template slot='title'>
                  <svg-icon v-if="item.meta&&item.meta.icon"  :icon-class='item.meta.icon'></svg-icon>
                  <span slot="title" v-if="item.meta&&item.meta.title">{{generateTitle(item.meta.title)}}</span>
              </template>

              <el-menu-item-group v-for='list in item.children' :key='list.path' v-if="!list.hidden">
                  <!-- 其实path全路径感觉写在router.js里也可以吧，下面无限循环的base_path变成了最上父级路径加子级路径:base-path="resolvePath(list.path) -->
                  <!-- 路径出错时，报堆栈溢出的错误 -->
                  <sidebar-child v-if="list.children&&list.children.length>0" :item="list" :key="list.path" :base-path="resolvePath(list.path)"></sidebar-child>  
                  <!-- 调用自己这个组件sidebarchild.vue,路由无限嵌套，模板里sidebar-child ,js里SidebarChild,当children里面还有children时调用自己嵌套 -->
                  <!-- 此处v-else对应上面同级的v-if -->
                  <el-menu-item :index="resolvePath(list.path)"  v-else>
                        <svg-icon v-if="list.meta&&list.meta.icon" :icon-class='list.meta.icon'></svg-icon>
                        <span slot="title" v-if="list.meta&&list.meta.title">{{generateTitle(list.meta.title)}}</span>
                  </el-menu-item>
              </el-menu-item-group>
          </el-submenu>       
      </li>
</template>
<script>
import path from 'path'
import { mapGetters } from "vuex";
import { generateTitle } from "@/utils/i18n.js"; //在method里面
export default {
  name: "SidebarChild",
  data() {
    return {
    //  router: true
    };
  },
  props: {
    item: {
      type: [Object],
      required: true
    },
    isNest: {
      type: Boolean,
      default: false
    },
    basePath: {
      type: String,
      default: ''
    }
  },
  methods: {
    //只有一个children的
    hasOneShowingChildren(children) {
      //过滤  $ele.filter(selector) [].filter(fn)
      const oneChild = children.filter((i, n) => {
        //过滤嵌套路由里hidden
        return !i.hidden;
      });
      if (oneChild.length === 1) {
        return true;
      }
      return false;
    },
    resolvePath(...paths) {
      return path.resolve(this.basePath, ...paths)
    },
    generateTitle
  }
};
</script>
<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 180px;
  min-height: 400px;
}
.el-menu {
  border-right: none;
}
</style>

