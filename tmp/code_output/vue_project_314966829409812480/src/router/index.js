import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import Works from '@/pages/Works.vue'
import About from '@/pages/About.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/works', component: Works },
    { path: '/about', component: About }
  ]
})

export default router