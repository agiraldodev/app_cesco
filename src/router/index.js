import { createRouter, createWebHistory } from 'vue-router'

import LoginView from '@/views/LoginView.vue'
import InicioView from '@/views/InicioView.vue'
import ClientesView from '@/views/ClientesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: InicioView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/clientes',
      name: 'clientes',
      component: ClientesView
    }    
  ]
})

export default router
