import { createRouter, createWebHashHistory } from 'vue-router'

const Recommend = () => import('@/views/recommend')
const Singer = () => import('@/views/singer')
const TopList = () => import('@/views/top-list')
const Search = () => import('@/views/search')
const routes = [
  {
    path: '/',
    redirect: '/recommend'
  }, {
    path: '/recommend',
    component: Recommend
  },
  {
    path: '/singer',
    component: Singer
  },
  {
    path: '/top-list',
    component: TopList
  },
  {
    path: '/search',
    component: Search
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
