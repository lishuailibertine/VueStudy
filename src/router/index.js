import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import SLStock from '@/components/stock/SLStock'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      name: 'SLStock',
      component: SLStock
    }
  ]
})
