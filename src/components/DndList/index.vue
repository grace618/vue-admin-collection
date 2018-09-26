<template>
    <div class="dndList">
            <div class="dndList-list">
                <h3>List1</h3>
                <draggable  :options="{group:'people'}" @start='drag=true' @end='drag=false' class="dragArea" >
                    <div v-for='element in list1' :key='element.id'>
                        {{element.id+element.author+">"+ element.title}}
                          
                    </div>
                </draggable>
            </div>
            <div class="dndList-list" >
                <h3>List2</h3>
                <draggable  class="dragArea" :options="{group:'people'}" @start='drag=true' @end='drag=false' >
                    <div v-for='element in list2' :key='element.id'>{{element.id+element.author+">"+ element.title}}</div>
                </draggable>
            </div>  
    </div>  
</template>
<script>
import draggable from 'vuedraggable'
export default {
    components:{
        draggable
    },
    props:{
        list1:{
            type:Array,
            default(){
                return []
            }
        },
        list2:{
            type:Array,
            default(){
                return []
            }
        }
    },
    methods:{
       
    }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.dndList {
  background: #fff;
  padding-bottom: 40px;
  &:after {
    content: "";
    display: table;
    clear: both;
  }
  .dndList-list {
    float: left;
    padding-bottom: 30px;
    width: 46%;
    &:first-of-type {
      margin-right: 2%;
      margin: 0 2% 0 2%;
    }
    .dragArea {
      margin-top: 15px;
      min-height: 50px;
      padding-bottom: 30px;
      div{
          border:1px solid #eaeaea;
          padding: 10px;
         font-size: 12px;
          margin: 10px 0;
          cursor: pointer;
          background: #eaeaea;
          span{
              float: right;
          }
        
      }
    }
  }
}

.list-complete-item {
  cursor: pointer;
  position: relative;
  font-size: 14px;
  padding: 5px 12px;
  margin-top: 4px;
  border: 1px solid #bfcbd9;
  transition: all 1s;
}

.list-complete-item-handle {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-right: 50px;
}

.list-complete-item-handle2 {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-right: 20px;
}

.list-complete-item.sortable-chosen {
  background: #4AB7BD;
}

.list-complete-item.sortable-ghost {
  background: #30B08F;
}

.list-complete-enter,
.list-complete-leave-active {
  opacity: 0;
}
</style>

