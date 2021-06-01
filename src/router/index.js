import Vue from 'vue'
import Router from 'vue-router'

import PageDashboard from '../page/PageDashboard'
import PageAbout from '../page/PageAbout'
import Page404 from '../page/Page404'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/dashboard',
      name: 'dashboard',
      component: PageDashboard
    },
    {
      path: '/dashboard/:page',
      name: 'dashboardPage',
      component: PageDashboard
    },
    {
      path: '/dashboard/add/:category',
      name: 'dashboardCategory',
      component: PageDashboard
    },
    {
      path: '/about',
      name: 'about',
      component: PageAbout
    },
    {
      path: '*',
      name: 'NotFound',
      component: Page404
    }
  ]
})
const titles = {
  dashboard: 'Приложение',
  about: 'Чё как?',
  NotFound: 'Всё пропало'
}

router.afterEach((to, from) => {
  document.title = titles[to.name]
})

export default router
