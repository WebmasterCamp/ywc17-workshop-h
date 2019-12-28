import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from '../pages/landing/LandingPage'
import LoginPage from '../pages/login/LoginPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing',
      component: LandingPage
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage
    }
  ]
})
