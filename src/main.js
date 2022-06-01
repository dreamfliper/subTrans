import Vue from 'vue'
import VueBlu from 'vue-blu'
import App from './App.vue'
import 'vue-blu/dist/css/vue-blu.min.css'


Vue.config.productionTip = false
Vue.use(VueBlu)

new Vue({
  render: h => h(App),
}).$mount('#app')
