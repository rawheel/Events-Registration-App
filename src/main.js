import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faTrash)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false


import * as services from "./services";
Vue.prototype.$api = services.default;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
