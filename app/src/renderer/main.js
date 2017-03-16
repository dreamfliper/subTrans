import Vue from 'vue'
import Vuex from 'vuex'
import VueBlu from 'vue-blu'
import OpenCC from 'opencc'
import Electron from 'vue-electron'
import App from './App'

let opencc = new OpenCC("s2tw.json")

opencc.convert("汉字", (err, converted) => {
  console.log(converted)
});

Vue.use(Electron)
Vue.use(VueBlu)
Vue.use(Vuex)
Vue.config.debug = true

/* eslint-disable no-new */
new Vue({
  ...App
}).$mount('#app')
