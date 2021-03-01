import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
  // 页面跳转至首页
  {
    path: '/',
    redirect: '/home',
  },

  // 主页
  {
    name: 'Home',
    path: '/home',
    component: () => import('@/views/home/index'),
  },
  {
    // 商品分类
    name: 'Sort',
    path: '/sort',
    component: () => import('@/views/home/Sort'),
  },

  // 爱玩
  {
    name: 'IPlay',
    path: '/iPlay',
    component: () => import('@/views/i-play/index'),
  },

  // 我的
  {
    name: 'Myself',
    path: '/myself',
    component: () => import('@/views/myself/index'),
  },
  {
    // 我卖出的
    name: 'MyProduct',
    path: '/myProduct',
    component: () => import('@/views/myself/MyProduct'),
  },
  {
    // 设置按钮页面
    name: 'Set',
    path: '/set',
    component: () => import('@/views/myself/set/index'),
  },
  {
    // 个人资料设置
    name: 'MyInfoSet',
    path: '/set/myInfoSet',
    component: () => import('@/views/myself/set/my-info-set/index'),
  },
  // 收获地址
  {
    name: 'Address',
    path: '/set/address',
    component: () => import('@/views/myself/set/address/index'),
  },
  // 账号
  {
    name: 'Account',
    path: '/set/account',
    component: () => import('@/views/myself/set/account/index'),
  },
  {
    // 手机号换绑
    name: 'ChangePhone',
    path: '/set/account/changePhone',
    component: () => import('@/views/myself/set/account/change-phone/index'),
  },
  {
    // 修改密码
    name: 'ChangePassword',
    path: '/set/account/changePassword',
    component: () => import('@/views/myself/set/account/change-password/index'),
  },

  {
    // 编辑地址
    name: 'EditAddress',
    path: '/set/address/edit',
    component: () => import('@/views/myself/set/address/EditAddress'),
  },

  // 消息页
  {
    name: 'Message',
    path: '/message',
    component: () => import('@/views/message/index'),
  },

  // 登录
  {
    name: 'Login',
    path: '/login',
    component: () => import('@/views/login/index'),
  },
]

const router = new Router({
  routes,
  mode: 'history',
})

router.beforeEach((to, from, next) => {
  // 判断用户是否登录
  if (to.path == '/message' || to.path == '/myself') {
    if (sessionStorage.getItem('user') == null) {
      router.app.$options.store.commit('setToPage', to.path)
      next('/login')
    }
  }
  next()
})

export default router
