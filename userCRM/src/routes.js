// default
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// Pages
import Home from '@/pages/Home'
import Shop from '@/pages/Shop'
import Page404 from '@/pages/404'
import Product from '@/pages/Product'
import Users from '@/pages/Users'
import Notify from '@/pages/NotifyPage'
import GitHubFinder from '@/pages/GitHubFinder'

// Routering
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/shop',
      name: 'shop',
      component: Shop
    },
    {
      path: '*',
      name: '404',
      component: Page404
    },
    {
      path: '/shop/:id',
      name: 'product',
      component: Product
    },
    {
      path: '/users',
      name: 'users',
      component: Users
    },
    {
      path: '/notify',
      name: 'notify',
      component: Notify
    },
    {
      path: '/gitHubFinder',
      name: 'gitHubFinder',
      component: GitHubFinder
    }
  ]
})