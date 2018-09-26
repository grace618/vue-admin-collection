<template>
   <div >
       <el-radio-group @change="change"  v-model="lang" size="medium" >
           <el-radio label="en" border>English</el-radio>
            <el-radio label="zh" border>中文</el-radio>
       </el-radio-group>
    </div>
</template>
<script>
export default {
    data(){
        return {
            lang:'1'
        }
    },
    computed:{
        // lang:{//如果给计算属性设值，需要设置setter,computed默认有getter
        //     set(lang){
        //         this.$i18n.locale =lang
        //     },
        //     get(){
        //        return 'en'
        //     }
        // }
    },
    methods:{
        change(value){
           this.$i18n.locale=value
        }
    }
}
</script>
