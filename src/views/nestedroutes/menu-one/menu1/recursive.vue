<template>
 <ul>
     <li  v-for='ele in list' :key='ele.id'>
        <span>{{ele.id}}</span>
        <!-- 有条件判断，不会无限循环，:list接收 调用组件别人传入的值 -->
        <side-item :list='ele.children' v-if="hasChildren(ele.children)"></side-item>
     </li>
 </ul>
</template>
<script>
export default {
    name:'SideItem',
    props:{
        list:{
             type:Array,
             required: true
        }  
    },
    methods: {
        hasChildren(children){
            for(var i in children){
                if(  children[i]  ){
                    if(children[i].show!='undefined'){
                       return true
                    }else{
                      return children[i].show
                    }
                }
            }
            return false;
        }
    }
}
</script>