import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      name: 'helloworld',
      path: '/',
      component: r => require.ensure([], () => r(require('../components/HelloWorld')), 'helloworld')
    }
  ]
})
