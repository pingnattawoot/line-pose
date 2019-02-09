import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'
import Vuelidate from 'vuelidate'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faCoffee,
  faShoppingCart,
  faBook,
  faTrash,
  faTimesCircle,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.use(Vuelidate)

const requireComponent = require.context(
  './components',
  false,
  /Base[A-Z]\w+\.(vue|js)$/
)

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName)
  const componentName = upperFirst(
    camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, '$1'))
  )

  Vue.component(componentName, componentConfig.default || componentConfig)
})

const Icons = [faCoffee, faShoppingCart, faBook, faTrash, faTimesCircle]
Icons.forEach(icon => {
  library.add(icon)
})
Vue.component('FontAwesomeIcon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
