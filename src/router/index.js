import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Legal from '@/components/Legal'
import Portfolio from '@/components/Portfolio'
import MissingPage from '@/components/MissingPage'
import Donate from '@/components/Donate'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/legal',
      name: 'Legal',
      component: Legal
    },
    {
      path: '/portfolio',
      name: 'Portfolio',
      component: Portfolio
    },
    {
      path: '/donate',
      name: 'Donate',
      component: Donate
    },
    {
      path: '*',
      name: 'MissingPage',
      component: MissingPage
    }
  ]
})
