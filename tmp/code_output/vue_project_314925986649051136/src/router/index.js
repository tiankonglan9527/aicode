import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import ArticleDetail from '@/pages/ArticleDetail.vue'
import Categories from '@/pages/Categories.vue'
import Search from '@/pages/Search.vue'
import About from '@/pages/About.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/article/:id', component: ArticleDetail },
  { path: '/categories', component: Categories },
  { path: '/search', component: Search },
  { path: '/about', component: About }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router