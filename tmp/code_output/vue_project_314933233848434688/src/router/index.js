import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/pages/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/pages/About.vue')
  },
  {
    path: '/articles',
    name: 'Articles',
    component: () => import('@/pages/Articles.vue')
  },
  {
    path: '/article/:id',
    name: 'ArticleDetail',
    component: () => import('@/pages/ArticleDetail.vue')
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('@/pages/Search.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router