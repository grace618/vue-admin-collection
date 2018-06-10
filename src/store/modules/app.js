
const app={
    state:{
        iscollapse:false
    },
    getters:{
        Collapse:state=>state.iscollapse
    },
    mutations: {
        TOGGLES:state=>{
           state.iscollapse=!state.iscollapse
        }
    }
}
export default app