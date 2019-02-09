import Vue from 'vue'
import Router from 'vue-router'
import BookList from './views/BookList.vue'
import Cart from './views/Cart.vue'
import Receipt from './views/Receipt.vue'
import NotFound from './views/NotFound.vue'
import NetworkIssue from './views/NetworkIssue.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: BookList,
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart,
    },
    {
      path: '/receipt',
      name: 'receipt',
      component: Receipt,
    },
    {
      path: '/404',
      name: '404',
      component: NotFound,
      props: true,
    },
    {
      path: '/network-issue',
      name: 'network-issue',
      component: NetworkIssue,
    },
    {
      path: '*',
      redirect: { name: '404' },
    },
  ],
})
