<template>
  <el-table :data='tableData' style="width">
       <el-table-column prop='order_no' label='order_no' width='400' align='center'>
       </el-table-column>
       <el-table-column prop='price' label='price' :formatter='formatter' align='center'>
       </el-table-column>
       <el-table-column prop='status' label='status' width='100' align='center'
        :filters="[{text:'success',value:'success'},{text:'pending',value:'pending'}]"
        :filter-method='filterTag'
        filter-placement='bottom-end' >
             <template slot-scope='scope'>
                 <el-tag :type='scope.row.status==="success" ? "primary":"success" '
                 disable-transitions > {{scope.row.status}}</el-tag>
             </template>
       </el-table-column>
  </el-table>    
</template> 
<script>
import {fetchList} from '@/service/transaction.js'
export default {
    data(){
        return {
             tableData: []
        }
    },
    created(){
        this.fetchData()
    },
    methods:{
        formatter(row,column){
            return row.price
        },
        filterTag(value,row){
            return row.status===value
        },
        fetchData(){
            fetchList().then(Response=>{
                this.tableData=Response.data.items.slice(0,8)
            })
        } 
    }
}
</script>
<style>
</style>
