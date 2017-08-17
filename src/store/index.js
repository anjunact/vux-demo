import Vue from 'vue'
import Vuex from 'vuex'
import atypes from './action-types.js'
import mtypes from './mutation-types.js'
Vue.use(Vuex);
const user = {
  state: {
    "a": 3
  }
}
const goods = {
  state: {},
  mutations: {},
  actions: {
    [atypes.HOME_DATA_REQUEST](commit){
      //todo call api
    }
  },
  getters: {}
}
const shop = {
  state: {},
  mutations: {},
  actions: {},
  getters: {}
}
const order = {
  state: {},
  mutations: {},
  actions: {},
  getters: {}
}
const store = new Vuex.Store({
  modules: {
    user,
    goods,
    shop,
    order
  }
})
export default store
