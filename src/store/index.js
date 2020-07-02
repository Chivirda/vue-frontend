import Vue from 'vue'
import Vuex from 'vuex'
import pharmacy from './pharmacy'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentEntity: {
      id: null,
      name: ''
    }
  },
  mutations: {
    setCurrentEntity(state, {id, name}) {
      state.currentEntity.id = id
      state.currentEntity.name = name
    }
  },
  actions: {
    fetchEntities() {
      const entities = require('@/assets/legalentity.json')
      return Object.keys(entities).map(key => ({...entities[key], id: key}))
    },
    setCurrentEntity({commit}, currentEntity) {
      commit('setCurrentEntity', currentEntity)
    }
  },
  modules: {
    pharmacy
  }
})
