import Vue from 'vue'
import Router from 'vue-router'
import RegisterPage from '../pages/register/RegisterPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/register',
      name: 'RegisterPage',
      component: RegisterPage
    }
  ]
})
