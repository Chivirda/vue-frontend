import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'legalentity',
    component: () => import('@/views/LegalEntity.vue')
  },
  {
    path: '/pharmacy',
    name: 'pharmacy',
    component: () => import('@/views/SelectPharmacies.vue')
  },
  {
    path: '/terms',
    name: 'terms',
    component: () => import('@/views/EnterContractTerms.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
