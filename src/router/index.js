import Vue from 'vue'
import Router from 'vue-router'
import OneHome from '@/components/one/OneHome'
import OneMain from '@/components/one/OneDesign'
import OneNavigation from '@/components/one/OneNavigation'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'OneHome',
      component: OneHome,
      redirect: '/oneMain',
      children: [
        {
          path: 'oneMain',
          component: OneMain
        },
        {
          path: 'oneNavigation',
          component: OneNavigation
        }
      ]
    }
  ]
})
