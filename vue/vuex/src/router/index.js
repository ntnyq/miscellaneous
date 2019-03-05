import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'hash',
  base: __dirname,
  routes: [
    {
      path: '*',
      redirect: '/index',
    },
    {
      path: '/index',
      name: 'Index',
      component: () => import('@/views/index'),
    },
    {
      path: '/foo',
      name: 'Foo',
      component: () => import('@/views/foo'),
    },
    {
      path: '/bar',
      name: 'Bar',
      component: () => import('@/views/bar'),
    },
  ],
})

export default router
