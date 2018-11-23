import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home.vue'
import Store from '@/components/Store.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
        path: '/store/:id',
        name: 'store',
        //component: () => import(/* webpackChunkName: "about" */ './views/Product.vue'),
        component: Store,
    },
  ]
})
