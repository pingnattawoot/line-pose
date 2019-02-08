import Vue from 'vue'
import Vuex from 'vuex'
import book from '@/store/modules/book'
import cart from '@/store/modules/cart'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    book,
    cart,
  },
})
