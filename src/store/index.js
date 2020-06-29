import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    async fetchEntities() {
      const entities = require('@/assets/legalentity.json')
      return Object.keys(entities).map(key => ({...entities[key], id: key}))
    }
  },
  modules: {
  }
})
