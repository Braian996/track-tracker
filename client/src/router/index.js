// Dependencies
import Vue from 'vue'

// Router
import Router from 'vue-router'

// Components
import HelloWorld from '@/components/HelloWorld'
import Register from '../components/Register/Register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    }
  ]
})
