<template>
    <el-row >
        <el-col :xs="12" :sm="12" :lg="6" class="panel">
            <div @click="ChangeData('newVisitis')">   
                <div class="panel-left">
                    <svg-icon icon-class='person' class-name="panel-icon"></svg-icon>
                </div>
                <div class="panel-right">
                    <p>New Visits</p>
                    <count-to :startVal="0" :endVal="102400" :duration="2600"></count-to>  
                </div>
           </div>
        </el-col>
        <el-col :xs="12" :sm="12" :lg="6" class="panel">
            <div @click="ChangeData('messages')">
                <div class="panel-left">
                <svg-icon icon-class='mes' class-name="panel-icon"></svg-icon>
                </div>
                    <div class="panel-right">
                    <p>Messages</p>
                    <count-to :startVal="0" :endVal="328900" :duration="2600"></count-to>  
                </div>
             </div>
        </el-col>
        <el-col :xs="12" :sm="12" :lg="6" class="panel">
            <div  @click="ChangeData('purchases')">
                <div class="panel-left">
                <svg-icon icon-class='money' class-name="panel-icon"></svg-icon>
                </div>
                <div class="panel-right">
                    <p>Purchases</p>
                    <count-to :startVal="0" :endVal="33321" :duration="2600"></count-to>  
                </div>
             </div>
        </el-col>
         <el-col :xs="12" :sm="12" :lg="6" class="panel">
            <div  @click="ChangeData('shoppings')">
                <div class="panel-left">
                <svg-icon icon-class='shop' class-name="panel-icon"></svg-icon>
                </div>
                <div class="panel-right">
                    <p>Shoppings</p>
                <count-to :startVal="0" :endVal="424221" :duration="2600"></count-to>  
                </div>
           </div>
        </el-col>
    </el-row>
</template>
<script>
import CountTo from 'vue-count-to'
export default {
    components: {
        CountTo
    },
    methods:{
        ChangeData(type){
            this.$emit('ChangeType',type)
        }
    }
}
</script>
<style scoped lang='scss'>
 .panel>div{
        background: white;
         overflow: hidden;
         height: 108px;
         padding: 10px 20px;
         cursor: pointer;
 }
 .panel>div:hover .panel-icon{
     fill: #66b1ff;
 }
 .panel{
     padding: 20px;
    
     .panel-left{
         float: left;
         line-height: 108px;
         .panel-icon{
             font-size: 48px;
           
         }
     }
     .panel-right{
         float: right;
     }
 }
</style>
