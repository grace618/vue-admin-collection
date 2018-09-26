<template>
    <div>
        <panel-group @ChangeType='getType'/>
        <line-chart :message='type'/>
        <el-row :gutter='0' class="echartmap">
            <el-col :sm='24' :xs='24' :lg='8'>
                <value-axe></value-axe>
            </el-col>
            <el-col :sm='24' :xs='24' :lg='8'>
                <rose-diagram></rose-diagram>
            </el-col>
            <el-col :sm='24' :xs='24' :lg='8'>
                <global-map></global-map>    
            </el-col>
        </el-row>
        <el-row>
            <el-col>
                <transaction-table></transaction-table>    
            </el-col>
        </el-row>
    </div>
</template>
<script>
import PanelGroup from './components/PanelGroup'
import LineChart from './components/LineChart'
import ValueAxe from './components/ValueAxes'
import RoseDiagram from './components/RoseDiagram'
import GlobalMap from './components/GlobalMap'
import TransactionTable from './components/TransactionTable'
import BoxCard from './components/BoxCard'
import TodoList from './components/TodoList/index'
export default {
   components: {
       PanelGroup,LineChart,ValueAxe,RoseDiagram,GlobalMap,TransactionTable,BoxCard,TodoList
   },
   data(){
       return {
           type:'newVisitis'
       }
   },
   methods:{
       getType(type){
           this.type=type
       }
   }
}
</script>
<style>
.echartmap{
    margin-top: 45px;
}
</style>
