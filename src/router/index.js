import Vue from 'vue'
import Router from 'vue-router'
import {
  getCookie
} from '@/utils/cookie.js'
import store from '@/store/index.js'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
NProgress.configure({
  showSpinner: false
})
Vue.use(Router)
import layout from '@/views/layout/layout'
//使用了vue-router的路由懒加载
// const dashboard=resolve=>require(['@/views/dashboard/index'],resolve)

//所有权限通用路由表
//如首页和登录页和一些不用权限的公用页面
export const constantRouterMap = [{
    path: '/login',
    name: 'login',
    component: () =>
      import('@/views/login/login.vue'),
    hidden: true
  },
  {
    path: '',
    name: 'layout',
    component: layout,
    children: [{
      path: 'index',
      meta: {
        'icon': 'home',
        'title': 'home'
      },
      name: 'index',
      component: () =>
        import('@/views/dashboard/admin/index.vue')
    }]
  }
]
//异步挂载的路由
//动态需要根据权限加载的路由表
export const asyncRouterMap = [{
    path: '/components',
    name: 'compo',
    component: layout,
    alwaysShow: true,
    meta: {
      'icon': 'com',
      'title': 'component'
    },
    children: [{
      path: 'drag-panel',
      name: 'dragpanel',
      meta: {
        'icon': 'drag',
        'title': 'drag'
      },
      component: () =>
        import('@/views/compo/drag-panel.vue')
    }, {
      path: 'dnd-list',
      name: 'dndlist',
      meta: {
        'icon': 'drag1',
        'title': 'list-drag'
      },
      component: () =>
        import('@/views/compo/dnd-list.vue')
    }, {
      path: 'drag-work',
      name: 'dragwork',
      meta: {
        'icon': 'drag2',
        'title': 'list-panel'
      },
      component: () =>
        import('@/views/compo/drag-work.vue')
    }]
  },
  {
    path: '/permission',
    component: layout,
    alwaysShow: true,
    meta: {
      'icon': 'permission_page',
      'title': 'permission',
      'roles': ['admin', 'editor'] // you can set roles in root nav
    },
    children: [{
      path: 'page',
      name: 'permissionPage',
      meta: {
        'icon': 'permission',
        'title': 'permission-page',
        'roles': ['admin'] // or you can only set roles in sub nav
      },
      component: () =>
        import('@/views/permission/page.vue')

    }, {
      path: 'directive',
      name: 'permissiondirective',
      meta: {
        'icon': 'directive',
        'title': 'permission-instruction'
        // if do not set roles, means: this page does not require permission
      },
      component: () =>
        import('@/views/permission/directive.vue')
    }]
  },
  {
    path: '/i18n',
    component: layout,
    children: [{
      path: 'index',
      name: 'i18n',
      meta: {
        'icon': 'international',
        'title': 'i18n'
      },
      component: () =>
        import('@/views/i18n/i18n.vue')
    }]
  },
  {
    path: '/nested',
    name: 'nested',
    component: layout,
    meta: {
      'icon': 'nested',
      'title': 'Nested'
    },
    children: [{
        path: 'menu1',
        name: 'menu1',
        component: () =>
          import('@/views/nestedroutes/menu-one/index.vue'),
        meta: {
          'icon': 'nest',
          'title': 'menu-1'
        },
        children: [{
            path: 'menu2',
            name: 'menu2',
            meta: {
              'icon': 'directive',
              'title': 'menu-1-1'
            },
            component: () =>
              import('@/views/nestedroutes/menu-one/menu1/index.vue')
          },
          {
            path: 'menu3',
            name: 'menu3',
            meta: {
              'icon': 'directive',
              'title': 'menu-1-2'
            },
            component: () =>
              import('@/views/nestedroutes/menu-one/menu2/index.vue')
          }
        ]
      },
      {
        path: 'menu4',
        name: 'menu4',
        component: () =>
          import('@/views/nestedroutes/menu-two/index.vue'),
        meta: {
          title: 'menu-2',
          'icon': 'nest'
        }
      }
    ]
  },
  {
    path: '*',
    redirect: '/404',
    hidden: true
  }

]
//实例化vue的时候只挂载constantRouter
let router = new Router({
  routes: constantRouterMap
})
export default router



//permission judge function
function hasPermission(roles, permissionRoles) {
  if (roles.indexOf('admin') >= 0) return true
  if (!permissionRoles) return true
  return roles.some(role => permissionRoles.indexOf(role) >= 0)
}

//next() 表示路由成功，直接进入to路由，不会再次调用router.beforeEach()
//next('login') 表示路由拦截成功，重定向至login，会再次调用router.beforeEach()
router.beforeEach((to, from, next) => { //
  NProgress.start()
  //根据cookie存储来判断是否登录
  if (getCookie('TOKEN')) {
    if (store.getters.roles.length === 0) {  //如果没有获取用户信息（权限角色），
      store.dispatch('getinfo').then(res => { //当页面刷新的时候，重新拉取数据
        const roles = res.data.roles
        store.dispatch('GenerateRoutes', {roles}).then(() => { //生成可访问的路由表
          router.addRoutes(store.getters.addRouters) //动态添加可访问路由表
          next({ ...to,replace: true}) //hack方法，确保addRouters已完成，set the replace: true so the navigation will not leave a history record
        })
      }).catch(err => {
        console.log('getinfo error')
      })
    } else {
      //没有动态改变权限的需求可直接next()
      if (hasPermission(store.getters.roles, to.meta.roles)) {
        next()
      } else {
        console.log('permissionsss')
      }
    }
  } else {
    if (to.path == '/login') { //想要进入的页面
      next() // 当循环到第二次调用的时候，直接进入,第二次进来是以/login的路由进来的
      NProgress.done()
    } else {
      next('/login') //想要进入的页面
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})
