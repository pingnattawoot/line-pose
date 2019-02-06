import Vue from 'vue'
import Vuex from 'vuex'
import book from '@/store/modules/book'

console.log('eieie', book)

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    book,
  },
})
