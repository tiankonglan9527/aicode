import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import Gallery from '@/pages/Gallery.vue'
import ProjectDetail from '@/pages/ProjectDetail.vue'
import Resume from '@/pages/Resume.vue'
import Contact from '@/pages/Contact.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/gallery', component: Gallery },
    { path: '/project/:id', component: ProjectDetail },
    { path: '/resume', component: Resume },
    { path: '/contact', component: Contact }
  ]
})

export default router