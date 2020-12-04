import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import shop from './shop'
import users from './users'
import notify from './notify'

export default new Vuex.Store({
  modules: {
    shop, users, notify
  }
})