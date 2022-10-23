import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";

Vue.use(Vuex);
Vue.config.devtools = true

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
});

const store = new Vuex.Store({
  state: {
    count: 0,
  },
  mutations: {
    increment(state) {
      state.count++;
    },
  },
  plugins: [vuexLocal.plugin]
});

export default store;
