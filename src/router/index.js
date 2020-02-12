import Vue from 'vue'
import VueRouter from 'vue-router'
import Root from '@/views/root/root'
const Top = () => import('@/views/top/Top.vue')
const New =() => import('@/views/new/New.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Root',
    component: Root,
    children: [
      {
        path: '/top',
        component: Top,
        name: 'Top',
        alias: '/'
      },
      {
        path: '/new',
        name: 'New',
        component: New,
      },
      // {
      //   path: '*',
      //   component: notFind,
      //   name: 'notFind'
      // }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
