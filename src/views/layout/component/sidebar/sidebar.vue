<template>
    <div width='auto' class="aside"  >
        <el-menu :collapse="Collapse" :router='router' default='/' class='el-menu-vertical-demo'>
           <sidebar-child v-for='item in permission_routers' :item="item" :key="item.name" :base-path="item.path"></sidebar-child>
        </el-menu>
    </div>   
</template>
<script>
import {mapGetters} from 'vuex'
import SidebarChild from './sidebarchild'
export default {
 components: {
     SidebarChild
 },
 data(){
     return {
       //  routes:this.$router.options.routes  
       router:true    //element是否启用导航的路由
     }
 },
 computed:{
     ...mapGetters([
         'permission_routers',  //这里的permission_routers是经过过滤的所有路由
         'Collapse'
     ])
//    permission_routers(){
//     console.log( this.$store.getters.permission_routers,'路由') 
//        return this.$store.getters.permission_routers
//     }
 }
}
</script>
<style>
.aside {
  transition: width 0.28s;
  height: 100%;
  position: fixed;
  font-size: 0;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 1001;
  overflow: hidden;
  border-right: solid 1px #e6e6e6;
  /* background: #ccc; */
}


</style>


