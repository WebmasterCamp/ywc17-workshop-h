import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from '../pages/landing/LandingPage'
import LoginPage from '../pages/login/LoginPage'
import RegisterPage from '../pages/register/RegisterPage'
import TermsConditionsPage from '../pages/termsConditions/TermsConditionsPage'
import HomePage from '../pages/home/HomePage'
import WaitingPage from '../pages/waiting/WaitingPage'
import WaitPage from '../pages/wait/WaitPage'
import SelectDriverPage from '../pages/selectDriver/SelectDriverPage'
import ContactPage from '../pages/contact/ContactPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
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
    },
    {
      path: '/driving',
      name: 'WaitingPage',
      component: WaitingPage
    },
    {
      path: '/wait',
      name: 'WaitPage',
      component: WaitPage
    },
    {
      path: '/select',
      name: 'SelectDriverPage',
      component: SelectDriverPage
    },
    {
      path: '/contact',
      name: 'ContactPage',
      component: ContactPage
    },
  ]
})
