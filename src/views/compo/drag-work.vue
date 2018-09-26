<template>
 <div class="components-container board">
    <panel-drag :list='list1' header-text='Todo' class="kanban todo"></panel-drag> 
    <panel-drag :list='list2' header-text='Working' class="kanban working"></panel-drag> 
    <panel-drag :list='list3' header-text='Done' class="kanban done" ></panel-drag>     
</div>    
</template>
<script>
 import PanelDrag from '@/components/Panel/index.vue'
export default {
   components:{
       PanelDrag
   },
   data(){
       return{
            list1: [
        { name: 'Mission', id: 1 },
        { name: 'Mission', id: 2 },
        { name: 'Mission', id: 3 },
        { name: 'Mission', id: 4 }
        ],
        list2: [
            { name: 'Mission', id: 5 },
            { name: 'Mission', id: 6 },
            { name: 'Mission', id: 7 }
        ],
        list3: [
            { name: 'Mission', id: 8 },
            { name: 'Mission', id: 9 },
            { name: 'Mission', id: 10 }
        ]
       }
   }

}
</script>
<style lang="scss">
.board {
  width: 1000px;
  margin-left: 20px;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  align-items: flex-start;
}
.kanban {
  &.todo {
    .board-column-header {
      background: #4A9FF9;
    }
  }
  &.working {
    .board-column-header {
      background: #f9944a;
    }
  }
  &.done {
    .board-column-header {
      background: #2ac06d;
    }
  }
}
</style>
