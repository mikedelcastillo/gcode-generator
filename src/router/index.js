import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'index',
    component: require('../views/Home.vue').default,
  },
  {
    path: '/generate/:generator_id',
    name: 'generate',
    component: require('../views/Generate.vue').default,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
