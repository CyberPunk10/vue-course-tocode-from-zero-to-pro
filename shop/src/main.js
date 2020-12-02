import Vue from 'vue'
import App from './App.vue'
import Vuelidate from 'vuelidate'
import VueCarousel from 'vue-carousel'

import router from './routes'
import store from './store'

import './assets/scss/main.scss'

// Plugins
Vue.use(Vuelidate)
Vue.use(VueCarousel)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')


// https://vuejsexamples.com/tag/carousel/
// https://ssense.github.io/vue-carousel/



