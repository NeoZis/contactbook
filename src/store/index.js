import Vue from 'vue'
import Vuex from 'vuex'
import actions from "./actions";
import mutations from "./mutations";
import state from "./state";
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex)

const store =  new Vuex.Store({
  state,
  mutations,
  actions,
  // plugins: [
  //   createPersistedState()
  // ]
})
 export default store;
