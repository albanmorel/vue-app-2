import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import VTooltip from 'v-tooltip';

Vue.use(VueRouter)
Vue.use(VTooltip)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/myFavorite',
    name: 'myFavorite',
    props: true,
    component: () => import('../views/myFavorite.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
