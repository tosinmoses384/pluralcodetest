import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import {
  BootstrapVue,
  BootstrapVueIcons
  // SidebarPlugin
} from 'bootstrap-vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCat, faDog } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

library.add(faCat, faDog)

Vue.component('font-awesome-icon', FontAwesomeIcon)

// import SuiVue from 'semantic-ui-vue'
// import 'semantic-ui-css/semantic.min.css'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
// Vue.use(SidebarPlugin)

// Vue.use(SuiVue)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
