import Vue from 'vue'
import Router from 'vue-router'
import home from '@/view/home'
// import Login from '@/view/login/Login'
// import Register from '@/view/login/Register'
// import FindPsw from '@/view/login/FindPsw'

const editDetail = () => import ('@/view/editDetail.vue');

Vue.use(Router)


export default new Router({

  routes: [
    {
      path: '/',
      component:home
    },
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
