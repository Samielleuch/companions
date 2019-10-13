import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoggedIn: false,
    isLoginPressed: false,
    isRegisterPressed: false
  },
  mutations: {
    setIsLoggedIn: (state, resp) => {
      state.isLoggedIn = resp;
    },
    setIsLoginPressed: (state, resp) => {
      state.isLoginPressed = resp;
    },
    setIsRegisterPressed: (state, resp) => {
      state.isRegisterPressed = resp;
    }
  },
  actions: {
    setLoggedIN: ({ commit }, resp) => {
      commit("setIsLoggedIn", resp);
    },
    setIsLoginPressed: ({ commit }, resp) => {
      commit("setIsLoginPressed", resp);
    },
    setIsRegisterPressed: ({ commit }, resp) => {
      commit("setIsRegisterPressed", resp);
    }
  }
});
