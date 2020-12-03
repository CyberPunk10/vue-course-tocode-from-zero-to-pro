import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import shop from './shop'
import users from './users'

export default new Vuex.Store({
  modules: {
    shop, users
  }
})