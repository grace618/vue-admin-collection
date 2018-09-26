<template>
<div>
    <sidebar></sidebar>
    <div :class='[Collapse ? "main-container-l":"main-container"]'>
         <headerbar></headerbar>
         <tab></tab>
         <mainContent></mainContent>
    </div>
</div>
</template>
<script>
import mainContent from './component/main'
import headerbar from './component/headerbar'
import sidebar from './component/sidebar/sidebar'
import tab from './component/tab'
import {mapGetters} from 'vuex'
export default {
    components:{
        mainContent,headerbar,sidebar,tab
    },
    computed: {
        ...mapGetters([
            'Collapse'
        ])
    }
}
</script>
<style>
.main-container{
    margin-left: 180px;
}
.main-container-l{
    margin-left: 64px;
}
</style>
