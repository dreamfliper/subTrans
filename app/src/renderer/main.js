import Vue from 'vue'
import Vuex from 'vuex'
import VueBlu from 'vue-blu'
import Electron from 'vue-electron'
import App from './App'

Vue.use(Electron)
Vue.use(VueBlu)
Vue.use(Vuex)
Vue.config.debug = true

/* eslint-disable no-new */
new Vue({
  ...App
}).$mount('#app')
