export default {
  state: {
    users: [
      { id: 1, name: 'Jack', age: 22, gender: 'male' },
      { id: 2, name: 'Alex', age: 24, gender: 'male' }
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
    getUsers (state) {
      return state.users
    },
    getUser: state => id => {
      return state.users.find( user => user.id == id ) // type string and number!
    }
  }
}