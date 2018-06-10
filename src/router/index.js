import Vue from 'vue'
import Router from 'vue-router'

import {getCookie} from '@/utils/cookie.js'
import store from '@/store/index.js'
Vue.use(Router)

import layout from '@/views/layout/layout'
//使用了vue-router的路由懒加载
// const dashboard=resolve=>require(['@/views/dashboard/index'],resolve)

//所有权限通用路由表
//如首页和登录页和一些不用权限的公用页面
  // {
    //   path:'/login',
    //   name:'login',
    //   hidden:true,
    //   component:()=>import('@/views/login/login.vue')
    // },
    // {
    //   path: '/',
    //   name: 'layout',
    //   meta:{'icon':'home','title':'首页'},
    //   component: layout
    // },
export const constantRouterMap=[
     {
       path:'/login',
       component:()=>import('@/views/login/login.vue'),
       hidden:true
     },
     {
        path: '/',
        name: 'layout',
        meta:{'icon':'home','title':'首页'},
        component: layout
    }
]


//异步挂载的路由
//动态需要根据权限加载的路由表
export const asyncRouterMap=[
  {
    path:'/components',
    name:'compo',
    component:layout,
    meta:{'icon':'com','title':'组件'},
    children:[
      {
      path:'drag-panel',
      name:'dragpanel',
      meta:{'icon':'drag','title':'拖拽'},
      component:()=>import('@/views/compo/drag-panel.vue')
     }
  ]
  },
  {
    path:'/permission',
    component:layout,
    meta:{'icon':'permission_page','title':'权限测试页','roles':['admin','editor']},
    children:[
      {
        path:'page',
        name:'permissionPage',
        meta:{'icon':'permission','title':'权限页面','roles':['admin']},
        component:()=>import('@/views/permission/page.vue')
      },{
        path:'directive',
        name:'permissiondirective',
        meta:{'icon':'directive','title':'权限指令'},
        component:()=>import('@/views/permission/directive.vue')
      }
    ]
   },
   {path:'*',redirect:'/404,hidden:true'}
]


//实例化vue的时候只挂载constantRouter
let router=new Router({
  routes:constantRouterMap
})

export default router
//next() 表示路由成功，直接进入to路由，不会再次调用router.beforeEach()
//next('login') 表示路由拦截成功，重定向至login，会再次调用router.beforeEach()
router.beforeEach((to,from,next)=>{  //
  //根据cookie存储来判断是否登录
  if(getCookie('TOKEN')){
    store.dispatch('getinfo').then(res=>{   //当页面刷新的时候，重新拉取数据
      // console.log(res)
      const roles=res.data.role
      store.dispatch('GenerateRoutes', {roles}).then(()=>{//生成可访问的路由表
        router.addRoutes(store.getters.addRoutes)//动态添加可访问路由表
        console.log('addrout')
        next({...to,replace:true})//hack方法，确保addRouters已完成，set the replace: true so the navigation will not leave a history record
      }).catch(err=>{
        console.log(err)
      })
    })
    next()
  }else{
    if(to.path=='/login'){   //想要进入的页面
      next()  // 当循环到第二次调用的时候，直接进入,第二次进来是以/login的路由进来的
    }else{
      next('/login')  //想要进入的页面
    }
  }
})
