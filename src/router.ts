import Vue from 'vue'
import Router from 'vue-router'
import BookList from './views/BookList.vue'
import Cart from './views/Cart.vue'
import Receipt from './views/Receipt.vue'

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
  ],
})
