import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/cats',
      name: 'cats',
      component: () => import('./views/Cats.vue')
    },
    {
      path: '/dogs',
      name: 'dogs',
      component: () => import('./views/Dogs.vue')
    },
    {
      path: '/pets/:species/:id',
      name: 'pet',
      component: () => import('./views/Pet.vue')
    }
  ]
})
