import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.css'
import { faFontAwesome } from '@fortawesome/free-brands-svg-icons'
import SweetAlertIcons from 'vue-sweetalert-icons';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash,faMapMarkerAlt,faGlobeAsia,faClock,faUniversity, faMonument} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faTrash,faMapMarkerAlt,faGlobeAsia,faClock,faUniversity,faMonument,faFontAwesome)

Vue.use(SweetAlertIcons);

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false


import * as services from "./services";
Vue.prototype.$api = services.default;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
