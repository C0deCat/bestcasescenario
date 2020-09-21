import Vue from 'vue'
import Vuex from 'vuex'
import {firebase} from "../main"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null
  },
  mutations: {
    update_user(state) {
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          state.user = user;
        }
        else {
          state.user = null;
        }
      })
    }
  },
  actions: {
  },
  modules: {
  }
})
