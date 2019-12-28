import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from '../pages/landing/LandingPage'
import LoginPage from '../pages/login/LoginPage'
import RegisterPage from '../pages/register/RegisterPage'
import TermsConditionsPage from '../pages/termsConditions/TermsConditionsPage'
import HomePage from '../pages/home/HomePage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LandingPage',
      component: LandingPage
    },
    {
      path: '/login',
      name: 'LoginPage',
      component: LoginPage
    },
    {
      path: '/register',
      name: 'RegisterPage',
      component: RegisterPage
    },
    {
      path: '/terms',
      name: 'TermsConditionsPage',
      component: TermsConditionsPage
    },
    {
      path: '/home',
      name: 'HomePage',
      component: HomePage
    }
  ]
})
