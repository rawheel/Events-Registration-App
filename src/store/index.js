import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    admin:{
      'email':'raheel@gmail.com',
      'password':'12345'
    },
    login:false
  },
  mutations: {
    updateLogin(state,payload){
      state.login = payload
    }


  },
  actions: {
  },
  modules: {
  }
})
