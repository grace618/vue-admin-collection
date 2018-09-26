<template>
    <DragList :list2='list2' :list1='list1'></DragList>    
</template>
<script>
import DragList from '@/components/DndList/index.vue'

import {fetChList} from '@/service/article.js'

export default {
    components:{
        DragList
    },
    data(){
        return {
            list1:[],
            list2:[]
        }
    },
    created(){
        this.getData()
    },
    methods:{
        getData(){
            fetChList().then(res=>{
                this.list1=res.data.items.splice(0,5)
                this.list2=res.data.items
            })
        }
    }
}
</script>
