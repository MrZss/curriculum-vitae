import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import home from '@/views/home'
export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home
    },
  ]
})