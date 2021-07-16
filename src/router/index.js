import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */

import app from '../views/app/app'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const shopRoutes = [{
  path: '/',
  component: app,
  children: [
    {
      path: 'login',
      name: 'login',
      components: {
        content: () => import('@/views/login/login')
      },
      meta: {
        title: '登录',
        need_log: false
      }
    },
    {
      path: 'register',
      name: 'register',
      components: {
        head: () => import('@/views/loginHead/loginHead'),
        content: () => import('@/views/register/register'),
        footer: () => import('@/views/footer/footer')
      },
      meta: {
        title: '注册',
        need_log: false
      }
    },
    {
      path: '/',
      components: {
        head: () => import('@/views/head/head'),
        content: () => import('@/views/home/home'),
        footer: () => import('@/views/footer/footer'),
        need_log: false
      },
      children: [
        {
          path: 'list/:id',
          name: 'list',
          component: () => import('@/views/list/list'),
          meta: {
            title: '列表',
            need_log: false
          }
        },
        {
          path: 'search/:keyword',
          name: 'search',
          component: () => import('@/views/list/list'),
          meta: {
            title: '搜索',
            need_log: false
          }
        },
        {
          path: '/',
          name: 'index',
          component: () => import('@/views/index/index'),
          meta: {
            title: '首页',
            need_log: false
          }
        },
        {
          path: 'productDetail/:productId',
          name: 'productDetail',
          component: () => import('@/views/productDetail/productDetail'),
          meta: {
            title: '商品详情',
            need_log: false
          }
        },
        {
          path: 'member',
          name: 'member',
          component: () => import('@/views/member/member'),
          children: [
            {
              path: 'message',
              name: 'message',
              component: () => import('@/views/member/message'),
              meta: {
                title: '我的留言',
                need_log: true
              }
            },
            {
              path: 'receive',
              name: 'receive',
              component: () => import('@/views/member/receive'),
              meta: {
                title: '收件人信息',
                need_log: true
              }
            },
            {
              path: 'order',
              name: 'order',
              component: () => import('@/views/member/order'),
              meta: {
                title: '我的订单',
                need_log: true
              }
            },
            {
              path: 'orderDetail/:orderId',
              name: 'orderDetail',
              component: () => import('@/views/member/orderDetail'),
              meta: {
                title: '我的订单',
                need_log: true
              }
            },
            {
              path: 'collection',
              name: 'collection',
              component: () => import('@/views/member/collection'),
              meta: {
                title: '我的收藏',
                need_log: true
              }
            },
            {
              path: 'userinfo',
              name: 'userinfo',
              component: () => import('@/views/member/userinfo'),
              meta: {
                title: '用户信息',
                need_log: true
              }
            }
          ]
        }
      ]
    },
    {
      path: 'shoppingcart',
      components: {
        head: () => import('@/views/head/shophead'),
        content: () => import('@/views/home/home'),
        footer: () => import('@/views/footer/footer')
      },
      children: [
        {
          path: 'cart',
          name: 'cart',
          component: () => import('@/views/cart/cart'),
          meta: {
            title: '购物车',
            need_log: true
          }
        }
      ]
    },
    {
      path: '/404',
      component: () => import('@/views/404'),
      hidden: true
    },
    { path: '*', redirect: '/404', hidden: true }
  ]
}]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  // 选中的导航class属性
  linkActiveClass: 'active',
  routes: shopRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
