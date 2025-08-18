import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import Products from '@/pages/Products.vue'
import News from '@/pages/News.vue'
import Contact from '@/pages/Contact.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/products', component: Products },
    { path: '/news', component: News },
    { path: '/contact', component: Contact }
  ]
})

export default router