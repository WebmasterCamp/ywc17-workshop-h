import Vue from 'vue'
import Router from 'vue-router'
import RegisterPage from '../pages/register/RegisterPage'
import HomePage from '../pages/home/HomePage'
import TermsConditionsPage from '../pages/termsConditions/TermsConditionsPage'

Vue.use(Router)

export default new Router({
  routes: [
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
