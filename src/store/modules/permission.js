//通过用户的权限和之前在router.js里面asyncRouterMap的每一个页面所需要的权限做匹配，
//最后返回一个该用户能够访问路由有哪些。
import { asyncRouterMap, constantRouterMap } from '@/router'
// console.log(constantRouterMap,'常量路由1')

/*
    *通过meta.role判断是否与当前用户权限匹配
    *@param roles
    *@param route
*/
function hasPermission(roles,route){
    if(route.meta && route.meta.roles){
        return roles.some(role=>route.meta.roles.indexOf(role)>=0)
    }else {
        return true
    }
}
/*
*递归过滤异步路由表，返回符合用户角色权限的路由表
*@param asyncRouterMap
@param roles
*/
function filteerAsyncRouter(asyncRouterMap,roles){
    const accessRouters=asyncRouterMap.filter(route=>{
        if(hasPermission(roles,route)){
            if(route.children && route.children.length){
                route.children=filteerAsyncRouter(route.children,roles)
            }
            return true
        }
        return false
    })
    return accessRouters
}

const permission={
    state:{
        routers:constantRouterMap,
        addRouters:[]
    },
    getters: {
        permission_routers:state=>state.routers  //不需要权限的路由
    },
    mutations:{
        SET_ROUTERS:(state,routers)=>{
            state.addRouters=routers
            state.routers=constantRouterMap.concat(routers)
        }
    },
    actions:{
      async  GenerateRoutes({commit},data){
            const {roles}=data
            let accessedRouters
            if(roles.indexOf('admin')>=0){
                accessedRouters=asyncRouterMap
            }else{
                accessedRouters=filteerAsyncRouter(asyncRouterMap,roles)
            }
            await commit('SET_ROUTERS',accessedRouters)
        }
    }
}

export default permission
