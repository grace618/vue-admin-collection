<template>
    <div width='auto' class="aside"  >
        <sidebarchild :routes='permission_routers'></sidebarchild>
    </div>   
</template>
<script>
import {mapGetters} from 'vuex'
import sidebarchild from './sidebarchild'
export default {
 components: {
     sidebarchild
 },
 computed:{
     ...mapGetters([
         'permission_routers'   //获取不需要权限的路由
     ])
    // a(){
    //     console.log(this.$store.getters.permission_routers)
    // }
 },
 data(){
     console.log(this.$store.getters.permission_routers,'路由')
     return {
       //  routes:this.$router.options.routes      
     }
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
  background: #ccc;
}


</style>


