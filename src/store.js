import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    kolej: [],
    lotnictwo: [],
    maski: []
  },
  mutations: {
    ADD_MODEL(state, payload) {
      state[payload.target].push(payload.content);
    }
  }
});
