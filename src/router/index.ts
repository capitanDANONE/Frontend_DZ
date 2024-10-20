import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/main.vue'
import semester1 from '../views/semester1.vue'
import services from '../views/services.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/semester1',
    name: 'semester1',
    component: semester1
  },
  {
    path: '/services',
    name: 'services',
    component: services
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
