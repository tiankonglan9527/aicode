import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Tasks from '../pages/Tasks.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/tasks', component: Tasks }
  ]
})

export default router