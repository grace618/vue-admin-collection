<template>
    <!-- <el-menu default-active="1-4-1" class="el-menu-vertical-demo"  :collapse="Collapse">
        <el-submenu index="1">
            <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">导航一</span>
            </template>
            <el-menu-item-group>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group> 
        </el-submenu>
        <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="3">
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
        </el-menu-item>
        </el-menu> -->
        <!-- Menu Attribute router为true时启用路由 -->
        <el-menu default='/' class='el-menu-vertical-demo' :collapse="Collapse" :router='router'>
            <template v-for='item in routes'>
                <!-- 有子菜单 -->
                <el-submenu :index="item.path" v-if='!item.hidden&&item.children' >
                    <template slot='title'>
                        <svg-icon :icon-class='item.meta.icon'></svg-icon>
                        <span slot="title">{{item.meta.title}}</span>
                    </template>
                    <el-menu-item-group v-for='list in item.children' :key='list.name'>
                        <el-menu-item :index="item.path+'/'+list.path">
                        <svg-icon :icon-class='list.meta.icon'></svg-icon>
                        {{list.meta.title}}
                        </el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <!-- 没有子菜单 -->             
                <el-menu-item :index='item.path' v-else-if='!item.hidden'>
                    <svg-icon :icon-class='item.meta.icon'></svg-icon>
                    <span slot="title">{{item.meta.title}}</span>
                </el-menu-item>             
            </template>    
        </el-menu>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    data(){
        return {
            router:true
        }
    },
    props: {
        routes:{
            type:[Object,Array],
            required:true
        }
    },
     computed:{
       ...mapGetters([
           'Collapse'  //用引号括起来
       ])    
    //   Collapse(){   
    //    return this.$store.getters.Collapse
    //   }
  },
  created(){
    
  },
  methods:{
      getDATE(){
         
      }
  }
}
</script>
<style>
 .el-menu-vertical-demo:not(.el-menu--collapse) {
    width:180px;
    min-height: 400px;
  }
</style>

