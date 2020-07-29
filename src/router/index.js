import VueRouter from 'vue-router'
import vMainWrapper from '../v-main-wrapper'
import vRazrabotka from '../v-product'
import vMobile from '../v-mobile'
import vCrm from '../v-crm'
import vBots from '../v-bots'

export default new VueRouter({
  routes: [
    {
      path: '/',
      component: vMainWrapper

    },
    {
      path: '/razrabotka',
      component: vRazrabotka,
      name: 'razrabotka',

    },
    {
      path: '/mobile',
      component: vMobile,
      name: 'mobile',

    },
    {
      path: '/crm',
      component: vCrm,
      name: 'crm',
    },
    {
      path: '/bots',
      component: vBots,
      name: 'bots',
    },
  ],
  mode: 'history'
})
