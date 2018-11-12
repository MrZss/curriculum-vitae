import Vue from 'vue'
import Router from 'vue-router'
import home from '@/view/home'
const editDetail = () => import ('@/view/editDetail.vue');

Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/editdetail',
      name: 'editDetail',
      component: editDetail
    },
  ]
})
