export default {
  state: {
    shopList: [
      {
        id: 1,
        title: 'Nike Red',
        descr: 'Lorem ipsum dolor sit amet, consectetaur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        img: require('../assets/img/1.png')
      }
    ]
  },
  mutations: {
    // setMessage(state, payload) {
    //   state.message = payload
    // }
  },
  actions: {
    // setMessage({commit}, payload) {
    //   commit('setMessage', payload)
    // }
  },
  getters: {
    getShopList (state) {
      return state.shopList
    }
  }
}