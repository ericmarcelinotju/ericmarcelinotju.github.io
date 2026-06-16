import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    {
      path: '/company/:slug',
      name: 'company',
      component: () => import('../views/CompanyView.vue'),
    },
    // Unknown paths fall back to the home page.
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
  scrollBehavior(to, _from, savedPosition) {
    // Scroll to an in-page anchor (offset for the sticky header)...
    if (to.hash) return { el: to.hash, top: 84, behavior: 'smooth' }
    // ...restore position on back/forward...
    if (savedPosition) return savedPosition
    // ...otherwise start at the top of the new page.
    return { top: 0 }
  },
})

export default router
