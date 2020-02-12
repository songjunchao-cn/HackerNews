import Vue from 'vue'
import VueRouter from 'vue-router'
import Top from '@/views/top/Top.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Top',
    component: Top
  },
  {
    path: '/news',
    name: 'News',
    component: () => import('@/views/news/News.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
