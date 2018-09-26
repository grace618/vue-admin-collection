<template>
    <header class="headbar">
        <div class="menuicon" @click="togglesidebar">
            <svg-icon icon-class="menu" class-name="">  //看props接收什么
            </svg-icon>
        </div> 
       <el-breadcrumb separator="/" class="breadcrumb" >
            <el-breadcrumb-item  :to="{path:'/'}" v-if='routes.length>1' v-for='item in routes' :key='item.path'>
                {{generateTitle(item.meta.title)}}
            </el-breadcrumb-item>
            <el-breadcrumb-item  :to="{path:'/'}" v-else :key='routes[0].path'>
                {{routes[0].meta.icon}}
            </el-breadcrumb-item>
        </el-breadcrumb>
        <!-- {{routes}} -->
      <el-dropdown trigger="click" class="my-dropdown">
        <span class="el-dropdown-link">
                <img :src="setavatar" alt="" class="avatar">
            <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
            <router-link to='/'>
                <el-dropdown-item>home</el-dropdown-item>
            </router-link>
            <el-dropdown-item>
                <span  @click="LogOut">Log Out</span>    
            </el-dropdown-item>
        </el-dropdown-menu>
         </el-dropdown>
    </header>
</template>

<script>
 import {mapGetters} from 'vuex'
 import {generateTitle} from '@/utils/i18n.js'
export default {
  name: "headerbar",
  data() {
    return {
      routes: []
    };
  },
  computed: {
    ...mapGetters([
      'setavatar'
    ])
  },
  watch: {
    $route(to, from) {
      this.currentRoute();
    }
  },
  created() {
    this.currentRoute();
  },
  methods: {
    togglesidebar() {
      this.$store.commit("TOGGLES");
    },
    currentRoute() {
      this.routes = this.$route.matched;
    },
    LogOut(){
      this.$store.dispatch('logout').then(()=>{
        location.reload()
      })
    },
    generateTitle
  }
};
</script>
<style lang='scss'>
.headbar {
  height: 60px;
  line-height: 60px;
  border-bottom: 1px solid #ccc;
  .menuicon {
    float: left;
    margin: 0 20px;
    cursor: pointer;
  }
  .breadcrumb {
    line-height: 60px;
    float: left;
  }
  .my-dropdown{
      position:absolute;
      right: 10px;
      cursor: pointer;
      .avatar{
        width: 40px;
        height: 40px;
        border-radius: 50%;
      }
  }
  
}
</style>

