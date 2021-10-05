import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Search',
    component: () => import('../views/Curador/SearchCurador.vue')
  },
  {
    path: '/register-curador',
    name: 'Curador',
    component: () => import('../views/Curador/RegisterCurador.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
