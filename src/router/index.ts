import { createRouter, createWebHistory } from 'vue-router'
import List from '@/views/ListView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: List
    },
    {
      path: '/crearteProduct',
      name: 'about',
      component: () => import('@/views/CreateView.vue')
    },
    {
      path: '/updateProduct/:id',
      name: 'updateProduct',
      component: () => import('../views/UpdateProductView.vue')
    }
  ]
})

export default router
