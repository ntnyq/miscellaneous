import Vue from 'vue'
import Router from 'vue-router'
import { getToken } from '@/utils/auth'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'IndexPage',
    component: () => import('@/views/IndexPage'),
  },
  {
    path: '/me',
    name: 'PersonPage',
    component: () => import('@/views/PersonPage'),
    meta: { auth: true },
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: () => import('@/views/LoginPage'),
  },
  {
    path: '/regist',
    name: 'RegistPage',
    component: () => import('@/views/RegistPage'),
  },
  {
    path: '/logout',
    name: 'LogoutPage',
    component: () => import('@/views/LogoutPage'),
    meta: { auth: true },
  },
  {
    path: '*',
    redirect: { name: 'IndexPage' },
  },
]

let router = new Router({
  mode: 'hash',
  routes,
})

router.beforeEach(({ meta, path }, from, next) => {
  const WHITE_LIST = ['/login', '/regist']

  if (getToken()) {
    if (WHITE_LIST.includes(path)) {
      next({ name: 'PersonPage' })
    } else {
      next()
    }
  } else {
    if (meta.auth) {
      next({ name: 'LoginPage' })
    } else {
      next()
    }
  }
})

export default router
